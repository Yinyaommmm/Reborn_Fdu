import { model } from "@/packages/model";

export type UIRoute = "game" | "birth" | "launch";
export interface UIModel {
    messageContent: string;
    messageType: "success" | "danger" | "warning";
    messageDisplay: boolean;
    route: UIRoute;
}

export const $UI = model<UIModel>("UI", {
    messageContent: "",
    messageType: "success",
    messageDisplay: false,
    route: "launch",
});
