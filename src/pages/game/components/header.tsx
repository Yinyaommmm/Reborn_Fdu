import { FC, useEffect, useState } from "react";

import { HeaderIcon } from "./header-icon";

import { useSequenceAnimation } from "@/hooks/useSequenceAnimation";
import { $Data } from "@/store/data";
import { getImagePath } from "@/types/images";

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
        getImagePath("icon-h"),
        getImagePath("icon-l"),
        getImagePath("icon-a"),
        getImagePath("icon-c"),
        getImagePath("icon-m"),
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
                    <HeaderIcon
                        key={`header-${index}`}
                        iconImages={iconImages}
                        index={index}
                        levelAnimations={levelAnimations}
                        progressColor={progressColor}
                        item={item}
                    />
                ),
            )}
        </div>
    );
};

GameHeader.displayName = "GameHeader";
export default GameHeader;
