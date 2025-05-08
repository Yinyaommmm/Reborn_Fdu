import { GameSystem, StandardEvent } from "./gamesys";
import { Item, ItemFactory } from "./item";
import { Player } from "./player";

import { events as readablEvents } from "@/data/events_loaded";
// import { timeLogger } from "@/game/util";
export class GameModule {
    // @timeLogger 这个竟然是罪魁祸首
    static async gamestart() {
        const standardEvents = readablEvents.map((e) => new StandardEvent(e));
        // 初始化player和system
        const player = new Player();
        player.fixedInit();
        player.mainProp = "A"; // 玩家选择的方向
        const system = new GameSystem(player, standardEvents);
        system.addItem(ItemFactory("Misfortune Certificate") as Item);
        // system.addItem(ItemFactory("Secretary's Letter") as Item);
        // system.addItem(ItemFactory("Academician's Guidebook") as Item);
        // system.addItem(ItemFactory("Thanos Glove") as Item);
        // system.addItem(ItemFactory("Lucky Student ID") as Item);
        // system.addItem(ItemFactory("Buddha Foot") as Item);
        // system.addItem(ItemFactory("Middle Part Pants") as Item);
        console.log("用户装备的所有装备：", system.showAllItem());
        // 游戏系统
        while (system.GameContinue) {
            // 创建一个新的结算上下文
            const ctx = system.createEmptyContext();
            // 获取下一个活动
            const nextRes = system.nextEvt(ctx);
            // 判断该事件是否需要跳过(例如属性要求不满足)
            const shouldJump = system.requiredEvtJump(nextRes.evtID);
            if (!shouldJump) {
                console.log(
                    `${system.getYear()}-${nextRes.indexInYear}`,
                    system.showEvt(nextRes.evtID),
                );
                // 根据用户选择和‘上下文’进行结算，这里模拟使用70%概率选A
                let choice: "A" | "B" = Math.random() < 0.7 ? "A" : "B";
                if (nextRes.evtID % 10 === 7) {
                    choice = "A";
                    // @ts-ignore
                    const useRes = system.useItem("Buddha Foot", nextRes.ctx);
                }
                system.resoluteEvt(
                    nextRes.evtID,
                    choice,
                    nextRes.indexInYear,
                    nextRes.ctx,
                );
            }
            //再执行学年移动
            if (nextRes.shouldMoveToNextYear) {
                system.setYear(system.getYear() + 1);
            }
        }
        console.log("结束", player, "玩家主属性", player.mainProp);
        const count = Array(200).fill(0);
        system.getEventLog().forEach((log) => {
            count[log.evtID]++;
        });
        console.log(
            "这是重复的事件id列表",
            count
                .map((item, idx) => {
                    return {
                        idx,
                        num: item,
                    };
                })
                .filter((c) => c.num >= 2),
        );
        console.log("日志", system.getEventLog());
        console.log("成功高光事件", system.getHighLightLog());
    }
}
