import { FC, useEffect } from "react";

import { CircularTransitionTrigger } from "@/hooks/useCircularTransition";
import { useFontLoader } from "@/hooks/useFontLoader";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import { $Debug } from "@/store/debug";
import { ImageUrls } from "@/types/images";

export interface LaunchProps {
    trigger: CircularTransitionTrigger;
}

export const Launch: FC<LaunchProps> = (props) => {
    const { trigger } = props;
    const debug = $Debug.use((state) => state.isDebug);

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
            <div className="fixed top-0 left-0 flex items-center">
                Debug:{" "}
                <input
                    className="ml-2"
                    type="checkbox"
                    checked={debug}
                    onChange={(e) => {
                        $Debug.update("trigger debug", (draft) => {
                            draft.isDebug = e.target.checked;
                        });
                    }}
                />
            </div>
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
