import { AnimatePresence, HTMLMotionProps, motion } from "motion/react";
import { FC, useEffect } from "react";

import { LaunchCG } from "./components/launch-cg";

import Image from "@/components/image";
import { useAudio } from "@/hooks/useAudio";
import { useAudioPreloader } from "@/hooks/useAudioPreloader";
import { CircularTransitionTrigger } from "@/hooks/useCircularTransition";
import { useFontLoader } from "@/hooks/useFontLoader";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import { UseRandomCG } from "@/hooks/useRandomCG";
import { audios } from "@/types/audios";
import { getImagePath, ImageUrls } from "@/types/images";

import "./style.css";

export interface LaunchProps extends HTMLMotionProps<"div"> {
    trigger: CircularTransitionTrigger;
    playBackgroundMusic?: () => void;
}

export const Launch: FC<LaunchProps> = (props) => {
    const { trigger, playBackgroundMusic, ...rest } = props;
    const { chosenKeys, chosenSex } = UseRandomCG();
    const { play } = useAudio("audio/03 启动按钮.wav", 1);

    const fontFinished = useFontLoader("CursiveFont", "font/cursive-font.ttf");
    const {
        progress,
        done: imageFinished,
        startLoading,
    } = useImagePreloader(ImageUrls);
    const {
        progress: audioProgress,
        done: audioFinished,
        startLoading: audioStartLoading,
    } = useAudioPreloader(audios);

    useEffect(() => {
        if (fontFinished && !imageFinished) {
            startLoading();
            audioStartLoading();
        }
    }, [fontFinished]);

    return (
        <motion.div
            className="w-screen h-screen flex items-center justify-center game-background"
            {...rest}
        >
            <div className="w-full h-full px-3 flex items-center">
                <Image
                    className="relative"
                    src={getImagePath("launch-border")}
                    square={false}
                    adjustHeight={false}
                    adjustWidth={true}
                >
                    <div className="absolute w-full h-full top-0 left-0 bg-amber-100 clip-1">
                        <LaunchCG src={chosenKeys[0]} />
                    </div>
                    <div className="absolute w-full h-full top-0 left-0 bg-amber-100 clip-2">
                        <LaunchCG src={chosenKeys[1]} className="top-[22%]" />
                    </div>
                    <div className="absolute w-full h-full top-0 left-0 bg-amber-100 clip-3">
                        <LaunchCG
                            src={chosenKeys[2]}
                            className="top-auto bottom-[-3.5%]"
                        />
                    </div>
                    <div className="absolute w-full h-full top-0 left-0">
                        <Image
                            src={getImagePath("launch-logo")}
                            adjustHeight
                            adjustWidth={false}
                            square={false}
                        />
                    </div>

                    <AnimatePresence>
                        {(!imageFinished || !audioFinished) && (
                            <motion.div
                                className="absolute w-full h-full top-0 left-0 flex items-center"
                                exit={{ opacity: 0, y: -20 }}
                            >
                                <Image
                                    src={getImagePath("launch-bar")}
                                    adjustHeight
                                    adjustWidth={false}
                                    square={false}
                                />
                            </motion.div>
                        )}
                        {(!imageFinished || !audioFinished) && (
                            <motion.div
                                className="absolute h-[2.09%] top-[81%] left-[14%] flex items-center overflow-hidden"
                                initial={{ width: "0%" }}
                                animate={{
                                    width: `${(73.7 / 200) * (progress + audioProgress)}%`,
                                }}
                                exit={{ opacity: 0, y: -20 }}
                                key="launch-progress"
                            >
                                <Image
                                    src={getImagePath("launch-progress")}
                                    adjustHeight
                                    adjustWidth={false}
                                    square={false}
                                />
                            </motion.div>
                        )}
                        {(!imageFinished || !audioFinished) && (
                            <motion.div
                                className="absolute w-full h-[6%] top-[79%] flex items-center overflow-hidden"
                                initial={{ left: "7%" }}
                                animate={{
                                    left: `${((75 - 7) / 200) * (progress + audioProgress) + 7}%`,
                                }}
                                exit={{ opacity: 0, y: -20 }}
                                key="launch-fly"
                            >
                                <Image
                                    src={getImagePath("launch-fly")}
                                    adjustHeight
                                    adjustWidth={false}
                                    square={false}
                                />
                            </motion.div>
                        )}
                        {imageFinished && audioFinished && (
                            <motion.div
                                className="absolute w-full h-full top-0 left-0 flex items-center"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                key="launch-star"
                            >
                                <Image
                                    src={getImagePath("launch-star")}
                                    adjustHeight
                                    adjustWidth={false}
                                    square={false}
                                />
                            </motion.div>
                        )}
                        {imageFinished && audioFinished && (
                            <motion.div
                                className="absolute w-full h-full top-0 left-0 flex items-end pb-[3px]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                key="launch-portrait"
                            >
                                <Image
                                    src={getImagePath(
                                        chosenSex === 0
                                            ? "launch-male"
                                            : "launch-female",
                                    )}
                                    adjustHeight={false}
                                    adjustWidth
                                    square={false}
                                />
                            </motion.div>
                        )}
                        {imageFinished && audioFinished && (
                            <motion.div
                                className="absolute w-full h-full top-0 left-0 flex items-center"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                key="launch-start"
                                onClick={(e) => {
                                    play();
                                    playBackgroundMusic?.();
                                    trigger(e, "introduction");
                                }}
                            >
                                <Image
                                    src={getImagePath("launch-start")}
                                    adjustHeight
                                    adjustWidth={false}
                                    square={false}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Image>
            </div>
        </motion.div>
    );
};
