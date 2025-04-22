import { FiveProps, StandardEvent } from "./type";

import { RequirePropLevel } from "@/type/config";

export function timeLogger(
    target: any,
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

export function resolutL_ChoicA(
    luck: number,
    evt: StandardEvent,
    resType: "S" | "BigS" | "F",
) {
    const luckList = luckRollArr(luck, evt);
    console.log("resolutL_ChoicA lucklist", luckList);
    if (resType === "S") {
        // 成功结算
        return luckList[0]; // 选择最大值
    } else if (resType === "BigS") {
        // 大成功结算
        return Math.min(luckList[0] + 0.3, evt.getLRange_ChoiceA()[1]); // 选择最大值, 且会增加0.3
    } else {
        // 失败结算
        return luckList[1]; // 选'次'大值
    }
}

export function resoluteACM_ChoiceA(
    luck: number,
    creativity: number,
    evt: StandardEvent,
    prop: "A" | "C" | "M",
    resType: "S" | "BigS" | "F",
): number {
    const range =
        prop === "A"
            ? evt.getARange_ChoiceA()
            : prop === "C"
              ? evt.getCRange_ChoiceA()
              : evt.getMRange_ChoiceA();
    const propRange = [...range]; // 构造深拷贝，防止修改原范围
    if (resType === "F") {
        propRange[1] = (propRange[0] + propRange[1]) / 2;
        console.log(
            "resoluteAM_ChoiceA失败导致范围范围砍一半" + prop,
            propRange,
        );
    } else {
        const luckEnchance = luckEnchanceACM(luck);
        if (resType === "BigS" || Math.random() < luckEnchance) {
            // 触发保底
            propRange[0] =
                propRange[0] +
                (propRange[1] - propRange[0]) * Math.min(creativity / 100, 1);
            console.log("resoluteAM_ChoiceA触发保底 prop:" + prop, propRange);
        } else {
            console.log(
                "resoluteAM_ChoiceA没有触发保底 prop:" + prop,
                propRange,
            );
        }
    }

    const ARes = randRangeArr(propRange);
    return ARes;
}

// 考虑到C等级为0会使用主属性值增加
export function resolutC_ChoiceA(
    deltaProps: FiveProps,
    luck: number,
    creativity: number,
    evt: StandardEvent,
    resType: "S" | "BigS" | "F",
) {
    const mainProp = evt.getMainProp();
    if (resType === "F") {
        return resoluteACM_ChoiceA(luck, creativity, evt, "C", resType);
    } else {
        if (
            evt.getCRange_ChoiceA()[0] === 0 &&
            evt.getCRange_ChoiceA()[1] === 0 &&
            mainProp !== "NONE"
        ) {
            console.log("缺少C等级并且存在主属性: C的值使用mainprop的0.3");
            return deltaProps[mainProp] * 0.3;
        } else {
            return resoluteACM_ChoiceA(luck, creativity, evt, "C", resType);
        }
    }
}
