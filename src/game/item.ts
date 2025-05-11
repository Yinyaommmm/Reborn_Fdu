// item.ts

import { SingleRoundContext } from "./context";
import { StandardEvent } from "./gamesys";
import { TimelineModule } from "./timeline";

import { Logger } from "@/logger/logger";
import { EventCategory } from "@/type/type";

export type ProbPassiveEffect = (context: SingleRoundContext) => void;
export type AttrPassiveEffect = (context: SingleRoundContext) => void;
export type ActiveEffect = (context: SingleRoundContext) => void;
export type happenEffect = (timeLineMod: TimelineModule) => void;

export interface Item {
    id: ItemID;
    name: string;
    description: string;
    logger: Logger;

    // 概率相关的被动效果（如提升/降低成功率）
    probPassiveEffect?: ProbPassiveEffect;

    // 属性结算相关的被动效果（如属性加成）
    attrPassiveEffect?: AttrPassiveEffect;

    // 事件出现概率的被动效果
    happenPassiveEffect?: happenEffect;

    // 主动效果,反正现在都是修改属性的，就不动了
    activeEffect?: ActiveEffect;

    usageLeft: number;
}
export abstract class SimpleItem implements Item {
    abstract id: ItemID;
    abstract name: string;
    abstract description: string;
    usageLeft: number = 0;
    protected hasActiveEffect: boolean = true;

    protected passiveBoost: number = 0;
    protected activeBoost: number = 1;
    protected targetCategories: EventCategory[] = [];
    public logger = new Logger("SIMPLE ITEM", false);

    probPassiveEffect = (ctx: SingleRoundContext): SingleRoundContext => {
        if (!ctx.currentEvent || !ctx.probContext) return ctx;
        if (this.matchesCategory(ctx.currentEvent)) {
            const before = ctx.probContext.succProb;
            ctx.probContext.succProb += this.passiveBoost;
            console.log(
                `${this.name} 被动触发, 事件 ${ctx.currentEvent.getID()} 的成功阈值: ${before} -> ${ctx.probContext.succProb}`,
            );
        }
        return ctx;
    };

    activeEffect = (ctx: SingleRoundContext): SingleRoundContext => {
        if (!this.hasActiveEffect || !ctx.currentEvent || this.usageLeft <= 0)
            return ctx;

        if (!ctx.probContext) {
            ctx.probContext = { succProb: 0, rand: 0 };
        }

        if (this.matchesCategory(ctx.currentEvent)) {
            const before = ctx.probContext.succProb;
            ctx.probContext.succProb = Math.min(
                1,
                ctx.probContext.succProb + this.activeBoost,
            );
            console.log(
                `${this.name} 主动触发, 事件 ${ctx.currentEvent.getID()} 的成功阈值: ${before} -> ${ctx.probContext.succProb}`,
            );
            this.usageLeft -= 1;
        }

        return ctx;
    };

    protected matchesCategory(event: StandardEvent): boolean {
        return this.targetCategories.includes(event.getCategory());
    }
}

export type ItemID =
    | "Secretary's Letter"
    | "Academician's Guidebook"
    | "Thanos Glove"
    | "Lucky Student ID"
    | "Buddha Foot"
    | "Middle Part Pants"
    | "Misfortune Certificate"
    | "Skincare Set";

export class SecretaryLetter extends SimpleItem {
    id: ItemID = "Secretary's Letter";
    name = "书记回信";
    description = "书记对学生工作的高度肯定";
    protected passiveBoost = 0.05;
    protected activeBoost = 1;
    protected targetCategories = [EventCategory.XSGZ];
}

export class AcademicianGuidebook extends SimpleItem {
    id: ItemID = "Academician's Guidebook";
    name = "院士宝典";
    description = "校长亲传的顶刊论文法宝";
    protected passiveBoost = 0.05;
    protected activeBoost = 1;
    protected targetCategories = [EventCategory.XSTS];
}
export class ThanosGlove extends SimpleItem {
    id: ItemID = "Thanos Glove";
    name = "灭霸手套";
    description = "打个响指淘汰一半对手";
    protected passiveBoost = 0.05;
    protected activeBoost = 1;
    protected targetCategories = [EventCategory.JXPY];
}

export class LuckyStudentID extends SimpleItem {
    id: ItemID = "Lucky Student ID";
    name = "同花顺学号";
    description = "学号20256789堪称F大天选之子";
    protected passiveBoost = 0.05;
    protected activeBoost = 1;
    protected targetCategories = [EventCategory.PYFA];
}
export class BuddhaFoot extends SimpleItem {
    id: ItemID = "Buddha Foot";
    name = "佛脚";
    description = "临时抱佛脚，佛有两个脚";
    protected passiveBoost = 0.02;
    protected activeBoost = 1;
    protected targetCategories = [
        EventCategory.PYFA,
        EventCategory.CGQY,
        EventCategory.JXPY,
        EventCategory.XSTS,
        EventCategory.XSGZ,
        EventCategory.SZTZ,
        EventCategory.XYSJ,
    ];
    usageLeft = 2; // 使用两次
}

export class MiddlePartPants extends SimpleItem {
    id: ItemID = "Middle Part Pants";
    name = "中分背带裤";
    description = "凭借《哎呦TA干嘛》火爆F大的明星套装";
    protected passiveBoost = 1;
    protected targetCategories = [EventCategory.SZTZ];
    protected hasActiveEffect = false;
}

