import {
    StoryEvent,
    ReadableEvent,
    EventCategoryMap,
    EventCategory,
    RequirePropLevelMap,
    ResultA,
    ResultLevelMap,
    ResultB,
    BgCategoryMap,
    BgCategory,
    ValidMainProps,
    MainProp,
    ResultBLevelMap,
    ResultBLevelType,
} from "../type/type";

import { ReadErrorFactory } from "@/error/read-error";
import {
    ProbilityGear,
    RequirePropLevel,
    ResultBLevel,
    ResultLevel,
    ResultLevelGear,
    ValidProbilityGear,
    ValidResultBLevel,
    ValidResultLevelGear,
} from "@/type/config";

export function createEvtFromStroyEvent(
    storyEvt: StoryEvent,
    index: number,
): ReadableEvent {
    const evt = new ReadableEvent();
    evt.id = extractID(storyEvt.编号, index);
    evt.title = extractTitle(storyEvt.主题, index);
    evt.required = extractRequired(storyEvt.可选性, index);
    evt.equalRights = extractEqualRights(storyEvt.等权重, index);
    evt.category = extractCategory(storyEvt.类别, index);

    const { main, replace } = extractMainAndReplaceDialog(
        storyEvt.对话文案,
        index,
    );
    evt.mainDialog = main;
    evt.repalceDialog = replace;
    evt.repetable = extractRepetable(storyEvt.重复性, index);
    evt.happenYear = extractHappenYear(storyEvt.出现学年, index);
    evt.requireProps = extractRequireProps(
        {
            R诚信H: storyEvt.R诚信H,
            R幸运L: storyEvt.R幸运L,
            R学术A: storyEvt.R学术A,
            R创造C: storyEvt.R创造C,
            R管理M: storyEvt.R管理M,
        },
        index,
    );

    evt.mainProp = extractMainProp(storyEvt.主属性, index);
    evt.prerequisites = extractPrerequisites(storyEvt.前置事件, index);
    evt.baseProbability = extractBaseProbability(storyEvt.基础概率, index);
    evt.upgrade = extractUpgrade(storyEvt.升阶, index);
    evt.choiceA = extractChoiceA(storyEvt.选项A, index);

    evt.endingA = extractEndingA(storyEvt.结局A, index);
    evt.resultA = extractResultA(
        storyEvt.A诚信H,
        storyEvt.A幸运L,
        storyEvt.A学术A,
        storyEvt.A创造C,
        storyEvt.A管理M,
        index,
    );

    evt.choiceB = extractChoiceB(storyEvt.选项B, index);
    evt.endingB = extractEndingB(storyEvt.结局B, index);
    evt.resultB = extractResultB(
        storyEvt.B诚信H,
        storyEvt.B幸运L,
        storyEvt.B学术A,
        storyEvt.B创造C,
        storyEvt.B管理M,
        index,
    );
    evt.isHighlight = extractIsHighlight(storyEvt.高光事件, index);

    evt.bgCategory = extractBgCategory(storyEvt.背景图, index);
    evt.specialEffect = extractSpecialEffect(storyEvt.特殊影响, index);
    return evt;
}
function extractID(storyID: string, index: number) {
    if (!/^\d+$/.test(storyID)) {
        throw ReadErrorFactory(index, "id", "事件id不是纯数字字符串");
    }

    const numericId = Number(storyID);

    if (numericId !== index) {
        throw ReadErrorFactory(index, "id", "事件id与index不匹配");
    }

    return numericId;
}
function extractTitle(storyTitle: string, index: number) {
    if (storyTitle.trim().length === 0) {
        throw ReadErrorFactory(index, "storyTitle", "标题为空");
    }

    return storyTitle.replace("【二级】", "").trim();
}
function extractRequired(storyRequired: string, index: number): boolean {
    if (storyRequired !== "必选" && storyRequired !== "可选") {
        throw ReadErrorFactory(index, "required", "可选性必须是“必选”或“可选”");
    }

    return storyRequired === "必选";
}
function extractEqualRights(storyEqualRights: string, index: number): boolean {
    if (
        storyEqualRights !== "是" &&
        storyEqualRights !== "否" &&
        storyEqualRights !== ""
    ) {
        throw ReadErrorFactory(
            index,
            "equalRights",
            "等权重字段必须是“是”、“否”或者为空",
        );
    }

    return storyEqualRights === "是";
}
function extractCategory(storyCategory: string, index: number): EventCategory {
    const mapped = EventCategoryMap.get(storyCategory);

    if (mapped === undefined) {
        throw ReadErrorFactory(
            index,
            "category",
            `无效的事件类别：“${storyCategory}”`,
        );
    }

    return mapped;
}
function extractMainAndReplaceDialog(
    storyDialog: string,
    index: number,
): {
    main: string;
    replace: string[];
} {
    const regex = /\[([^\]]+)\]/;
    const match = storyDialog.match(regex);

    if (!match) {
        return {
            main: storyDialog,
            replace: [],
        };
    }
    const raw = match[1].trim();
    if (raw.length === 0) {
        throw ReadErrorFactory(index, "dialog", "对话替换内容为空");
    }
    const replace = raw.split(",").map((s) => s.trim());
    const main = storyDialog.replace(regex, "$$$");

    return {
        main,
        replace,
    };
}
function extractRepetable(storyRepetable: string, index: number): boolean {
    if (storyRepetable !== "是" && storyRepetable !== "否") {
        throw ReadErrorFactory(
            index,
            "repetable",
            "重复性字段必须是“是”或“否”",
        );
    }

    return storyRepetable === "是";
}
function extractHappenYear(storyHappenYear: string, index: number): number[] {
    const trimmed = storyHappenYear.trim();

    // 全局提取所有 [x,x,x] 之间的内容
    const regex = /\[(\d+(?:,\d+)*)\]/g;
    const matches = [...trimmed.matchAll(regex)];

    if (matches.length === 0) {
        throw ReadErrorFactory(
            index,
            "happenYear",
            "出现学年格式错误，应为类似[1,2,3]或[1,2,3]\\n[4,5,6]的格式",
        );
    }

    const allYears: number[] = [];

    for (const match of matches) {
        const group = match[1];
        const years = group.split(",").map((y) => parseInt(y.trim(), 10));
        allYears.push(...years);
    }

    return Array.from(new Set(allYears.sort((a, b) => a - b)));
}
function extractRequireProps(
    storyProps: {
        R诚信H: string;
        R幸运L: string;
        R学术A: string;
        R创造C: string;
        R管理M: string;
    },
    index: number,
): {
    H: RequirePropLevel;
    L: RequirePropLevel;
    A: RequirePropLevel;
    C: RequirePropLevel;
    M: RequirePropLevel;
} {
    const sourceMap = {
        H: storyProps.R诚信H,
        L: storyProps.R幸运L,
        A: storyProps.R学术A,
        C: storyProps.R创造C,
        M: storyProps.R管理M,
    };

    const validLevels = ["D", "D+", "C", "C+", "B", "B+", "A", "A+", "S"];

    const convertLevel = (raw: string, fieldName: string): RequirePropLevel => {
        raw = raw.trim();
        if (raw == "") {
            return RequirePropLevelMap.get("D")!;
        }
        if (!validLevels.includes(raw)) {
            throw ReadErrorFactory(
                index,
                fieldName,
                `等级“${raw}”无效，应为 D/D+/C/C+/B/B+/A/A+/S,此处为${raw}`,
            );
        }

        // 转换 "+" 结尾的为对应 "p" 形式
        const key = raw.endsWith("+") ? raw[0] + "p" : raw;

        const level = RequirePropLevelMap.get(key);
        if (level === undefined) {
            throw ReadErrorFactory(index, fieldName, `无法映射等级“${raw}”`);
        }

        return level;
    };

    return {
        H: convertLevel(sourceMap.H, "R诚信H"),
        L: convertLevel(sourceMap.L, "R幸运L"),
        A: convertLevel(sourceMap.A, "R学术A"),
        C: convertLevel(sourceMap.C, "R创造C"),
        M: convertLevel(sourceMap.M, "R管理M"),
    };
}
function extractMainProp(storyMainProp: string, index: number): MainProp {
    const trimmed = storyMainProp.trim();
    if (!ValidMainProps.includes(trimmed)) {
        throw ReadErrorFactory(
            index,
            "mainProp",
            `主属性“${storyMainProp}”无效,应该为${ValidMainProps}`,
        );
    }
    return trimmed as MainProp;
}
function extractPrerequisites(storyPrereq: string, index: number): number[] {
    if (storyPrereq.trim() === "") {
        return [];
    }
    const regex = /^\[([^\]]+)\]$/;
    const match = storyPrereq.trim().match(regex);

    if (!match) {
        throw ReadErrorFactory(
            index,
            "prerequisites",
            `前置事件格式错误，应为 [1,2,3] 形式，实际为：${storyPrereq}`,
        );
    }

    return match[1]
        .split(",")
        .map((s) => Number(s.trim()))
        .filter((n) => !isNaN(n));
}
function extractBaseProbability(
    storyBaseProb: string,
    index: number,
): ProbilityGear {
    const bp = storyBaseProb.replace(" ", "");
    if (!ValidProbilityGear.includes(bp)) {
        throw ReadErrorFactory(
            index,
            "baseProbability",
            `基础概率“${storyBaseProb}”无效`,
        );
    }
    return bp as ProbilityGear;
}
function extractUpgrade(storyUpgrade: string, index: number): boolean {
    if (
        storyUpgrade !== "UP" &&
        storyUpgrade !== "DOWN" &&
        storyUpgrade !== ""
    ) {
        throw ReadErrorFactory(
            index,
            "upgrade",
            `升阶值“${storyUpgrade}”无效，应为 "UP" 或 "DOWN"或空`,
        );
    }
    return storyUpgrade === "UP";
}
function extractChoiceA(storyChoiceA: string, index: number): string {
    if (!storyChoiceA || storyChoiceA.trim().length === 0) {
        throw ReadErrorFactory(index, "choiceA", `选项A不能为空`);
    }
    return storyChoiceA.trim();
}
function extractEndingA(storyEndingA: string, index: number): string[] {
    const lines = storyEndingA.split("\n");
    const linesArr = lines
        .map((line) => line.trim())
        .filter((line) => line.startsWith("#"))
        .map((line) => line.slice(1).trim())
        .map((line) =>
            line === "" ? "excel中此处未填写excel中此处未填写" : line,
        );
    try {
        if (linesArr.length < 1) {
            throw ReadErrorFactory(index, "endingA", "结局A完全空白");
        }
    } catch (e) {
        console.log(
            index +
                ": 结局A完全空白，暂且使用缺省值：'excel中此处未填写excel中此处未填写'代替",
        );
        return [
            "excel中此处未填写excel中此处未填写",
            "excel中此处未填写excel中此处未填写",
        ];
    }

    return linesArr;
}
function extractChoiceB(storyChoiceB: string, index: number): string {
    if (typeof storyChoiceB !== "string") {
        throw ReadErrorFactory(index, "choiceB", "选项B必须是字符串");
    }
    return storyChoiceB.trim();
}
function extractEndingB(storyEndingB: string, index: number): string {
    if (storyEndingB === "") {
        return "";
    }
    if (typeof storyEndingB !== "string") {
        throw ReadErrorFactory(index, "endingB", "选项B必须是字符串");
    }
    if (storyEndingB.startsWith("#")) {
        return storyEndingB.slice(1).trim();
    } else {
        return storyEndingB.trim();
    }
}
function extractResultA(
    storyH: string,
    storyL: string,
    storyA: string,
    storyC: string,
    storyM: string,
    index: number,
): ResultA {
    const res = new ResultA();

    // 处理 H
    const matchH = storyH.match(/\[([^\]]+)\]/);
    if (!matchH) {
        res.H = [0, 0];
    } else {
        const tmp = matchH[1].split(",").map((s) => Number(s.trim()));
        if (tmp.length < 2 || tmp.some(isNaN)) {
            throw ReadErrorFactory(
                index,
                "resultA",
                "Result A中 H的奖励格式不正确，应该为两个数字值",
            );
        }
        res.H = [tmp[0], tmp[1]];
    }

    // 处理 L
    const matchL = storyL.match(/\[([^\]]+)\]/);
    if (!matchL) {
        res.L = [0, 0];
    } else {
        const tmp = matchL[1].split(",").map((s) => Number(s.trim()));
        if (tmp.length < 2 || tmp.some(isNaN)) {
            throw ReadErrorFactory(
                index,
                "resultA",
                "Result A中 L的奖励格式不正确，应该为两个数字值",
            );
        }
        res.L = [tmp[0], tmp[1]];
    }

    // 处理 A, C, M
    const ACM = [storyA, storyC, storyM].map((item) => item.toString());
    if (
        ACM.some((item) => !ValidResultLevelGear.includes(item) && item !== "")
    ) {
        throw ReadErrorFactory(
            index,
            "ACM奖励",
            `无效的 A 奖励等级：${storyA} ${storyC} ${storyM}`,
        );
    }
    res.A =
        ResultLevelMap.get(storyA.toString() as ResultLevelGear) ??
        ResultLevel.get("0")!;

    res.C =
        ResultLevelMap.get(storyC.toString() as ResultLevelGear) ??
        ResultLevel.get("0")!;

    res.M =
        ResultLevelMap.get(storyM.toString() as ResultLevelGear) ??
        ResultLevel.get("0")!;

    return res;
}
function extractResultB(
    storyH: string,
    storyL: string,
    storyA: string,
    storyC: string,
    storyM: string,
    index: number,
): ResultB {
    const res = new ResultB();
    const getResultBLevel = (value: string, prop: string): ResultBLevel => {
        value = value.trim();
        if (value === "") {
            return ResultBLevelMap.get("Same")!;
        }
        if (!ValidResultBLevel.includes(value)) {
            throw ReadErrorFactory(
                index,
                "resultB",
                `无效的 ${prop} 奖励等级:${value}`,
            );
        }
        const level = ResultBLevelMap.get(value as ResultBLevelType)!;
        return level;
    };

    const getResultLevel = (value: string, prop: string): [number, number] => {
        if (value === "") {
            return ResultLevelMap.get("0")!;
        }
        if (!ValidResultLevelGear.includes(value)) {
            throw ReadErrorFactory(
                index,
                "resultB",
                `无效的 ${prop} 奖励等级：${value}`,
            );
        }
        const level = ResultLevelMap.get(value as ResultLevelGear)!;
        return level;
    };

    res.H = getResultBLevel(storyH.toString(), "H");
    res.L = getResultBLevel(storyL.toString(), "L");
    res.A = getResultLevel(storyA.toString(), "A");
    res.C = getResultLevel(storyC.toString(), "C");
    res.M = getResultLevel(storyM.toString(), "M");

    return res;
}
function extractIsHighlight(storyIsHighlight: string, index: number): boolean {
    if (storyIsHighlight === "是") return true;
    if (storyIsHighlight === "否" || storyIsHighlight === "") return false;

    throw ReadErrorFactory(
        index,
        "isHighlight",
        `无效的高光事件值：${storyIsHighlight}，应为“是”或“否”`,
    );
}
function extractBgCategory(storyBgCategory: string, index: number): BgCategory {
    if (storyBgCategory === "") {
        return BgCategoryMap.get("常规")!;
    }
    const value = BgCategoryMap.get(storyBgCategory);
    if (value === undefined) {
        throw ReadErrorFactory(
            index,
            "bgCategory",
            `无效的背景图类别:${storyBgCategory}`,
        );
    }
    return value;
}
function extractSpecialEffect(
    storySpecialEffect: string,
    index: number,
): string {
    const trimmed = storySpecialEffect.trim();
    if (trimmed !== "") {
        console.log(`第${index}活动存在specialEffect：${trimmed}`);
    }
    return trimmed;
}
