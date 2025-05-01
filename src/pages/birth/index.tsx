import { AnimatePresence, motion } from "motion/react";
import { FC, useState } from "react";

import { AddTalent } from "./components/add-talent";
import { ChooseProps } from "./components/choose-props";

export const Birth: FC = () => {
    const [step, setStep] = useState<number>(1);

    return (
        <div className="relative w-screen h-screen game-background box-border">
            <div
                className="absolute w-full h-full bg-cover bg-center mt-[3vh]"
                style={{ backgroundImage: "url(png/calender.png)" }}
            />
            <div className="h-[30vh]" />
            <div className="relative w-full">
                <div className="absolute top-[1%] left-0 bg-[#D8B79D] ml-[8%] w-[85%] h-[60vh] -rotate-1"></div>
                <div className="absolute flex items-center top-0 lef-0 -rotate-6 gap-4 ml-[10%]">
                    <motion.div
                        className="bg-[#C6796C] px-4 py-2 text-white"
                        animate={{ translateY: step === 1 ? "-70%" : "-40%" }}
                        onClick={() => setStep(1)}
                    >
                        <div
                            className="absolute top-[10%] left-[6%] w-full h-full border-decorate border-decorate-border -z-10"
                            onClick={() => setStep(1)}
                        />
                        STEP 1
                    </motion.div>
                    <motion.div
                        className="bg-[#7897B5] px-4 py-2 text-white"
                        animate={{ translateY: step === 2 ? "-70%" : "-40%" }}
                        onClick={() => setStep(2)}
                    >
                        <div
                            className="absolute top-[10%] left-[6%] w-full h-full border-decorate border-decorate-border -z-10"
                            onClick={() => setStep(2)}
                        />
                        STEP 2
                    </motion.div>
                </div>
                <div className="relative bg-[#EFDC89] ml-[8%] w-[85%] h-[60vh] -rotate-6">
                    <div className="absolute -top-[2%] left-[3%] w-full h-full border-decorate border-solid border-decorate-border border-t-0 border-r-0" />
                    <div className="absolute -top-[2%] left-[3%] w-[2%] h-decorate bg-decorate-border" />
                    <div className="absolute bottom-[2%] left-[103%] w-decorate h-[50%] bg-decorate-border" />
                    <AnimatePresence mode="popLayout">
                        {step === 1 && <AddTalent key="birth-step-1" />}
                        {step === 2 && <ChooseProps key="birth-step-2" />}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
