import { HTMLMotionProps, motion } from "motion/react";
import { FC, SetStateAction, useState } from "react";
import { twMerge } from "tailwind-merge";

import { Talent } from "./talent";

import { IconArrowButton } from "@/assets";
import Image from "@/components/image";
import { $Data } from "@/store/data";
import { getImagePath } from "@/types/images";
import { TalentContent } from "@/types/talent";

export const getPoints = () => {
    const data = $Data.get();
    return (
        70 -
        data.academic -
        data.creativity -
        data.honesty -
        data.management -
        data.lucky
    );
};

export const AddTalent: FC<HTMLMotionProps<"div">> = (props) => {
    const { className, ...rest } = props;
    const [points, setPoints] = useState<number>(getPoints());
    const sex = $Data.use((state) => state.sex);
    const setSex = (updater: SetStateAction<number>) => {
        $Data.update("update sex", (draft) => {
            draft.sex =
                typeof updater === "function"
                    ? (updater as (prev: number) => number)(draft.sex)
                    : updater;
        });
    };
    const [prefer, setPrefer] = useState<number>(1);
    const honesty = $Data.use((state) => state.honesty);
    const setHonesty = (updater: SetStateAction<number>) => {
        $Data.update("update honesty", (draft) => {
            draft.honesty =
                typeof updater === "function"
                    ? (updater as (prev: number) => number)(draft.honesty)
                    : updater;
        });
    };
    const lucky = $Data.use((state) => state.lucky);
    const setLucky = (updater: SetStateAction<number>) => {
        $Data.update("update lucky", (draft) => {
            draft.lucky =
                typeof updater === "function"
                    ? (updater as (prev: number) => number)(draft.lucky)
                    : updater;
        });
    };
    const academic = $Data.use((state) => state.academic);
    const setAcademic = (updater: SetStateAction<number>) => {
        $Data.update("update academic", (draft) => {
            draft.academic =
                typeof updater === "function"
                    ? (updater as (prev: number) => number)(draft.academic)
                    : updater;
        });
    };
    const creativity = $Data.use((state) => state.creativity);
    const setCreativity = (updater: SetStateAction<number>) => {
        $Data.update("update creativity", (draft) => {
            draft.creativity =
                typeof updater === "function"
                    ? (updater as (prev: number) => number)(draft.creativity)
                    : updater;
        });
    };
    const management = $Data.use((state) => state.management);
    const setManagement = (updater: SetStateAction<number>) => {
        $Data.update("update management", (draft) => {
            draft.management =
                typeof updater === "function"
                    ? (updater as (prev: number) => number)(draft.management)
                    : updater;
        });
    };

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
                    className="p-1 bg-[#F6F6F2] h-full aspect-[3/4]"
                    src={getImagePath(
                        sex === 0 ? "portrait-male" : "portrait-female",
                    )}
                    adjustHeight
                    adjustWidth={false}
                />
                <div className="flex-1 flex flex-col items-end">
                    <div className="relative border-decorate border-decorate-border py-1 px-3 box-border min-w-[50%] text-center text-base font-cursive">
                        个人档案
                        <div className="absolute top-0 left-0 bg-[#F6F6F2] w-full h-full rotate-[6deg] z-[-1]" />
                    </div>
                    <div className="w-full mt-2 text-xs">
                        学号: <span className="ml-4">52019050514</span>
                    </div>
                    <div className="w-full mt-3 text-xs flex items-center gap-2">
                        <div className="mr-4">性别:</div>
                        <IconArrowButton
                            className="text-[#7897B5] text-xl"
                            onClick={() => setSex((prev) => (prev + 1) % 2)}
                        />
                        {sex === 0 ? "男" : "女"}
                        <IconArrowButton
                            className="text-[#C6796C] text-xl -scale-x-100"
                            onClick={() => setSex((prev) => (prev + 1) % 2)}
                        />
                    </div>
                    <div className="w-full mt-2 text-xs flex items-center gap-2">
                        <div className="mr-4">偏好:</div>
                        <IconArrowButton
                            className="text-[#7897B5] text-xl"
                            onClick={() => setPrefer((prev) => (prev + 1) % 2)}
                        />
                        {prefer === 0 ? "专注科研" : "均衡发展"}
                        <IconArrowButton
                            className="text-[#C6796C] text-xl -scale-x-100"
                            onClick={() => setPrefer((prev) => (prev + 1) % 2)}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-[6%] px-[8%] flex items-end gap-4">
                <div className="relative border-decorate border-decorate-border py-1 px-3 box-border min-w-[33%] text-center text-base font-cursive">
                    个人信息
                    <div className="absolute top-0 left-0 bg-[#F6F6F2] w-full h-full rotate-[6deg] z-[-1]" />
                </div>
                <div className="text-xs">剩余加点: {points}</div>
            </div>
            <div className="relative mt-[6%] px-[8%] flex items-center justify-between h-[12%]">
                <Talent
                    src={getImagePath("icon-l")}
                    value={lucky}
                    description={TalentContent.lucky}
                    title="幸运"
                    onAdd={() => {
                        if (points > 0 && lucky < 20) {
                            setLucky((prev) => prev + 1);
                            setPoints((prev) => prev - 1);
                        }
                    }}
                    onMinus={() => {
                        if (lucky > 10) {
                            setLucky((prev) => prev - 1);
                            setPoints((prev) => prev + 1);
                        }
                    }}
                />
                <Talent
                    src={getImagePath("icon-h")}
                    description={TalentContent.honesty}
                    value={honesty}
                    title="诚信"
                    onAdd={() => {
                        if (points > 0 && honesty < 20) {
                            setHonesty((prev) => prev + 1);
                            setPoints((prev) => prev - 1);
                        }
                    }}
                    onMinus={() => {
                        if (honesty > 10) {
                            setHonesty((prev) => prev - 1);
                            setPoints((prev) => prev + 1);
                        }
                    }}
                />
            </div>
            <div className="relative mt-[6%] px-[8%] flex items-center justify-between h-[12%]">
                <Talent
                    src={getImagePath("icon-a")}
                    value={academic}
                    description={TalentContent.academic}
                    title="学术"
                    onAdd={() => {
                        if (points > 0 && academic < 20) {
                            setAcademic((prev) => prev + 1);
                            setPoints((prev) => prev - 1);
                        }
                    }}
                    onMinus={() => {
                        if (academic > 10) {
                            setAcademic((prev) => prev - 1);
                            setPoints((prev) => prev + 1);
                        }
                    }}
                />
                <Talent
                    src={getImagePath("icon-c")}
                    value={creativity}
                    description={TalentContent.creativity}
                    title="创造"
                    onAdd={() => {
                        if (points > 0 && creativity < 20) {
                            setCreativity((prev) => prev + 1);
                            setPoints((prev) => prev - 1);
                        }
                    }}
                    onMinus={() => {
                        if (creativity > 10) {
                            setCreativity((prev) => prev - 1);
                            setPoints((prev) => prev + 1);
                        }
                    }}
                />
            </div>
            <div className="relative mt-[6%] px-[8%] flex items-center justify-between h-[12%]">
                <Talent
                    src={getImagePath("icon-m")}
                    value={management}
                    description={TalentContent.management}
                    title="管理"
                    onAdd={() => {
                        if (points > 0 && management < 20) {
                            setManagement((prev) => prev + 1);
                            setPoints((prev) => prev - 1);
                        }
                    }}
                    onMinus={() => {
                        if (management > 10) {
                            setManagement((prev) => prev - 1);
                            setPoints((prev) => prev + 1);
                        }
                    }}
                />
            </div>
        </motion.div>
    );
};
