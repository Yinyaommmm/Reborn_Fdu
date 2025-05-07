import { HTMLMotionProps, motion } from "motion/react";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

import { tools } from "../types/props";

import Image from "@/components/image";
import { $Data } from "@/store/data";

export const ChooseProps: FC<HTMLMotionProps<"div">> = (props) => {
    const { className, ...rest } = props;
    const [name, setName] = useState("暂未选择");
    const [description, setDescription] = useState<string | undefined>(
        undefined,
    );
    const [passive, setPassive] = useState<string | undefined>(undefined);
    const [active, setActive] = useState<string | undefined>(undefined);

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
                {tools.slice(0, 4).map((tool, index) => (
                    <Image
                        className="relative h-full aspect-square"
                        src={tool.src}
                        adjustHeight
                        adjustWidth={false}
                        key={`choose-props-${index}`}
                        onClick={() => {
                            setName(tool.name);
                            setDescription(tool.description);
                            setPassive(tool.passive);
                            setActive(tool.active);
                            $Data.update("update tool", (draft) => {
                                draft.toolId = index;
                            });
                        }}
                    >
                        <div className="absolute w-full h-full -top-[5%] left-[5%] border-decorate border-decorate-border" />
                    </Image>
                ))}
            </div>
            <div className="relative mt-[5%] px-[8%] w-full box-border flex items-center justify-evenly h-[12%] gap-4">
                {tools.slice(4, 8).map((tool, index) => (
                    <Image
                        className="relative h-full aspect-square"
                        src={tool.src}
                        adjustHeight
                        adjustWidth={false}
                        key={`choose-props-${index}`}
                        onClick={() => {
                            setName(tool.name);
                            setDescription(tool.description);
                            setPassive(tool.passive);
                            setActive(tool.active);
                        }}
                    >
                        <div className="absolute w-full h-full -top-[5%] left-[5%] border-decorate border-decorate-border" />
                    </Image>
                ))}
            </div>
            <div className="relative mt-[10%] px-[8%] w-full box-border h-[25%]">
                <div className="relative w-full h-full">
                    <div className="absolute -top-[10%] left-[3%] w-full h-full border-decorate border-decorate-border -z-10" />
                    <div className="w-full h-full bg-white py-2 px-3 flex flex-col justify-between">
                        <div>
                            <div className="text-sm font-semibold mb-1">
                                {name}
                            </div>
                            <div className="text-sm">{description}</div>
                        </div>
                        <div>
                            {passive && (
                                <div className="text-xs">被动: {passive}</div>
                            )}
                            {active && (
                                <div className="text-xs">主动: {active}</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
