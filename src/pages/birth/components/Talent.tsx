import { AnimatePresence, motion } from "motion/react";
import { FC, PointerEventHandler, ReactNode, useRef, useState } from "react";

import { IconArrowButton } from "@/assets";
import Image from "@/components/image";
import { useFastClick } from "@/hooks/useFastClick";

interface TalentProps {
    src: string;
    value: number;
    title: string;
    description: ReactNode;
    onAdd: () => void;
    onMinus: () => void;
}

export const Talent: FC<TalentProps> = (props) => {
    const { src, value, title, onAdd, onMinus, description } = props;
    const { onClick: onClickLeft, onTouchEnd: onTouchEndLeft } =
        useFastClick(onMinus);
    const { onClick: onClickRight, onTouchEnd: onTouchEndRight } =
        useFastClick(onAdd);

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [showIntro, setShowIntro] = useState<boolean>(false);

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
        <div className="relative flex-1 flex gap-3 h-full">
            <div
                className="relative h-full aspect-square"
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerLeave}
            >
                <div className="absolute left-0 top-0 h-full aspect-square bg-[#F6F6F2] rotate-[6deg]"></div>
                <Image
                    className="relative h-full aspect-square"
                    src={src}
                    adjustWidth={false}
                    adjustHeight
                    scale={0.8}
                />
                <div className="absolute -top-[0%] left-[0%] border-decorate border-decorate-border w-full h-full" />
                <AnimatePresence>
                    {showIntro && (
                        <motion.div
                            className="absolute top-0 left-0 translate-y-[-120%] ml-2 w-[45vw] px-2 py-1 text-sm bg-white text-gray-800 shadow-lg rounded border border-gray-300 z-[99999]"
                            exit={{ opacity: 0, y: -20 }}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {description}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <div>{title}</div>
                <div className="flex items-center gap-2">
                    <IconArrowButton
                        className="text-[#7897B5] text-xl"
                        onClick={onClickLeft}
                        onTouchEnd={onTouchEndLeft}
                    />
                    {value}
                    <IconArrowButton
                        className="text-[#C6796C] text-xl -scale-x-100"
                        onClick={onClickRight}
                        onTouchEnd={onTouchEndRight}
                    />
                </div>
            </div>
        </div>
    );
};
