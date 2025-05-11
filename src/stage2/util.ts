import { FiveProps } from "@/game/gamesys";
import { RequirePropLevel } from "@/type/config";

export function getExtraRollTime(L: number) {
    let extraRollTime = 0;
    if (L >= RequirePropLevel.C) {
        extraRollTime = 1;
    }
    if (L >= RequirePropLevel.A) {
        extraRollTime = 2;
    }
    if (L >= RequirePropLevel.S) {
        extraRollTime = 3;
    }
    return extraRollTime;
}
export function getMainPropVal(props: FiveProps) {
    const p: ("H" | "L" | "A" | "C" | "M")[] = ["H", "L", "A", "C", "M"];
    return p.map((item) => props[item]).reduce((a, b) => Math.max(a, b));
}

export function luckLevelProb(luck: number) {
    if (luck >= RequirePropLevel.S) return 0.8;
    if (luck >= RequirePropLevel.A) return 0.7;
    if (luck >= RequirePropLevel.B) return 0.6;
    if (luck >= RequirePropLevel.C) return 0.5;
    if (luck >= RequirePropLevel.D) return 0.4;
    return 0.1; //虽然根本没用
}

// 事业线高潮等级判定函数
export function careerClimax(mainVal: number, crty: number, luck: number) {
    let level = 0;

    const ok = (req: number) => mainVal >= req && crty >= req;

    if (ok(RequirePropLevel.Cp)) level = 1;
    if (ok(RequirePropLevel.B)) level = 2;
    if (ok(RequirePropLevel.Bp)) level = 3;
    if (ok(RequirePropLevel.A)) level = 4;
    if (ok(RequirePropLevel.Ap)) level = 5;

    if (ok(RequirePropLevel.S)) {
        const prob = luckLevelProb(luck);
        if (Math.random() < prob) level = 6;
    }
    if (ok(RequirePropLevel.Sp)) {
        const prob = luckLevelProb(luck);
        if (Math.random() < prob) level = 7;
        if (Math.random() < prob * prob) level = 8; // 更苛刻的条件
    }

    return level;
}

export function randomIntBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 感情线高潮等级判定函数
export function loveClimax(luck: number): number {
    let level = 0;

    const ok = (req: number) => luck >= req;

    if (ok(RequirePropLevel.C)) level = 1;
    if (ok(RequirePropLevel.Cp)) level = 2;
    if (ok(RequirePropLevel.B)) level = 3;
    if (ok(RequirePropLevel.Bp)) {
        const prob = luckLevelProb(luck);
        if (Math.random() < prob) level = 4;
    }
    if (ok(RequirePropLevel.A)) {
        const prob = luckLevelProb(luck);
        if (Math.random() < prob) level = 5;
    }
    if (ok(RequirePropLevel.Ap)) {
        const prob = luckLevelProb(luck);
        if (Math.random() < prob * prob) level = 6;
    }

    return level;
}

// 获取基于玩家创造值获得 nice event 的数量
export function getNiceEventCount(crty: number): number {
    if (crty >= RequirePropLevel.S) return 5;
    if (crty >= RequirePropLevel.A) return 4;
    if (crty >= RequirePropLevel.B) return 3;
    if (crty >= RequirePropLevel.C) return 2;
    return 1;
}
