import { AnimatePresence, motion } from "motion/react";
import { FC, useEffect } from "react";

import { LaunchCG } from "./components/launch-cg";

import Image from "@/components/image";
import { CircularTransitionTrigger } from "@/hooks/useCircularTransition";
import { useFontLoader } from "@/hooks/useFontLoader";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import { UseRandomCG } from "@/hooks/useRandomCG";
import { getImagePath, ImageUrls } from "@/types/images";

import "./style.css";

export interface LaunchProps {
    trigger: CircularTransitionTrigger;
}

export const Launch: FC<LaunchProps> = (props) => {
    const { trigger } = props;
    const { chosenKeys, chosenSex } = UseRandomCG();

    const fontFinished = useFontLoader("CursiveFont", "font/cursive-font.ttf");
    const {
        progress,
        done: imageFinished,
        startLoading,
    } = useImagePreloader(ImageUrls);

    useEffect(() => {
        if (fontFinished && !imageFinished) {
            startLoading();
        }
    }, [fontFinished]);

    return (
        <div className="w-screen h-screen flex items-center justify-center">
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
                        {!imageFinished && (
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
                        {!imageFinished && (
                            <motion.div
                                className="absolute h-[2.09%] top-[81%] left-[14%] flex items-center overflow-hidden"
                                initial={{ width: "0%" }}
                                animate={{
                                    width: `${(73.7 / 100) * progress}%`,
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
                        {!imageFinished && (
                            <motion.div
                                className="absolute w-full h-[6%] top-[79%] flex items-center overflow-hidden"
                                initial={{ left: "7%" }}
                                animate={{
                                    left: `${((75 - 7) / 100) * progress + 7}%`,
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
                        {imageFinished && (
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
                        {imageFinished && (
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
                        {imageFinished && (
                            <motion.div
                                className="absolute w-full h-full top-0 left-0 flex items-center"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                key="launch-start"
                                onClick={(e) => {
                                    trigger(e, "birth");
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
        </div>
    );
};
