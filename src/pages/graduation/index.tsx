import { HTMLMotionProps, motion } from "motion/react";
import { FC } from "react";

import { AutoScrollText } from "@/components/auto-scroll-text";
import Image from "@/components/image";
import { CircularTransitionTrigger } from "@/hooks/useCircularTransition";
import { $Data } from "@/store/data";
import { getImagePath } from "@/types/images";

interface GraduationProps extends HTMLMotionProps<"div"> {
    trigger?: CircularTransitionTrigger;
}

export const Graduation: FC<GraduationProps> = ({ trigger, ...rest }) => {
    const eduDestination = $Data.use((state) => state.eduDestination);
    const gradDestination = $Data.use((state) => state.gradDestination);

    return (
        <motion.div
            className="w-screen h-screen flex items-center justify-center"
            onClick={(e) => {
                trigger?.(e, "after");
            }}
            {...rest}
        >
            <div className="absolute top-0 left-0 w-screen flex items-center justify-center z-50">
                <div className="w-[75vw]">
                    <Image src={getImagePath("flower")} square={false} />
                </div>
                <motion.div
                    className="absolute top-[7vh] right-[27vw] w-[10vw]"
                    animate={{
                        x: [0, -10, 0, 10, 0],
                        y: ["-3vh", "2vh"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            duration: 8,
                            ease: "linear",
                        },
                        y: {
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    <Image src={getImagePath("petal-1")} square={false} />
                </motion.div>
                <div className="absolute top-[2vh] right-[12vw] w-[10vw]">
                    <Image src={getImagePath("petal-2")} square={false} />
                </div>
            </div>
            <motion.div className="absolute top-[15vh] right-[10vw] z-30 w-[70vw] bg-[#EBCEBF] h-[45vh] py-[5%]">
                <div className="absolute top-[-6px] right-[-6px] w-full h-full border-decorate border-decorate-border border-r-0 border-b-0"></div>
                <div className="absolute top-[-6px] right-[-6px] h-[45%] w-decorate bg-decorate-border"></div>
                <div className="absolute bottom-[6px] left-[6px] h-decorate w-[70%] bg-decorate-border"></div>
                <AutoScrollText
                    className="w-full h-full px-[10%] flex flex-col gap-[2%] overflow-y-scroll"
                    delay={1.5}
                >
                    <div>梧桐叶间的阳光终将变成回忆</div>
                    <div>在母校的教诲下</div>
                    <div>我们淬炼了“追求卓越”的勇气</div>
                    <div>也温养了“坦然自洽”的底气</div>
                    <div>感谢导师和辅导员老师点亮我们成长</div>
                    <div>感谢课题组同门与同学们共赴青春之约</div>
                    <div>更别忘了晨光中食堂阿姨的热粥 </div>
                    <div>和深夜守候的保安大叔</div>
                    <div>毕业钟声敲响</div>
                    <div>此去天高海阔</div>
                    <div>且从容，且峥嵘</div>
                </AutoScrollText>
            </motion.div>
            <div className="absolute left-[25vw] top-[51vh] w-[75vw]">
                <Image
                    className="absolute top-0 left-0 z-20"
                    src={getImagePath("letter-bottom")}
                    square={false}
                />
                <Image
                    className="absolute top-0 left-0 z-40"
                    src={getImagePath("letter")}
                    square={false}
                />
            </div>
            <div>
                <h1>一阶段游戏结束力</h1>
                <h1>学历: {eduDestination}</h1>
                <h1>结局: {gradDestination}</h1>
            </div>
        </motion.div>
    );
};
