import { ReactNode } from "react";

import { RsltModule } from "./resolute";
import { TimelineModule } from "./timeline";
import {
    clampProb,
    formatDialog,
    getTwoRandomItems,
    HLRangeConvert_ChoiceB,
    isSuccess,
    randRangeArr,
} from "./util";

import { GameErrorFactory } from "@/error/game-error";
import { Logger } from "@/logger/logger";
import { BaseProbability, UpgradeProbability } from "@/type/config";
import {
    EventCategory,
    MainProp,
    Prop,
    ReadableEvent,
    保研百分百,
    跳过招聘会,
    跳过本科选调,
    跳过校招,
    跳过考研,
    跳过辅导员青椒,
} from "@/type/type";
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
    resType: "BigS" | "S" | "F" | "B"; // 引入B选项;
}

type GRADDESTINATION =
    | "出国"
    | "辅导员"
    | "青椒"
    | "企业"
    | "退学"
    | "选调"
    | "普通毕业";

type EDUDESTINATION = "本科" | "研究生";
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
export class EventForShow {
    category: EventCategory = EventCategory.CGQY;
    title: string = "这里是title";
    imgSrc: string = "图片地址";
    mainText: ReactNode = "这里是主要内容";
    choiceAText: string = "A选项文本";
    choiceBText: string = "B选项文本";
    // endingAText: string[] = ["A结局1", "A结局2"];
    // endingBText: string = "B结局";
}
export class EventLog {
    // 时间、事件、选择、结果
    year: number = -1;
    index: number = -1;
    evtID: number = -1;
    choose: "A" | "B" = "A";
    isHighlight: boolean = false;
    result: ResoluteEventRes = {
        deltaProps: zeroFiveProps(),
        endingText: "",
        resType: "F",
    };
}

