import { GameSystem, Player, StandardEvent } from "./type";

import { events as readablEvents } from "@/data/events_loaded";
// import { timeLogger } from "@/game/util";
export class GameModule {
    // @timeLogger 这个竟然是罪魁祸首
    static async gamestart() {
        const standardEvents = readablEvents.map((e) => new StandardEvent(e));
        const player = new Player();
        player.fixedInit();
        player.mainProp = "M";
        const system = new GameSystem(player, standardEvents);
        while (system.getYear() !== 10) {
            // 先获取下一个活动，结算，
            const nextRes = system.nextEvt();
            console.log(`${system.getYear()}-${nextRes.indexInYear}`);
            system.resoluteEvt(nextRes.evtID, "A", nextRes.indexInYear);
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
        console.log(system.getEventLog());
    }
}
