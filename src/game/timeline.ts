import { SingleRoundContext } from "./context";
import { GameSystem } from "./gamesys";
import { Player } from "./player";
import { RandomPickModule } from "./randompick";

import { Logger } from "@/logger/logger";
export type FixedEventSelector = number | ((player: Player) => number);

export type FixedEventMap = Record<
    number,
    {
        start?: FixedEventSelector[];
        end?: FixedEventSelector[];
    }
>;
const CONSTFixedEvents: FixedEventMap = {
    1: {
        start: [0, 1, 2, 3, 4, 5],
        end: [],
    },
    2: {
        start: [6, 7, 8, 9, 10],
        end: [11],
    },
    3: {
        start: [12, 13, 14],
        end: [
            // 动态选择事件
            (player: Player) => {
                console.log("3-11此时的player主属性", player.mainProp);

                if (player.mainProp === "A") return 15;
                return 16;
            },
        ],
    },
    4: {
        start: [17, 18, 19, 20],
        end: [21, 22, 23],
    },
    5: {
        start: [79, 80, 81, 82],
    },
    6: {
        start: [83, 84, 85],
    },
    7: {
        start: [86],
    },
    8: {},
    9: {
        start: [
            19,
            (player: Player) => {
                console.log("9-2此时的player主属性", player.mainProp);
                if (player.mainProp === "M") return 88;
                return 89;
            },
            90,
        ],
        end: [87, 91, 22],
    },
};

export const RANDOM_EVTNUM_PERYEAR = 7;

export class TimelineModule {
    private eventNextIndexInYear: number = 0; // 表示下一个要进行的活动的index，并不是
    private completedEventIDs: Set<number> = new Set();
    private fixedEvents: FixedEventMap = CONSTFixedEvents;
    private logger: Logger;
    private randpickMod: RandomPickModule;

    constructor(
        private player: Player,
        private gameSys: GameSystem,
    ) {
        this.logger = new Logger("TIMELINE", gameSys.logger.getEnable());
        this.randpickMod = new RandomPickModule(player, gameSys, this);
    }

    // 只能获取学年不能控制学年
    private get year() {
        return this.gameSys.getYear();
    }

    public getNextEvent(ctx: SingleRoundContext): {
        evtID: number;
        indexInYear: number;
        shouldMoveToNextYear: boolean;
        ctx: SingleRoundContext;
    } {
        const current = this.fixedEvents[this.year] || {}; // 从 [0 , maxLength]
        const curIdx = this.eventNextIndexInYear;
        let evtID: number;
        let shouldMoveToNextYear = false;
        const start = current.start ?? [];
        const end = current.end ?? [];
        const maxLength = start.length + RANDOM_EVTNUM_PERYEAR + end.length;

        // 因为eventIndexInYear始终是合法的
        if (this.eventNextIndexInYear < start.length) {
            evtID = this.resolveFixedSelector(start[curIdx]); // start事件
            this.logger.info("执行开始事件", evtID);
        } else if (
            this.eventNextIndexInYear <
            start.length + RANDOM_EVTNUM_PERYEAR
        ) {
            evtID = this.getRandomEventID(); // 随机事件
            this.logger.info("执行随机事件", evtID);
        } else {
            // end事件
            const endIndex = curIdx - start.length - RANDOM_EVTNUM_PERYEAR;
            evtID = this.resolveFixedSelector(end[endIndex]);
            this.logger.info("执行结束事件", evtID);
        }
        this.completedEventIDs.add(evtID);
        this.eventNextIndexInYear++;
        if (this.eventNextIndexInYear >= maxLength) {
            shouldMoveToNextYear = true;
            this.eventNextIndexInYear = 0;
        }

        // 设置上下文
        ctx.currentEvent = this.gameSys.getAllEvents()[evtID];
        return { evtID, indexInYear: curIdx + 1, shouldMoveToNextYear, ctx };
    }

    public getCompletedEventIDs(): Set<number> {
        return this.completedEventIDs;
    }

    private resolveFixedSelector(selector: FixedEventSelector): number {
        if (typeof selector === "function") {
            return selector(this.player);
        }
        return selector;
    }
    private getRandomEventID(): number {
        this.randpickMod.updateAllPools(this.gameSys.getAllEvents());
        const evt = this.randpickMod.pickRandomEvent();
        if (evt === null) {
            this.logger.warn("抽取出了NULL事件,返回CRUSH事件");
            return 77;
        }

        return evt.getID();
    }
}
