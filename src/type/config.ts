// 触发事件所需的属性档位数值
export enum RequirePropLevel {
    D = 0,
    C = 20,
    B = 40,
    A = 60,
    S = 80,
}

// 事件触发基础概率
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

// 事件属性A C M结算档位
export enum ResultLevel {
    X,
    I,
    II,
    III,
    IV,
}
// TODO: 幸运值影响掷骰子次数档位

// TODO: 幸运值将影响创造值能否影响区间下限的概率档位

// 选项B结算时继承A的比例
export enum ResutlBLevel {
    Same,
    Half,
    Punish,
    HeavyPunish,
}
