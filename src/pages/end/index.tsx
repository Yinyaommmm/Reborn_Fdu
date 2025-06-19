import { HTMLMotionProps, motion } from "motion/react";
import { FC, useEffect } from "react";

import Image from "@/components/image";
import { StaggeredText } from "@/components/staggered-text";
import { useAudio } from "@/hooks/useAudio";
import { CircularTransitionTrigger } from "@/hooks/useCircularTransition";
import { getImagePath } from "@/types/images";

interface GraduationProps extends HTMLMotionProps<"div"> {
    trigger?: CircularTransitionTrigger;
}

const lines = [
    "你的旅程即将画上句号",
    "这一世，你因梦想而绚烂",
    "以勇气作舟，以底气为帆",
    "航向星辰大海",
    "",
    "谨以此作，献给母校百廿华诞",
    "祝所有老师们桃李满园，教泽绵长",
    "愿全体毕业生乘风破浪，天地宽广",
    "望学弟学妹们传承开创，再续华章",
    "",
    "——晨曦工作室",
];

export const End: FC<GraduationProps> = ({ trigger, ...rest }) => {
    const { play: playLetter } = useAudio("audio/打开信封.mp3", 1);

    useEffect(() => {
        setTimeout(() => {
            playLetter();
        }, 1000);
    }, []);

    return (
        <motion.div
            className="w-screen h-screen flex items-center justify-center game-background"
            onClick={(e) => {
                trigger?.(e, "launch");
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
            <motion.div
                className="absolute top-[20vh] right-[10vw] z-30 w-[75vw] bg-[#EBCEBF] h-[45vh] py-[5%] flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                <div className="absolute top-[-6px] right-[-6px] w-full h-full border-decorate border-decorate-border border-r-0 border-b-0"></div>
                <div className="absolute top-[-6px] right-[-6px] h-[45%] w-decorate bg-decorate-border"></div>
                <div className="absolute bottom-[6px] left-[6px] h-decorate w-[70%] bg-decorate-border"></div>
                <StaggeredText
                    className="w-full h-full px-[10%] flex flex-col gap-[1%] items-center justify-center"
                    lines={lines}
                    tailRightAlign
                    delay={2}
                />
            </motion.div>
            <motion.div
                className="absolute left-[25vw] top-[56vh] w-[75vw]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
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
            </motion.div>
        </motion.div>
    );
};
