import { animate, AnimatePresence, motion, useMotionValue } from "motion/react";
import { FC, useEffect, useRef, useState } from "react";

import { CardColorMap } from "../utils/colors";

import { useViewport } from "@/hooks/useViewPort";
import { gameModule } from "@/packages/game-module";
import { $Data } from "@/store/data";
import { $Game } from "@/store/game";
import { EventCategory } from "@/type/type";

export const GameChoices: FC = () => {
    const { vw: viewportWidth, vh: viewportHeight } = useViewport();
    const height = Math.ceil(0.08 * viewportHeight);
    const slideDistanceScale = 1;
    const triggerDistance = viewportWidth / 2;
    const cards = $Data.use((state) => state.cards);
    const endingCard = $Data.use((state) => state.endingCard);
    const ending = $Data.use((state) => state.ending);
    const choiceA = gameModule.info()?.choiceAText;
    const choiceB = gameModule.info()?.choiceBText;

    const trigger = $Game.use((state) => state.trigger);

    const exitDirection = $Game.use((state) => state.exitDirection);
    const setExitDirection = (v: "right" | "left") => {
        $Game.update("update exitDirection", (draft) => {
            draft.exitDirection = v;
        });
    };

    const touchStartX = useMotionValue(0);
    const isDragging = useMotionValue(false);
    const x = useMotionValue(0);
    const [showEnding, setShowEnding] = useState<boolean>(false);
    const touchClickRef = useRef<boolean>(false);

    const isAnimating = $Game.use((state) => state.isCardAnimating);

    const handleSwipeComplete = () => {
        setShowEnding(true);
    };

    useEffect(() => {
        if (trigger) {
            handleSwipeComplete();
        }
    }, [trigger]);

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            e.preventDefault();
            if (showEnding || cards.length === 0) return;
            isDragging.set(true);
            touchStartX.set(e.touches[0].clientX);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isDragging.get() || showEnding || cards.length === 0) return;
            e.preventDefault();

            const deltaX = e.touches[0].clientX - touchStartX.get();
            if (deltaX > 0 && exitDirection !== "right") {
                setExitDirection("right");
                x.set(0);
            } else if (deltaX < 0 && exitDirection !== "left") {
                setExitDirection("left");
                x.set(0);
            } else {
                x.set(Math.abs(deltaX * slideDistanceScale));
            }
            if (deltaX >= triggerDistance || deltaX <= -triggerDistance) {
                handleSwipeComplete();
                isDragging.set(false);
            }
        };

        const handleTouchEnd = () => {
            if (!isDragging.get() || showEnding || cards.length === 0) return;
            isDragging.set(false);
            animate(x, 0, {
                type: "tween",
                ease: "easeInOut",
                stiffness: 300,
                damping: 20,
                duration: 0.2,
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
    }, [exitDirection, showEnding, cards]);

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            if (!showEnding) return;
            e.preventDefault();
            touchClickRef.current = true;
        };
        const handleTouchEnd = () => {
            if (!showEnding || !touchClickRef.current) return;
            touchClickRef.current = false;
            setShowEnding(false);
        };

        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [showEnding]);

    return (
        <div className="relative mt-[2vh]">
            <AnimatePresence mode="sync">
                {!showEnding && cards.length !== 0 && (
                    <motion.div
                        className="absolute top-0 ml-[3vw] flex items-center"
                        style={{
                            height,
                            ...(exitDirection === "right" ? { left: x } : {}),
                        }}
                        initial={{ left: -viewportWidth }}
                        animate={{ left: 0 }}
                        transition={{ type: "tween", ease: "easeInOut" }}
                        exit={
                            exitDirection === "right"
                                ? {
                                      left: viewportWidth,
                                      transition: { duration: 0.1 },
                                  }
                                : {
                                      opacity: 0,
                                      transition: { duration: 0.1 },
                                  }
                        }
                        key="choice-1"
                        onClick={() => {
                            if (!isAnimating) {
                                $Game.update("trigger", (draft) => {
                                    draft.trigger = true;
                                    draft.exitDirection = "right";
                                });
                            }
                        }}
                    >
                        <div
                            className="absolute bg-decorate-border h-decorate top-[8%] -left-[2%]"
                            style={{ width: `100%` }}
                        />
                        <div
                            className="absolute bg-decorate-border h-decorate top-[8%] -left-[2%] rotate-45  origin-top-left"
                            style={{ width: height / 2 }}
                        />
                        <div className="absolute bg-decorate-border w-decorate top-[27%] right-[2%] h-[65%]" />
                        <div
                            className="absolute bg-decorate-border h-decorate top-[108%] -left-[2%]"
                            style={{
                                width: `75%`,
                            }}
                        >
                            <div
                                className="absolute bg-decorate-border h-decorate top-0 -right-[6%]"
                                style={{
                                    width: `1%`,
                                }}
                            />
                            <div
                                className="absolute bg-decorate-border h-decorate top-0 -right-[26%]"
                                style={{
                                    width: `15%`,
                                }}
                            />
                        </div>

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
                        <div className="bg-[#79B] text-white h-full w-[60vw] p-2 flex items-center text-sm">
                            {choiceA}
                        </div>
                    </motion.div>
                )}
                {!showEnding && cards.length !== 0 && (
                    <motion.div
                        className="absolute top-[12vh] mr-[3vw] flex items-center justify-end"
                        style={{
                            height,
                            ...(exitDirection === "left" ? { right: x } : {}),
                        }}
                        initial={{ right: -viewportWidth }}
                        animate={{ right: 0 }}
                        transition={{ type: "tween", ease: "easeInOut" }}
                        exit={
                            exitDirection === "left"
                                ? {
                                      right: viewportWidth,
                                      transition: { duration: 0.1 },
                                  }
                                : {
                                      opacity: 0,
                                      transition: { duration: 0.1 },
                                  }
                        }
                        key="choice-2"
                        onClick={() => {
                            if (!isAnimating) {
                                $Game.update("trigger", (draft) => {
                                    draft.trigger = true;
                                    draft.exitDirection = "left";
                                });
                            }
                        }}
                    >
                        <div
                            className="absolute bg-decorate-border h-decorate bottom-[8%] -right-[2%]"
                            style={{ width: `100%` }}
                        />
                        <div
                            className="absolute bg-decorate-border h-decorate bottom-[8%] -right-[2%] rotate-45  origin-bottom-right"
                            style={{ width: height / 2 }}
                        />
                        <div className="absolute bg-decorate-border w-decorate bottom-[27%] left-[2%] h-[65%]" />
                        <div
                            className="absolute bg-decorate-border h-decorate bottom-[108%] -right-[2%]"
                            style={{
                                width: `75%`,
                            }}
                        >
                            <div
                                className="absolute bg-decorate-border h-decorate bottom-0 -left-[6%]"
                                style={{
                                    width: `1%`,
                                }}
                            />
                            <div
                                className="absolute bg-decorate-border h-decorate bottom-0 -left-[26%]"
                                style={{
                                    width: `15%`,
                                }}
                            />
                        </div>

                        <div className="bg-[#BD7E94] text-white h-full w-[60vw] p-2 flex items-center justify-end text-sm text-right">
                            {choiceB}
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
                {showEnding && (
                    <motion.div
                        className="absolute px-[4vw] w-full"
                        key={"ending"}
                        style={{ height: Math.ceil(0.2 * viewportHeight) }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: "tween", ease: "easeInOut" }}
                        exit={{ opacity: 0 }}
                    >
                        <div
                            className="relative py-4 px-8 h-full box-border flex items-center justify-center"
                            style={{
                                backgroundColor: CardColorMap.get(
                                    endingCard !== undefined
                                        ? gameModule.getCard(endingCard.id)
                                              .category
                                        : EventCategory.NONE,
                                ),
                            }}
                        >
                            <div>{ending}</div>
                            <div className="absolute top-[5%] left-[2%] w-full bg-decorate-border h-decorate" />
                            <div className="absolute top-[105%] left-[2%] w-full bg-decorate-border h-decorate" />
                            <div className="absolute top-[5%] -right-[2%] h-[40%] w-decorate bg-decorate-border" />
                            <div className="absolute top-[59%] -right-[2%] h-[2%] w-decorate bg-decorate-border" />
                            <div className="absolute top-[75%] -right-[2%] h-[30%] w-decorate bg-decorate-border" />
                            <div className="absolute top-[25%] left-[2%] h-[80%] w-decorate bg-decorate-border" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// #BD7E94
