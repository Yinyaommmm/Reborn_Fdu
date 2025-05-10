import { FiveProps, GameSystem, StandardEvent } from "@/game/gamesys";
import { Player } from "@/game/player";
interface ProbContext {
    rand: number;
    succProb: number;
}
export interface SingleRoundContext {
    player: Player;
    gameSystem: GameSystem;
    currentEvent?: StandardEvent;
    probContext?: ProbContext; // 结算之前的成功概率
    deltaPropContext?: FiveProps; // 结算之前的影响数值
    happenProbContext?: number; // 事件触发概率
}

export function createEmptyContext(
    player: Player,
    gameSystem: GameSystem,
): SingleRoundContext {
    return {
        player,
        gameSystem,
    };
}
