import { HTMLMotionProps, motion } from "motion/react";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

import { Talent } from "./Talent";

import Image from "@/components/image";

export const AddTalent: FC<HTMLMotionProps<"div">> = (props) => {
    const { className, ...rest } = props;
    const [points, setPoints] = useState<number>(20);

    return (
        <motion.div
            className={twMerge("relative w-full h-full", className)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            {...rest}
        >
            <div className="relative pt-[10%] h-[33%] px-[8%] w-full flex justify-between gap-4">
                <Image
                    className="p-1 bg-white h-full aspect-[3/4]"
                    src="png/portrait-girl.png"
                    adjustHeight
                    adjustWidth={false}
                />
                <div className="flex-1 flex flex-col items-end">
                    <div className="relative border-decorate border-decorate-border py-1 px-3 box-border w-[50%] text-center text-sm">
                        个人档案
                        <div className="absolute top-0 left-0 bg-white w-full h-full rotate-[8deg] z-[-1]" />
                    </div>
                    <div className="w-full mt-3 text-xs">学号: 52019050514</div>
                    <div className="w-full mt-4 text-xs">性别:</div>
                    <div className="w-full mt-4 text-xs">偏好:</div>
                </div>
            </div>
            <div className="mt-[6%] px-[8%] flex items-end gap-4">
                <div className="relative border-decorate border-decorate-border py-1 px-3 box-border w-[33%] text-center text-sm">
                    个人信息
                    <div className="absolute top-0 left-0 bg-white w-full h-full rotate-[8deg] z-[-1]" />
                </div>
                <div className="text-xs">剩余加点: {points}</div>
            </div>
            <div className="relative mt-[6%] px-[8%] flex items-center justify-between h-[12%]">
                <Talent
                    src="png/data-icon.png"
                    value={0}
                    title="幸运"
                    onChange={() => {}}
                />
                <Talent
                    src="png/data-icon.png"
                    value={0}
                    title="幸运"
                    onChange={() => {}}
                />
            </div>
            <div className="relative mt-[6%] px-[8%] flex items-center justify-between h-[12%]">
                <Talent
                    src="png/data-icon.png"
                    value={0}
                    title="幸运"
                    onChange={() => {}}
                />
                <Talent
                    src="png/data-icon.png"
                    value={0}
                    title="幸运"
                    onChange={() => {}}
                />
            </div>
            <div className="relative mt-[6%] px-[8%] flex items-center justify-between h-[12%]">
                <Talent
                    src="png/data-icon.png"
                    value={0}
                    title="幸运"
                    onChange={() => {}}
                />
            </div>
        </motion.div>
    );
};
