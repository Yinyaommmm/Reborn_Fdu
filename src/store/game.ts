import { model } from "@/packages/model";

export interface GameModel {
    isCardAnimating: boolean;
    isChoiceAnimating: boolean;
    currentCard: number;
}

export const $Game = model<GameModel>("GAME", {
    isCardAnimating: false,
    isChoiceAnimating: false,
    currentCard: 0,
});