export class MisfortuneCertificate implements Item {
    id: ItemID = "Misfortune Certificate";
    name = "非酋证书";
    description = "人非命不非，西边不亮东边亮～";
    usageLeft = 0; // 无主动使用效果
    logger: Logger = new Logger("非酋证书", false);

    // 概率阶段：所有事件成功率 -2%
    probPassiveEffect = (ctx: SingleRoundContext): void => {
        if (ctx.probContext === undefined) {
            ctx.probContext = {
                succProb: -0.02,
                rand: 0,
            };
            this.logger.info(
                `被动触发【设置初始probcontext】：成功率 ${ctx.probContext.succProb}`,
            );
            return;
        }
        if (ctx.probContext) {
            const before = ctx.probContext.succProb;
            ctx.probContext.succProb = before - 0.02;
            this.logger.info(
                `被动触发：成功率 ${before} → ${ctx.probContext.succProb}`,
            );
        }
    };

    // 属性结算阶段：所有属性 +0.2，受属性上限限制
    attrPassiveEffect = (ctx: SingleRoundContext): void => {
        if (ctx.deltaPropContext === undefined) {
            ctx.deltaPropContext = {
                H: 0.2,
                L: 0.2,
                A: 0.2,
                C: 0.2,
                M: 0.2,
            };
            const cd = ctx.deltaPropContext;
            this.logger.info(
                `被动触发【设置初始attrcontext】: `,
                cd.H,
                cd.L,
                cd.A,
                cd.C,
                cd.M,
            );
            return;
        }
        const { H, L, A, C, M } = ctx.deltaPropContext;
        ctx.deltaPropContext.H += 0.2;
        ctx.deltaPropContext.L += 0.2;
        ctx.deltaPropContext.A += 0.2;
        ctx.deltaPropContext.C += 0.2;
        ctx.deltaPropContext.M += 0.2;
        this.logger.info(
            `被动触发：属性H ${H}->${ctx.deltaPropContext.H} 属性L ${L}->${ctx.deltaPropContext.L} 
                属性A ${A}->${ctx.deltaPropContext.A} 属性C ${C}->${ctx.deltaPropContext.C} 属性M ${M}->${ctx.deltaPropContext.M}`,
        );
    };
}
export class SkincareSet implements Item {
    id: ItemID = "Skincare Set";
    name = "护肤套装";
    description = "老西红柿力荐的F大泉眼神仙水";
    usageLeft = 0; // 无主动使用效果
    logger: Logger = new Logger("护肤套装", true);

    // 概率阶段：所有事件成功率 -2%
    probPassiveEffect = (ctx: SingleRoundContext): void => {
        if (ctx.currentEvent === undefined) return;
        if (ctx.probContext === undefined) {
            ctx.probContext = {
                succProb: 0,
                rand: 0,
            };
            this.logger.info(
                `被动触发【设置初始probcontext】：成功率 ${ctx.probContext.succProb}`,
            );
            return;
        }
        if (
            ctx.probContext &&
            ctx.currentEvent.getCategory() === EventCategory.XYSJ
        ) {
            const before = ctx.probContext.succProb;
            ctx.probContext.succProb = before + 1;
            this.logger.info(
                `被动触发：成功率 ${before} → ${ctx.probContext.succProb}`,
            );
        }
    };

    happenPassiveEffect = (timeLineMod: TimelineModule): void => {
        timeLineMod.luckHappenProb = 1;
    };
}

export function ItemFactory(id: ItemID): Item | null {
    switch (id) {
        case "Secretary's Letter":
            return new SecretaryLetter();
        case "Academician's Guidebook":
            return new AcademicianGuidebook();
        case "Thanos Glove":
            return new ThanosGlove();
        case "Lucky Student ID":
            return new LuckyStudentID();
        case "Buddha Foot":
            return new BuddhaFoot();
        case "Middle Part Pants":
            return new MiddlePartPants();
        case "Misfortune Certificate":
            return new MisfortuneCertificate();
        case "Skincare Set":
            return new SkincareSet();
        default:
            return null;
    }
}
export class ItemManager {
    private items: Item[];
    private logger: Logger = new Logger("ITEM MANAGER", false);
    constructor(items: Item[] = []) {
        this.items = items;
    }

    getAllItems(): Item[] {
        return this.items;
    }

    applyProbPassiveEffects(context: SingleRoundContext) {
        for (const item of this.items) {
            if (item.probPassiveEffect) {
                item.probPassiveEffect(context);
            }
        }
    }
    applyHappenPassiveEffects(timeLineMod: TimelineModule) {
        for (const item of this.items) {
            if (item.happenPassiveEffect) {
                item.happenPassiveEffect(timeLineMod);
            }
        }
    }
    applyAttrPassiveEffects(context: SingleRoundContext) {
        for (const item of this.items) {
            if (item.attrPassiveEffect) {
                item.attrPassiveEffect(context);
            }
        }
    }

    useItem(id: ItemID, context: SingleRoundContext): boolean {
        const item = this.items.find((i) => i.id === id);
        if (item && item.activeEffect && item.usageLeft > 0) {
            item.activeEffect(context);
            return true;
        }
        return false;
    }
    hasItem(id: ItemID): boolean {
        return this.items.find((i) => i.id === id) ? true : false;
    }

    addItem(item: Item) {
        if (!this.hasItem(item.id)) {
            this.items.push(item);
            this.logger.info("成功加入物品", item.name);
        } else {
            this.logger.info("因为重复，加入物品" + item.name + "失败");
        }
    }
}
