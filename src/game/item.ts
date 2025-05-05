// item.ts

import { FiveProps, GameSystem, StandardEvent } from "./gamesys";
import { Player } from "./player";

import { Logger } from "@/logger/logger";
import { EventCategory } from "@/type/type";

export interface ItemEffectContext {
    player: Player;
    gameSystem: GameSystem;
    currentEvent?: StandardEvent;
    probContext?: number; // 结算之前的成功概率
    deltaPropContext?: FiveProps; // 结算之前的影响数值
}

export type PassiveEffect = (context: ItemEffectContext) => void;
export type ActiveEffect = (context: ItemEffectContext) => void;

export interface Item {
    id: ItemID;
    name: string;
    description: string;
    passiveEffect?: PassiveEffect;
    activeEffect?: ActiveEffect;
    usageLeft: number; // 使用次数
}

export class ItemManager {
    private items: Item[];
    private logger: Logger = new Logger("ITEM MANAGER", true);
    constructor(items: Item[] = []) {
        this.items = items;
    }

    getAllItems(): Item[] {
        return this.items;
    }

    applyPassiveEffects(context: ItemEffectContext) {
        for (const item of this.items) {
            if (item.passiveEffect && item.usageLeft > 0) {
                item.passiveEffect(context);
            }
        }
    }

    useItem(id: ItemID, context: ItemEffectContext): boolean {
        const item = this.items.find((i) => i.id === id);
        if (item && item.activeEffect && item.usageLeft > 0) {
            item.activeEffect(context);
            item.usageLeft--;
            if (item.usageLeft <= 0) {
                this.items = this.items.filter((i) => i.id !== id);
            }
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
        }
        this.logger.info("因为重复，加入物品失败", item.name);
    }
}

export type ItemID = "Secretary's Letter" | "Academician's Guidebook";

export class SecretaryLetter implements Item {
    id: ItemID = "Secretary's Letter";
    name = "书记回信";
    description = "书记对学生工作的高度肯定";
    passiveEffect = (ctx: ItemEffectContext) => {
        if (ctx.currentEvent === undefined || ctx.probContext === undefined)
            return ctx;
        if (ctx.currentEvent.getCategory() === EventCategory.XSGZ) {
            const before = ctx.probContext;
            ctx.probContext = Math.min(1, ctx.probContext + 0.05);
            console.log(
                "书记回信被动触发",
                ctx.currentEvent.getID(),
                before,
                "/",
                ctx.probContext,
            );
        }
        return ctx;
    };
    activeEffect = (ctx: ItemEffectContext) => {
        if (
            ctx.currentEvent === undefined ||
            ctx.probContext === undefined ||
            this.usageLeft === 0
        )
            return ctx;
        if (ctx.currentEvent.getCategory() === EventCategory.XSGZ) {
            ctx.probContext = 1;
        }
    };
    usageLeft = 1;
}

export function ItemFactory(id: ItemID) {
    if (id === "Secretary's Letter") {
        return new SecretaryLetter();
    } else {
        return null;
    }
}
