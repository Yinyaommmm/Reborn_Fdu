import { model } from "@/packages/model";

export interface GameModel {
    isCardAnimating: boolean;
    isChoiceAnimating: boolean;
    currentCard: number;
    exitDirection: "left" | "right";
    trigger: boolean;
}

export const $Game = model<GameModel>("GAME", {
    isCardAnimating: false,
    isChoiceAnimating: false,
    currentCard: 0,
    exitDirection: "right",
    trigger: false,
});
