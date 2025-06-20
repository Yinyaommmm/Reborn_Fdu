import { HTMLMotionProps, motion, useAnimation } from "motion/react";
import { FC, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import Image from "@/components/image";
import { EDUDESTINATION, GRADDESTINATION } from "@/game/player";
import { useAudio } from "@/hooks/useAudio";
import { useViewport } from "@/hooks/useViewPort";
import { $Data } from "@/store/data";
import { getImagePath } from "@/types/images";

interface GoCardProps extends HTMLMotionProps<"div"> {
    isGraduate?: boolean;
}

function beautifyEDU(edu: EDUDESTINATION) {
    if (edu === "本科") {
        return "学士";
    } else {
        return "博士";
    }
}
function beautifyGRAD(grad: GRADDESTINATION) {
    if (grad === "企业") {
        return "企业大厂";
    } else if (grad === "辅导员") {
        return "专职辅导员";
    } else if (grad === "青椒") {
        return "青年教师";
    } else if (grad === "选调") {
        return "选调生";
    } else if (grad === "灵活就业") {
        return "灵活就业";
    } else {
        return grad;
    }
}

export const GoCard: FC<GoCardProps> = (props) => {
    const { isGraduate = false, onClick, ...rest } = props;
    const eduDestination = $Data.use((state) => state.eduDestination);
    const gradDestination = $Data.use((state) => state.gradDestination);
    const { vw, vh } = useViewport();
    const sex = $Data.use((state) => state.sex);
    const { play: playStoryboard } = useAudio("audio/02 分镜.wav", 1);
    const [graduate, setGraduate] = useState<boolean>(false);
    const rotateControls = useAnimation();

    useEffect(() => {
        playStoryboard();
    }, []);

    return (
        <motion.div
            key="go-card"
            className={twMerge(
                "fixed aspect-[16/10] h-[24vh] translate-x-1/2 z-50",
                isGraduate ? "translate-y-[40%]" : "translate-y-[105%]",
            )}
            initial={{ bottom: -200, right: 200, rotate: 0 }}
            animate={{ bottom: vh / 2, right: vw / 2, rotate: 6 }}
            transition={{ type: "spring", duration: 0.8 }}
            onClick={(e) => {
                if (!isGraduate) {
                    onClick?.(e);
                }
            }}
            {...rest}
        >
            <motion.div
                className={twMerge(
                    "absolute perspective-[1000px] transform-3d top-0 left-0 w-full h-full transition-colors",
                    graduate ? "bg-[#7392BF]" : "bg-[#9DCE9C]",
                )}
                animate={rotateControls}
                onClick={(e) => {
                    if (isGraduate) {
                        setGraduate(true);
                        playStoryboard();
                        rotateControls.start({
                            rotateY: 180,
                            transition: {
                                duration: 0.2,
                            },
                        });
                    }
                    if (isGraduate && graduate) {
                        onClick?.(e);
                    }
                }}
                {...rest}
            >
                <div
                    className={twMerge(
                        "backface-hidden backface-all-hidden absolute top-0 left-0 w-full h-full",
                        "bg-[#9DCE9C]",
                    )}
                >
                    <Image
                        className="absolute bottom-0 left-0 w-full"
                        src={getImagePath("card-decoration")}
                        square={false}
                    />
                    <div className="absolute top-[10%] right-[20%] font-cursive text-white text-[26px]">
                        学生卡
                    </div>
                    <div className="px-3 py-4 flex items-end">
                        <div className="p-1 w-[30%] box-content">
                            <Image
                                className="relative p-1 bg-white h-full aspect-[3/4] "
                                src={getImagePath(
                                    sex === 0
                                        ? "portrait-male"
                                        : "portrait-female",
                                )}
                                adjustHeight={false}
                                adjustWidth={true}
                                square={false}
                            >
                                {/* <Image
                            className="absolute -bottom-[40%] left-[250%] w-[50%]"
                            src={getImagePath("card-go")}
                            square={false}
                            /> */}
                            </Image>
                        </div>
                        <div className="text-xs mb-1 ml-6">
                            <div>
                                学号: <span className="ml-2">52019050514</span>
                            </div>
                            <div>
                                性别:{" "}
                                <span className="ml-2">
                                    {sex === 0 ? "男" : "女"}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -top-[3%] -left-[2%] w-full h-full border-decorate border-decorate-border border-b-0 border-r-0" />
                    <div className="absolute bottom-[3%] -left-[2%] w-[30%] h-decorate bg-decorate-border" />
                </div>
                <div
                    className={twMerge(
                        "backface-hidden backface-all-hidden transform-3d rotate-y-180 absolute top-0 left-0 w-full h-full",
                        "bg-[#7392BF]",
                    )}
                >
                    <Image
                        className="absolute bottom-0 left-0 w-full"
                        src={getImagePath("card-decoration-blue")}
                        square={false}
                    />
                    <div className="absolute top-[10%] right-[20%] font-cursive text-white text-[26px]">
                        校友卡
                    </div>
                    <div className="px-3 py-4 flex items-end">
                        <div className="p-1 w-[30%]">
                            <Image
                                className="relative p-1 bg-white h-full aspect-[3/4] "
                                src={getImagePath(
                                    sex === 0
                                        ? "portrait-male"
                                        : "portrait-female",
                                )}
                                adjustHeight={false}
                                adjustWidth={true}
                                square={false}
                            >
                                {/* <Image
                            className="absolute -bottom-[40%] left-[250%] w-[50%]"
                            src={getImagePath("card-go")}
                            square={false}
                            /> */}
                            </Image>
                        </div>
                        <div className="text-xs mb-1 ml-6">
                            <div>
                                入校年份: <span className="ml-2">2025</span>
                            </div>
                            <div>
                                毕业学历:{" "}
                                <span className="ml-2">
                                    {beautifyEDU(eduDestination)}
                                </span>
                            </div>
                            <div>
                                毕业去向:{" "}
                                <span className="ml-2">
                                    {beautifyGRAD(gradDestination)}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -top-[3%] -left-[2%] w-full h-full border-decorate border-decorate-border border-b-0 border-r-0" />
                    <div className="absolute bottom-[3%] -left-[2%] w-[30%] h-decorate bg-decorate-border" />
                </div>
            </motion.div>
        </motion.div>
    );
};
