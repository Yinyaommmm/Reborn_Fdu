import { GameSystem, Player, StandardEvent } from "./type";

import { events as readablEvents } from "@/data/events_loaded";
import { timeLogger } from "@/game/util";
export class GameModule {
    @timeLogger
    static async gamestart() {
        const standardEvents = readablEvents.map((e) => new StandardEvent(e));
        const player = new Player();
        player.fixedInit();

        const system = new GameSystem(player, standardEvents);
        system.setYear(5);
        const evtId = 3;
        console.log("--------------");
        console.log("记录日志", system.resoluteEvt(evtId, "A", 1));
        console.log("记录日志", system.resoluteEvt(4, "B", 2));
        console.log("记录日志", system.resoluteEvt(5, "A", 3));
        console.log("记录日志", system.getEventLog());
    }
}
