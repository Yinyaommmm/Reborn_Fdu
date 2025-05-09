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
});
