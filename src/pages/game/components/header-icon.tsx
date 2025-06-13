import { AnimatePresence, motion } from "motion/react";
import { FC, HTMLProps, PointerEventHandler, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import Image from "@/components/image";
import { TalentContentIndex } from "@/types/talent";

interface HeaderIconProps extends HTMLProps<HTMLDivElement> {
    iconImages: string[];
    index: number;
    levelAnimations: {
        frame: string;
        trigger: () => void;
    }[];
    progressColor: string[];
    item: number;
}

export const HeaderIcon: FC<HeaderIconProps> = (props) => {
    const { iconImages, index, levelAnimations, progressColor, item, ...rest } =
        props;
    const [showIntro, setShowIntro] = useState<boolean>(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handlePointerDown: PointerEventHandler<HTMLDivElement> = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        timeoutRef.current = setTimeout(() => {
            setShowIntro(true);
        }, 500);
    };

    const handlePointerUp = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        if (showIntro) {
            setShowIntro(false);
        }
    };

    const handlePointerLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setShowIntro(false);
    };

    return (
        <div className="flex flex-col items-center gap-0.5" {...rest}>
            <div
                className="relative w-[10vw] h-[10vw] bg-center bg-cover"
                style={{
                    backgroundImage: `url(${iconImages[index]})`,
                }}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerLeave}
            >
                <div className="absolute right-0 bottom-0 w-[55%] h-[55%] translate-x-[85%]">
                    <Image src={levelAnimations[index].frame} />
                </div>
                <AnimatePresence>
                    {showIntro && (
                        <motion.div
                            className={twMerge(
                                "absolute top-0 translate-y-[120%] ml-2 w-[50vw] px-2 py-1 text-sm bg-white text-gray-800 shadow-lg rounded border border-gray-300 z-[99999]",
                                index >= 3 ? "right-0" : "left-0",
                                "text-xs",
                            )}
                            exit={{ opacity: 0, y: 20 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {TalentContentIndex[index]}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="relative w-[12vw] h-2">
                <div
                    className="absolute border-decorate h-full w-full overflow-hidden"
                    style={{ borderColor: progressColor[index] }}
                >
                    <motion.div
                        className="relative h-full"
                        initial={{
                            width: 0,
                        }}
                        style={{
                            backgroundColor: progressColor[index],
                        }}
                        animate={{
                            width: `${((item % 10) / 10) * 100}%`,
                        }}
                    >
                        <div
                            className="absolute h-0 left-full"
                            style={{
                                borderTop: `6px solid ${progressColor[index]}`,
                                borderRight: `6px solid transparent`,
                            }}
                        />
                    </motion.div>
                </div>
                <div className="absolute top-px left-0.5 border-decorate border-decorate-border w-[12vw] h-2 overflow-hidden">
                    <motion.div
                        className="absolute bg-black h-decorate w-2.5 rotate-135 origin-top-left"
                        initial={{
                            left: 0,
                        }}
                        animate={{
                            left: `calc(${((item % 10) / 10) * 100}% + 6px)`,
                        }}
                    />
                    <motion.div
                        className="absolute bg-black h-decorate w-[5px] rotate-135 origin-top-left"
                        initial={{
                            left: 0,
                        }}
                        animate={{
                            left: `calc(${((item % 10) / 10) * 100}% - 2px)`,
                        }}
                    />
                    <motion.div
                        className="absolute bg-black top-0.5 h-decorate w-[5px] rotate-135 origin-top-left"
                        initial={{
                            left: 0,
                        }}
                        animate={{
                            left: `calc(${((item % 10) / 10) * 100}% - 8px)`,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
