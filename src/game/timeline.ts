import { SingleRoundContext } from "./context";
import { GameSystem } from "./gamesys";
import { Player } from "./player";
import { RandomPickModule } from "./randompick";
import { didMeetRequireProps } from "./util";

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
    private chosedEventIDs: Set<number> = new Set(); // 被选择过的事件
    public succEventIDs: Set<number> = new Set(); // 成功的事件
    private fixedEvents: FixedEventMap = CONSTFixedEvents;
    private logger: Logger;
    private randpickMod: RandomPickModule;
    private luckyYear = new Map<number, number>();
    public luckHappenProb = 0.2;

    constructor(
        private player: Player,
        private gameSys: GameSystem,
    ) {
        // this.logger = new Logger("TIMELINE", gameSys.logger.getEnable());
        this.logger = new Logger("TIMELINE", true);
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
        // 学年初是否发生幸运事件77的判定
        this.luckeyEventSet(this.year);

        const current = this.fixedEvents[this.year] || {}; // 从 [0 , maxLength]
        const curIdx = this.eventNextIndexInYear;
        let evtID: number;
        let shouldMoveToNextYear = false;
        const start = current.start ?? [];
        const end = current.end ?? [];
        const luckHappen =
            this.luckyYear.get(this.year) === 77 ||
            this.luckyYear.get(this.year) === 78
                ? 1
                : 0;
        const maxLength =
            start.length + RANDOM_EVTNUM_PERYEAR + end.length + luckHappen;
        // 因为eventIndexInYear始终是合法的
        if (this.eventNextIndexInYear < start.length) {
            evtID = this.resolveFixedSelector(start[curIdx]); // start事件
            this.logger.info("执行开始事件", evtID);
        } else if (
            this.eventNextIndexInYear <
            start.length + RANDOM_EVTNUM_PERYEAR
        ) {
            evtID = this.getRandomEventID(); // 随机事件
            this.logger.info("抽取随机事件", evtID);
        } else if (
            this.eventNextIndexInYear <
            start.length + RANDOM_EVTNUM_PERYEAR + end.length
        ) {
            // end事件
            const endIndex = curIdx - start.length - RANDOM_EVTNUM_PERYEAR;
            evtID = this.resolveFixedSelector(end[endIndex]);
            this.logger.info("执行结束事件", evtID);
        } else {
            evtID = this.luckyYear.get(this.year) as 77 | 78;
            this.logger.info("执行幸运事件", evtID);
        }
        this.chosedEventIDs.add(evtID);
        this.eventNextIndexInYear++;
        // console.log(
        //     "当前事件",
        //     evtID,
        //     "当前事件索引",
        //     curIdx,
        //     "eventNextIndexInYear",
        //     this.eventNextIndexInYear,
        //     "maxLength",
        //     maxLength,
        // );

        if (this.eventNextIndexInYear >= maxLength) {
            shouldMoveToNextYear = true;
            this.eventNextIndexInYear = 0;
        }

        // 设置上下文里的当前事件
        ctx.currentEvent = this.gameSys.getAllEvents()[evtID];
        return { evtID, indexInYear: curIdx + 1, shouldMoveToNextYear, ctx };
    }

    public getChosedEventIDs(): Set<number> {
        return this.chosedEventIDs;
    }
    public getSuccEventIDs(): Set<number> {
        return this.succEventIDs;
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
            this.logger.warn("抽取出了NULL事件,返回出国读研事件");
            return 65;
        }
        return evt.getID();
    }

    private luckeyEventSet(curYear: number) {
        if (this.succEventIDs.has(77) && this.succEventIDs.has(78)) return;
        const happenProb = this.luckHappenProb;
        if (!this.succEventIDs.has(77)) {
            // 只在学年开头判断是否有事件
            if (this.luckyYear.get(this.year) !== undefined) {
                return;
            }
            // 尚未完成77
            const luck77 = this.gameSys.getAllEvents()[77];
            const meetProp = didMeetRequireProps(
                luck77,
                this.player.props,
                this.logger,
            );
            const correctYear = [1, 2, 3, 5, 6, 7, 8].includes(curYear); // 年份保证
            const luckProb = Math.random() <= happenProb;
            if (meetProp && correctYear && luckProb) {
                this.luckyYear.set(this.year, 77);
                this.logger.info(`!!! 第${this.year}年可以触发幸运事件77`);
            } else {
                this.luckyYear.set(this.year, -1);
                this.logger.info(
                    `!!! 第${this.year}年幸运事件77无法触发, meetprop:${meetProp},luckProb:${luckProb}`,
                );
            }
        } else {
            // 只在学年开头判断是否有事件
            if (this.luckyYear.get(this.year) !== undefined) {
                return;
            }
            // 尚未完成78
            const luck78 = this.gameSys.getAllEvents()[78];
            const meetProp = didMeetRequireProps(
                luck78,
                this.player.props,
                this.logger,
            );
            const correctYear = [4, 9].includes(curYear); // 年份保证
            const luckProb = Math.random() <= happenProb;
            if (meetProp && correctYear && luckProb) {
                this.luckyYear.set(this.year, 78);
                this.logger.info(`!!! 第${this.year}年可以触发幸运事件78`);
            } else {
                this.luckyYear.set(this.year, -1);
                this.logger.info(
                    `!!! 第${this.year}年幸运事件78无法触发，meetprop:${meetProp},luckProb:${luckProb}`,
                );
            }
        }
    }
    public lastFiveRandomEvt() {
        this.randpickMod.printLastFive();
    }
}
