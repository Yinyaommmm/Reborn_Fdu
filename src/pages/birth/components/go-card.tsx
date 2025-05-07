import { HTMLMotionProps, motion } from "motion/react";
import { FC } from "react";

import Image from "@/components/image";

export const GoCard: FC<HTMLMotionProps<"div">> = (props) => {
    const { ...rest } = props;

    return (
        <motion.div
            className="fixed bottom-0 right-0 bg-[#9DCE9C] aspect-[16/10] h-[22vh]"
            initial={{ bottom: -200, right: 200, rotate: 0 }}
            animate={{ bottom: 0, right: -50, rotate: 8 }}
            transition={{ type: "spring", duration: 0.8 }}
            {...rest}
        >
            <Image
                className="absolute bottom-0 left-0 w-full"
                src="png/card-decoration.png"
                square={false}
            />
            <div className="absolute top-[10%] right-[20%] font-cursive text-white">
                学生卡
            </div>
            <div className="px-3 py-4 flex items-end">
                <div className="p-1 w-[30%]">
                    <Image
                        className="relative p-1 bg-white h-full aspect-[3/4]"
                        src="png/portrait-girl.png"
                        adjustHeight
                        adjustWidth={false}
                        square={false}
                    >
                        <Image
                            className="absolute -bottom-[20%] left-[50%] w-[50%]"
                            src="png/card-go.png"
                            square={false}
                        />
                    </Image>
                </div>
                <div className="text-xs mb-4 ml-6">
                    <div>
                        学号: <span className="ml-2">52019050514</span>
                    </div>
                    <div>
                        性别: <span className="ml-2">女</span>
                    </div>
                </div>
            </div>
            <div className="absolute -top-[3%] -left-[2%] w-full h-full border-decorate border-decorate-border border-b-0 border-r-0" />
            <div className="absolute bottom-[3%] -left-[2%] w-[30%] h-decorate bg-decorate-border" />
        </motion.div>
    );
};
