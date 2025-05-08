import { FC, useEffect } from "react";

import { CircularTransitionTrigger } from "@/hooks/useCircularTransition";
import { useFontLoader } from "@/hooks/useFontLoader";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import { ImageUrls } from "@/types/images";

export interface LaunchProps {
    trigger: CircularTransitionTrigger;
}

export const Launch: FC<LaunchProps> = (props) => {
    const { trigger } = props;

    const fontFinished = useFontLoader("CursiveFont", "font/cursive-font.ttf");
    const {
        progress,
        done: imageFinished,
        startLoading,
    } = useImagePreloader(ImageUrls);

    useEffect(() => {
        if (fontFinished && !imageFinished) {
            startLoading();
        }
    }, [fontFinished]);

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            {fontFinished && imageFinished && (
                <div
                    onClick={(e) => {
                        trigger(e, "birth");
                    }}
                >
                    开始游戏
                </div>
            )}
            {!fontFinished && !imageFinished && "Loading Font..."}
            {fontFinished && !imageFinished && `Loading Image: ${progress}%`}
        </div>
    );
};