export class StandardEvent {
    getID() {
        return this._readableEvt.id;
    }
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
    isRequired() {
        return this._readableEvt.required;
    }
    isRepetable() {
        return this._readableEvt.repetable;
    }
    isHightlight() {
        return this._readableEvt.isHighlight;
    }
    // 是否是二级事件
    is2ji() {
        return this._readableEvt.repalceDialog.length !== 0;
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
    getHappenYear() {
        return this._readableEvt.happenYear;
    }
    getPrerequisites() {
        return this._readableEvt.prerequisites;
    }
    getRequirement() {
        return this._readableEvt.requireProps;
    }
    setRandIdice() {
        this._readableEvt.randIdice = getTwoRandomItems(
            this._readableEvt.repalceDialog,
            this._readableEvt.randIdice,
        );
    }
    private shouldUpgrade() {
        return this._readableEvt.upgrade;
    }

    forShow(): EventForShow {
        const e = new EventForShow();
        e.title = this._readableEvt.title;
        e.imgSrc = "todo:暂未确定src";
        e.choiceAText = this._readableEvt.choiceA;
        e.choiceBText = this._readableEvt.choiceB;
        if (this._readableEvt.repalceDialog.length === 0) {
            e.mainText = this._readableEvt.mainDialog;
        } else {
            // 设置二级事件的随机序号
            if (this._readableEvt.randIdice.length == 0) {
                // 没有被选中过，因此randIdice为空，为其随机生成两个选项
                this.setRandIdice();
            }
            // 根据选项选择两个文本替换$$
            const [idx1, idx2] = this._readableEvt.randIdice;
            const c1 = this._readableEvt.repalceDialog[idx1];
            const c2 = this._readableEvt.repalceDialog[idx2];
            const tmpMainText = this._readableEvt.mainDialog.replace(
                "$$",
                `${c1}` + "和" + c2,
            );
            e.mainText = formatDialog(tmpMainText, c1, c2);
            if (this.getCategory() === EventCategory.SZTZ) {
                e.choiceAText = `选择${c1}`;
                e.choiceBText = `选择${c2}`;
            }
        }
        // e.endingAText = this._readableEvt.endingA;
        // e.endingBText = this._readableEvt.endingB;
        return e;
    }
    public experienceCount = 0;
    specialEffect(resoluteRes: ResoluteEventRes, player: Player, year: number) {
        if (this.getID() === 14 && isSuccess(resoluteRes.resType)) {
            // 入党志愿书修改党员信息
            player.isCCP = true;
            this.logger.info(14 + "修改成党员");
        }
        if (this.getID() === 15 && isSuccess(resoluteRes.resType)) {
            // 卓博计划
            player.specialTag.add(保研百分百);
            this.logger.info(15 + "触发保研100%");
        }
        if (this.getID() === 16 && isSuccess(resoluteRes.resType)) {
            // 人才工程
            player.specialTag.add(保研百分百);
            this.logger.info(16 + "触发保研100%");
        }
        if (this.getID() === 17) {
            // 免试攻读研究生
            if (isSuccess(resoluteRes.resType)) {
                player.eduDestination = "研究生";
                player.specialTag.add(跳过考研);
                player.specialTag.add(跳过本科选调);
                player.specialTag.add(跳过校招);
                this.logger.info(17 + "触发免试研究生");
            } else if (resoluteRes.resType === "B") {
                player.specialTag.add(跳过考研);
                this.logger.info(17 + "放弃免试研究生");
            }
        }
        if (this.getID() === 18 && isSuccess(resoluteRes.resType)) {
            // 研究生入学考试
            player.eduDestination = "研究生";
            player.specialTag.add(跳过校招);
            player.specialTag.add(跳过本科选调);
            this.logger.info(18 + "触发研究生");
        }
        if (this.getID() === 19 && isSuccess(resoluteRes.resType)) {
            // 选调生考试
            player.gradDestination = "选调";
            if (year === 4) player.specialTag.add(跳过校招);
            if (year === 9) {
                player.specialTag.add(跳过辅导员青椒);
                player.specialTag.add(跳过招聘会);
            }
            this.logger.info(19 + "触发选调");
        }
        if (this.getID() === 20 && isSuccess(resoluteRes.resType)) {
            // 大厂校招
            player.gradDestination = "企业";
            this.logger.info(20 + "触发企业");
        }
        if (this.getID() === 27 && resoluteRes.resType === "B") {
            // 期末
            player.gradDestination = "退学";
            this.logger.info(27 + "触发退学");
        }
        if (this.getID() === 43 && isSuccess(resoluteRes.resType)) {
            // 研支团
            player.specialTag.add(保研百分百);
            this.logger.info(43 + "触发研究生");
        }
        if (this.getID() === 65 && isSuccess(resoluteRes.resType)) {
            // 出国读研
            player.gradDestination = "出国";
            this.logger.info(65 + "触发出国");
        }
        if (this.getID() === 88 && isSuccess(resoluteRes.resType)) {
            // 辅导员招聘
            player.gradDestination = "辅导员";
            player.specialTag.add(跳过招聘会);
            this.logger.info(88 + "触发辅导员");
        }
        if (this.getID() === 89 && isSuccess(resoluteRes.resType)) {
            // 青椒留校
            player.gradDestination = "青椒";
            player.specialTag.add(跳过招聘会);
            this.logger.info(89 + "触发青椒");
        }
        if (this.getID() === 90 && isSuccess(resoluteRes.resType)) {
            // 招聘会
            player.gradDestination = "企业";
            this.logger.info(90 + "触发企业");
        }
    }
    private logger = new Logger("STANDARDEVENT", true);
    constructor(private _readableEvt: ReadableEvent) {}
}

// 对外暴露接口
export class GameSystem {
    public logger: Logger = new Logger("GameSyS", false);
    private eventLog: EventLog[] = [];
    private rsltMod: RsltModule;
    private timelineMod: TimelineModule;
    private year = 1;
    constructor(
        private player: Player,
        private allEvents: StandardEvent[],
    ) {
        this.rsltMod = new RsltModule(this);
        this.timelineMod = new TimelineModule(this.player, this);
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
    get FinishYear() {
        return this.player.eduDestination === "本科" ? 5 : 10;
    }
    get GameContinue() {
        return (
            this.getYear() !== this.FinishYear &&
            this.player.gradDestination !== "退学"
        );
    }
    getEventLog() {
        return this.eventLog;
    }
    getHighLightLog() {
        return this.eventLog.filter(
            (log) => log.isHighlight && isSuccess(log.result.resType),
        );
    }
    getAllEvents() {
        return this.allEvents;
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
            "calcStandardSuccProb:",
            "evt" + evtProb,
            "humanBuff" + humanBuffProb,
            "election" + electionBuffProb,
        );
        return clampProb(evtProb + humanBuffProb + electionBuffProb);
    }
    private calcSpecialSuccProb(evtID: number) {
        // 卓博计划和人才工程强制保研成功
        if (evtID === 17 && this.player.specialTag.has(保研百分百)) {
            this.logger.info("强制保研成功");
            return 1;
        }
        return 0;
    }
    // 计算人物执行某事件的结果
    private calcEventResultType(evtID: number): EvtResultType {
        let prob = this.calcStandardSuccProb(evtID);
        const spProb = this.calcSpecialSuccProb(evtID);
        prob = Math.min(prob + spProb, 1);
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
        return {
            deltaProps,
            endingText: evt.getEndingA(resType),
            resType: res.resType,
        };
    }

