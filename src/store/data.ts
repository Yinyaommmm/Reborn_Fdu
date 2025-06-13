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
    semester: number;
    toolUsing: boolean;
    sex: number;
    prefer: number;
}

export const $Data = model<DataModel>("DATA", {
    honesty: 10,
    lucky: 10,
    academic: 10,
    creativity: 10,
    management: 10,
    toolId: undefined,
    cards: [],
    endingCard: undefined,
    ending: "",
    eduDestination: "本科",
    gradDestination: "灵活就业",
    semester: 0,
    toolUsing: false,
    sex: 1,
    prefer: 1,
});
