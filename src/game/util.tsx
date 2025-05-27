import React from "react";

import { FiveProps, StandardEvent } from "./gamesys";

import { Logger } from "@/logger/logger";
import { RequirePropLevel, ResultBLevel } from "@/type/config";
import { EventCategory } from "@/type/type";

// export function timeLogger<T extends (...args: unknown[]) => unkn>(
//     _target: object,
//     propertyKey: string | symbol,
//     descriptor: TypedPropertyDescriptor<T>,
// ): TypedPropertyDescriptor<T> | void {
//     const originalMethod = descriptor.value!;

//     descriptor.value = function (...args: Parameters<T>): ReturnType<T> {
//         const start = performance.now();
//         const result = originalMethod.apply(this, args);

//         if (result instanceof Promise) {
//             return result.then((res) => {
//                 const end = performance.now();
//                 console.log(
//                     `${String(propertyKey)} executed in ${(end - start).toFixed(2)} ms`,
//                 );
//                 return res;
//             }) as ReturnType<T>;
//         } else {
//             const end = performance.now();
//             console.log(
//                 `${String(propertyKey)} executed in ${(end - start).toFixed(2)} ms`,
//             );
//             return result;
//         }
//     } as T;

//     return descriptor;
// }

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
        return [-4, -4];
    }
    console.log("warning! unexpected gear");
    return [0, 0];
}

export function getTwoRandomItems<T>(arr: T[], beforeRandIdice: number[]) {
    if (arr.length < 2) {
        console.warn("getTwoRandomItems", arr, beforeRandIdice);
        throw new Error("数组至少需要 2 个元素");
    }
    // console.log("getTwoRandomItems", "func", arr, beforeRandIdice);
    if (arr.length === 2) {
        return [0, 1];
    } else if (arr.length === 3) {
        const allPairs: [number, number][] = [
            [0, 1],
            [0, 2],
            [1, 2],
        ];
        const start = Math.floor(Math.random() * 3);
        for (let offset = 0; offset !== 3; offset++) {
            const pairIdx = (offset + start) % 3;
            if (
                !allPairs[pairIdx].includes(beforeRandIdice[0]) ||
                !allPairs[pairIdx].includes(beforeRandIdice[1])
            ) {
                return allPairs[pairIdx];
            }
        }
    }

    // 生成两个不同的随机索引
    const last1 = beforeRandIdice[0] || null;
    const last2 = beforeRandIdice[1] || null;
    let index1;
    do {
        index1 = Math.floor(Math.random() * arr.length);
    } while (index1 === last1 || index1 === last2);
    let index2;
    do {
        index2 = Math.floor(Math.random() * arr.length);
        // 确保 index2 ≠ index1 和 last1 last2
    } while (index2 === last1 || index2 === last2 || index2 === index1);

    return [index1, index2];
}

export function formatDialog(
    dialog: string,
    c1: string,
    c2: string,
    _category: EventCategory,
): React.ReactNode {
    const parts: React.ReactNode[] = [];

    // const shouldHighlight = category === EventCategory.SZTZ;
    const shouldHighlight = true;

    const applyUnderline = (text: string): React.ReactNode[] => {
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

    const regex = /「(.*?)」/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(dialog)) !== null) {
        const before = dialog.slice(lastIndex, match.index);
        const highlight = match[1];

        parts.push(...applyUnderline(before));

        if (shouldHighlight) {
            parts.push(<b key={`highlight-${match.index}`}>「{highlight}」</b>);
        } else {
            parts.push(`「${highlight}」`);
        }

        lastIndex = regex.lastIndex;
    }

    if (lastIndex < dialog.length) {
        parts.push(...applyUnderline(dialog.slice(lastIndex)));
    }

    return <>{parts}</>;
}

export function highLight(dialog: string): React.ReactNode {
    const regex = /「(.*?)」/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(dialog)) !== null) {
        const start = match.index;
        const end = regex.lastIndex;

        // 添加普通文本部分
        if (start > lastIndex) {
            parts.push(dialog.slice(lastIndex, start));
        }

        // 添加加粗部分
        parts.push(<strong key={start}>{`「${match[1]}」`}</strong>);

        lastIndex = end;
    }

    // 添加最后剩下的普通文本
    if (lastIndex < dialog.length) {
        parts.push(dialog.slice(lastIndex));
    }

    return <>{parts}</>;
}

export function isSuccess(res: string) {
    return res === "BigS" || res === "S";
}

