import { model } from "@/packages/model";

export type EndingType = "BigS" | "S" | "F" | "B" | "Punish" | "Pass";
export interface GameModel {
    isCardAnimating: boolean;
    isChoiceAnimating: boolean;
    exitDirection: "left" | "right";
    trigger: boolean;
    endingType: EndingType;
}

export const $Game = model<GameModel>("GAME", {
    isCardAnimating: false,
    isChoiceAnimating: false,
    exitDirection: "right",
    trigger: false,
    endingType: "B",
});
