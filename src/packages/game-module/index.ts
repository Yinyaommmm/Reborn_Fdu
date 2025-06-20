import { GameEvent } from "./type";

import { events as readableEvents } from "@/data/events_loaded";
import { FiveProps, GameSystem, StandardEvent } from "@/game/gamesys";
import { ItemFactory, ItemID } from "@/game/item";
import { Player } from "@/game/player";
import { getPoints } from "@/pages/birth/components/add-talent";
import { tools } from "@/pages/birth/types/props";
import { Stage2Sys } from "@/stage2/stage2";
import { $Data, DataModel } from "@/store/data";

const standardEvents = readableEvents.map((e) => new StandardEvent(e));
const player = new Player();
let system: GameSystem | null = null;
let stage2Sys: Stage2Sys | null = null;

const events: (GameEvent | undefined)[] = [];

const data2props = (model: DataModel): FiveProps => {
    return {
        H: model.honesty,
        L: model.lucky,
        A: model.academic,
        C: model.creativity,
        M: model.management,
    };
};

const toolId2itemId = (toolId: number): ItemID => {
    switch (toolId) {
        case 0:
            return "Secretary's Letter";
        case 1:
            return "Academician's Guidebook";
        case 2:
            return "Thanos Glove";
        case 3:
            return "Lucky Student ID";
        case 4:
            return "Middle Part Pants";
        case 5:
            return "Skincare Set";
        case 6:
            return "Buddha Foot";
        case 7:
            return "Misfortune Certificate";
        default:
            return "Secretary's Letter";
    }
};

// const itemId2toolId = (itemId: ItemID): number => {
//     switch (itemId) {
//         case "Secretary's Letter":
//             return 0;
//         case "Academician's Guidebook":
//             return 1;
//         case "Thanos Glove":
//             return 2;
//         case "Lucky Student ID":
//             return 3;
//         case "Middle Part Pants":
//             return 4;
//         // TODO case 5
//         case "Buddha Foot":
//             return 6;
//         case "Misfortune Certificate":
//             return 7;
//         default:
//             return 0;
//     }
// };

const init = () => {
    player.randomInit(data2props($Data.get()), getPoints());
    player.setGender($Data.get().sex === 0 ? "男" : "女");
    player.mainProp = $Data.get().prefer === 0 ? "A" : "M";
    $Data.update("player random init", (draft) => {
        draft.honesty = player.props.H;
        draft.lucky = player.props.L;
        draft.academic = player.props.A;
        draft.creativity = player.props.C;
        draft.management = player.props.M;
    });
    // player.fixedInit();
    system = new GameSystem(player, standardEvents);
};

const equip = () => {
    const toolId = $Data.get().toolId;
    if (system && toolId !== undefined) {
        const item = ItemFactory(toolId2itemId(toolId));
        if (item) {
            system.addItem(item);
        } else {
            throw Error("item not exist");
        }
    } else {
        throw Error("system not initialized | tool id not defined");
    }
};

export type PickRes = {
    id: number;
    indexInYear: number;
    shouldMoveToNextYear: boolean;
};

const pick = () => {
    if (system) {
        const ctx = system.createEmptyContext();
        const next = system.nextEvt(ctx);
        events.push(next);
        console.log("pick", next.shouldMoveToNextYear);
        // if (next.shouldMoveToNextYear) {
        //     system.setYear(system.getYear() + 1);
        // }
        return {
            id: next.evtID,
            indexInYear: next.indexInYear,
            shouldMoveToNextYear: next.shouldMoveToNextYear,
        };
    } else {
        if (events[0] !== undefined) throw Error("system not initialized");
        else return undefined;
    }
};

const jump = () => {
    if (system && events[0] !== undefined) {
        const isJump = system.requiredEvtJump(events[0].evtID);
        if (isJump) {
            events.shift();
        }
        return isJump;
    } else {
        if (events[0] !== undefined) throw Error("system not initialized");
        else return undefined;
    }
};

const resolve = (choice: "A" | "B") => {
    if (system && events[0] !== undefined) {
        const res = system.resoluteEvt(
            events[0].evtID,
            choice,
            events[0].indexInYear,
            events[0].ctx,
        );
        events.shift();
        return res;
    } else {
        if (events[0] !== undefined) throw Error("system not initialized");
        else return undefined;
    }
};

const use = () => {
    const toolId = $Data.get().toolId;
    if (system && toolId !== undefined) {
        const res = system.useItem(
            toolId2itemId(toolId),
            system.createEmptyContext(),
        );
        return res;
    } else {
        if (events[0] !== undefined) throw Error("system not initialized");
        else return undefined;
    }
};

const info = () => {
    if (system && events[0] !== undefined) {
        return system.showEvt(events[0].evtID);
    } else {
        if (events[0] !== undefined) throw Error("system not initialized");
        else return undefined;
    }
};

const alive = () => {
    if (system) {
        return system.GameContinue;
    } else throw Error("system not initialized");
};

const end = () => {
    if (system) {
        return {
            eduDestination: player.eduDestination,
            gradDestination: player.gradDestination,
        };
    } else throw Error("system not initialized");
};

const initStage2 = () => {
    stage2Sys = new Stage2Sys(player);
    stage2Sys.setAllLine();
};

const useStage2 = () => {
    if (stage2Sys) {
        return stage2Sys.getAll();
    } else throw Error("stage2Sys not initialized");
};

const getCard = (evtID: number) => {
    if (system) {
        return system.showEvt(evtID);
    } else {
        throw Error("system not initialized");
    }
};

const nextSemester = () => {
    if (system) {
        system.setYear(system.getYear() + 1);
    } else {
        throw Error("system not initialized");
    }
};

const toolLeft = () => {
    if (system) {
        return system.showAllItem()[0].usageLeft;
    } else {
        throw Error("system not initialized");
    }
};

const useTool = () => {
    const toolId = $Data.get().toolId;
    if (system && toolId !== undefined && events[0] !== undefined) {
        const item = ItemFactory(toolId2itemId(toolId));
        if (item) {
            system.useItem(item.id, events[0].ctx);
        } else {
            throw Error("item not exist");
        }
    } else {
        throw Error("system not initialized | tool id not defined");
    }
};

const unUseTool = () => {
    const toolId = $Data.get().toolId;
    if (system && toolId !== undefined && events[0] !== undefined) {
        const item = ItemFactory(toolId2itemId(toolId));
        if (item) {
            system.unUseItem(item.id, events[0].ctx);
        } else {
            throw Error("item not exist");
        }
    } else {
        throw Error("system not initialized | tool id not defined");
    }
};

const toolAvailable = () => {
    if (system) {
        const toolId = $Data.get().toolId;
        if (toolId !== undefined && events[0] !== undefined) {
            if (
                tools[toolId].available.includes(
                    system.showEvt(events[0].evtID).category,
                )
            ) {
                return true;
            }
        }
        return false;
    } else {
        throw Error("system not initialized");
    }
};

const debug = () => {
    if (system) {
        return system.lastContextLog;
    } else {
        return undefined;
    }
};

export const gameModule = {
    init,
    equip,
    pick,
    jump,
    resolve,
    use,
    info,
    data2props,
    alive,
    end,
    initStage2,
    useStage2,
    getCard,
    nextSemester,
    toolLeft,
    useTool,
    unUseTool,
    toolAvailable,
    debug,
};
