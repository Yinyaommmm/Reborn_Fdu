import { Player, GameSystem, StandardEvent } from "./type";

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
        start: [1, 2, 3, 4, 5, 6],
        end: [],
    },
    2: {
        start: [7, 8, 9, 10, 11],
        end: [12],
    },
    3: {
        start: [13, 14, 15],
        end: [
            // 动态选择事件
            (player: Player) => {
                console.log(
                    "3-8此时的player",
                    "A" + player.props.A,
                    "M",
                    player.props.M,
                );
                if (player.props.A > player.props.M) return 16;
                return 17;
            },
        ],
    },
    4: {
        start: [18, 19, 20, 21],
        end: [22, 23, 24],
    },
    5: {
        start: [80, 81, 82, 83],
    },
    6: {
        start: [84, 85, 86],
    },
    7: {
        start: [87],
    },
    8: {},
    9: {
        start: [
            20,
            (player: Player) => {
                console.log(
                    "9-2此时的player",
                    "A" + player.props.A,
                    "M",
                    player.props.M,
                );
                if (player.props.A > player.props.M) return 89;
                return 90;
            },
            91,
        ],
        end: [88, 92, 23],
    },
};
const RANDOM_EVTNUM_PERYEAR = 7;

export class TimelineModule {
    private eventIndexInYear: number = 0; // 进行到当前学年的哪一个活动了？
    private completedEventIDs: Set<number> = new Set();
    private fixedEvents: FixedEventMap = CONSTFixedEvents;
    private logger: Logger;

    constructor(
        private allEvents: StandardEvent[],
        private player: Player,
        private gameSys: GameSystem,
    ) {
        this.logger = new Logger("TIMELINE", gameSys.logger.getEnable());
    }

    private get year() {
        return this.gameSys.getYear();
    }
    private set year(newYear: number) {
        this.gameSys.setYear(newYear);
    }
    public getNextEventID(): number {
        const current = this.fixedEvents[this.year] || {};
        const index = this.eventIndexInYear;
        let evtID: number;

        const start = current.start ?? [];
        const end = current.end ?? [];

        if (this.eventIndexInYear < start.length) {
            evtID = this.resolveFixedSelector(start[index]); // start事件
            this.logger.info("执行开始事件", evtID);
        } else if (
            this.eventIndexInYear <
            start.length + RANDOM_EVTNUM_PERYEAR
        ) {
            evtID = this.getRandomEventID(); // 随机事件
            this.logger.info("执行随机事件", evtID);
        } else {
            // end事件
            const endIndex =
                this.eventIndexInYear - start.length - RANDOM_EVTNUM_PERYEAR;
            evtID = this.resolveFixedSelector(end[endIndex]);
            this.logger.info("执行结束事件", evtID);
        }
        this.completedEventIDs.add(evtID);
        this.eventIndexInYear++;

        // 重置新一年的事件游标
        if (
            this.eventIndexInYear >=
            start.length + RANDOM_EVTNUM_PERYEAR + end.length
        ) {
            this.year++;
            this.eventIndexInYear = 0;
        }

        return evtID;
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
        // 示例：根据属性做加权抽取，TODO: 替换为真实逻辑
        return Math.floor(Math.random() * this.allEvents.length);
    }
}
