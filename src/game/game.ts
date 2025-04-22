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
        const evtId = 1;
        console.log("--------------");
        console.log(system);
        console.log("系统年份" + system.getYear());
        console.log("人属性", player.props);
        console.log(
            "事件" + evtId + " resoluteEvent_ChoiceA结果结算",
            system.resoluteEvent_ChoiceA(evtId, {
                succProb: 0.5,
                rand: 0.8,
                resType: "F",
            }),
        );
    }
}
