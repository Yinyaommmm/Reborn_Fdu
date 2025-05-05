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
        player.mainProp = "M"; // 玩家选择的方向
        const system = new GameSystem(player, standardEvents);
        system.addItem(ItemFactory("Secretary's Letter") as Item);
        // 游戏系统
        while (system.GameContinue) {
            // 先获取下一个活动
            const nextRes = system.nextEvt();
            const shouldJump = system.requiredEvtJump(nextRes.evtID);
            if (!shouldJump) {
                console.log(
                    `${system.getYear()}-${nextRes.indexInYear}`,
                    system.showEvt(nextRes.evtID),
                );
                // 结算，70%概率选A
                const choice = Math.random() < 0.7 ? "A" : "B";
                // const choice = nextRes.evtID === 17 || nextRes.evtID === 18 ? "B" : "A";
                system.resoluteEvt(nextRes.evtID, choice, nextRes.indexInYear);
            }
            //然后再执行时间移动
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
