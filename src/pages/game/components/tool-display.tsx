import { AnimatePresence, motion, useAnimation } from "motion/react";
import { FC, PointerEventHandler, useRef, useState } from "react";

import Image from "@/components/image";
import { useAudio } from "@/hooks/useAudio";
import { gameModule } from "@/packages/game-module";
import { tools } from "@/pages/birth/types/props";
import { $Data } from "@/store/data";

interface ToolDisplayProps {
    toolId: number;
    height: number;
    onUse?: (use: boolean) => void;
    electionBuff?: boolean;
}

export const ToolDisplay: FC<ToolDisplayProps> = (props) => {
    const { play: playClick } = useAudio("audio/01 点击.wav", 1);
    const { toolId, height, onUse, electionBuff } = props;
    const [left] = useState<number>(gameModule.toolLeft());
    const [available] = useState<boolean>(gameModule.toolAvailable());
    const [use, setUse] = useState<boolean>(false);

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [showIntro, setShowIntro] = useState<boolean>(false);
    const rotateControls = useAnimation();

    const handlePointerDown: PointerEventHandler<HTMLDivElement> = () => {
        playClick();
        rotateControls.start({
            rotate: [-5, 5, -5, 5, 0],
            transition: { duration: 0.5, ease: "easeInOut" },
        });
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
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        if (showIntro) {
            setShowIntro(false);
        } else {
            if (left > 0) {
                if (!use) {
                    gameModule.useTool();
                    $Data.update("use tool", (draft) => {
                        draft.toolUsing = true;
                        draft.upContext = "必胜";
                    });
                } else {
                    gameModule.unUseTool();
                    $Data.update("use tool", (draft) => {
                        draft.toolUsing = false;
                    });

                    if (!electionBuff) {
                        closeTimeoutRef.current = setTimeout(() => {
                            $Data.update("use tool", (draft) => {
                                draft.upContext = "概率UP";
                            });
                        }, 500);
                    } else {
                        $Data.update("use tool", (draft) => {
                            draft.upContext = "概率UP";
                        });
                    }
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
            <motion.div animate={rotateControls} initial={{ rotate: 0 }}>
                <div className="aspect-square" style={{ height }}>
                    <Image
                        src={tools[toolId].src}
                        adjustHeight
                        adjustWidth
                    ></Image>
                </div>
                {tools[toolId].active !== undefined && (
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
                            {tools[toolId].active !== undefined &&
                                !available && (
                                    <div>{"该道具在当前事件无法使用"}</div>
                                )}
                            {tools[toolId].active !== undefined &&
                                available &&
                                left <= 0 && <div>{"该道具已无使用次数"}</div>}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};
