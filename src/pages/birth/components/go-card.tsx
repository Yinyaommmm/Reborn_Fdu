import { HTMLMotionProps, motion } from "motion/react";
import { FC, useEffect } from "react";

import Image from "@/components/image";
import { useAudio } from "@/hooks/useAudio";
import { useViewport } from "@/hooks/useViewPort";
import { $Data } from "@/store/data";
import { getImagePath } from "@/types/images";

export const GoCard: FC<HTMLMotionProps<"div">> = (props) => {
    const { ...rest } = props;
    const { vw, vh } = useViewport();
    const sex = $Data.use((state) => state.sex);
    const { play: playStoryboard } = useAudio("audio/02 分镜.wav", 1);

    useEffect(() => {
        playStoryboard();
    }, []);

    return (
        <motion.div
            className="fixed bg-[#9DCE9C] aspect-[16/10] h-[24vh] translate-x-1/2 translate-y-[105%]"
            initial={{ bottom: -200, right: 200, rotate: 0 }}
            animate={{ bottom: vh / 2, right: vw / 2, rotate: 6 }}
            transition={{ type: "spring", duration: 0.8 }}
            {...rest}
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
                <div className="p-1 w-[30%]">
                    <Image
                        className="relative p-1 bg-white h-full aspect-[3/4]"
                        src={getImagePath(
                            sex === 0 ? "portrait-male" : "portrait-female",
                        )}
                        adjustHeight
                        adjustWidth={false}
                        square={false}
                    >
                        {/* <Image
                            className="absolute -bottom-[40%] left-[250%] w-[50%]"
                            src={getImagePath("card-go")}
                            square={false}
                        /> */}
                    </Image>
                </div>
                <div className="text-xs mb-4 ml-6">
                    <div>
                        学号: <span className="ml-2">52019050514</span>
                    </div>
                    <div>
                        性别:{" "}
                        <span className="ml-2">{sex === 0 ? "男" : "女"}</span>
                    </div>
                </div>
            </div>
            <div className="absolute -top-[3%] -left-[2%] w-full h-full border-decorate border-decorate-border border-b-0 border-r-0" />
            <div className="absolute bottom-[3%] -left-[2%] w-[30%] h-decorate bg-decorate-border" />
        </motion.div>
    );
};
