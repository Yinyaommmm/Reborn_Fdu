import { AnimatePresence, motion } from "motion/react";
import { FC, PointerEventHandler, useRef, useState } from "react";

import Image from "@/components/image";
import { gameModule } from "@/packages/game-module";
import { tools } from "@/pages/birth/types/props";
import { $Data } from "@/store/data";

interface ToolDisplayProps {
    toolId: number;
    height: number;
    onUse?: (use: boolean) => void;
}

export const ToolDisplay: FC<ToolDisplayProps> = (props) => {
    const { toolId, height, onUse } = props;
    const [left] = useState<number>(gameModule.toolLeft());
    const [available] = useState<boolean>(gameModule.toolAvailable());
    const [use, setUse] = useState<boolean>(false);

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [showIntro, setShowIntro] = useState<boolean>(false);

    const handlePointerDown: PointerEventHandler<HTMLDivElement> = () => {
        if (available) {
            timeoutRef.current = setTimeout(() => {
                setShowIntro(true);
            }, 300);
        } else {
            setShowIntro(true);
            timeoutRef.current = setTimeout(() => {
                setShowIntro(true);
            }, 500);
        }
    };

    const handlePointerUp = () => {
        if (!available) {
            return;
        }
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        if (showIntro) {
            setShowIntro(false);
        } else {
            if (left > 0) {
                if (!use) {
                    gameModule.useTool();
                    $Data.update("use tool", (draft) => {
                        draft.toolUsing = true;
                    });
                } else {
                    gameModule.unUseTool();
                    $Data.update("use tool", (draft) => {
                        draft.toolUsing = false;
                    });
                }
                onUse?.(!use);
                setUse((prev) => !prev);
            }
        }
    };

    const handlePointerLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setShowIntro(false);
    };

    return (
        <motion.div
            className="absolute top-[12vh] ml-[5vw] flex items-center justify-end z-10"
            key={"tool"}
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                filter: use && left > 0 ? "grayscale(0%)" : "grayscale(100%)",
            }}
            transition={{ type: "tween", ease: "easeInOut" }}
            exit={{ opacity: 0 }}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerLeave}
        >
            <div className="aspect-square" style={{ height }}>
                <Image src={tools[toolId].src} adjustHeight adjustWidth></Image>
            </div>
            {left > 0 && (
                <div className="absolute bottom-0 right-0 rounded-full bg-white shadow-2xl h-5 w-5 flex items-center justify-center text-sm font-bold font-cursive">
                    {left}
                </div>
            )}
            <AnimatePresence>
                {showIntro && (
                    <motion.div
                        className="absolute top-0 left-0 translate-y-[-120%] ml-2 w-[40vw] px-2 py-1 text-sm bg-white text-gray-800 shadow-lg rounded border border-gray-300 z-[99999]"
                        exit={{ opacity: 0, y: -20 }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {tools[toolId].active === undefined && (
                            <div>{"道具无主动"}</div>
                        )}
                        {tools[toolId].active !== undefined &&
                            available &&
                            left > 0 && <div>{tools[toolId].active}</div>}
                        {tools[toolId].active !== undefined && !available && (
                            <div>{"该道具在当前事件无法使用"}</div>
                        )}
                        {tools[toolId].active !== undefined &&
                            available &&
                            left <= 0 && <div>{"该道具已无使用次数"}</div>}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
