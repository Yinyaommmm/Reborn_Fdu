import { HTMLMotionProps, motion } from "motion/react";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

import Image from "@/components/image";

export const ChooseProps: FC<HTMLMotionProps<"div">> = (props) => {
    const { className, ...rest } = props;
    const [id, setId] = useState<number>(0);

    return (
        <motion.div
            className={twMerge("relative w-full h-full", className)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            {...rest}
        >
            <div className="relative pt-[10%] px-[8%] w-full flex justify-between gap-4">
                <div className="relative border-decorate border-decorate-border py-1 px-3 box-border w-[30%] text-center text-base font-cursive">
                    道具
                    <div className="absolute top-0 left-0 bg-white w-full h-full rotate-[6deg] z-[-1]" />
                </div>
            </div>
            <div className="relative mt-[8%] px-[8%] w-full box-border flex items-center justify-evenly h-[12%] gap-4">
                <Image
                    className="relative h-full aspect-square"
                    src="png/data-icon.png"
                    adjustHeight
                    adjustWidth={false}
                >
                    <div className="absolute w-full h-full -top-[5%] left-[5%] border-decorate border-decorate-border" />
                </Image>
                <Image
                    className="relative h-full aspect-square"
                    src="png/data-icon.png"
                    adjustHeight
                    adjustWidth={false}
                >
                    <div className="absolute w-full h-full -top-[5%] left-[5%] border-decorate border-decorate-border" />
                </Image>
                <Image
                    className="relative h-full aspect-square"
                    src="png/data-icon.png"
                    adjustHeight
                    adjustWidth={false}
                >
                    <div className="absolute w-full h-full -top-[5%] left-[5%] border-decorate border-decorate-border" />
                </Image>
                <Image
                    className="relative h-full aspect-square"
                    src="png/data-icon.png"
                    adjustHeight
                    adjustWidth={false}
                >
                    <div className="absolute w-full h-full -top-[5%] left-[5%] border-decorate border-decorate-border" />
                </Image>
            </div>
            <div className="relative mt-[5%] px-[8%] w-full box-border flex items-center justify-evenly h-[12%] gap-4">
                <Image
                    className="relative h-full aspect-square"
                    src="png/data-icon.png"
                    adjustHeight
                    adjustWidth={false}
                >
                    <div className="absolute w-full h-full -top-[5%] left-[5%] border-decorate border-decorate-border" />
                </Image>
                <Image
                    className="relative h-full aspect-square"
                    src="png/data-icon.png"
                    adjustHeight
                    adjustWidth={false}
                >
                    <div className="absolute w-full h-full -top-[5%] left-[5%] border-decorate border-decorate-border" />
                </Image>
                <Image
                    className="relative h-full aspect-square"
                    src="png/data-icon.png"
                    adjustHeight
                    adjustWidth={false}
                >
                    <div className="absolute w-full h-full -top-[5%] left-[5%] border-decorate border-decorate-border" />
                </Image>
                <Image
                    className="relative h-full aspect-square"
                    src="png/data-icon.png"
                    adjustHeight
                    adjustWidth={false}
                >
                    <div className="absolute w-full h-full -top-[5%] left-[5%] border-decorate border-decorate-border" />
                </Image>
            </div>
            <div className="relative mt-[10%] px-[8%] w-full box-border h-[20%]">
                <div className="relative w-full h-full">
                    <div className="absolute -top-[10%] left-[3%] w-full h-full border-decorate border-decorate-border -z-10" />
                    <div className="w-full h-full bg-white"></div>
                </div>
            </div>
        </motion.div>
    );
};
