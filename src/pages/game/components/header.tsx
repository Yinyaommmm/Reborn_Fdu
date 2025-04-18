import { FC } from "react";

import { useMobileFullscreen } from "@/hooks/useMobileFullScreen";
import { useViewport } from "@/hooks/useViewPort";

const GameHeader: FC = () => {
    const { isFullscreen, enterFullscreen, exitFullscreen, isSupported } =
        useMobileFullscreen();
    const { vw, vh } = useViewport();
    return (
        <div className="relative w-full h-[8vh] bg-gray-300 z-50 flex items-center gap-4">
            <button
                className="bg-black text-white text-2xl p-3"
                onClick={() =>
                    isFullscreen ? exitFullscreen() : enterFullscreen()
                }
            >
                {isSupported() ? "全屏" : "不支持"}
            </button>
            <p>
                当前视口：{vw}px x {vh}px
            </p>
        </div>
    );
};

GameHeader.displayName = "GameHeader";
export default GameHeader;
