import { AnimatePresence, HTMLMotionProps, motion } from "motion/react";
import { FC, useState } from "react";

import { AddTalent } from "./components/add-talent";
import { ChooseProps } from "./components/choose-props";
import { GoCard } from "./components/go-card";

import Image from "@/components/image";
import { useAudio } from "@/hooks/useAudio";
import { CircularTransitionTrigger } from "@/hooks/useCircularTransition";
import { useFastClick } from "@/hooks/useFastClick";
import { gameModule } from "@/packages/game-module";
import { $Data } from "@/store/data";
import { getImagePath } from "@/types/images";

interface BirthProps extends HTMLMotionProps<"div"> {
    trigger: CircularTransitionTrigger;
}

export const Birth: FC<BirthProps> = ({ trigger, ...rest }) => {
    const [step, setStep] = useState<number>(1);
    const { play: playClick } = useAudio("audio/01 点击.wav", 1);
    const { onClick: onClickStep1, onTouchEnd: onTouchEnd1 } = useFastClick(
        () => {
            playClick();
            setStep(1);
        },
    );
    const { onClick: onClickStep2, onTouchEnd: onTouchEnd2 } = useFastClick(
        () => {
            playClick();
            setStep(2);
        },
    );
    const { play: playLaunch } = useAudio("audio/03 启动按钮.wav", 1);
    const { onClick: onClickStep3, onTouchEnd: onTouchEnd3 } = useFastClick(
        () => {
            playLaunch();
            setStep(3);
        },
    );
    const toolId = $Data.use((state) => state.toolId);

    return (
        <motion.div
            className="relative w-screen h-screen game-background box-border"
            {...rest}
        >
            <Image
                className="absolute w-full h-full mt-[1vh]"
                src={getImagePath("calender")}
                square={false}
            />
            <div className="h-[30vh]" />
            <AnimatePresence>
                {step !== 3 && (
                    <motion.div
                        className="relative w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={`step-1-2`}
                    >
                        <div className="absolute top-[1%] left-0 bg-[#D8B79D] ml-[8%] w-[85%] h-[60vh] -rotate-1"></div>
                        <div className="absolute flex items-center top-0 lef-0 -rotate-6 gap-4 ml-[10%]">
                            <motion.div
                                className="bg-[#C6796C] px-4 py-2 text-white font-cursive"
                                animate={{
                                    translateY: step === 1 ? "-70%" : "-40%",
                                }}
                                onClick={onClickStep1}
                                onTouchEnd={onTouchEnd1}
                            >
                                <div className="absolute top-[10%] left-[6%] w-full h-full border-decorate border-decorate-border -z-10" />
                                STEP 1
                            </motion.div>
                            <motion.div
                                className="bg-[#7897B5] px-4 py-2 text-white font-cursive"
                                animate={{
                                    translateY: step === 2 ? "-70%" : "-40%",
                                }}
                                onClick={onClickStep2}
                                onTouchEnd={onTouchEnd2}
                            >
                                <div className="absolute top-[10%] left-[6%] w-full h-full border-decorate border-decorate-border -z-10" />
                                STEP 2
                            </motion.div>
                        </div>
                        <div className="relative bg-[#EFDC89] ml-[8%] w-[85%] h-[60vh] -rotate-6">
                            <div className="absolute -top-[2%] left-[3%] w-full h-full border-decorate border-solid border-decorate-border border-t-0 border-r-0" />
                            <div className="absolute -top-[2%] left-[3%] w-[2%] h-decorate bg-decorate-border" />
                            <div className="absolute bottom-[2%] left-[103%] w-decorate h-[50%] bg-decorate-border" />
                            <AnimatePresence mode="popLayout">
                                {step === 1 && <AddTalent key="birth-step-1" />}
                                {step === 2 && (
                                    <ChooseProps
                                        key="birth-step-2"
                                        onClick={onClickStep3}
                                        onTouchEnd={onTouchEnd3}
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
                {toolId !== undefined && step === 3 && (
                    <GoCard
                        key={`step-3`}
                        onClick={(e) => {
                            playLaunch();
                            gameModule.init();
                            gameModule.equip();
                            $Data.update("new semester", (draft) => {
                                draft.semester = draft.semester + 1;
                            });
                            trigger(e, "game");
                        }}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
};
