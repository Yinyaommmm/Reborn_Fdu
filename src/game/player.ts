import { FiveProps, zeroFiveProps } from "./gamesys";

import { MainProp, Prop } from "@/type/type";

export type GRADDESTINATION =
    | "出国"
    | "辅导员"
    | "青椒"
    | "企业"
    | "退学"
    | "选调"
    | "灵活就业";

export type EDUDESTINATION = "本科" | "研究生";
export class Player {
    private _mainProp: "A" | "M" = "A";
    public gradDestination: GRADDESTINATION = "灵活就业";
    public eduDestination: EDUDESTINATION = "本科";
    public isCCP = false;
    public specialTag = new Set<string>();
    public gender: "男" | "女" = "男";
    setGender(gender: "男" | "女") {
        this.gender = gender;
    }
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
    randomInit(curProps: FiveProps, leftPoint: number) {
        const keys: Prop[] = ["H", "L", "A", "C", "M"];
        const maxVal = 30;
        const values: FiveProps = { ...curProps }; // 复制当前属性，避免直接修改传入对象

        // 开始分配剩余点数
        while (leftPoint > 0) {
            // 获取所有未满 maxVal 的属性名
            const availableKeys = () => keys.filter((k) => values[k] < maxVal);
            const candidates = availableKeys();
            if (candidates.length === 0) break; // 所有属性都达到 maxVal，停止分配

            // 随机选一个可以加点的属性
            const randomKey =
                candidates[Math.floor(Math.random() * candidates.length)];
            values[randomKey]++;
            leftPoint--;
        }

        this._props = values;
    }

    fixedInit() {
        this._props = { H: 10, L: 20, A: 10, C: 10, M: 10 };
    }

    Init(props: FiveProps) {
        this._props = props;
    }

    get mainProp() {
        return this._mainProp;
    }
    set mainProp(mp: "A" | "M") {
        this._mainProp = mp;
    }
}
