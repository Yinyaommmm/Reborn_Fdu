import {
    useMotionTemplate,
    animate,
    useMotionValue,
    useTransform,
    AnimatePresence,
} from "motion/react";
import { FC, useEffect, useState } from "react";

import GameCard from "./card";

import { calYFromDeltaX } from "@/utils/circle";

const viewportWidth = window.innerWidth;
const slideDistanceScale = 2;
const rightExit = calYFromDeltaX(viewportWidth, -8, 1000);
const radius = 10000;
const rights = [24, 24, 24];
const tops = [0, 0, 0];
const colors = ["#EFDC89", "#D8B79D", "#B7B6CA"];
const activeRotate = 8;
const rotates = [`-${activeRotate}deg`, "-2deg", "-14deg"];
const triggerDistance = viewportWidth / 3;

const GameCards: FC = () => {
    const [cards, setCards] = useState<number[]>([0, 1, 2, 3]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const x = useMotionValue(0);
    const delta = useTransform(x, (value) => {
        return calYFromDeltaX(radius, -activeRotate, value);
    });
    const rotate = useTransform(delta, (v) => v.rotate);
    const y = useTransform(delta, (v) => -v.deltaY);

    const touchStartX = useMotionValue(0);
    const isDragging = useMotionValue(false);

    const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) rotate(${rotate}deg)`;

    const handleSwipeComplete = () => {
        setIsAnimating(true);
        // 更新卡片队列
        setCards((prev) => [...prev.slice(1), prev[prev.length - 1] + 1]);
        // 重置动画状态
        setTimeout(() => {
            setActiveIndex(0);
            setIsAnimating(false);
        }, 500);
    };

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            if (isAnimating) return;
            isDragging.set(true);
            touchStartX.set(e.touches[0].clientX);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isDragging.get() || isAnimating) return;

            const deltaX = e.touches[0].clientX - touchStartX.get();
            x.set(deltaX * slideDistanceScale);
            if (
                deltaX * slideDistanceScale >= triggerDistance ||
                deltaX * slideDistanceScale <= -triggerDistance
            ) {
                handleSwipeComplete();
                isDragging.set(false);
                x.set(0);
            }
        };

        const handleTouchEnd = () => {
            if (!isDragging.get() || isAnimating) return;
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
    }, [isAnimating]);

    return (
        <div className="relative h-[60vh] mt-[15vw] w-full">
            <AnimatePresence mode="popLayout">
                {cards.slice(0, 3).map((card, index) => (
                    <GameCard
                        key={card}
                        className="absolute perspective-[1000px] transform-3d"
                        initial={{
                            rotateY: index === activeIndex ? "0deg" : "180deg",
                            right: 200,
                            top: -1000,
                            opacity: 0,
                            rotate: index === activeIndex ? "-8deg" : "-2deg",
                        }}
                        animate={{
                            rotateY: index === activeIndex ? "0deg" : "180deg",
                            right: rights[index - activeIndex],
                            top: tops[index - activeIndex],
                            opacity: 1,
                            rotate: rotates[index - activeIndex],
                        }}
                        style={{
                            transform:
                                index === activeIndex && !isAnimating
                                    ? transform
                                    : undefined,
                        }}
                        backgroundColor={colors[card % 3]}
                        exit={{
                            transform: `translateX(1000px) translateY(${-rightExit.deltaY}px) rotate(${rightExit.rotate}deg)`,
                        }}
                        transition={{
                            duration: 0.3,
                            top: { duration: 0.5 },
                            right: { duration: 0.5 },
                            opacity: { duration: 0.5 },
                        }}
                        customZIndex={3 - index}
                        border={activeIndex === index}
                    >
                        {card}
                    </GameCard>
                ))}
            </AnimatePresence>
        </div>
    );
};

GameCards.displayName = "GameCards";
export default GameCards;
