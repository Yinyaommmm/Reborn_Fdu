import { FC } from "react";

import { useMobileFullscreen } from "@/hooks/useMobileFullScreen";

const GameHeader: FC = () => {
    const { isFullscreen, enterFullscreen, exitFullscreen, isSupported } =
        useMobileFullscreen();
    return (
        <div className="relative w-full h-[8vh] bg-gray-300 z-50">
            <button
                className="bg-black text-white text-2xl p-3"
                onClick={() =>
                    isFullscreen ? exitFullscreen() : enterFullscreen()
                }
            >
                全屏
            </button>
        </div>
    );
};

GameHeader.displayName = "GameHeader";
export default GameHeader;