export function clampFiveProps_choiceA(
    deltaProps: FiveProps,
    evt: StandardEvent,
    playerProps: FiveProps,
) {
    // 第一步：按事件范围约束 deltaProps
    deltaProps.H = clamp(
        deltaProps.H,
        evt.getHRange_ChoiceA()[0],
        evt.getHRange_ChoiceA()[1],
    );
    deltaProps.L = clamp(
        deltaProps.L,
        evt.getLRange_ChoiceA()[0],
        evt.getLRange_ChoiceA()[1],
    );
    deltaProps.A = clamp(
        deltaProps.A,
        evt.getARange_ChoiceA()[0],
        evt.getARange_ChoiceA()[1],
    );
    deltaProps.C = clamp(
        deltaProps.C,
        evt.getCRange_ChoiceA()[0],
        evt.getCRange_ChoiceA()[1],
    );
    deltaProps.M = clamp(
        deltaProps.M,
        evt.getMRange_ChoiceA()[0],
        evt.getMRange_ChoiceA()[1],
    );

    // 第二步：确保应用 deltaProps 后不会超出 0~100
    deltaProps.H = clamp(deltaProps.H, -playerProps.H, 100 - playerProps.H);
    deltaProps.L = clamp(deltaProps.L, -playerProps.L, 100 - playerProps.L);
    deltaProps.A = clamp(deltaProps.A, -playerProps.A, 100 - playerProps.A);
    deltaProps.C = clamp(deltaProps.C, -playerProps.C, 100 - playerProps.C);
    deltaProps.M = clamp(deltaProps.M, -playerProps.M, 100 - playerProps.M);
}

export function clampFiveProps_choiceB(
    deltaProps: FiveProps,
    evt: StandardEvent,
    newHRange: number[],
    newLRange: number[],
    playerProps: FiveProps,
) {
    // 第一步：按传入范围和事件设定范围进行初步 clamp
    deltaProps.H = clamp(deltaProps.H, newHRange[0], newHRange[1]);
    deltaProps.L = clamp(deltaProps.L, newLRange[0], newLRange[1]);
    deltaProps.A = clamp(
        deltaProps.A,
        evt.getARange_ChoiceA()[0],
        evt.getARange_ChoiceA()[1],
    );
    deltaProps.C = clamp(
        deltaProps.C,
        evt.getCRange_ChoiceA()[0],
        evt.getCRange_ChoiceA()[1],
    );
    deltaProps.M = clamp(
        deltaProps.M,
        evt.getMRange_ChoiceA()[0],
        evt.getMRange_ChoiceA()[1],
    );

    // 第二步：确保加到 playerProps 上后仍在 [0, 100] 范围内
    deltaProps.H = clamp(deltaProps.H, -playerProps.H, 100 - playerProps.H);
    deltaProps.L = clamp(deltaProps.L, -playerProps.L, 100 - playerProps.L);
    deltaProps.A = clamp(deltaProps.A, -playerProps.A, 100 - playerProps.A);
    deltaProps.C = clamp(deltaProps.C, -playerProps.C, 100 - playerProps.C);
    deltaProps.M = clamp(deltaProps.M, -playerProps.M, 100 - playerProps.M);
}

export function didMeetRequireProps(
    evt: StandardEvent,
    playerProps: FiveProps,
    logger: Logger | null = null,
) {
    // 1. 强制检查 H 和 L
    const requireProps = evt.getRequirement();
    const evtID = evt.getID();
    const evtRequired = evt.isRequired();
    for (const prop of ["H", "L"] as const) {
        if ((playerProps[prop] ?? 0) < (requireProps[prop] ?? 0)) {
            if (logger) {
                logger.info(
                    `[didMeetRequireProps] ${evtRequired ? "必选" : "随机"}事件${evtID}需求属性${prop}[${playerProps[prop]}/${requireProps[prop]}]，直接跳过`,
                );
            }
            return false;
        }
    }

    // 2. 检查 A, C, M 的逻辑（根据需要数量不同决定“或”或“与”）
    const softProps: ("A" | "C" | "M")[] = ["A", "C", "M"];
    const requiredSoftProps = softProps.filter(
        (prop) => requireProps[prop] >= 0,
    );

    const requiredMet = requiredSoftProps.map(
        (prop) => (playerProps[prop] ?? 0) >= (requireProps[prop] ?? 0),
    );

    const allMet =
        requiredSoftProps.length <= 2
            ? requiredMet.every((met) => met)
            : requiredMet.some((met) => met); // 3个时为“或”

    if (!allMet) {
        if (logger) {
            const detail = requiredSoftProps
                .map(
                    (prop) =>
                        `${prop}[${playerProps[prop]}/${requireProps[prop]}]`,
                )
                .join(", ");
            logger.info(
                `[didMeetRequireProps] ${evtRequired ? "必选" : "随机"}事件${evtID}的软性属性要求未满足：${detail}，直接跳过`,
            );
        }
        return false;
    }

    return true;
}

export function cloneProps(o: FiveProps): FiveProps {
    return {
        H: o.H,
        L: o.L,
        A: o.A,
        C: o.C,
        M: o.M,
    };
}

export function addPropsTo_ReturnNew(
    o: FiveProps,
    adder: FiveProps,
): FiveProps {
    return {
        H: o.H + adder.H,
        L: o.L + adder.L,
        A: o.A + adder.A,
        C: o.C + adder.C,
        M: o.M + adder.M,
    };
}
export function addPropsTo_InPlace(o: FiveProps, adder: FiveProps): void {
    o.H += adder.H;
    o.L += adder.L;
    o.A += adder.A;
    o.C += adder.C;
    o.M += adder.M;
}
