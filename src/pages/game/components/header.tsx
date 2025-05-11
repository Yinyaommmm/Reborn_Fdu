import { motion } from "motion/react";
import { FC, useEffect, useState } from "react";

import Image from "@/components/image";
import { useSequenceAnimation } from "@/hooks/useSequenceAnimation";
import { $Data } from "@/store/data";

const levels = ["D", "D+", "C", "C+", "B", "B+", "A", "A+", "S", "S+"];
const getLevel = (level: number) => {
    return levels[Math.trunc(level / 10) > 9 ? 9 : Math.trunc(level / 10)];
};

const GameHeader: FC = () => {
    const honesty = $Data.use((state) => state.honesty);
    const lucky = $Data.use((state) => state.lucky);
    const academic = $Data.use((state) => state.academic);
    const creativity = $Data.use((state) => state.creativity);
    const management = $Data.use((state) => state.management);
    const iconImages = [
        "/png/icon-h.png",
        "/png/icon-l.png",
        "/png/icon-a.png",
        "/png/icon-c.png",
        "/png/icon-m.png",
    ];
    const progressColor = [
        "#A79DD1",
        "#BAC984",
        "#87AFD6",
        "#FBD169",
        "#F58079",
    ];
    const [levelFrames, setLevelFrames] = useState<string[]>([
        getLevel(honesty),
        getLevel(lucky),
        getLevel(academic),
        getLevel(creativity),
        getLevel(management),
    ]);

    const levelAnimations = [
        useSequenceAnimation("H", levelFrames[0], 730),
        useSequenceAnimation("L", levelFrames[1], 730),
        useSequenceAnimation("A", levelFrames[2], 730),
        useSequenceAnimation("C", levelFrames[3], 730),
        useSequenceAnimation("M", levelFrames[4], 730),
    ];

    useEffect(() => {
        setLevelFrames((prev) => {
            if (getLevel(honesty) !== prev[0]) {
                levelAnimations[0].trigger();
            }
            if (getLevel(lucky) !== prev[1]) {
                levelAnimations[1].trigger();
            }
            if (getLevel(academic) !== prev[2]) {
                levelAnimations[2].trigger();
            }
            if (getLevel(creativity) !== prev[3]) {
                levelAnimations[3].trigger();
            }
            if (getLevel(management) !== prev[4]) {
                levelAnimations[4].trigger();
            }
            return [
                getLevel(honesty),
                getLevel(lucky),
                getLevel(academic),
                getLevel(creativity),
                getLevel(management),
            ];
        });
    }, [honesty, lucky, academic, creativity, management]);

    return (
        <div className="relative w-full h-[9vh] bg-[#EBE6D3] z-50 flex items-center justify-evenly">
            {[honesty, lucky, academic, creativity, management].map(
                (item, index) => (
                    <div
                        key={`header-${index}`}
                        className="flex flex-col items-center gap-0.5"
                    >
                        <div
                            className="relative w-[10vw] h-[10vw] bg-center bg-cover"
                            style={{
                                backgroundImage: `url(${iconImages[index]})`,
                            }}
                        >
                            <div className="absolute right-0 bottom-0 w-[55%] h-[55%] translate-x-[85%]">
                                <Image src={levelAnimations[index].frame} />
                            </div>
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
                ),
            )}
        </div>
    );
};

GameHeader.displayName = "GameHeader";
export default GameHeader;
