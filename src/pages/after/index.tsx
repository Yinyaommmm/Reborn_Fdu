import { HTMLMotionProps } from "motion/react";
import { FC, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { useTapHandler } from "./hooks/useTapHandler";

import { IconArrowButton, IconSkip } from "@/assets";
import Image from "@/components/image";
import { useAudio } from "@/hooks/useAudio";
import { CircularTransitionTrigger } from "@/hooks/useCircularTransition";
import { useViewport } from "@/hooks/useViewPort";
import { gameModule } from "@/packages/game-module";
import { YearItem } from "@/stage2/stage2";
import { getImagePath } from "@/types/images";
import "./index.css";

interface AfterProps extends HTMLMotionProps<"div"> {
    trigger?: CircularTransitionTrigger;
}

export const After: FC<AfterProps> = ({ trigger }) => {
    const { play: playClick } = useAudio("audio/01 点击.wav", 1);
    const { vh: viewportHeight } = useViewport();
    const height = Math.ceil(0.035 * viewportHeight);
    const [items, setItems] = useState<YearItem[]>([]);
    const [displayItems, setDisplayItems] = useState<YearItem[]>([]);
    const [autoPlay, setAutoPlay] = useState<number>(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const autoPlayRef = useRef<NodeJS.Timeout>(undefined);
    const { play: playTriggerEvent } = useAudio(
        "audio/06 二阶段事件产生.wav",
        1,
    );

    useTapHandler(items, setDisplayItems);

    const handleOnclickAutoPlay = () => {
        playClick();
        if (autoPlay === 0) {
            setAutoPlay(1);
        } else if (autoPlay === 1) {
            setAutoPlay(2);
        } else {
            setAutoPlay(0);
        }
    };

    useEffect(() => {
        gameModule.initStage2();
        setItems(gameModule.useStage2());
    }, []);

    useEffect(() => {
        const el = containerRef.current;
        if (el) {
            el.scrollTo({
                top: el.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [displayItems]);

    useEffect(() => {
        if (autoPlay > 0) {
            if (autoPlayRef.current !== undefined) {
                clearInterval(autoPlayRef.current);
            }
            autoPlayRef.current = setInterval(() => {
                setDisplayItems((prev) => {
                    if (prev.length === items.length) {
                        setAutoPlay(0);
                        if (autoPlayRef.current !== undefined) {
                            clearInterval(autoPlayRef.current);
                        }
                    }
                    playTriggerEvent();
                    return prev.length < items.length
                        ? [...prev, items[prev.length]]
                        : prev;
                });
            }, 1100 / autoPlay);
        } else {
            if (autoPlayRef.current !== undefined) {
                clearInterval(autoPlayRef.current);
            }
        }
    }, [autoPlay, items]);

    return (
        <div className="relative w-screen h-screen game-background">
            <Image
                className="w-full"
                src={getImagePath("after-decoration")}
                square={false}
            />
            <div
                className="relative"
                style={{
                    height: `80vh`,
                    maskImage:
                        "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
                    maskMode: "alpha",
                    WebkitMaskImage:
                        "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
                }}
            >
                <div className="absolute left-[6%] top-0 w-decorate h-full bg-[#C87B6B]" />
                <div
                    className="max-h-[95%] px-[6%] overflow-y-scroll"
                    ref={containerRef}
                >
                    <div className="h-[4vh]" />
                    {displayItems.map((i, index) => (
                        <div key={`after-item-${index}`}>
                            <div className="flex items-center -translate-x-[1.5%]">
                                <div className="w-[3%] aspect-square bg-[#C87B6B]" />
                                <div
                                    className="bg-[#D4BC9F] min-w-[22%] flex items-center justify-center text-white text-sm"
                                    style={{ height }}
                                >
                                    {i.year}岁
                                </div>
                                <div className="h-full flex flex-col justify-between">
                                    <div
                                        className="w-0 h-0"
                                        style={{
                                            borderTop: `${height / 2}px solid #D4BC9F`,
                                            borderRight: `${height / 2}px solid transparent`,
                                        }}
                                    />
                                    <div
                                        className="w-0 h-0"
                                        style={{
                                            borderBottom: `${height / 2}px solid #D4BC9F`,
                                            borderRight: `${height / 2}px solid transparent`,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="pl-[15%] pr-[5%] py-[4%] text-sm">
                                {i.detail}
                            </div>
                        </div>
                    ))}
                    <div className="h-[4vh]" />
                </div>
            </div>
            <div className="flex items-center justify-end -translate-y-[100%]">
                <div className="mr-[2%] flex items-end">
                    <IconArrowButton
                        className={twMerge(
                            "text-5xl -scale-x-100",
                            autoPlay > 0 ? "text-[#C6796C]" : "text-[#7097B4]",
                        )}
                        onClick={() => {
                            handleOnclickAutoPlay();
                        }}
                    />
                    {autoPlay > 0 && (
                        <div className="-translate-x-[50%]">x{autoPlay}</div>
                    )}
                </div>
                {items.length === displayItems.length && (
                    <div
                        className="mr-[5%]"
                        onClick={(e) => {
                            playClick();
                            trigger?.(e, "end");
                        }}
                    >
                        <IconSkip className="text-6xl text-[#7897B5] transition-colors" />
                    </div>
                )}
            </div>
        </div>
    );
};