    private chooseA(evtID: number) {
        const res = this.calcEventResultType(evtID);
        return this.resoluteEvent_ChoiceA(evtID, res);
    }
    private chooseB(evtID: number) {
        const evt = this.allEvents[evtID];
        if (evt.isEqualRight()) {
            this.logger.info("等权重, 转换成A的结算");
            return this.chooseA(evtID);
        }
        return this.resoluteEvent_ChoiceB(evtID);
    }
    // 真的选了一个B选项，非等权重
    private resoluteEvent_ChoiceB(evtID: number): ResoluteEventRes {
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
        // this.logger.info("resoluteEvent_ChoiceB new'H'Range", newHRange);
        deltaProps.H = randRangeArr(newHRange);
        // L属性结算
        const newLRange = HLRangeConvert_ChoiceB(
            evt.getLGear_ChoiceB(),
            evt.getLRange_ChoiceA(),
        );
        // this.logger.info("resoluteEvent_ChoiceB new'L'Range", newLRange);
        deltaProps.L = randRangeArr(newLRange);
        // A C M属性结算
        deltaProps.A = this.rsltMod.rsltACM_ChoiceB(luck, crty, evt, "A");
        deltaProps.M = this.rsltMod.rsltACM_ChoiceB(luck, crty, evt, "M");
        deltaProps.C = this.rsltMod.rsltC_ChoiceB(deltaProps, luck, crty, evt);

        return {
            deltaProps,
            endingText: evt.getEndingB(),
            resType: "B",
        };
    }
    // 前端展示事件调用该函数，根据信息去绘制展示该活动的页面
    showEvt(evtID: number) {
        return this.allEvents[evtID].forShow();
    }
    resoluteEvt(evtID: number, choice: "A" | "B", index: number) {
        let res: ResoluteEventRes;
        if (choice === "A") {
            res = this.chooseA(evtID);
        } else {
            res = this.chooseB(evtID);
        }
        // 记录日志
        this.eventLog.push({
            year: this.year,
            index,
            evtID,
            isHighlight: this.allEvents[evtID].isHightlight(),
            choose: choice,
            result: res,
        });
        // 人物属性
        this.player.changeProps(res.deltaProps);
        // 事件经历次数
        this.allEvents[evtID].experienceCount++;
        // 特殊影响： 党员身份√、毕业去向、升学去向、删除后续活动
        this.allEvents[evtID].specialEffect(res, this.player, this.getYear());
        return res;
    }
    nextEvt() {
        const nextRes = this.timelineMod.getNextEvent();
        return nextRes;
    }
    requiredEvtJump(evtID: number) {
        const evt = this.allEvents[evtID];
        if (evt.isRequired() === false) {
            return false;
        }
        console.log(
            "required evt",
            evtID,
            this.player.specialTag,
            this.player.eduDestination,
        );
        // 基础条件的跳过判断
        if (
            evt
                .getPrerequisites()
                .some(
                    (prereq) =>
                        !this.timelineMod.getCompletedEventIDs().has(prereq),
                )
        ) {
            console.log(`必然事件${evtID}前置事件未满足！，直接跳过`);
            return true;
        }

        const req = evt.getRequirement();
        const playerProps = this.player.props;
        for (const prop of ["H", "L", "A", "C", "M"] as const) {
            if ((playerProps[prop] ?? 0) < (req[prop] ?? 0)) {
                console.log(
                    `必然事件${evtID}需求属性${prop}[${playerProps[prop]}/${req[prop]}]！，直接跳过`,
                );
                return true;
            }
        }
        // 特殊条件的跳过判断
        if (evtID === 90 && this.player.specialTag.has(跳过招聘会)) {
            // 必然事件才需要进行跳过判断
            console.log("evt===招聘会，但是允许跳过");
            return true;
        }
        if (evtID === 18 && this.player.specialTag.has(跳过考研)) {
            console.log("evt===研究生入学考试，但是允许跳过");
            return true;
        }
        if (evtID === 19) {
            if (this.player.mainProp === "A") {
                console.log("evt===选调考试，由于不走学工路线，直接跳过");
            }
            if (this.year === 4 && this.player.specialTag.has(跳过本科选调)) {
                console.log("evt===（本科）选调考试，但是允许跳过");
                return true;
            }
        }
        if (evtID === 20 && this.player.specialTag.has(跳过校招)) {
            console.log("evt===选调考试，但是允许跳过");
            return true;
        }
        if (evtID === 88 && this.player.specialTag.has(跳过辅导员青椒)) {
            console.log("evt === 辅导员招聘，但是允许跳过");
        }
        if (evtID === 89 && this.player.specialTag.has(跳过辅导员青椒)) {
            console.log("evt === 青椒留校，但是允许跳过");
        }
        if (evtID === 90 && this.player.specialTag.has(跳过招聘会)) {
            console.log("evt === 招聘会，但是允许跳过");
        }
        return false;
    }
}
