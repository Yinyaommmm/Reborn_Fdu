import { BaseProbability, RequirePropLevel, ResultLevel } from "./config";

export interface StoryEvent {
    A创造C: string;
    A学术A: string;
    A幸运L: string; // 示例是 "[0,1]"，可以保留 string 或自定义范围类型
    A管理M: string;
    A诚信H: string; // 示例是 "[0,1.5]"
    B创造C: string;
    B学术A: string;
    B幸运L: string;
    B管理M: string;
    B诚信H: string;
    R创造C: string;
    R学术A: string;
    R幸运L: string;
    R管理M: string;
    R诚信H: string;
    主属性: string;
    主题: string;
    出现学年: string; // 示例为 "[1]\r\n[5]"，你可以考虑处理成 number[]（拓展建议见下方）
    前置事件: string;
    升阶: string;
    可选性: string; // e.g. "必选"
    基础概率: string; // e.g. "TRIVIAL"
    对话文案: string;
    特殊影响: string;
    等权重: string; // e.g. "是"
    类别: string; // e.g. "培养方案"
    结局A: string;
    结局B: string;
    编号: number;
    背景图类别: string;
    选项A: string;
    选项B: string;
    重复性: string;
    高光事件: string;
}

export enum EventCategory {
    PYFA = 0, //培养方案
    CGQY = 1, //出国企业
    JXPY = 2, // 竞选评优
    XSTS = 3, // 学术提升
    XSGZ = 4, // 学生工作
    SZTZ = 5, // 素质拓展
    XYSJ = 6, // 幸运事件
    NONE = 7, // 缺失
}
export const EventCategoryMap = new Map<string, EventCategory>([
    ["培养方案", EventCategory.PYFA],
    ["出国企业", EventCategory.CGQY],
    ["竞选评优", EventCategory.JXPY],
    ["学术提升", EventCategory.XSTS],
    ["学生工作", EventCategory.XSGZ],
    ["素质拓展", EventCategory.SZTZ],
    ["幸运事件", EventCategory.XYSJ],
]);

export const RequirePropLevelMap = new Map<string, RequirePropLevel>();
new Map([
    ["", RequirePropLevel.D],
    ["D", RequirePropLevel.D],
    ["C", RequirePropLevel.C],
    ["B", RequirePropLevel.B],
    ["A", RequirePropLevel.A],
    ["S", RequirePropLevel.S],
]);
export const MinimumRequirePropFactory = () => {
    return {
        H: RequirePropLevel.D,
        L: RequirePropLevel.D,
        A: RequirePropLevel.D,
        C: RequirePropLevel.D,
        M: RequirePropLevel.D,
    };
};
export enum Prop {
    None,
    H,
    L,
    A,
    C,
    M,
}
export const PropMap = new Map<string, Prop>();
new Map([
    ["", Prop.None],
    ["H", Prop.H],
    ["L", Prop.L],
    ["A", Prop.A],
    ["C", Prop.C],
    ["M", Prop.M],
]);

export const BaseProbabilityMap = new Map<string, BaseProbability>(
    Object.entries(BaseProbability)
        .filter(([key]) => isNaN(Number(key))) // 只保留字符串键
        .map(([key, value]) => [key, value as BaseProbability]),
);

export const ResultLevelMap = new Map<string, ResultLevel>(
    Object.entries(ResultLevel)
        .filter(([key]) => isNaN(Number(key))) // 只保留字符串键
        .map(([key, value]) => [key, value as ResultLevel]),
);

export class ResultA {
    H: [number, number] = [0, 0];
    L: [number, number] = [0, 0];
    A: ResultLevel = ResultLevel.X;
    C: ResultLevel = ResultLevel.X;
    M: ResultLevel = ResultLevel.X;
}
export enum ResutlBLevel {
    Same,
    Half,
    Punish,
    HeavyPunish,
}
export const ResutlBLevelMap = new Map<string, ResutlBLevel>(
    Object.entries(ResutlBLevel)
        .filter(([key]) => isNaN(Number(key))) // 只保留字符串键
        .map(([key, value]) => [key, value as ResutlBLevel]),
);
export class ResultB {
    H: ResutlBLevel = ResutlBLevel.Same;
    L: ResutlBLevel = ResutlBLevel.Same;
    A: ResultLevel = ResultLevel.X;
    C: ResultLevel = ResultLevel.X;
    M: ResultLevel = ResultLevel.X;
}
export enum BgCategory {
    NONE,
    CAMPUS,
    CLASSROOM,
    GYM,
    PLAYGROUND,
    LAB,
    OFFICE,
    PRACTICE,
    AUDITORIUM,
    DORMITORY,
    TOUR,
}
export const BgCategoryMap = new Map<string, BgCategory>([
    ["无", BgCategory.NONE],
    ["校园", BgCategory.CAMPUS],
    ["教室", BgCategory.CLASSROOM],
    ["体育馆", BgCategory.GYM],
    ["操场", BgCategory.PLAYGROUND],
    ["实验室", BgCategory.LAB],
    ["办公室", BgCategory.OFFICE],
    ["实践场地", BgCategory.PRACTICE],
    ["礼堂", BgCategory.AUDITORIUM],
    ["寝室", BgCategory.DORMITORY],
    ["旅游打卡地", BgCategory.TOUR],
]);

export class Event {
    id: number = 0;
    title: string = "无主题";
    required: boolean = false;
    equalRights: boolean = false;
    category: EventCategory = EventCategory.PYFA;
    // 对话文案
    mainDialog: string = "";
    repalceDialog: string[] = [];

    repetable: boolean = false;
    happenYear: number[] = [];
    requireProps: {
        H: RequirePropLevel;
        L: RequirePropLevel;
        A: RequirePropLevel;
        C: RequirePropLevel;
        M: RequirePropLevel;
    } = MinimumRequirePropFactory();
    mainProp: Prop = Prop.H;

    prerequisites: number[] = [];

    baseProbability: BaseProbability = BaseProbability.TRIVIAL;
    upgrade: boolean = false;

    choiceA: string = "";
    endingA: { succ: string; fail: string } = { succ: "", fail: "" };
    resultA: ResultA = new ResultA();

    choiceB: string = "";
    endingB: string = "";
    resultB: ResultB = new ResultB();

    isHighlight: boolean = false;
    bgCategory: BgCategory = BgCategory.NONE;
    specialEffect: string = "";
}
