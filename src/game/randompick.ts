// RandomPickModule.ts
import { FixedSizeNumberQueue } from "./fixedarr";
import { GameSystem, StandardEvent } from "./gamesys";
import { Player } from "./player";
import { TimelineModule } from "./timeline";
import { filterEvts, isMainPropEvt, isReverseMainPropEvt } from "./util";
import { EventCategory } from "../type/type";

// import { Logger } from "@/logger/logger";

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
    // private logger = new Logger("RANDOMPICK", true);
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
    private lastFiveEvtIDs: FixedSizeNumberQueue = new FixedSizeNumberQueue(8);
    constructor(player: Player, gameSys: GameSystem, timeline: TimelineModule) {
        this.player = player;
        this.gameSys = gameSys;
        this.timeline = timeline;
    }

    updateAllPools(allEvents: StandardEvent[]) {
        const currentYear = this.gameSys.getYear();
        // const completedIDs = new Set(this.timeline.getChosedEventIDs());
        const completedIDs = this.timeline.succEventIDs; // 现在是选过并且成功了的事件
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
        // 5. 不是两个幸运事件
        // 6. 不是出国读研
        const filteredEvts = filterEvts(
            allEvents,
            currentYear,
            completedIDs,
            playerProps,
            this.timeline,
            false,
        );

        const solelyEvts = [];
        for (const evt of filteredEvts) {
            // 满足所有条件，分发入池，优先满足主属性、竞选评优、非主属性
            if (isMainPropEvt(evt, mainProp)) this.pools.main.push(evt);
            else if (evt.getCategory() === EventCategory.JXPY)
                this.pools.jxpy.push(evt);
            else if (isReverseMainPropEvt(evt, mainProp))
                this.pools.nonMain.push(evt);
            else if (evt.getCategory() === EventCategory.PYFA)
                this.pools.pyfa.push(evt);
            else if (evt.getCategory() === EventCategory.SZTZ)
                this.pools.sztz.push(evt);
            // else this.pools.nonMain.push(evt);  // nonmain事件是随意一个事件
            else {
                solelyEvts.push({
                    id: evt.getID(),
                    title: evt.getTitle(),
                    category: evt.getCategory(),
                    isMain: evt.getMainProp() === mainProp,
                    isReverseMain: isReverseMainPropEvt(evt, mainProp),
                });
            }
        }
        if (solelyEvts.length !== 0)
            console.log("不属于任何一个池子事件们", solelyEvts, "");
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
            // this.logger.warn("没有一个池子可以抽取，但是仍要强制抽取");
            // let s = "此时还剩余需求(池子中数量/还需要的数量)：";
            // for (const key of EventPoolKeyArr) {
            //     s += `${configThisYear[key] > 0 ? "【警告】" : ""}${key}事件${this.pools[key].length}/${configThisYear[key]}   `;
            // }
            // console.warn(s);
            // console.log("最近至多8次有效的抽取事件ID:");
            // this.lastFiveEvtIDs.print();

            return null;
        }

        // 随机选择一个池
        const chosenPoolKey = this.randomPickArr(availablePools);
        const chosenPool = this.pools[chosenPoolKey];
        const pickedEvent = this.weightedRandomPickArr(
            chosenPool,
            chosenPoolKey,
        );
        // 更新配置中该池数量，这里不用去动this.pool，因为在外部调用一定会先updateAllpools,会自动更新pool的
        configThisYear[chosenPoolKey]--;
        this.lastFiveEvtIDs.enqueue(pickedEvent.getID());
        // console.log("picked", pickedEvent);
        return pickedEvent;
    }

    private randomPickArr<T>(arr: T[]): T {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    private weightedRandomPickArr(
        poolEvents: StandardEvent[],
        poolKey: EventPoolKey,
    ): StandardEvent {
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
            const expFactor = Math.max(2 - evt.experienceCount, 0.01); // 超过3次概率大幅
            const recent5Factor = this.lastFiveEvtIDs.isInQueue(evt.getID())
                ? 0.001
                : 1;
            return prereqFactor * happenYearFactor * expFactor * recent5Factor;
        });
        const totalWeight = weights.reduce((acc, w) => acc + w, 0);
        if (totalWeight === 0) {
            console.warn("不应该走到这里");
            return poolEvents[Math.floor(Math.random() * poolEvents.length)];
        }

        const rand = Math.random() * totalWeight;

        let cumulative = 0;
        let finalEvt: StandardEvent;
        for (let i = 0; i < poolEvents.length; i++) {
            cumulative += weights[i];
            if (rand <= cumulative) {
                finalEvt = poolEvents[i];
                break;
            }
        }
        if (this.lastFiveEvtIDs.isInQueue(finalEvt!.getID())) {
            console.warn(
                `与最近5次产生了重复但是还选${finalEvt!.getID()}，当前池子${poolKey},rand/totalWeight: ${rand}/${totalWeight}具有的事件👉`,
                poolEvents.map((item, index) => ({
                    id: item.getID(),
                    title: item.getTitle(),
                    factor: weights[index],
                })),
            );
        }
        return finalEvt!; // fallback
    }
    public printLastFive() {
        this.lastFiveEvtIDs.print();
    }
}
