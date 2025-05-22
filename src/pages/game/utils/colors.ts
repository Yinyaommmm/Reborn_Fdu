import { EventCategory } from "@/type/type";
import { getImagePath } from "@/types/images";

export const CardColorMap = new Map<EventCategory, string>([
    [EventCategory.PYFA, "#B4AED2"],
    // [EventCategory.CGQY, "#F0D28C"],
    [EventCategory.JXPY, "#DCB6C8"],
    [EventCategory.XSTS, "#B9CFE6"],
    [EventCategory.XSGZ, "#F3AFAC"],
    [EventCategory.SZTZ, "#F0D28C"],
    [EventCategory.XYSJ, "#C9D895"],
    [EventCategory.NONE, "#FFF"],
]);

export const CardBackMap = new Map<EventCategory, string | undefined>([
    [EventCategory.PYFA, getImagePath("back-purple")],
    // [EventCategory.CGQY, "#F0D28C"],
    [EventCategory.JXPY, getImagePath("back-pink")],
    [EventCategory.XSTS, getImagePath("back-blue")],
    [EventCategory.XSGZ, getImagePath("back-red")],
    [EventCategory.SZTZ, getImagePath("back-yellow")],
    [EventCategory.XYSJ, getImagePath("back-green")],
    [EventCategory.NONE, undefined],
]);
