import { clampProb } from "./util";

import { GameErrorFactory } from "@/error/game-error";
import { BaseProbability, UpgradeProbability } from "@/type/config";
import { EventCategory, MainProp, Prop, ReadableEvent } from "@/type/type";
interface FiveProps {
    H: number;
    L: number;
    A: number;
    C: number;
    M: number;
}
export type EvtResultType = "BigS" | "S" | "F";
export interface ResoluteEventRes {
    deltaProps: FiveProps;
    endingText: string;
}

export class Player {
    getElectionBuff() {
        return this.electionBuff;
    }
    setElectionBuff() {
        this.electionBuff = 0.15;
    }
    clearElectionBuff() {
        this.electionBuff = 0;
    }
    getProbBuff(mainProp: MainProp) {
        const base = 0.05 * (this.props.H + this.props.L);
        let res: number;
        if (mainProp === "NONE") {
            res = base;
        } else {
            res = base + this.props[mainProp] * 0.2;
        }
        return res / 100;
    }
    constructor(
        private _props: FiveProps = { H: 0, L: 0, A: 0, C: 0, M: 0 },
        private electionBuff = 0, // 竞选失败带来的下次额外加成
    ) {}

    get props() {
        return this._props;
    }
    changeProp(p: Prop, deltaVal: number) {
        this._props[p] += deltaVal;
    }
    changeProps(deltaVals: FiveProps) {
        this._props.H += deltaVals.H;
        this._props.L += deltaVals.L;
        this._props.A += deltaVals.A;
        this._props.C += deltaVals.C;
        this._props.M += deltaVals.M;
    }
    randomInit() {
        const keys: Prop[] = ["H", "L", "A", "C", "M"];
        const maxVal = 40;
        const total = 100;
        let remaining = total;
        const values: FiveProps = { H: 0, L: 0, A: 0, C: 0, M: 0 };

        // 初步给每个属性分配一个最大值不超过 maxVal 的随机值
        for (let i = 0; i < keys.length; i++) {
            const remainingAttrs = keys.length - i;
            const maxForThisAttr = Math.min(
                maxVal,
                remaining - (remainingAttrs - 1),
            );
            const val = Math.floor(Math.random() * (maxForThisAttr + 1));
            values[keys[i]] = val;
            remaining -= val;
        }

        // 如果还有剩余值，尝试分配给未达到 maxVal 的属性
        while (remaining > 0) {
            for (const key of keys) {
                if (remaining === 0) break;
                if (values[key] < maxVal) {
                    values[key]++;
                    remaining--;
                }
            }
        }

        this._props = values;
    }
    fixedInit() {
        this._props = { H: 10, L: 20, A: 25, C: 30, M: 40 };
    }
}

export class StandardEvent {
    getCategory() {
        return this._readableEvt.category;
    }
    getMainProp() {
        return this._readableEvt.mainProp;
    }
    getEvtProb(year: number): number {
        if (year >= 5 && this.shouldUpgrade()) {
            return UpgradeProbability[this._readableEvt.baseProbability];
        } else {
            return BaseProbability[this._readableEvt.baseProbability];
        }
    }

    private shouldUpgrade() {
        return this._readableEvt.upgrade;
    }
    constructor(private _readableEvt: ReadableEvent) {}
}

// 对外暴露接口
export class GameSystem {
    constructor(
        private player: Player,
        private allEvents: StandardEvent[],
        private year = 1,
    ) {}
    getYear() {
        return this.year;
    }
    setYear(y: number) {
        if (y < 0 || y > 10) {
            throw GameErrorFactory("setYear", "学年超限");
        }
        this.year = y;
    }
    // 计算人物在当前某事件的成功概率，默认已经可以触发事件
    private calcStandardSuccProb(evtID: number) {
        if (evtID < 0 || evtID >= this.allEvents.length) {
            throw GameErrorFactory("calcStandardSuccProb", "事件id异常值");
        }
        const evt = this.allEvents[evtID];
        // 事件对概率影响
        const evtProb = evt.getEvtProb(this.year);
        // 人属性对事件影响
        const humanBuffProb = this.player.getProbBuff(evt.getMainProp());
        const electionBuffProb =
            evt.getCategory() === EventCategory.JXPY
                ? this.player.getElectionBuff()
                : 0;
        console.log(
            "evt" + evtProb,
            "humanBuff" + humanBuffProb,
            "election" + electionBuffProb,
        );
        return clampProb(evtProb + humanBuffProb + electionBuffProb);
    }
    // 计算人物执行某事件的结果
    caclEventResultType(evtID: number): EvtResultType {
        const prob = this.calcStandardSuccProb(evtID);
        const rand = Math.random();
        console.log("prob", prob, "rand", rand);
        if (rand <= prob) {
            if (
                this.allEvents[evtID].getCategory() === EventCategory.SZTZ &&
                rand <= prob / 2
            ) {
                return "BigS";
            } else {
                return "S";
            }
        } else {
            return "F";
        }
    }

    // 事件结算(Event Resolution)
    resoluteEvent(evtID: number, res: EvtResultType): ResoluteEventRes {
        const evt = this.allEvents[evtID];
        // 竞选事件失败补偿
        if (evt.getCategory() === EventCategory.JXPY) {
            if (res === "F") {
                this.player.setElectionBuff();
                console.log("进行了竞选失败补偿");
            }
        }

        // H 属性结算

        // l属性结算

        // A C M属性结算

        return {
            deltaProps: {
                H: 0,
                L: 0,
                A: 0,
                C: 0,
                M: 0,
            },
            endingText: "",
        };
    }
}
