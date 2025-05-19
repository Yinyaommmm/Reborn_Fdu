import { model } from "@/packages/model";

export interface GameModel {
    isCardAnimating: boolean;
    isChoiceAnimating: boolean;
    exitDirection: "left" | "right";
    trigger: boolean;
    endingType: "BigS" | "S" | "F" | "B";
}

export const $Game = model<GameModel>("GAME", {
    isCardAnimating: false,
    isChoiceAnimating: false,
    exitDirection: "right",
    trigger: false,
    endingType: "B",
});
