import * as XLSX from "xlsx";

import {
    StoryEvent,
    Event,
    EventCategoryMap,
    EventCategory,
    RequirePropLevelMap,
    PropMap,
    Prop,
    BaseProbabilityMap,
    ResultA,
    ResultLevelMap,
    ResultB,
    ResutlBLevelMap,
    ResutlBLevel,
    BgCategoryMap,
    BgCategory,
} from "../type/type";

import { BaseProbability, RequirePropLevel, ResultLevel } from "@/type/config";
export const ReadExcelFromPublic = async () => {
    const res = await fetch("/plot.xlsx");
    const arrayBuffer = await res.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonArr: StoryEvent[] = XLSX.utils.sheet_to_json(worksheet, {
        defval: "",
    });
    const events: Event[] = jsonArr.map((item) =>
        createEvtFromStroyEvent(item),
    );
    console.log("origin", jsonArr);
    console.log("convert", events);
};

export function createEvtFromStroyEvent(storyEvt: StoryEvent): Event {
    const evt = new Event();
    evt.id = storyEvt.编号;
    evt.title = storyEvt.主题.replace("【二级】", "");
    evt.required = storyEvt.可选性 === "必选";
    evt.equalRights = storyEvt.等权重 === "是";
    evt.category = EventCategoryMap.get(storyEvt.类别) ?? EventCategory.NONE;

    const { main, replace } = extractMainAndReplaceDialog(storyEvt.对话文案);
    evt.mainDialog = main;
    evt.repalceDialog = replace;

    evt.repetable = storyEvt.重复性 === "是";
    console.log("暂未处理出现学年", storyEvt.出现学年);
    // evt.happenYear = storyEvt.出现学年
    evt.requireProps = {
        H: RequirePropLevelMap.get(storyEvt.R诚信H) ?? RequirePropLevel.D,
        L: RequirePropLevelMap.get(storyEvt.R诚信H) ?? RequirePropLevel.D,
        A: RequirePropLevelMap.get(storyEvt.R诚信H) ?? RequirePropLevel.D,
        C: RequirePropLevelMap.get(storyEvt.R诚信H) ?? RequirePropLevel.D,
        M: RequirePropLevelMap.get(storyEvt.R诚信H) ?? RequirePropLevel.D,
    };
    evt.mainProp = PropMap.get(storyEvt.主属性) ?? Prop.None;
    evt.prerequisites = extractPrerequisites(storyEvt.前置事件);
    evt.baseProbability =
        BaseProbabilityMap.get(storyEvt.基础概率) ?? BaseProbability.TRIVIAL;
    evt.upgrade = storyEvt.升阶 === "UP";
    evt.choiceA = storyEvt.选项A;
    evt.endingA = extractEndingA(storyEvt.结局A);
    evt.resultA = extractResultA(
        storyEvt.A诚信H,
        storyEvt.A幸运L,
        storyEvt.A学术A,
        storyEvt.A创造C,
        storyEvt.A管理M,
    );

    evt.choiceB = storyEvt.选项B;
    evt.endingB = storyEvt.结局B;
    evt.resultB = extractResultB(
        storyEvt.B诚信H,
        storyEvt.B幸运L,
        storyEvt.B学术A,
        storyEvt.B创造C,
        storyEvt.B管理M,
    );
    evt.isHighlight = storyEvt.高光事件 == "是";
    evt.bgCategory = BgCategoryMap.get(storyEvt.背景图类别) ?? BgCategory.NONE;
    evt.specialEffect = storyEvt.特殊影响;
    return evt;
}

function extractMainAndReplaceDialog(dialog: string): {
    main: string;
    replace: string[];
} {
    const regex = /\[([^\]]+)\]/;
    const match = dialog.match(regex);

    if (!match) {
        return {
            main: dialog,
            replace: [],
        };
    }
    const replace = match[1].split(",").map((s) => s.trim());
    const main = dialog.replace(regex, "$$$");

    return {
        main,
        replace,
    };
}

function extractPrerequisites(prereq: string) {
    const regex = /\[([^\]]+)\]/;
    const match = prereq.match(regex);
    if (!match) {
        return [];
    }
    console.log("match", match);
    return match[1].split(",").map((s) => Number(s.trim()));
}

function extractEndingA(endingA: string): { succ: string; fail: string } {
    const lines = endingA.split("\n");
    const linesArr = lines
        .map((line) => line.trim())
        .filter((line) => line.startsWith("#") && line.slice(1).trim() !== "")
        .map((line) => line.slice(1).trim());
    return {
        succ: linesArr[0],
        fail: linesArr[1] ?? "",
    };
}

function extractResultA(H: string, L: string, A: string, C: string, M: string) {
    const res = new ResultA();
    const regex = /\[([^\]]+)\]/;
    const matchH = H.match(regex);
    if (!matchH) {
        res.H = [0, 0];
    } else {
        const tmp = matchH[1].split(",").map((s) => Number(s.trim()));
        if (tmp.length < 2) console.assert("Result A中 H的奖励格式不正确");
        res.H = [tmp[0], tmp[1]];
    }
    const matchL = L.match(regex);
    if (!matchL) {
        res.L = [0, 0];
    } else {
        const tmp = matchL[1].split(",").map((s) => Number(s.trim()));
        if (tmp.length < 2) console.assert("Result A中 L的奖励格式不正确");
        res.H = [tmp[0], tmp[1]];
    }
    res.A = ResultLevelMap.get(A) ?? ResultLevel.X;
    res.C = ResultLevelMap.get(C) ?? ResultLevel.X;
    res.M = ResultLevelMap.get(M) ?? ResultLevel.X;

    return res;
}

function extractResultB(H: string, L: string, A: string, C: string, M: string) {
    const res = new ResultB();
    res.H = ResutlBLevelMap.get(H) ?? ResutlBLevel.Same;
    res.L = ResutlBLevelMap.get(L) ?? ResutlBLevel.Same;
    res.A = ResultLevelMap.get(A) ?? ResultLevel.X;
    res.C = ResultLevelMap.get(C) ?? ResultLevel.X;
    res.M = ResultLevelMap.get(M) ?? ResultLevel.X;
    return res;
}
