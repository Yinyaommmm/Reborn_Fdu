import { EDUDESTINATION, GRADDESTINATION } from "@/game/player";
import { model } from "@/packages/model";

export interface DataModel {
    honesty: number;
    lucky: number;
    academic: number;
    creativity: number;
    management: number;
    toolId: number | undefined;
    cards: string[];
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
    ending: "",
    eduDestination: "本科",
    gradDestination: "普通毕业",
});
