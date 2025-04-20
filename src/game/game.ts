import { GameSystem, Player, StandardEvent } from "./type";

import { timeLogger } from "@/game/util";
import { ReadExcelFromPublic } from "@/load/read";
export class GameModule {
    @timeLogger
    static async gamestart() {
        const readablEvents = await ReadExcelFromPublic();
        const standardEvents = readablEvents.map((e) => new StandardEvent(e));
        const player = new Player();
        player.fixedInit();

        const system = new GameSystem(player, standardEvents);
        system.setYear(5);
        const evtId = 71;
        console.log("--------------");
        console.log(system);
        console.log("系统年份" + system.getYear());
        console.log("人属性", player.getElectionBuff());
        console.log(
            "事件" + evtId + "结果结算",
            system.resoluteEvent(evtId, "F"),
        );
        console.log("人属性", player.getElectionBuff());
        console.log(
            "事件" + evtId + "结果结算",
            system.caclEventResultType(evtId),
        );
    }
}
