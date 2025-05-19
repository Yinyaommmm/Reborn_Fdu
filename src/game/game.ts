import { GameSystem, StandardEvent } from "./gamesys";
import { Item, ItemFactory } from "./item";
import { Player } from "./player";

import { events as readablEvents } from "@/data/events_loaded";
import { Stage2Sys } from "@/stage2/stage2";
// import { timeLogger } from "@/game/util";
export class GameModule {
    // @timeLogger 这个竟然是罪魁祸首
    static async gamestart() {
        const standardEvents = readablEvents.map((e) => new StandardEvent(e));
        // 初始化player和system
        const player = new Player();
        player.randomInit(player.props, 50);
        player.mainProp = "A"; // 玩家选择的方向
        const system = new GameSystem(player, standardEvents);
        // system.addItem(ItemFactory("Skincare Set") as Item);
        system.addItem(ItemFactory("Secretary's Letter") as Item);
        // system.addItem(ItemFactory("Academician's Guidebook") as Item);
        // system.addItem(ItemFactory("Thanos Glove") as Item);
        // system.addItem(ItemFactory("Lucky Student ID") as Item);
        // system.addItem(ItemFactory("Buddha Foot") as Item);
        // system.addItem(ItemFactory("Middle Part Pants") as Item);
        console.log("用户装备的所有装备：", system.showAllItem());
        // 游戏系统
        while (system.GameContinue) {
            // 创建一个新的结算上下文
            const ctx = system.createEmptyContext();
            // 获取下一个活动
            const nextRes = system.nextEvt(ctx);
            // 判断该事件是否需要跳过(例如属性要求不满足)
            const shouldJump = system.requiredEvtJump(nextRes.evtID);
            console.log("使用次数", system.showAllItem()[0].usageLeft);
            if (!shouldJump) {
                console.log(
                    `${system.getYear()}-${nextRes.indexInYear}`,
                    // system.showEvt(nextRes.evtID),
                );
                // 根据用户选择和‘上下文’进行结算，这里模拟使用70%概率选A
                const choice: "A" | "B" = Math.random() < 1 ? "A" : "B";
                const useRes = system.useItem(
                    "Secretary's Letter",
                    nextRes.ctx,
                );
                console.log(
                    "道具使用结果",
                    useRes,
                    nextRes.ctx.probContext?.succProb,
                );
                // const unuseRes = system.unUseItem(
                //     "Buddha Foot",
                //     nextRes.ctx,
                // );
                // console.log(
                //     "佛脚撤销结果",
                //     unuseRes,
                //     nextRes.ctx.probContext?.succProb,
                // );

                const rsltRes = system.resoluteEvt(
                    nextRes.evtID,
                    choice,
                    nextRes.indexInYear,
                    nextRes.ctx,
                );
                if (nextRes.evtID === 77 || nextRes.evtID === 78)
                    console.log(rsltRes);
            }
            //再执行学年移动
            if (nextRes.shouldMoveToNextYear) {
                system.setYear(system.getYear() + 1);
            }
        }
        console.log("结束", player, "玩家主属性", player.mainProp);
        const count = Array(200).fill(0);
        system.getEventLog().forEach((log) => {
            count[log.evtID]++;
        });
        console.log(
            "这是重复发生随机事件的id列表",
            count
                .map((item, idx) => {
                    return {
                        idx,
                        num: item,
                        required:
                            system.getAllEvents()[idx]?.isRequired() ?? true,
                    };
                })
                .filter((c) => c.num >= 2 && c.required === false),
        );
        console.log("日志", system.getEventLog());
        console.log("成功高光事件", system.getHighLightLog());
        console.log("全部事件", system.getAllEvents());

        // 二阶段
        console.log("--!!!!进入二阶段!!!!--");
        const stage2Sys = new Stage2Sys(player);
        stage2Sys.setAllLine();
        console.log(stage2Sys.show());
        console.log(stage2Sys.getAll());
    }
}
