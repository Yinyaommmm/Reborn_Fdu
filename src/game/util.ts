import { StandardEvent } from "./type";

import { RequirePropLevel, ResultBLevel } from "@/type/config";

export function timeLogger(
    _target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);

        if (result instanceof Promise) {
            return result.then((res) => {
                const end = performance.now();
                console.log(
                    `${propertyKey} executed in ${(end - start).toFixed(2)} ms`,
                );
                return res;
            });
        } else {
            const end = performance.now();
            console.log(
                `${propertyKey} executed in ${(end - start).toFixed(2)} ms`,
            );
            return result;
        }
    };

    return descriptor;
}

export function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}
export function clampProb(value: number) {
    return clamp(value, 0, 1);
}

export function randRange(min: number, max: number) {
    return min + Math.random() * (max - min); // [min,max )
}
export function randRangeArr([min, max]: number[]) {
    return min + Math.random() * (max - min); // [min,max )
}

export function luckyRollCount(playerLucky: number) {
    if (playerLucky >= RequirePropLevel.S) {
        return 4;
    } else if (playerLucky >= RequirePropLevel.A) {
        return 3;
    } else if (playerLucky >= RequirePropLevel.B) {
        return 2;
    } else if (playerLucky >= RequirePropLevel.C) {
        return 1;
    }
    return 0;
}

export function luckRollArr(playerLucky: number, evt: StandardEvent): number[] {
    const lRange = evt.getLRange_ChoiceA();
    const rollCount = 2 + luckyRollCount(playerLucky); // 基础2次 + 额外次数
    return Array(rollCount)
        .fill(0)
        .map(() => randRangeArr(lRange))
        .sort((a, b) => b - a);
}

export function luckEnchanceACM(playerLucky: number) {
    if (playerLucky >= RequirePropLevel.S) {
        return 0.8;
    } else if (playerLucky >= RequirePropLevel.A) {
        return 0.7;
    } else if (playerLucky >= RequirePropLevel.B) {
        return 0.6;
    } else if (playerLucky >= RequirePropLevel.C) {
        return 0.5;
    }
    return 0.4;
}

export function HLRangeConvert_ChoiceB(
    gear: ResultBLevel,
    [min, max]: number[],
): number[] {
    if (gear === ResultBLevel.None) {
        return [0, 0];
    } else if (gear === ResultBLevel.Half) {
        return [min * 0.5, max * 0.5];
    } else if (gear === ResultBLevel.Same) {
        return [min, max];
    } else if (gear === ResultBLevel.Punish) {
        return [-8, -8];
    }
    console.log("warning! unexpected gear");
    return [0, 0];
}
