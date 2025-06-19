import { HTMLMotionProps, motion } from "motion/react";
import { FC, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import Image from "@/components/image";
import { useAudio } from "@/hooks/useAudio";
import { CircularTransitionTrigger } from "@/hooks/useCircularTransition";
import { useFastClick } from "@/hooks/useFastClick";
import { getImagePath } from "@/types/images";

export interface IntroductionProps extends HTMLMotionProps<"div"> {
    trigger?: CircularTransitionTrigger;
}

export const Introduction: FC<IntroductionProps> = (props) => {
    const { trigger, ...rest } = props;
    const { play: playStoryboard } = useAudio("audio/02 分镜.wav", 1);
    const { play: playCrush } = useAudio("audio/撞车.mp3", 1);
    const { play: playCar } = useAudio("audio/汽车鸣笛.wav", 1);
    const { play: playClock } = useAudio("audio/闹铃.mp3", 1);
    const { play: playRain } = useAudio("audio/雨.mp3", 1);
    const { play: playBird } = useAudio("audio/鸟叫.mp3", 1);
    const { play: playClassroomAlert } = useAudio("audio/上课铃.mp3", 1);

    const [current, setCurrent] = useState<number>(1);

    const { onClick, onTouchEnd } = useFastClick((e) => {
        let isTrigger = false;
        setCurrent((prev) => {
            if (prev >= 7) {
                isTrigger = true;
                return prev;
            }
            playStoryboard();
            return prev + 1;
        });
        if (isTrigger) trigger?.(e, "birth");
    });

    useEffect(() => {
        if (current === 2) {
            playRain();
        }
        if (current === 4) {
            playCar();
            playCrush();
        }
        if (current === 5) {
            playBird();
        }
        if (current === 6) {
            playClock();
        }
        if (current === 7) {
            playClassroomAlert();
        }
    }, [current]);

    return (
        <motion.div
            {...rest}
            onClick={onClick}
            onTouchEnd={onTouchEnd}
            className="w-screen h-screen game-background"
        >
            {Array.from(
                { length: current > 4 ? 4 : current },
                (_, i) => i + 1,
            ).map((i) => (
                <motion.div
                    key={`introduction-${i}`}
                    className="absolute top-0 left-0 w-full h-full flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                >
                    <Image
                        className="relative"
                        src={getImagePath(`introduction/introduction-${i}`)}
                        square={false}
                        adjustHeight={false}
                        adjustWidth={true}
                    ></Image>
                </motion.div>
            ))}
            {Array.from(
                { length: current > 4 ? 4 : current },
                (_, i) => i + 1,
            ).map((i) => (
                <motion.div
                    key={`introduction-text-${i}`}
                    className="absolute top-0 left-0 w-full h-full flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                >
                    <Image
                        className="relative"
                        src={getImagePath(
                            `introduction/introduction-text-${i}`,
                        )}
                        square={false}
                        adjustHeight={false}
                        adjustWidth={true}
                    ></Image>
                </motion.div>
            ))}
            {Array.from(
                { length: current > 4 ? current - 4 : 0 },
                (_, i) => i + 5,
            ).map((i) => (
                <motion.div
                    key={`introduction-${i}`}
                    className={twMerge(
                        "absolute top-0 left-0 w-full h-full flex items-center",
                        i === 5 && "game-background",
                    )}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                >
                    <Image
                        className="relative"
                        src={getImagePath(`introduction/introduction-${i}`)}
                        square={false}
                        adjustHeight={false}
                        adjustWidth={true}
                    ></Image>
                </motion.div>
            ))}
            {Array.from(
                { length: current > 4 ? current - 4 : 0 },
                (_, i) => i + 5,
            ).map((i) => (
                <motion.div
                    key={`introduction-text-${i}`}
                    className="absolute top-0 left-0 w-full h-full flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                >
                    <Image
                        className="relative"
                        src={getImagePath(
                            `introduction/introduction-text-${i}`,
                        )}
                        square={false}
                        adjustHeight={false}
                        adjustWidth={true}
                    ></Image>
                </motion.div>
            ))}
        </motion.div>
    );
};
