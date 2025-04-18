// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState, useEffect } from "react";

// 全屏类型定义
type FullscreenElement = Element & {
    webkitRequestFullscreen?: () => Promise<void>;
    mozRequestFullScreen?: () => Promise<void>;
    msRequestFullscreen?: () => Promise<void>;
    webkitEnterFullscreen?: () => Promise<void>; // iOS specific
};

type DocumentFullscreen = Document & {
    webkitExitFullscreen?: () => Promise<void>;
    mozCancelFullScreen?: () => Promise<void>;
    msExitFullscreen?: () => Promise<void>;
    webkitFullscreenElement?: Element; // iOS specific
};

export const useMobileFullscreen = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    // 检测全屏支持
    const isSupported = () => {
        const doc = document as DocumentFullscreen;
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

        // iOS 15+ 支持 webkitRequestFullscreen
        if (isIOS) {
            return true;
        }

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
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

        try {
            if (isIOS) {
                // iOS 特定处理
                if (el.webkitEnterFullscreen) {
                    // 某些 iOS 版本使用这个
                    await el.webkitEnterFullscreen();
                } else if (el.webkitRequestFullscreen) {
                    // iOS 15+ 使用这个
                    await el.webkitRequestFullscreen();
                } else {
                    // 回退到 video 元素的 webkitEnterFullscreen
                    if (el.tagName === "VIDEO") {
                        await (el as HTMLVideoElement).webkitEnterFullscreen();
                    } else {
                        console.warn("iOS 全屏功能仅支持 video 元素");
                        return;
                    }
                }
            } else if (el.requestFullscreen) {
                await el.requestFullscreen();
            } else if (el.webkitRequestFullscreen) {
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
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

        try {
            if (isIOS) {
                // iOS 可能需要特殊处理
                if (doc.webkitExitFullscreen) {
                    await doc.webkitExitFullscreen();
                } else {
                    // iOS 有时会自动退出全屏
                    setIsFullscreen(false);
                }
            } else if (doc.exitFullscreen) {
                await doc.exitFullscreen();
            } else if (doc.webkitExitFullscreen) {
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
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

            if (isIOS) {
                // iOS 检测全屏状态比较困难，可能需要其他方法
                // 这里使用一个简单的假设
                setIsFullscreen(!!doc.webkitFullscreenElement);
            } else {
                setIsFullscreen(
                    !!(
                        doc.fullscreenElement ||
                        doc.webkitFullscreenElement ||
                        doc.mozFullScreenElement ||
                        doc.msFullscreenElement
                    ),
                );
            }
        };

        document.addEventListener("fullscreenchange", handler);
        document.addEventListener("webkitfullscreenchange", handler);
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
