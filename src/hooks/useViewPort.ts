import { useState, useEffect } from "react";

export const useViewport = () => {
    const [viewport, setViewport] = useState({
        vw: window.innerWidth,
        vh: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setViewport({
                vw: window.innerWidth,
                vh: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {
        /** 视口宽度（px），对应 100vw */
        vw: viewport.vw,
        /** 视口高度（px），对应 100vh */
        vh: viewport.vh,
        /** 将像素转换为 vw 单位 */
        pxToVw: (px: number) => (px / viewport.vw) * 100,
        /** 将像素转换为 vh 单位 */
        pxToVh: (px: number) => (px / viewport.vh) * 100,
    };
};
