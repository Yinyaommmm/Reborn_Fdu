import { SingleRoundContext } from "@/game/context";

export interface GameEvent {
    evtID: number;
    indexInYear: number;
    shouldMoveToNextYear: boolean;
    ctx: SingleRoundContext;
}
