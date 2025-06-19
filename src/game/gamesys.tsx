import { ReactNode } from "react";

import { createEmptyContext, SingleRoundContext } from "./context";
import { Item, ItemID, ItemManager } from "./item";
import { Player } from "./player";
import { RsltModule } from "./resolute";
import { TimelineModule } from "./timeline";
import {
    addPropsTo_InPlace,
    clampFiveProps_choiceA,
    clampFiveProps_choiceB,
    clampProb,
    cloneProps,
    didMeetRequireProps,
    finetuneResolute,
    formatDialog,
    getTwoRandomItems,
    highLight,
    HLRangeConvert_ChoiceB,
    isSuccess,
    randRangeArr,
} from "./util";

import { GameErrorFactory } from "@/error/game-error";
import { Logger } from "@/logger/logger";
import {
    BaseProbability,
    ResultBLevel,
    UpgradeProbability,
} from "@/type/config";
import {
    BgCategory,
    EventCategory,
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
export interface FivePropsRange {
    H: [number, number];
    L: [number, number];
    A: [number, number];
    C: [number, number];
    M: [number, number];
}
export const zeroFiveProps: () => FiveProps = () => {
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
    resType: "BigS" | "S" | "F" | "Pass";
}
export interface ResoluteEventRes {
    deltaProps: FiveProps;
    endingText: string;
    resType: "BigS" | "S" | "F" | "B" | "Punish" | "Pass"; // 引入B选项;
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
    highLightChoice: "A" | "AB" | "B" = "A";
    electionBuff: boolean = false;
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
    getTitle() {
        return this._readableEvt.title;
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
    getEndingA(resType: "BigS" | "S" | "F" | "Pass"): string {
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
    isB_Punish() {
        if (
            this.getHGear_ChoiceB() === ResultBLevel.Punish ||
            this.getLGear_ChoiceB() === ResultBLevel.Punish
        ) {
            return true;
        } else {
            return false;
        }
    }
    private shouldUpgrade() {
        return this._readableEvt.upgrade;
    }

    forShow(player: Player, year: number): EventForShow {
        const e = new EventForShow();
        e.category = this._readableEvt.category;
        e.title = this._readableEvt.title;
        const startNum = String(this.getID() + 1).padStart(3, "0");
        e.imgSrc =
            this._readableEvt.bgCategory === BgCategory.CLOSEUP
                ? `event/special/${startNum}-${e.title}-${player.gender}`
                : this._readableEvt.bgCategory === BgCategory.POSTER
                  ? `event/special/${startNum}-${e.title}`
                  : `event/special/${startNum}-${e.title}`;
        e.choiceAText = this._readableEvt.choiceA;
        e.choiceBText = this._readableEvt.choiceB;

        if (this._readableEvt.repalceDialog.length === 0) {
            e.mainText = highLight(this._readableEvt.mainDialog);
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
            let tmpMainText: string;
            if (this.getCategory() === EventCategory.SZTZ) {
                tmpMainText = this._readableEvt.mainDialog.replace(
                    "$$",
                    `${c1}` + "和" + c2,
                );
            } else {
                if (this.getID() === 71) {
                    tmpMainText = this._readableEvt.mainDialog.replace(
                        "$$",
                        year < 5 ? `优秀学生奖学金` : "学业奖学金",
                    );
                } else {
                    tmpMainText = this._readableEvt.mainDialog.replace(
                        "$$",
                        `${c1}`,
                    );
                }
            }

            e.mainText = formatDialog(tmpMainText, c1, c2);
            if (this.getCategory() === EventCategory.SZTZ) {
                e.choiceAText = `选择${c1}`;
                e.choiceBText = `选择${c2}`;
            }
        }
        if (this.isEqualRight()) {
            e.highLightChoice = "AB";
        } else {
            e.highLightChoice = "A";
        }

        e.electionBuff = this.doesHaveElectionBuff(player);
        return e;
    }

    doesHaveElectionBuff(player: Player) {
        return (
            this.getCategory() === EventCategory.JXPY &&
            player.getElectionBuff() !== 0
        );
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
                // player.specialTag.add(跳过考研);
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
        if (
            this.getID() === 27 &&
            (resoluteRes.resType === "B" || resoluteRes.resType === "Punish")
        ) {
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
    private logger = new Logger("STANDARDEVENT", false);
    constructor(private _readableEvt: ReadableEvent) {}
}

// 对外暴露接口
export class GameSystem {
    public logger: Logger = new Logger("GameSyS", false);
    private eventLog: EventLog[] = [];
    private contextLog: ContextLog[] = [];
    private rsltMod: RsltModule;
    private timelineMod: TimelineModule;
    private year = 1;
    private itemManager = new ItemManager();
    constructor(
        private player: Player,
        private allEvents: StandardEvent[],
    ) {
        this.rsltMod = new RsltModule(this);
        this.timelineMod = new TimelineModule(this.player, this);
    }
    get lastContextLog(): ContextLog {
        if (this.contextLog.length === 0) {
            return {
                evtID: -1,
                evtTitle: "你不应该看到这个",
                changeProp: {},
            };
        } else {
            return this.contextLog.at(-1)!;
        }
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
        this.lastContextLog.baseAndUpgrade_prob = evtProb;
        // 人属性对事件影响
        const humanBuffProb = this.player.getProbBuff(evt.getMainProp());
        this.lastContextLog.HLAndMainpropEffect_prob = humanBuffProb;
        const electionBuffProb =
            evt.getCategory() === EventCategory.JXPY
                ? this.player.getElectionBuff()
                : 0;
        this.lastContextLog.electionBuff = electionBuffProb;
        if (electionBuffProb !== 0) this.player.clearElectionBuff(); // jxpyEvt选A后清除buff
        this.logger.info(
            "calcStandardSuccProb:",
            "evt" + evtProb,
            "humanBuff" + humanBuffProb,
            "election" + electionBuffProb,
        );
        return evtProb + humanBuffProb + electionBuffProb;
    }
    private calcSpecialSuccProb(evtID: number) {
        // 保研必定成功
        if (evtID === 17 && this.player.specialTag.has(保研百分百)) {
            this.logger.info("强制保研成功");
            this.lastContextLog.mustbePostGraduate = 1;
            return 1;
        }
        return 0;
    }
    // 计算人物执行某事件的结果
    private calcEventResultType(
        evtID: number,
        ctx: SingleRoundContext,
    ): EvtResultType {
        const prob = this.calcStandardSuccProb(evtID);
        const spProb = this.calcSpecialSuccProb(evtID);
        const rand = Math.random();
        ctx.probContext = {
            succProb: prob + spProb + (ctx.probContext?.succProb ?? 0),
            rand,
        };
        this.lastContextLog.succProbWithoutItemPassive =
            ctx.probContext.succProb;
        this.lastContextLog.rand = ctx.probContext.rand;
        this.itemManager // 引入装备的被动效果
            .applyProbPassiveEffects(ctx);
        this.lastContextLog.succProbAfterItemPassive = ctx.probContext.succProb;
        ctx.probContext.succProb = clampProb(ctx.probContext.succProb);
        this.lastContextLog.succProbFinalClamped = ctx.probContext.succProb;
        const evtResType: EvtResultType = {
            succProb: prob,
            rand,
            resType: "F",
        };
        if (ctx.probContext.rand <= ctx.probContext.succProb) {
            if (
                this.allEvents[evtID].getCategory() === EventCategory.SZTZ &&
                rand <= prob / 2
            ) {
                evtResType.resType = "BigS";
            } else {
                evtResType.resType = "S";
            }
        }
        if (
            [13, 21, 22, 27, 88, 124].map((i) => i - 1).includes(evtID) &&
            evtResType.resType === "F"
        ) {
            // 这里是对特殊事件的判定-1是为了读取的与excel的不一样，失败为Pass
            evtResType.resType = "Pass";
        }
        this.lastContextLog.resType = evtResType.resType;
        return evtResType;
    }

    // 事件结算(Event Resolution)
    private resoluteEvent_ChoiceA(
        evtID: number,
        res: EvtResultType,
        ctx: SingleRoundContext,
    ): ResoluteEventRes {
        const evt = this.allEvents[evtID];
        const luck = this.player.props.L;
        const crty = this.player.props.C;
        const resType = res.resType;
        this.itemManager.applyAttrPassiveEffects(ctx);
        if (ctx.deltaPropContext === undefined) {
            ctx.deltaPropContext = zeroFiveProps();
        }
        this.lastContextLog.changeProp.itemPassiveContribute = cloneProps(
            ctx.deltaPropContext,
        );
        const dc = ctx.deltaPropContext!;
        const evtContribute: FiveProps = {
            H: randRangeArr(evt.getHRange_ChoiceA()),
            L: this.rsltMod.rsltL_ChoiceA(luck, evt, resType),
            A: this.rsltMod.rsltACM_ChoiceA(luck, crty, evt, "A", resType),
            M: this.rsltMod.rsltACM_ChoiceA(luck, crty, evt, "M", resType),
            C: this.rsltMod.rsltC_ChoiceA(
                ctx.deltaPropContext!,
                luck,
                crty,
                evt,
                resType,
            ),
        };
        addPropsTo_InPlace(dc, evtContribute);
        this.lastContextLog.changeProp.evtOriginContribute =
            cloneProps(evtContribute);
        clampFiveProps_choiceA(dc, evt, this.player.props);
        this.lastContextLog.changeProp.finallyClampContribute = cloneProps(dc);
        this.lastContextLog.changeProp.rangeLimit = {
            H: evt.getHRange_ChoiceA(),
            L: evt.getLRange_ChoiceA(),
            A: evt.getARange_ChoiceA(),
            C: evt.getCRange_ChoiceA(),
            M: evt.getMRange_ChoiceA(),
        };
        const finetune = finetuneResolute(dc);
        this.lastContextLog.changeProp.finetuneEvtContribute = finetune;
        this.logger.info(
            "ChoiceA finetune",
            finetune.H,
            finetune.L,
            finetune.A,
            finetune.C,
            finetune.M,
        );
        ctx.deltaPropContext = finetune;
        return {
            deltaProps: ctx.deltaPropContext,
            endingText: evt.getEndingA(resType),
            resType: res.resType,
        };
    }

    private chooseA(evtID: number, ctx: SingleRoundContext) {
        const res = this.calcEventResultType(evtID, ctx); // 结算成功与否
        return this.resoluteEvent_ChoiceA(evtID, res, ctx); // 结算属性
    }
    private chooseB(evtID: number, ctx: SingleRoundContext) {
        const evt = this.allEvents[evtID];
        if (evt.isEqualRight()) {
            this.logger.info("等权重, 转换成A的结算");
            this.lastContextLog.playerChoice = "B but EqualRight";
            return this.chooseA(evtID, ctx);
        }
        this.lastContextLog.playerChoice = "B";
        return this.resoluteEvent_ChoiceB(evtID, ctx);
    }
    // 真的选了一个B选项，非等权重
    private resoluteEvent_ChoiceB(
        evtID: number,
        ctx: SingleRoundContext,
    ): ResoluteEventRes {
        const evt = this.allEvents[evtID];
        if (evt.isEqualRight()) {
            this.logger.bug("Warning!,等权重选项不应该调用这个函数");
        }
        const luck = this.player.props.L;
        const crty = this.player.props.C;
        // 竞选事件下次一定补偿
        if (evt.getCategory() === EventCategory.JXPY) {
            this.player.setElectionBuff();
            this.logger.info("进行了竞选失败补偿");
        }
        // 使用
        this.itemManager.applyAttrPassiveEffects(ctx);
        if (ctx.deltaPropContext === undefined) {
            ctx.deltaPropContext = zeroFiveProps();
        }
        this.lastContextLog.changeProp.itemPassiveContribute = cloneProps(
            ctx.deltaPropContext,
        );
        // H 属性结算
        const newHRange = HLRangeConvert_ChoiceB(
            evt.getHGear_ChoiceB(),
            evt.getHRange_ChoiceA(),
        );
        const newLRange = HLRangeConvert_ChoiceB(
            evt.getLGear_ChoiceB(),
            evt.getLRange_ChoiceA(),
        );

        const evtOriginContribute: FiveProps = {
            H: randRangeArr(newHRange),
            L: randRangeArr(newLRange),
            A: this.rsltMod.rsltACM_ChoiceB(luck, crty, evt, "A"),
            M: this.rsltMod.rsltACM_ChoiceB(luck, crty, evt, "M"),
            C: this.rsltMod.rsltC_ChoiceB(
                ctx.deltaPropContext!,
                luck,
                crty,
                evt,
            ),
        };
        addPropsTo_InPlace(ctx.deltaPropContext!, evtOriginContribute);
        this.lastContextLog.changeProp.evtOriginContribute =
            cloneProps(evtOriginContribute);
        clampFiveProps_choiceB(
            ctx.deltaPropContext!,
            evt,
            newHRange,
            newLRange,
            this.player.props,
        );
        this.lastContextLog.changeProp.finallyClampContribute = cloneProps(
            ctx.deltaPropContext!,
        );
        this.lastContextLog.changeProp.rangeLimit = {
            H: newHRange as [number, number],
            L: newLRange as [number, number],
            A: evt.getARange_ChoiceB(),
            C: evt.getCRange_ChoiceB(),
            M: evt.getMRange_ChoiceB(),
        };
        const finetune = finetuneResolute(ctx.deltaPropContext!);
        this.lastContextLog.changeProp.finetuneEvtContribute = finetune;
        this.logger.info("ChoiceB finetune结果", finetune);
        ctx.deltaPropContext = finetune;
        return {
            deltaProps: ctx.deltaPropContext,
            endingText: evt.getEndingB(),
            resType: evt.isB_Punish() ? "Punish" : "B",
        };
    }
    // 前端展示事件调用该函数，根据信息去绘制展示该活动的页面
    showEvt(evtID: number) {
        return this.allEvents[evtID].forShow(this.player, this.year);
    }
    resoluteEvt(
        evtID: number,
        choice: "A" | "B",
        index: number,
        ctx: SingleRoundContext,
    ) {
        this.contextLog.push({
            evtID,
            evtTitle: this.allEvents[evtID].forShow(this.player, this.year)
                .title,
            changeProp: {},
        });
        let res: ResoluteEventRes;
        if (choice === "A") {
            this.lastContextLog.playerChoice = "A";
            res = this.chooseA(evtID, ctx);
        } else {
            res = this.chooseB(evtID, ctx);
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
        // 事件经历的记录
        this.allEvents[evtID].experienceCount++; // 经历次数
        if (isSuccess(res.resType)) this.timelineMod.succEventIDs.add(evtID);
        // 特殊影响： 党员身份√、毕业去向、升学去向、删除后续活动
        this.allEvents[evtID].specialEffect(res, this.player, this.getYear());
        // 清空lastItemID
        this.itemManager.resetLastItemID();
        return res;
    }
    nextEvt(ctx: SingleRoundContext) {
        this.itemManager.applyHappenPassiveEffects(this.timelineMod);
        const nextRes = this.timelineMod.getNextEvent(ctx);
        return nextRes;
    }
    requiredEvtJump(evtID: number) {
        const evt = this.allEvents[evtID];
        // 65事件都直接滚蛋
        if (evtID === 65) {
            this.logger.info(`返回事件65说明抽不出事件,直接跳过`);
            return true;
        }
        if (evt.isRequired() === false) {
            // 可选事件不会被跳过
            return false;
        }

        // 基础条件的跳过判断
        if (
            evt
                .getPrerequisites()
                .some(
                    (prereq) => !this.timelineMod.getSuccEventIDs().has(prereq),
                )
        ) {
            this.logger.info(`必然事件${evtID}前置事件未满足！，直接跳过`);
            return true;
        }

        if (!didMeetRequireProps(evt, this.player.props, this.logger)) {
            return true;
        }

        if (evtID === 90 && this.player.specialTag.has(跳过招聘会)) {
            // 特殊条件的跳过判断
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
                return true;
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
            return true;
        }
        if (evtID === 89 && this.player.specialTag.has(跳过辅导员青椒)) {
            console.log("evt === 青椒留校，但是允许跳过");
            return true;
        }
        if (evtID === 90 && this.player.specialTag.has(跳过招聘会)) {
            console.log("evt === 招聘会，但是允许跳过");
            return true;
        }

        return false;
    }
    addItem(item: Item) {
        this.itemManager.addItem(item);
    }
    showAllItem() {
        return this.itemManager.getAllItems();
    }
    useItem(itemID: ItemID, ctx: SingleRoundContext) {
        return this.itemManager.useItem(itemID, ctx);
    }
    unUseItem(itemID: ItemID, ctx: SingleRoundContext) {
        return this.itemManager.unUseItem(itemID, ctx);
    }
    canUseItem(itemID: ItemID, ctx: SingleRoundContext) {
        return this.itemManager.canUseItem(itemID, ctx);
    }
    createEmptyContext(): SingleRoundContext {
        return createEmptyContext(this.player, this);
    }
    getContextLog() {
        return this.contextLog;
    }
    lastFiveRandEvt() {
        this.timelineMod.lastFiveRandomEvt();
    }
}

export interface ContextLog {
    evtID: number;
    evtTitle: string;
    baseAndUpgrade_prob?: number; //事件基础概率+进阶影响
    HLAndMainpropEffect_prob?: number; //  人物H L 和主属性对成功概率加成
    electionBuff?: number; // 由于下次一定，从而在第二次选举具有的buff
    mustbePostGraduate?: number; // 保研百分百事件产生的buff
    succProbWithoutItemPassive?: number; // 没有装备被动影响的成功概率（但会有主动技能的影响）
    succProbAfterItemPassive?: number; // 考虑了装备被动后的成功概率，也会有主动技能的影响
    rand?: number; // 随机数
    succProbFinalClamped?: number; // 经过clamp后的成功概率
    resType?: string; // 选项结果
    playerChoice?: "A" | "B" | "B but EqualRight"; // 玩家选择
    changeProp: {
        itemPassiveContribute?: FiveProps; // 被动对属性变更的影响
        evtOriginContribute?: FiveProps; // 事件本身对属性变更的影响
        finallyClampContribute?: FiveProps; // 原本最终影响
        finetuneEvtContribute?: FiveProps; // 在原本最终影响上系数微调
        rangeLimit?: FivePropsRange;
    };
}
