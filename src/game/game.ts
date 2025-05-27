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
        system.addItem(ItemFactory("Misfortune Certificate") as Item);
        // system.addItem(ItemFactory("Skincare Set") as Item);
        // system.addItem(ItemFactory("Secretary's Letter") as Item);
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
            // console.log("使用次数", system.showAllItem()[0].usageLeft);
            if (!shouldJump) {
                console.log(
                    `${system.getYear()}-${nextRes.indexInYear}`,
                    // system.showEvt(nextRes.evtID),
                );
                // 根据用户选择和‘上下文’进行结算，这里模拟使用70%概率选A
                const choice: "A" | "B" = Math.random() < 0.7 ? "A" : "B";
                // const useRes = system.useItem(
                //     "Secretary's Letter",
                //     nextRes.ctx,
                // );
                // console.log(
                //     "道具使用结果",
                //     useRes,
                //     nextRes.ctx.probContext?.succProb,
                // );
                const rsltRes = system.resoluteEvt(
                    nextRes.evtID,
                    choice,
                    nextRes.indexInYear,
                    nextRes.ctx,
                );

                console.log("结算结果", rsltRes);
                console.log("结算详细信息", system.lastContextLog);
                console.log(
                    "事件标题",
                    system
                        .getAllEvents()
                        [nextRes.evtID].forShow(player.gender, system.getYear())
                        .mainText,
                );
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
        console.log("获取结算上下文", system.getContextLog());
        // 二阶段
        console.log("--!!!!进入[自定义]二阶段!!!!--");
        const selfmade_player = new Player({
            H: 60,
            L: 60,
            A: 60,
            C: 60,
            M: 60,
        });
        selfmade_player.eduDestination = "研究生";
        selfmade_player.gradDestination = "辅导员";
        const stage2Sys = new Stage2Sys(selfmade_player);
        stage2Sys.setAllLine();
        stage2Sys.show();
        console.log(stage2Sys.getAll());
    }
}
