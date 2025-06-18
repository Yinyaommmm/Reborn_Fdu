import { FC, useEffect, useState } from "react";

import { ContextLog, FiveProps, FivePropsRange } from "@/game/gamesys";
import { gameModule } from "@/packages/game-module";
import { $Data } from "@/store/data";
import { $Debug } from "@/store/debug";

const fiveProps2string = (v: FiveProps | undefined) => {
    if (v === undefined) return "无";
    return `H: ${v.H.toFixed(2)} L: ${v.L.toFixed(2)} A: ${v.A.toFixed(2)} C: ${v.C.toFixed(2)} M: ${v.M.toFixed(2)}`;
};
const fivePropsRange2string = (v: FivePropsRange | undefined) => {
    if (v === undefined) return "无";
    return `H: ${v.H[0]}~${v.H[1]} L: ${v.L[0]}~${v.L[1]} A: ${v.A[0]}~${v.A[1]} C: ${v.C[0]}~${v.C[1]} M: ${v.M[0]}~${v.M[1]}`;
};

export const Debug: FC = () => {
    const debug = $Debug.use((state) => state.isDebug);
    const cards = $Data.use((state) => state.cards);
    const [debugInfo, setDebugInfo] = useState<ContextLog | undefined>(
        undefined,
    );

    useEffect(() => {
        setDebugInfo(gameModule.debug());
    }, [cards]);

    if (!debug) return <></>;

    return (
        <div className="fixed top-0 left-0 bg-amber-100 opacity-70 text-xs pointer-events-none z-[99999] font-bold">
            <div>事件ID: {debugInfo?.evtID}</div>
            <div>事件标题: {debugInfo?.evtTitle}</div>
            <div>
                事件基础概率+考虑进阶影响后的成功概率:{" "}
                {debugInfo?.baseAndUpgrade_prob}
            </div>
            <div>
                人物H L 和主属性对成功概率加成:{" "}
                {debugInfo?.HLAndMainpropEffect_prob?.toFixed(2)}
            </div>
            <div>
                由于下次一定，从而在第二次选举具有的buff:{" "}
                {debugInfo?.electionBuff}
            </div>
            <div>保研百分百事件产生的buff: {debugInfo?.mustbePostGraduate}</div>
            <div>
                没有装备被动影响的成功概率（但会有主动技能的影响）:{" "}
                {debugInfo?.succProbWithoutItemPassive}
            </div>
            <div>
                考虑了装备被动后的成功概率，也会有主动技能的影响:{" "}
                {debugInfo?.succProbAfterItemPassive}
            </div>
            <div>随机数: {debugInfo?.rand}</div>
            <div>经过clamp后的成功概率: {debugInfo?.succProbFinalClamped}</div>
            <div>选项结果: {debugInfo?.resType}</div>
            <div>玩家选择: {debugInfo?.playerChoice}</div>
            <div>
                被动对属性变更的影响:{" "}
                {fiveProps2string(debugInfo?.changeProp.itemPassiveContribute)}
            </div>
            <div>
                事件本身对属性变更的影响:{" "}
                {fiveProps2string(debugInfo?.changeProp.evtOriginContribute)}
            </div>
            <div>
                属性改变范围:{" "}
                {fivePropsRange2string(debugInfo?.changeProp.rangeLimit)}
            </div>
            <div>
                最终影响(Clamp之后):{" "}
                {fiveProps2string(debugInfo?.changeProp.finallyClampContribute)}
            </div>
            <div>
                真·最终(系数微调):{" "}
                {fiveProps2string(debugInfo?.changeProp.finetuneEvtContribute)}
            </div>

            <div>
                由于下次一定增加选举buff:{" "}
                {debugInfo?.addElectinoBuffBecauseEscape}
            </div>
        </div>
    );
};
