import { motion, useAnimation } from "motion/react";
import { FC, Ref, useImperativeHandle } from "react";

import { semester2Title } from "./cards";

import Image from "@/components/image";
import { $Data } from "@/store/data";

export interface CardsTransitionHandler {
    startTear: () => void;
}

export const CardsTransition: FC<{ ref: Ref<CardsTransitionHandler> }> = ({
    ref,
}) => {
    const controls = useAnimation();
    const semester = $Data.use((state) => state.semester);

    const handleTear = async () => {
        await controls.start({
            rotate: -15,
            transformOrigin: "100% 0%",
            transition: { duration: 0.4, ease: "easeOut" },
        });

        await controls.start({
            x: 200,
            y: 200,
            rotate: -60,
            opacity: 0,
            transition: { duration: 0.6, ease: "easeIn" },
        });

        // // 第三步：复原到原始状态
        // controls.set({
        //     x: 0,
        //     y: 0,
        //     rotate: 0,
        //     opacity: 1,
        //     transformOrigin: "100% 0%",
        // });
    };

    useImperativeHandle(ref, () => ({
        startTear: handleTear,
    }));

    return (
        <>
            <div className="h-[12%] flex items-center justify-end">
                <div className="relative h-full mr-[5%]">
                    <Image
                        src={"png/light.png"}
                        adjustHeight
                        adjustWidth={false}
                        square={false}
                    />
                </div>
            </div>
            <div className="mt-[3%] flex items-center justify-end">
                <div className="relative w-[95%]">
                    <Image
                        src={"png/board.png"}
                        adjustHeight
                        adjustWidth
                        square={false}
                    />
                    <div className="absolute left-[53%] top-[43%] w-[40%] -translate-x-1/2 -translate-y-1/2">
                        <Image
                            src={"png/wall-calender.png"}
                            adjustHeight
                            adjustWidth
                            square={false}
                        >
                            <div className="absolute left-[52%] bottom-[3.5%] font-cursive -translate-x-1/2 text-[#C18C6D] flex flex-col items-center justify-center gap-1 w-[93%] h-[58%]">
                                <div className="text-xl">Sep.</div>
                                <div className="text-2xl">
                                    {semester2Title(semester)}
                                </div>
                            </div>
                            <motion.div
                                className="absolute left-[52%] bottom-[3.5%] font-cursive -translate-x-1/2 text-[#C18C6D] flex flex-col items-center justify-center gap-1 w-[93%] h-[58%] bg-white"
                                animate={controls}
                            >
                                <div className="text-xl">Sep.</div>
                                <div className="text-2xl">
                                    {" "}
                                    {semester2Title(semester - 1)}
                                </div>
                            </motion.div>
                        </Image>
                    </div>
                </div>
            </div>
        </>
    );
};
