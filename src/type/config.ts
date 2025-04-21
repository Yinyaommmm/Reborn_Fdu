// 触发事件所需的属性档位数值
export enum RequirePropLevel {
    D = 0,
    Dp = 10,
    C = 20,
    Cp = 30,
    B = 40,
    Bp = 50,
    A = 60,
    Ap = 70,
    S = 80,
    Sp = 90,
}

// 事件触发基础概率
export type ProbilityGear = "TRIVIAL" | "EASY" | "MEDIUM" | "HARD" | "VERYHARD";
export const ValidProbilityGear = [
    "TRIVIAL",
    "EASY",
    "MEDIUM",
    "HARD",
    "VERYHARD",
];
export enum BaseProbability {
    TRIVIAL = 1,
    EASY = 0.6,
    MEDIUM = 0.5,
    HARD = 0.45,
    VERYHARD = 0.4,
}

// 事件触发升阶概率
export enum UpgradeProbability {
    TRIVIAL = 1,
    EASY = 0.5,
    MEDIUM = 0.45,
    HARD = 0.38,
    VERYHARD = 0.35,
}

// 事件属性A C M结算档位[TODO ：暂未决定]
export type ResultLevelGear = "0" | "1" | "2" | "3" | "4";
export const ValidResultLevelGear = ["0", "1", "2", "3", "4"];
export const ResultLevel: Map<ResultLevelGear, [number, number]> = new Map([
    ["0", [0, 0]],
    ["1", [1, 1]],
    ["2", [2, 2]],
    ["3", [3, 3]],
    ["4", [4, 4]],
]);

// TODO: 幸运值影响掷骰子次数档位

// TODO: 幸运值将影响创造值能否影响区间下限的概率档位

// 选项B结算时继承A的比例
export enum ResultBLevel {
    Same = 1,
    Half = 0.5,
    Punish = 0.3,
    HeavyPunish = 0.1,
    None = 0,
}

export const ValidResultBLevel = [
    "Same",
    "Half",
    "Punish",
    "HeavyPunish",
    "NONE",
];
