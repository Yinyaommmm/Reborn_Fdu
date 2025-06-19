import {
    animate,
    useMotionValue,
    useTransform,
    AnimatePresence,
} from "motion/react";
import {
    FC,
    ReactNode,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from "react";

import GameCard from "./card";
import { CardBackMap, CardColorMap } from "../utils/colors";

import Image from "@/components/image";
import { FiveProps } from "@/game/gamesys";
import {
    CircularTransitionTrigger,
    useCircularTransition,
} from "@/hooks/useCircularTransition";
import { useViewport } from "@/hooks/useViewPort";
import { gameModule, PickRes } from "@/packages/game-module";
import { GoCard } from "@/pages/birth/components/go-card";
import { $Data } from "@/store/data";
import { $Game } from "@/store/game";
import { EventCategory } from "@/type/type";
import { getImagePath } from "@/types/images";
import { calYFromDeltaX } from "@/utils/circle";

interface GameCardsProps {
    trigger?: CircularTransitionTrigger;
}

export const semester2Title = (semester: number) => {
    switch (semester) {
        case 0:
            return "报道";
        case 1:
            return "大一";
        case 2:
            return "大二";
        case 3:
            return "大三";
        case 4:
            return "大四";
        case 5:
            return "博一";
        case 6:
            return "博二";
        case 7:
            return "博三";
        case 8:
            return "博四";
        case 9:
            return "博五";
        default:
            return "";
    }
};

const GameCards: FC<GameCardsProps> = ({ trigger: triggerUI }) => {
    // const [cards, setCards] = useState<number[]>([0, 1, 2, 3]);
    const cards = $Data.use((state) => state.cards);
    const setCards = (updater: SetStateAction<(PickRes | undefined)[]>) => {
        $Data.update("update cards", (draft) => {
            draft.cards =
                typeof updater === "function"
                    ? (
                          updater as (
                              prev: (PickRes | undefined)[],
                          ) => (PickRes | undefined)[]
                      )(draft.cards)
                    : updater;
        });
    };
    const [activeIndex] = useState(0);
    const [showEnding, setShowEnding] = useState(false);
    const semester = $Data.use((state) => state.semester);
    const setSemester = (updater: SetStateAction<number>) => {
        $Data.update("update cards", (draft) => {
            draft.semester =
                typeof updater === "function"
                    ? (updater as (prev: number) => number)(draft.semester)
                    : updater;
        });
    };

    const touchClickRef = useRef<boolean>(false);
    const { trigger, TransitionComponent } = useCircularTransition(
        () => {
            // console.log("trigger 新学期");
            // newSemesterRef.current = false;
            // gameModule.nextSemester();
            // setSemester((prev) => prev + 1);
            newSemester();
        },
        0.6,
        2,
        "cards",
    );

    const isAnimating = $Game.use((state) => state.isCardAnimating);
    const setIsAnimating = (v: boolean) => {
        $Game.update("update isAnimating", (draft) => {
            draft.isCardAnimating = v;
        });
    };
    const exitDirection = $Game.use((state) => state.exitDirection);
    const choiceTrigger = $Game.use((state) => state.trigger);

    const { vw: viewportWidth } = useViewport();
    const slideDistanceScale = 2;
    const radius = 10000;
    const xExit = viewportWidth;
    const rightExit = calYFromDeltaX(radius, -8, xExit);
    const leftExit = calYFromDeltaX(radius, -8, -xExit);
    const rights = [32, 32, 32];
    const tops = [0, 0, 0];

    const activeRotate = 8;
    const rotates = [`-${activeRotate}deg`, "-2deg", "-14deg"];
    const triggerDistance = viewportWidth / 3;

    const x = useMotionValue(0);
    const delta = useTransform(x, (value) => {
        return calYFromDeltaX(radius, -activeRotate, value);
    });
    const rotate = useTransform(delta, (v) => v.rotate);
    const y = useTransform(delta, (v) => -v.deltaY);

    const touchStartX = useMotionValue(0);
    const isDragging = useMotionValue(false);

    const [description, setDescription] = useState<ReactNode>(undefined);

    const [title, setTitle] = useState<string>("");
    const initialRef = useRef<boolean>(false);
    const newSemesterRef = useRef<boolean>(false);
    const [endCard, setEndCard] = useState<boolean>(false);

    const handleChoose = (delta: FiveProps) => {
        $Data.update("choose", (draft) => {
            draft.honesty += delta.H;
            draft.academic += delta.A;
            draft.creativity += delta.C;
            draft.lucky += delta.L;
            draft.management += delta.M;
        });
    };

    const newSemester = () => {
        const event1 = gameModule.pick();
        const event2 = gameModule.pick();
        const event3 = gameModule.pick();

        $Data.update("update events", (draft) => {
            draft.cards = [event1, event2, event3];
        });

        setDescription(gameModule.info()?.mainText);
        setTitle(gameModule.info()?.title ?? "");
        console.log("new", event1);
        console.log("new", event2);
        console.log("new", event3);
    };

    useEffect(() => {
        if (!initialRef.current) {
            newSemester();
            initialRef.current = true;
        }
    }, []);

    const handleSwipeComplete = () => {
        setIsAnimating(true);
        // 更新卡片队列
        const next: (PickRes | undefined)[] = [];
        // 选择选项
        let res = null;
        if (exitDirection === "left") {
            res = gameModule.resolve("B");
        } else {
            res = gameModule.resolve("A");
        }
        $Data.update("update ending", (draft) => {
            draft.ending = res?.endingText ?? "";
        });
        $Game.update("update ending type", (draft) => {
            if (res?.resType) draft.endingType = res?.resType;
        });
        // 卡片颜色相关
        $Data.update("set ending card", (draft) => {
            draft.endingCard = draft.cards[0];
            draft.toolUsing = false;
            draft.upContext = "概率UP";
        });

        // 抽卡
        if (!newSemesterRef.current) {
            let isJump = true;
            let jumpCount = 0;
            while (isJump && !newSemesterRef.current) {
                const pick = gameModule.pick();
                if (pick === undefined) break;
                next.push(pick);
                newSemesterRef.current = pick.shouldMoveToNextYear;
                isJump = gameModule.jump() ?? true;
                jumpCount += 1;
            }
            // 更新 UI
            setCards((prev) => {
                if (jumpCount > prev.length) {
                    return [...next.slice(jumpCount - prev.length)];
                }
                return [...prev.slice(jumpCount), ...next];
            });
            console.log("new", ...next, "jump", jumpCount);
        } else {
            let isJump = true;
            let jumpCount = 0;
            while (isJump && jumpCount <= cards.length) {
                isJump = gameModule.jump() ?? true;
                jumpCount += 1;
            }
            // 更新 UI
            setCards((prev) => {
                if (jumpCount > prev.length) {
                    return [...next.slice(jumpCount - prev.length)];
                }
                return [...prev.slice(jumpCount), ...next];
            });
        }
        setDescription(gameModule.info()?.mainText);
        setTitle(gameModule.info()?.title ?? "");

        // 数值更新
        if (res !== undefined) {
            handleChoose(res?.deltaProps);
        }
        // 重置动画状态
        setShowEnding(true);
        setTimeout(() => {
            setIsAnimating(false);
            x.set(0);
        }, 500);
    };

    useEffect(() => {
        if (choiceTrigger) {
            handleSwipeComplete();
            $Game.update("solve trigger", (draft) => {
                draft.trigger = false;
            });
        }
    }, [choiceTrigger]);

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            if (isAnimating || showEnding) return;
            e.preventDefault();
            isDragging.set(true);
            touchStartX.set(e.touches[0].clientX);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isDragging.get() || isAnimating || showEnding) return;
            e.preventDefault();
            const deltaX = e.touches[0].clientX - touchStartX.get();
            // if (deltaX > 0) setExitDirection("right");
            // else setExitDirection("left");
            x.set(deltaX * slideDistanceScale);
            if (deltaX >= triggerDistance || deltaX <= -triggerDistance) {
                handleSwipeComplete();
                isDragging.set(false);
            }
        };

        const handleTouchEnd = () => {
            if (!isDragging.get() || isAnimating || showEnding) return;
            isDragging.set(false);
            animate(x, 0, {
                type: "tween",
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
    }, [isAnimating, showEnding]);

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            if (!showEnding) return;
            e.preventDefault();
            touchClickRef.current = true;
        };
        const handleTouchEnd = (e: TouchEvent) => {
            if (!showEnding || !touchClickRef.current) return;

            if (cards.length === 0) {
                console.log("trigger 新学期");
                newSemesterRef.current = false;
                gameModule.nextSemester();
                setSemester((prev) => prev + 1);
                // newSemester();
            }
            if (!gameModule.alive()) {
                console.log("trigger 游戏结束");
                $Data.update("update ending", (draft) => {
                    draft.eduDestination = gameModule.end().eduDestination;
                    draft.gradDestination = gameModule.end().gradDestination;
                });
                setEndCard(true);
                // triggerUI?.(e, "graduation");
            }
            if (cards.length === 0 && gameModule.alive()) {
                trigger(e);
            }

            console.log("trigger 游戏继续");

            e.preventDefault();
            touchClickRef.current = false;
            setShowEnding(false);
            setIsAnimating(true);
            setTimeout(() => {
                setIsAnimating(false);
            }, 300);
        };

        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [showEnding, cards.length]);

    return (
        <div className="relative h-[60vh] mt-[10vw] w-full">
            {TransitionComponent}
            <AnimatePresence mode="sync">
                {cards.slice(0, 3).map((card, index) => (
                    <GameCard
                        key={`${card?.id}-${card?.indexInYear}`}
                        className="absolute perspective-[1000px] transform-3d shadow-md"
                        initial={{
                            rotateY:
                                !showEnding && index === activeIndex
                                    ? "0deg"
                                    : "180deg",
                            right: 200,
                            top: -1000,
                            rotate: index === activeIndex ? "-8deg" : "-2deg",
                        }}
                        animate={{
                            rotateY:
                                !showEnding && index === activeIndex
                                    ? "0deg"
                                    : "180deg",
                            right: rights[index - activeIndex],
                            top: tops[index - activeIndex],
                            rotate: rotates[index - activeIndex],
                        }}
                        style={{
                            ...(!showEnding &&
                            index === activeIndex &&
                            !isAnimating
                                ? { x, y, rotate }
                                : undefined),
                        }}
                        backgroundColor={CardColorMap.get(
                            card?.id !== undefined
                                ? gameModule.getCard(card.id).category
                                : EventCategory.NONE,
                        )}
                        exit={{
                            transition: { duration: 0.4 },
                            ...(exitDirection === "right"
                                ? {
                                      x: xExit,
                                      y: -rightExit.deltaY,
                                      rotate: rightExit.rotate,
                                  }
                                : {
                                      x: -xExit,
                                      y: -leftExit.deltaY,
                                      rotate: leftExit.rotate,
                                  }),
                            zIndex: 50,
                        }}
                        transition={{
                            type: "tween",
                            ease: "easeInOut",
                            duration: 0.3,
                            top: { duration: 0.5 },
                            right: { duration: 0.5 },
                            opacity: { duration: 0.5 },
                        }}
                        customZIndex={3 - index}
                        border={activeIndex === index}
                        title={`「${semester2Title(semester)}」${title}`}
                        backChildren={
                            <Image
                                className="w-full h-full"
                                square={false}
                                src={
                                    CardBackMap.get(
                                        card?.id !== undefined
                                            ? gameModule.getCard(card.id)
                                                  .category
                                            : EventCategory.NONE,
                                    ) ?? ""
                                }
                            />
                        }
                    >
                        <div className="w-full h-full flex items-center justify-center flex-col gap-4">
                            <div className="w-[90%] p-2 bg-white ml-2 mt-2">
                                <Image
                                    src={
                                        card === undefined
                                            ? getImagePath("")
                                            : getImagePath(
                                                  gameModule.getCard(card.id)
                                                      .imgSrc,
                                              )
                                    }
                                />
                            </div>
                            <div className="px-4 text-sm ml-2">
                                {description}
                            </div>
                        </div>
                    </GameCard>
                ))}
                {endCard && (
                    <GoCard
                        isGraduate
                        onClick={(e) => {
                            triggerUI?.(e, "graduation");
                        }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

GameCards.displayName = "GameCards";
export default GameCards;
