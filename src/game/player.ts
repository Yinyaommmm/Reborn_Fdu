import { FiveProps, zeroFiveProps } from "./gamesys";

import { MainProp, Prop } from "@/type/type";

export type GRADDESTINATION =
    | "出国"
    | "辅导员"
    | "青椒"
    | "企业"
    | "退学"
    | "选调"
    | "普通毕业";

export type EDUDESTINATION = "本科" | "研究生";
export class Player {
    private _mainProp: "A" | "M" = "A";
    public gradDestination: GRADDESTINATION = "普通毕业";
    public eduDestination: EDUDESTINATION = "本科";
    public isCCP = false;
    public specialTag = new Set<string>();
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
        this._props.H = Math.min(100, this._props.H);
        this._props.L = Math.min(100, this._props.L);
        this._props.A = Math.min(100, this._props.A);
        this._props.C = Math.min(100, this._props.C);
        this._props.M = Math.min(100, this._props.M);
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
        this._props = { H: 10, L: 20, A: 10, C: 10, M: 10 };
    }

    get mainProp() {
        return this._mainProp;
    }
    set mainProp(mp: "A" | "M") {
        this._mainProp = mp;
    }
}
