import { EventCategory } from "@/type/type";

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
    [EventCategory.PYFA, "/png/back-purple.png"],
    // [EventCategory.CGQY, "#F0D28C"],
    [EventCategory.JXPY, "/png/back-pink.png"],
    [EventCategory.XSTS, "/png/back-blue.png"],
    [EventCategory.XSGZ, "/png/back-red.png"],
    [EventCategory.SZTZ, "/png/back-yellow.png"],
    [EventCategory.XYSJ, "/png/back-green.png"],
    [EventCategory.NONE, undefined],
]);
