import { motion, useAnimation } from "motion/react";
import { FC, useEffect } from "react";

import Image from "@/components/image";
import { CircleTransition } from "@/components/transition";

export const Dev: FC = () => {
    const controls = useAnimation();

    const handleTear = async () => {
        // 第一步：以右上角为锚点，先撕开（向下旋转）
        await controls.start({
            rotate: -15, // 向左下旋转
            // y: 30,
            transformOrigin: "100% 0%", // 右上角作为旋转中心
            transition: { duration: 0.4, ease: "easeOut" },
        });

        // 第二步：飘出去（右下，旋转+透明）
        await controls.start({
            x: 200,
            y: 200,
            rotate: -60,
            opacity: 0,
            transition: { duration: 0.6, ease: "easeIn" },
        });

        // 第三步：复原到原始状态
        controls.set({
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 1,
            transformOrigin: "100% 0%",
        });
    };

    useEffect(() => {}, []);

    return (
        <CircleTransition isActive cx={0} cy={0}>
            <div
                className="h-[15%] flex items-center justify-end"
                onClick={() => handleTear()}
            >
                <div className="relative h-full mr-[5%]">
                    <Image
                        src={"png/light.png"}
                        adjustHeight
                        adjustWidth={false}
                        square={false}
                    />
                </div>
            </div>
            <div className="mt-[7%] flex items-center justify-end">
                <div className="relative w-[95%]">
                    <Image
                        src={"png/board.png"}
                        adjustHeight
                        adjustWidth={false}
                        square={false}
                    />
                    <div className="absolute left-[53%] top-[43%] w-[40%] -translate-x-1/2 -translate-y-1/2">
                        <Image
                            src={"png/wall-calender.png"}
                            adjustHeight
                            adjustWidth={false}
                            square={false}
                        >
                            <div className="absolute left-[52%] bottom-[3.5%] font-cursive -translate-x-1/2 text-[#C18C6D] flex flex-col items-center justify-center gap-1 w-[93%] h-[58%]">
                                <div className="text-xl">Sep.</div>
                                <div className="text-2xl">大二</div>
                            </div>
                            <motion.div
                                className="absolute left-[52%] bottom-[3.5%] font-cursive -translate-x-1/2 text-[#C18C6D] flex flex-col items-center justify-center gap-1 w-[93%] h-[58%] bg-white"
                                animate={controls}
                            >
                                <div className="text-xl">Sep.</div>
                                <div className="text-2xl">大一</div>
                            </motion.div>
                        </Image>
                    </div>
                </div>
            </div>
        </CircleTransition>
    );
};
