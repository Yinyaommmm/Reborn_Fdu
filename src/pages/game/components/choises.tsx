import { animate, AnimatePresence, motion, useMotionValue } from "motion/react";
import { FC, useEffect, useState } from "react";

import { $Game } from "@/store/game";

const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
const height = Math.ceil(0.08 * viewportHeight);
const slideDistanceScale = 1;
const triggerDistance = viewportWidth / 3;

export const GameChoices: FC = () => {
    const [exitDirection, setExitDirection] = useState<"right" | "left">(
        "right",
    );
    const touchStartX = useMotionValue(0);
    const isDragging = useMotionValue(false);
    const x = useMotionValue(0);
    const [exitX, setExitX] = useState<boolean>(false);
    const [exitY, setExitY] = useState<boolean>(false);
    const isChoiceAnimating = $Game.use((state) => state.isChoiceAnimating);
    const setIsChoiceAnimating = (v: boolean) => {
        $Game.update("set isChoiceAnimating", (draft) => {
            draft.isChoiceAnimating = v;
        });
    };

    const handleSwipeComplete = () => {
        setIsChoiceAnimating(true);
        if (exitDirection === "right") {
            setExitX(true);
            setTimeout(() => {
                setExitX(false);
                x.set(0);
                setIsChoiceAnimating(false);
            }, 1000);
        } else {
            setExitY(true);
            setTimeout(() => {
                setExitY(false);
                x.set(0);
                setIsChoiceAnimating(false);
            }, 1000);
        }
    };

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            if (isChoiceAnimating) return;
            isDragging.set(true);
            touchStartX.set(e.touches[0].clientX);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isDragging.get() || isChoiceAnimating) return;

            const deltaX = e.touches[0].clientX - touchStartX.get();
            console.log(deltaX);
            if (deltaX > 0 && exitDirection !== "right") {
                setExitDirection("right");
                x.set(0);
            } else if (deltaX < 0 && exitDirection !== "left") {
                setExitDirection("left");
                x.set(0);
            } else {
                x.set(Math.abs(deltaX * slideDistanceScale));
            }
            if (
                deltaX * slideDistanceScale >= triggerDistance ||
                deltaX * slideDistanceScale <= -triggerDistance
            ) {
                handleSwipeComplete();
                isDragging.set(false);
            }
        };

        const handleTouchEnd = () => {
            if (!isDragging.get() || isChoiceAnimating) return;
            isDragging.set(false);
            animate(x, 0, {
                type: "spring",
                stiffness: 300,
                damping: 20,
            });
        };

        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove, {
            passive: false,
        });
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [exitDirection, isChoiceAnimating]);

    return (
        <div className="relative mt-[0vh]">
            <AnimatePresence mode="sync">
                {!exitX && (
                    <motion.div
                        className="absolute top-0 ml-[3vw] flex items-center"
                        style={{
                            height,
                            ...(exitDirection === "right" ? { left: x } : {}),
                        }}
                        initial={{ left: -viewportWidth }}
                        animate={{ left: 0 }}
                        exit={{
                            left: viewportWidth,
                            transition: { duration: 0.4 },
                        }}
                        key="choice-1"
                    >
                        <div className="h-full flex flex-col justify-between">
                            <div
                                className="w-0 h-0"
                                style={{
                                    borderTop: `${height / 2}px solid #79B`,
                                    borderLeft: `${height / 2}px solid transparent`,
                                }}
                            />
                            <div
                                className="w-0 h-0"
                                style={{
                                    borderBottom: `${height / 2}px solid #79B`,
                                    borderLeft: `${height / 2}px solid transparent`,
                                }}
                            />
                        </div>
                        <div className="bg-[#79B] text-white h-full w-[60vw] p-2 flex items-center">
                            选项 1
                        </div>
                        <div>
                            <div
                                className="w-0 h-0"
                                style={{
                                    borderBottom: `${height / 2}px solid #79B`,
                                    borderRight: `${height / 2}px solid transparent`,
                                }}
                            />
                            <div
                                className="w-0 h-0"
                                style={{
                                    borderTop: `${height / 2}px solid #79B`,
                                    borderRight: `${height / 2}px solid transparent`,
                                }}
                            />
                        </div>
                    </motion.div>
                )}
                {!exitY && (
                    <motion.div
                        className="absolute top-[11vh] pr-[3vw] flex items-center w-full justify-end"
                        style={{
                            height,
                            ...(exitDirection === "left" ? { right: x } : {}),
                        }}
                        initial={{ right: -viewportWidth }}
                        animate={{ right: 0 }}
                        exit={{
                            right: viewportWidth,
                            transition: { duration: 0.4 },
                        }}
                        key="choice-2"
                    >
                        <div>
                            <div
                                className="w-0 h-0"
                                style={{
                                    borderBottom: `${height / 2}px solid #BD7E94`,
                                    borderLeft: `${height / 2}px solid transparent`,
                                }}
                            />
                            <div
                                className="w-0 h-0"
                                style={{
                                    borderTop: `${height / 2}px solid #BD7E94`,
                                    borderLeft: `${height / 2}px solid transparent`,
                                }}
                            />
                        </div>
                        <div className="bg-[#BD7E94] text-white h-full w-[60vw] p-2 flex items-center justify-end">
                            选项 2
                        </div>
                        <div className="h-full flex flex-col justify-between">
                            <div
                                className="w-0 h-0"
                                style={{
                                    borderTop: `${height / 2}px solid #BD7E94`,
                                    borderRight: `${height / 2}px solid transparent`,
                                }}
                            />
                            <div
                                className="w-0 h-0"
                                style={{
                                    borderBottom: `${height / 2}px solid #BD7E94`,
                                    borderRight: `${height / 2}px solid transparent`,
                                }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// #BD7E94
