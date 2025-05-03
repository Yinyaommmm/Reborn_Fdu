import { model } from "@/packages/model";

export interface UIModel {
    messageContent: string;
    messageType: "success" | "danger" | "warning";
    messageDisplay: boolean;
    route: "game" | "birth";
}

export const $UI = model<UIModel>("UI", {
    messageContent: "",
    messageType: "success",
    messageDisplay: false,
    route: "birth",
});
