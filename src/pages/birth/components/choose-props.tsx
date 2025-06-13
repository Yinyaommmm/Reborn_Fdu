import { AnimatePresence, HTMLMotionProps, motion } from "motion/react";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

import { tools } from "../types/props";

import Image from "@/components/image";
import { $Data } from "@/store/data";
import { getImagePath } from "@/types/images";

export const ChooseProps: FC<HTMLMotionProps<"div">> = (props) => {
    const { className, onClick, onTouchEnd, ...rest } = props;
    const toolId = $Data.use((state) => state.toolId);
    const chosenTool = toolId ? tools[toolId] : undefined;
    const [name, setName] = useState(chosenTool?.name ?? "请选择道具");
    const [description, setDescription] = useState<string | undefined>(
        chosenTool?.description,
    );
    const [passive, setPassive] = useState<string | undefined>(
        chosenTool?.passive,
    );
    const [active, setActive] = useState<string | undefined>(
        chosenTool?.active,
    );

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
                    <div className="absolute top-0 left-0 bg-[#F6F6F2] w-full h-full rotate-[6deg] z-[-1]" />
                </div>
            </div>
            <div className="relative mt-[8%] px-[8%] w-full box-border flex items-center justify-evenly h-[12%] gap-4">
                {tools.slice(0, 4).map((tool, index) => (
                    <Image
                        className={twMerge(
                            "relative h-full aspect-square bg-[#F6F6F2]",
                            toolId !== index ? "grayscale-75" : "grayscale-0",
                        )}
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
                        className={twMerge(
                            "relative h-full aspect-square bg-[#F6F6F2]",
                            toolId !== index + 4
                                ? "grayscale-75"
                                : "grayscale-0",
                        )}
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
                                draft.toolId = index + 4;
                            });
                        }}
                    >
                        <div className="absolute w-full h-full -top-[5%] left-[5%] border-decorate border-decorate-border" />
                    </Image>
                ))}
            </div>
            <div className="relative mt-[10%] px-[8%] w-full box-border h-[25%]">
                <div className="relative w-full h-full">
                    <div className="absolute -top-[10%] left-[3%] w-full h-full border-decorate border-decorate-border -z-10" />
                    <div className="w-full h-full bg-[#F6F6F2] py-2 px-3 flex flex-col justify-between">
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
            <AnimatePresence>
                {toolId !== undefined && (
                    <motion.div
                        className="absolute bottom-0 left-0 h-[12%] w-full flex justify-end pr-6 pb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Image
                            className="h-full"
                            src={getImagePath("card-go")}
                            square={false}
                            adjustHeight={true}
                            adjustWidth={false}
                            onClick={onClick}
                            onTouchEnd={onTouchEnd}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
