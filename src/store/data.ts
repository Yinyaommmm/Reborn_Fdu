import { EDUDESTINATION, GRADDESTINATION } from "@/game/player";
import { PickRes } from "@/packages/game-module";
import { model } from "@/packages/model";

export interface DataModel {
    honesty: number;
    lucky: number;
    academic: number;
    creativity: number;
    management: number;
    toolId: number | undefined;
    cards: (PickRes | undefined)[];
    endingCard: PickRes | undefined;
    ending: string;
    eduDestination: EDUDESTINATION;
    gradDestination: GRADDESTINATION;
}

export const $Data = model<DataModel>("DATA", {
    honesty: 0,
    lucky: 0,
    academic: 0,
    creativity: 0,
    management: 0,
    toolId: undefined,
    cards: [],
    endingCard: undefined,
    ending: "",
    eduDestination: "本科",
    gradDestination: "灵活就业",
});
