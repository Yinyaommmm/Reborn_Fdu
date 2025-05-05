// RandomPickModule.ts
import { GameSystem, StandardEvent } from "./gamesys";
import { Player } from "./player";
import { TimelineModule } from "./timeline";
import { EventCategory } from "../type/type";

import { Logger } from "@/logger/logger";

// 培养方案，竞选评优，主属性，非主属性，素质拓展
type EventPoolKey = "pyfa" | "jxpy" | "main" | "nonMain" | "sztz";
export const EventPoolKeyArr: EventPoolKey[] = [
    "pyfa",
    "jxpy",
    "main",
    "nonMain",
    "sztz",
];
type PoolConfig = Record<EventPoolKey, number>;

export class RandomPickModule {
    private player: Player;
    private gameSys: GameSystem;
    private timeline: TimelineModule;
    private pools: Record<EventPoolKey, StandardEvent[]> = {
        pyfa: [],
        jxpy: [],
        main: [],
        nonMain: [],
        sztz: [],
    };
    private logger = new Logger("RANDOMPICK", true);
    private configPerYear: PoolConfig[] = [
        { pyfa: 2, jxpy: 0, main: 2, nonMain: 1, sztz: 2 },
        { pyfa: 2, jxpy: 1, main: 2, nonMain: 1, sztz: 1 },
        { pyfa: 2, jxpy: 1, main: 2, nonMain: 1, sztz: 1 },
        { pyfa: 1, jxpy: 2, main: 2, nonMain: 1, sztz: 1 },

        { pyfa: 2, jxpy: 0, main: 2, nonMain: 1, sztz: 2 },
        { pyfa: 1, jxpy: 1, main: 3, nonMain: 1, sztz: 1 },
        { pyfa: 0, jxpy: 1, main: 3, nonMain: 2, sztz: 1 },
        { pyfa: 0, jxpy: 1, main: 3, nonMain: 2, sztz: 1 },
        { pyfa: 0, jxpy: 2, main: 3, nonMain: 1, sztz: 1 },
    ];
    constructor(player: Player, gameSys: GameSystem, timeline: TimelineModule) {
        this.player = player;
        this.gameSys = gameSys;
        this.timeline = timeline;
    }

    updateAllPools(allEvents: StandardEvent[]) {
        const currentYear = this.gameSys.getYear();
        const completedIDs = new Set(this.timeline.getCompletedEventIDs());
        const playerProps = this.player.props;
        const mainProp = this.player.mainProp;

        // 先清空旧池
        for (const key of Object.keys(this.pools) as EventPoolKey[]) {
            this.pools[key] = [];
        }
        // 筛选满足基本条件的事件
        // 0. 非必选事件
        // 1. 本学期可以发生
        // 2. 满足前置事件需求
        // 3. 满足属性要求
        // 4. 尚未做过
        const filteredEvts = allEvents
            .filter((evt) => !evt.isRequired())
            .filter((evt) => evt.getHappenYear().includes(currentYear))
            .filter((evt) =>
                evt
                    .getPrerequisites()
                    .every((prereq) => completedIDs.has(prereq)),
            )
            .filter((evt) => {
                const req = evt.getRequirement();
                for (const prop of ["H", "L", "A", "C", "M"] as const) {
                    if ((playerProps[prop] ?? 0) < (req[prop] ?? 0)) {
                        return false;
                    }
                }
                return true;
            })
            .filter(
                (evt) =>
                    evt.isRepetable ||
                    !this.timeline.getCompletedEventIDs().has(evt.getID()), //
            );

        for (const evt of filteredEvts) {
            // 满足所有条件，分发入池
            if (evt.getCategory() === EventCategory.PYFA)
                this.pools.pyfa.push(evt);
            if (evt.getCategory() === EventCategory.JXPY)
                this.pools.jxpy.push(evt);
            if (evt.getCategory() === EventCategory.SZTZ)
                this.pools.sztz.push(evt);
            if (evt.getMainProp() === mainProp) this.pools.main.push(evt);
            else this.pools.nonMain.push(evt);
        }
    }

    pickRandomEvent(): StandardEvent | null {
        const year = this.gameSys.getYear();
        const configThisYear = this.configPerYear[year - 1];
        // console.log("CONFIG this year before pick", configThisYear);
        // console.log(this.pools);
        const availablePools: EventPoolKey[] = [];
        for (const key of EventPoolKeyArr) {
            if (configThisYear[key] > 0 && this.pools[key].length > 0) {
                availablePools.push(key);
            }
        }

        if (availablePools.length === 0) {
            this.logger.warn("没有一个池子可以抽取，但是仍要强制抽取");
            return null;
        }

        // 随机选择一个池
        const chosenPoolKey = this.randomPickArr(availablePools);
        const chosenPool = this.pools[chosenPoolKey];
        const pickedEvent = this.weightedRandomPickArr(chosenPool);
        // 更新配置中该池数量，这里不用去动this.pool，因为在外部调用一定会先updateAllpools,会自动更新pool的
        configThisYear[chosenPoolKey]--;
        // console.log("picked", pickedEvent);
        return pickedEvent;
    }

    private randomPickArr<T>(arr: T[]): T {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    private weightedRandomPickArr(poolEvents: StandardEvent[]): StandardEvent {
        // 收集该池子中所有未被选过的二级事件
        const unpicked2ji = poolEvents.filter(
            (evt) => evt.is2ji() && evt.experienceCount === 0,
        );
        const all2jiPicked = unpicked2ji.length === 0; // 所有二级都被挑选了

        const weights = poolEvents.map((evt) => {
            // 二级事件处理
            if (evt.is2ji()) {
                if (!all2jiPicked && evt.experienceCount > 0) {
                    return 0; // 被选过的二级事件在存在未选过的前提下权重为0
                }
                if (all2jiPicked) {
                    evt.setRandIdice(); // 所有二级事件都选过则改变选项，WARNING这里可能会有问题,因为会频繁改变
                }
            }
            // 计算权重：初始为1，乘上3个因子
            const prereqFactor = evt.getPrerequisites().length + 1; // 1 || 2
            const happenYearFactor = Math.max(
                (10 - evt.getHappenYear().length) / 3, // 最大为9/3 = 3
                1,
            ); // 1 ~ 3
            const expFactor = Math.max(3 - evt.experienceCount, 0.25); // 超过3次概率大幅
            return prereqFactor * happenYearFactor * expFactor;
        });

        const totalWeight = weights.reduce((acc, w) => acc + w, 0);
        if (totalWeight === 0) {
            return poolEvents[Math.floor(Math.random() * poolEvents.length)];
        }

        const rand = Math.random() * totalWeight;
        let cumulative = 0;
        for (let i = 0; i < poolEvents.length; i++) {
            cumulative += weights[i];
            if (rand < cumulative) {
                return poolEvents[i];
            }
        }

        return poolEvents[poolEvents.length - 1]; // fallback
    }
}
