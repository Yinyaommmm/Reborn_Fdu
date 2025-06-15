import { FiveProps, GameSystem, StandardEvent } from "./gamesys";
import { luckEnchanceACM, luckRollArr, randRangeArr } from "./util";

import { Logger } from "@/logger/logger";

export class RsltModule {
    private logger: Logger;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    constructor(private gameSys: GameSystem) {
        // this.logger = new Logger("RsltMod", gameSys.logger.getEnable());
        this.logger = new Logger("RsltMod", false);
    }
    rsltL_ChoiceA(
        luck: number,
        evt: StandardEvent,
        resType: "S" | "BigS" | "F" | "Pass",
    ) {
        const luckList = luckRollArr(luck, evt);
        this.logger.info("rsltL_ChoicA lucklist", luckList);
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

    rsltACM_ChoiceA(
        luck: number,
        creativity: number,
        evt: StandardEvent,
        prop: "A" | "C" | "M",
        resType: "S" | "BigS" | "F" | "Pass",
    ): number {
        const range =
            prop === "A"
                ? evt.getARange_ChoiceA()
                : prop === "C"
                  ? evt.getCRange_ChoiceA()
                  : evt.getMRange_ChoiceA();
        const propRange = [...range]; // 构造深拷贝，防止修改原范围
        if (resType === "F" || resType === "Pass") {
            propRange[1] = (propRange[0] + propRange[1]) / 2;
            propRange[0] = 0;
            if (Math.random() < luckEnchanceACM(luck)) {
                // 触发保底
                propRange[0] +=
                    (propRange[1] - propRange[0]) *
                    Math.min(creativity / 100, 1);
                this.logger.info(
                    "rsltAM_ChoiceA失败,触发了保底" + prop,
                    propRange,
                );
            } else {
                this.logger.info(
                    "rsltAM_ChoiceA失败,且未触发保底" + prop,
                    propRange,
                );
            }
        } else {
            if (resType === "BigS" || Math.random() < luckEnchanceACM(luck)) {
                // 触发保底
                propRange[0] +=
                    (propRange[1] - propRange[0]) *
                    Math.min(creativity / 100, 1);
                this.logger.info(
                    "rsltAM_ChoiceA触发保底 prop:" + prop,
                    propRange,
                );
            } else {
                this.logger.info(
                    "rsltAM_ChoiceA没有触发保底 prop:" + prop,
                    propRange,
                );
            }
        }
        return randRangeArr(propRange);
    }

    // 考虑到C等级为0会使用主属性值增加
    rsltC_ChoiceA(
        deltaProps: FiveProps,
        luck: number,
        creativity: number,
        evt: StandardEvent,
        resType: "S" | "BigS" | "F" | "Pass",
    ) {
        const mainProp = evt.getMainProp();
        if (resType === "F" || resType === "Pass") {
            return this.rsltACM_ChoiceA(luck, creativity, evt, "C", resType);
        } else {
            if (
                evt.getCRange_ChoiceA()[0] === 0 &&
                evt.getCRange_ChoiceA()[1] === 0 &&
                mainProp !== "NONE"
            ) {
                this.logger.info(
                    "缺少C等级并且存在主属性: C的值使用mainprop的0.3",
                );
                return deltaProps[mainProp] * 0.3;
            } else {
                return this.rsltACM_ChoiceA(
                    luck,
                    creativity,
                    evt,
                    "C",
                    resType,
                );
            }
        }
    }

    rsltACM_ChoiceB(
        luck: number,
        creativity: number,
        evt: StandardEvent,
        prop: "A" | "C" | "M",
    ): number {
        const range =
            prop === "A"
                ? evt.getARange_ChoiceB()
                : prop === "C"
                  ? evt.getCRange_ChoiceB()
                  : evt.getMRange_ChoiceB();
        const propRange = [...range]; // 构造深拷贝，防止修改原范围
        if (Math.random() < luckEnchanceACM(luck)) {
            // 触发保底
            propRange[0] +=
                (propRange[1] - propRange[0]) * Math.min(creativity / 100, 1);
            this.logger.info("rsltACM_ChoiceB触发保底 prop:" + prop, propRange);
        } else {
            this.logger.info(
                "rsltACM_ChoiceB没有触发保底 prop:" + prop,
                propRange,
            );
        }

        return randRangeArr(propRange);
    }

    rsltC_ChoiceB(
        deltaProps: FiveProps,
        luck: number,
        creativity: number,
        evt: StandardEvent,
    ) {
        const mainProp = evt.getMainProp();

        if (
            evt.getCRange_ChoiceA()[0] === 0 &&
            evt.getCRange_ChoiceA()[1] === 0 &&
            mainProp !== "NONE"
        ) {
            this.logger.info("缺少C等级并且存在主属性: C的值使用mainprop的0.3");
            return deltaProps[mainProp] * 0.3;
        } else {
            return this.rsltACM_ChoiceB(luck, creativity, evt, "C");
        }
    }
}
