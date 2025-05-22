import { EventCategory } from "@/type/type";
import { getImagePath } from "@/types/images";

export type Tool = {
    name: string;
    description: string;
    passive: string;
    active?: string;
    src: string;
    available: EventCategory[];
};

export const tools: Tool[] = [
    {
        name: "书记回信",
        description: "书记对学生工作的高度肯定",
        passive: "学工事件的基础成功率小幅提升。",
        active: "自选一次学工事件必定成功。",
        src: getImagePath("tools/8"),
        available: [EventCategory.XSGZ],
    },
    {
        name: "院士宝典",
        description: "校长亲传的顶刊论文法宝",
        passive: "学术事件的基础成功率小幅提升。",
        active: "自选一次学术事件必定成功。",
        src: getImagePath("tools/7"),
        available: [EventCategory.XSTS],
    },
    {
        name: "灭霸手套",
        description: "打个响指淘汰一半对手",
        passive: "竞选事件的基础成功率小幅提升。",
        active: "自选一次竞选事件必定成功。",
        src: getImagePath("tools/1"),
        available: [EventCategory.JXPY],
    },
    {
        name: "同花顺学号",
        description: "学号20256789堪称F大天选之子",
        passive: "培养计划事件的基础成功率小幅提升。",
        active: "自选一次培养计划事件必定成功。",
        src: getImagePath("tools/2"),
        available: [EventCategory.PYFA],
    },
    {
        name: "中分背带裤",
        description: "凭借《哎呦TA干嘛》火爆F大的明星套装",
        passive: "所有素拓事件必定成功。",
        src: getImagePath("tools/3"),
        available: [],
    },
    {
        name: "护肤套装",
        description: "老西红柿力荐的F大泉眼神仙水",
        passive: "恋爱事件必定出现且成功。",
        src: getImagePath("tools/6"),
        available: [],
    },
    {
        name: "佛脚",
        description: "临时抱佛脚，佛有两个脚",
        passive: "所有事件的基础成功率微微提升。",
        active: "自选两次任意类别的事件必定成功。",
        src: getImagePath("tools/4"),
        available: [
            EventCategory.JXPY,
            EventCategory.PYFA,
            EventCategory.CGQY,
            EventCategory.XSTS,
            EventCategory.XSGZ,
            EventCategory.SZTZ,
            EventCategory.XYSJ,
        ],
    },
    {
        name: "小丑面具",
        description: "爱笑的小丑运气一定不会很棒～",
        passive: "所有事件的基础成功率微微下降，所有事件的属性结算微微提高。",
        src: getImagePath("tools/5"),
        available: [],
    },
];
