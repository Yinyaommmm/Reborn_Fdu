import { model } from "@/packages/model";

export type UIRoute =
    | "game"
    | "birth"
    | "launch"
    | "graduation"
    | "after"
    | "dev"
    | "introduction"
    | "end";
export interface UIModel {
    messageContent: string;
    messageType: "success" | "danger" | "warning";
    messageDisplay: boolean;
    route: UIRoute;
    earphoneDisplay: boolean;
}

export const $UI = model<UIModel>("UI", {
    messageContent: "",
    messageType: "success",
    messageDisplay: false,
    route: "launch",
    earphoneDisplay: true,
});
