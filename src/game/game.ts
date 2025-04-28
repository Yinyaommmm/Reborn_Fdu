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
        const evtId = 49;
        console.log("--------------");
        console.log(system);
        console.log("系统年份" + system.getYear());
        console.log("人属性", player.props);
        console.log("事件" + evtId + " choose b", system.chooseB(evtId));
    }
}
