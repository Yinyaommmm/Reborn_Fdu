import { AnimatePresence, motion } from "motion/react";
import { FC, useEffect, useRef } from "react";

import { IconEarphone, IconVolume, IconVolumeEmpty } from "@/assets";
import { useAudioEnabled } from "@/hooks/useAudioEnabled";
import { $UI } from "@/store/ui";

export const Earphone: FC = () => {
    const { enabled, toggle } = useAudioEnabled();
    const timeRef = useRef<NodeJS.Timeout>(undefined);

    useEffect(() => {
        if (timeRef.current === undefined) {
            timeRef.current = setTimeout(() => {
                $UI.update("earphoneDisplay close", (draft) => {
                    draft.earphoneDisplay = false;
                });
            }, 3000);
        }
    }, []);

    return (
        <motion.div
            key="Earphone"
            className="fixed top-0 left-0 w-screen h-screen z-[999999] game-background flex flex-col items-center justify-center"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div>
                <IconEarphone className="text-6xl" />
            </div>
            <div className="text-sm">
                为获得更佳游戏体验，建议开启游戏声音。
            </div>
            <div className="text-sm">
                如果您身处公共场所，请佩戴耳机，避免打扰他人。
            </div>
            <div className="mt-[20%] flex items-center justify-center gap-[50%]">
                <div
                    className="flex flex-col items-center gap-2"
                    onClick={() => {
                        if (timeRef.current !== undefined) {
                            clearTimeout(timeRef.current);
                        }
                        timeRef.current = setTimeout(() => {
                            $UI.update("earphoneDisplay close", (draft) => {
                                draft.earphoneDisplay = false;
                            });
                        }, 2000);
                        if (!enabled) toggle();
                    }}
                >
                    <IconVolume className="text-5xl" />
                    <AnimatePresence mode="wait">
                        {enabled && (
                            <motion.div
                                key="volume-1"
                                className="w-8 h-1 bg-[#1C274C] rounded-full"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                            ></motion.div>
                        )}
                        {!enabled && (
                            <motion.div
                                key="volume-2"
                                className="w-8 h-1 bg-transparent rounded-full"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                            ></motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div
                    className="flex flex-col items-center gap-2"
                    onClick={() => {
                        if (timeRef.current !== undefined) {
                            clearTimeout(timeRef.current);
                        }
                        timeRef.current = setTimeout(() => {
                            $UI.update("earphoneDisplay close", (draft) => {
                                draft.earphoneDisplay = false;
                            });
                        }, 2000);
                        if (enabled) toggle();
                    }}
                >
                    <IconVolumeEmpty className="text-5xl" />
                    <AnimatePresence mode="wait">
                        {!enabled && (
                            <motion.div
                                key="volume-empty-1"
                                className="w-8 h-1 bg-[#1C274C] rounded-full"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                            ></motion.div>
                        )}
                        {enabled && (
                            <motion.div
                                key="volume-empty-2"
                                className="w-8 h-1 bg-transparent rounded-full"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                            ></motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};
