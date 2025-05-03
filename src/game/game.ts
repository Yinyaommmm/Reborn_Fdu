import { GameSystem, Player, StandardEvent } from "./type";

import { events as readablEvents } from "@/data/events_loaded";
// import { timeLogger } from "@/game/util";
export class GameModule {
    // @timeLogger 这个竟然是罪魁祸首
    static async gamestart() {
        const standardEvents = readablEvents.map((e) => new StandardEvent(e));
        const player = new Player();
        player.fixedInit();

        const system = new GameSystem(player, standardEvents);
        let s = 0;
        let index = 0;
        while (system.getYear() !== 10) {
            if (s !== system.getYear()) {
                s = system.getYear();
                console.log("---进入" + s + "学年");
            }
            const evtID = system.nextEvt();
            system.resoluteEvt(evtID, "A", index);
            index++;
        }
        console.log("结束", player);
        console.log(system.getEventLog());
    }
}
