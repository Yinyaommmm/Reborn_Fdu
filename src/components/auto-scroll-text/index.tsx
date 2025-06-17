import { animate } from "motion";
import { FC, HTMLProps, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import "./index.css";

interface AutoScrollTextProps extends HTMLProps<HTMLDivElement> {
    delay?: number;
    duration?: number;
}

export const AutoScrollText: FC<AutoScrollTextProps> = ({
    delay = 0,
    duration = 5,
    children,
    className,
    ...rest
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const maxScroll = el.scrollHeight - el.clientHeight;
        if (maxScroll <= 0) return;

        const controls = animate(0, maxScroll, {
            duration: duration,
            ease: "linear",
            // repeat: Infinity,
            // repeatType: "loop",
            onUpdate(latest) {
                el.scrollTop = latest;
            },
            delay: delay,
        });

        return () => controls.stop();
    }, [delay, duration]);

    return (
        <div
            ref={containerRef}
            className={twMerge("no-scroll-bar", className)}
            {...rest}
        >
            {children}
        </div>
    );
};
