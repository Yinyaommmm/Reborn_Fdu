// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState, useEffect } from "react";

// 全屏类型定义
type FullscreenElement = Element & {
    webkitRequestFullscreen?: () => Promise<void>;
    mozRequestFullScreen?: () => Promise<void>;
    msRequestFullscreen?: () => Promise<void>;
};

type DocumentFullscreen = Document & {
    webkitExitFullscreen?: () => Promise<void>;
    mozCancelFullScreen?: () => Promise<void>;
    msExitFullscreen?: () => Promise<void>;
};

export const useMobileFullscreen = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    // 检测全屏支持
    const isSupported = () => {
        const doc = document as DocumentFullscreen;
        return !!(
            doc.fullscreenEnabled ||
            doc.webkitFullscreenEnabled ||
            doc.mozFullScreenEnabled ||
            doc.msFullscreenEnabled
        );
    };

    // 进入全屏
    const enterFullscreen = async (element?: HTMLElement) => {
        if (!isSupported()) return;

        const el: FullscreenElement = element || document.documentElement;

        try {
            if (el.requestFullscreen) {
                await el.requestFullscreen();
            } else if (el.webkitRequestFullscreen) {
                // iOS Safari
                await el.webkitRequestFullscreen();
            } else if (el.mozRequestFullScreen) {
                await el.mozRequestFullScreen();
            } else if (el.msRequestFullscreen) {
                await el.msRequestFullscreen();
            }
            setIsFullscreen(true);
        } catch (error) {
            console.error("全屏请求失败:", error);
        }
    };

    // 退出全屏
    const exitFullscreen = async () => {
        const doc = document as DocumentFullscreen;

        try {
            if (doc.exitFullscreen) {
                await doc.exitFullscreen();
            } else if (doc.webkitExitFullscreen) {
                // iOS Safari
                await doc.webkitExitFullscreen();
            } else if (doc.mozCancelFullScreen) {
                await doc.mozCancelFullScreen();
            } else if (doc.msExitFullscreen) {
                await doc.msExitFullscreen();
            }
            setIsFullscreen(false);
        } catch (error) {
            console.error("退出全屏失败:", error);
        }
    };

    // 监听全屏变化
    useEffect(() => {
        const handler = () => {
            const doc = document as DocumentFullscreen;
            setIsFullscreen(
                !!(
                    doc.fullscreenElement ||
                    doc.webkitFullscreenElement ||
                    doc.mozFullScreenElement ||
                    doc.msFullscreenElement
                ),
            );
        };

        document.addEventListener("fullscreenchange", handler);
        document.addEventListener("webkitfullscreenchange", handler); // iOS
        document.addEventListener("mozfullscreenchange", handler);
        document.addEventListener("MSFullscreenChange", handler);

        return () => {
            document.removeEventListener("fullscreenchange", handler);
            document.removeEventListener("webkitfullscreenchange", handler);
            document.removeEventListener("mozfullscreenchange", handler);
            document.removeEventListener("MSFullscreenChange", handler);
        };
    }, []);

    return { isFullscreen, enterFullscreen, exitFullscreen, isSupported };
};
