import { model } from "@/packages/model";

export interface DataModel {
    honesty: number;
    lucky: number;
    academic: number;
    creativity: number;
    management: number;
    toolId: number | undefined;
    cards: number[];
}

export const $Data = model<DataModel>("DATA", {
    honesty: 7,
    lucky: 12,
    academic: 2,
    creativity: 19,
    management: 10,
    toolId: undefined,
    cards: [0, 1, 2, 3],
});
