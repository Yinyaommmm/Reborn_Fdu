import { RsltModule } from "./resolute";
import { clampProb, HLRangeConvert_ChoiceB, randRangeArr } from "./util";

import { GameErrorFactory } from "@/error/game-error";
import { Logger } from "@/logger/logger";
import { BaseProbability, UpgradeProbability } from "@/type/config";
import { EventCategory, MainProp, Prop, ReadableEvent } from "@/type/type";
export interface FiveProps {
    H: number;
    L: number;
    A: number;
    C: number;
    M: number;
}
const zeroFiveProps: () => FiveProps = () => {
    return {
        H: 0,
        L: 0,
        A: 0,
        C: 0,
        M: 0,
    };
};
export interface EvtResultType {
    succProb: number;
    rand: number;
    resType: "BigS" | "S" | "F";
}
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
        private _props: FiveProps = zeroFiveProps(),
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
        this._props = { H: 10, L: 20, A: 25, C: 80, M: 40 };
    }
}

export class StandardEvent {
    getEndingB(): string {
        return this._readableEvt.endingB;
    }
    getMRange_ChoiceB() {
        return this._readableEvt.resultB.M;
    }
    getCRange_ChoiceB() {
        return this._readableEvt.resultB.C;
    }
    getARange_ChoiceB() {
        return this._readableEvt.resultB.A;
    }
    isEqualRight() {
        return this._readableEvt.equalRights;
    }
    getEndingA(resType: "BigS" | "S" | "F"): string {
        const ending = this._readableEvt.endingA;
        if (resType === "BigS") {
            if (ending.length < 3) {
                console.warn("BigS的A结局不是三个");
            }
            return ending[0];
        } else if (resType === "S") {
            return ending.length < 3 ? ending[0] : ending[1];
        } else {
            return ending.length < 3 ? ending[1] : ending[2];
        }
    }
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
    getHRange_ChoiceA() {
        return this._readableEvt.resultA.H;
    }
    getLRange_ChoiceA() {
        return this._readableEvt.resultA.L;
    }
    getARange_ChoiceA() {
        return this._readableEvt.resultA.A;
    }
    getCRange_ChoiceA() {
        return this._readableEvt.resultA.C;
    }
    getMRange_ChoiceA() {
        return this._readableEvt.resultA.M;
    }
    getHGear_ChoiceB() {
        return this._readableEvt.resultB.H;
    }
    getLGear_ChoiceB() {
        return this._readableEvt.resultB.L;
    }

    private shouldUpgrade() {
        return this._readableEvt.upgrade;
    }
    constructor(private _readableEvt: ReadableEvent) {}
}

// 对外暴露接口
export class GameSystem {
    public logger: Logger;
    private rsltMod: RsltModule;
    constructor(
        private player: Player,
        private allEvents: StandardEvent[],
        private year = 1,
    ) {
        this.logger = new Logger("GameSyS", true);
        this.rsltMod = new RsltModule(this);
    }
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
        this.logger.info(
            "calcStandardSuccProb",
            "evt" + evtProb,
            "humanBuff" + humanBuffProb,
            "election" + electionBuffProb,
        );
        return clampProb(evtProb + humanBuffProb + electionBuffProb);
    }
    // 计算人物执行某事件的结果
    private calcEventResultType(evtID: number): EvtResultType {
        const prob = this.calcStandardSuccProb(evtID);
        const rand = Math.random();
        const evtResType: EvtResultType = {
            succProb: prob,
            rand,
            resType: "F",
        };
        if (rand <= prob) {
            if (
                this.allEvents[evtID].getCategory() === EventCategory.SZTZ &&
                rand <= prob / 2
            ) {
                evtResType.resType = "BigS";
            } else {
                evtResType.resType = "S";
            }
        }
        return evtResType;
    }

    // 事件结算(Event Resolution)
    private resoluteEvent_ChoiceA(
        evtID: number,
        res: EvtResultType,
    ): ResoluteEventRes {
        const evt = this.allEvents[evtID];
        const luck = this.player.props.L;
        const crty = this.player.props.C;
        const resType = res.resType;
        const deltaProps: FiveProps = zeroFiveProps();
        deltaProps.H = randRangeArr(evt.getHRange_ChoiceA());
        deltaProps.L = this.rsltMod.rsltL_ChoiceA(luck, evt, resType);
        deltaProps.A = this.rsltMod.rsltACM_ChoiceA(
            luck,
            crty,
            evt,
            "A",
            resType,
        );
        deltaProps.M = this.rsltMod.rsltACM_ChoiceA(
            luck,
            crty,
            evt,
            "M",
            resType,
        );
        deltaProps.C = this.rsltMod.rsltC_ChoiceA(
            deltaProps,
            luck,
            crty,
            evt,
            resType,
        );
        this.logger.info("ChoiceA 中间随机结果", res);
        this.logger.warn("还缺结算成功记录特殊影响");
        return {
            deltaProps,
            endingText: evt.getEndingA(resType),
        };
    }

    chooseA(evtID: number) {
        const res = this.calcEventResultType(evtID);
        return this.resoluteEvent_ChoiceA(evtID, res);
    }
    chooseB(evtID: number) {
        const evt = this.allEvents[evtID];
        if (evt.isEqualRight()) {
            this.logger.info("等权重, 转换成A的结算");
            return this.chooseA(evtID);
        }
        return this.resoluteEvent_ChoiceB(evtID);
    }

    // 真的选了一个B选项，非等权重
    resoluteEvent_ChoiceB(evtID: number): ResoluteEventRes {
        const evt = this.allEvents[evtID];
        if (evt.isEqualRight()) {
            this.logger.bug("Warning!,等权重选项不应该调用这个函数");
        }
        const deltaProps = zeroFiveProps();
        const luck = this.player.props.L;
        const crty = this.player.props.C;
        // 竞选事件下次一定补偿
        if (evt.getCategory() === EventCategory.JXPY) {
            this.player.setElectionBuff();
            this.logger.info("进行了竞选失败补偿");
        }

        // H 属性结算
        const newHRange = HLRangeConvert_ChoiceB(
            evt.getHGear_ChoiceB(),
            evt.getHRange_ChoiceA(),
        );
        this.logger.info("resoluteEvent_ChoiceB new'H'Range", newHRange);
        deltaProps.H = randRangeArr(newHRange);
        // L属性结算
        const newLRange = HLRangeConvert_ChoiceB(
            evt.getLGear_ChoiceB(),
            evt.getLRange_ChoiceA(),
        );
        this.logger.info("resoluteEvent_ChoiceB new'L'Range", newLRange);
        deltaProps.L = randRangeArr(newLRange);
        // A C M属性结算
        deltaProps.A = this.rsltMod.rsltACM_ChoiceB(luck, crty, evt, "A");
        deltaProps.M = this.rsltMod.rsltACM_ChoiceB(luck, crty, evt, "M");
        deltaProps.C = this.rsltMod.rsltC_ChoiceB(deltaProps, luck, crty, evt);

        return {
            deltaProps,
            endingText: evt.getEndingB(),
        };
    }
}
