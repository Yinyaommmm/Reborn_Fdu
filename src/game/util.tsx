import React, { ReactNode } from "react";

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

export function getTwoRandomItems<T>(arr: T[]) {
    if (arr.length < 2) {
        throw new Error("数组至少需要 2 个元素");
    }

    // 生成两个不同的随机索引
    const index1 = Math.floor(Math.random() * arr.length);
    let index2;
    do {
        index2 = Math.floor(Math.random() * arr.length);
    } while (index2 === index1); // 确保 index2 ≠ index1

    return [index1, index2];
}

export function formatDialog(
    dialog: string,
    c1: string,
    c2: string,
): React.ReactNode {
    const parts: React.ReactNode[] = [];

    const match = dialog.match(/(.*?)「(.*?)」(.*)/);
    const applyUnderline = (text: string): ReactNode[] => {
        const result: React.ReactNode[] = [];
        let remaining = text;

        while (remaining) {
            const idx1 = remaining.indexOf(c1);
            const idx2 = remaining.indexOf(c2);

            if (idx1 === -1 && idx2 === -1) {
                result.push(remaining);
                break;
            }

            const nextIdx =
                idx1 !== -1 && (idx2 === -1 || idx1 < idx2) ? idx1 : idx2;
            const target = nextIdx === idx1 ? c1 : c2;

            if (nextIdx > 0) {
                result.push(remaining.slice(0, nextIdx));
            }

            result.push(<u key={`${target}-${result.length}`}>{target}</u>);
            remaining = remaining.slice(nextIdx + target.length);
        }

        return result;
    };
    if (match) {
        const [, before, highlight, after] = match;

        parts.push(...applyUnderline(before));
        parts.push(<b key="highlight">「{highlight}」</b>);
        parts.push(...applyUnderline(after));
    } else {
        // 没有「」的情况，也处理下划线
        parts.push(...applyUnderline(dialog));
    }

    return <>{parts}</>;
}
