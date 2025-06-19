import { motion, MotionStyle, Variants } from "motion/react";
import { useState, useEffect, FC, useMemo, useRef, ReactNode } from "react";

import "./index.css";
import Image from "../image";

import { getImagePath } from "@/types/images";
interface CircleTransitionProps {
    isActive: boolean;
    cx: number;
    cy: number;
    exitCx?: number;
    exitCy?: number;
    color?: string;
    duration?: number;
    waiting?: number;
    onComplete?: () => void;
    onEnter?: () => void;
    children?: ReactNode;
    hideLogo?: boolean;
}

export const CircleTransition: FC<CircleTransitionProps> = ({
    isActive,
    cx,
    cy,
    exitCx,
    exitCy,
    color = "#fff",
    duration = 0.6,
    waiting = 1,
    onComplete,
    onEnter,
    children,
    hideLogo = false,
}) => {
    const [phase, setPhase] = useState<"enter" | "exit" | null>(null);
    const enterTimer = useRef<number>(null);
    const exitTimer = useRef<number>(null);

    const maxRadius = useMemo(() => {
        const w = window.innerWidth,
            h = window.innerHeight;
        const dx = Math.max(cx, w - cx),
            dy = Math.max(cy, h - cy);
        return Math.hypot(dx, dy);
    }, [cx, cy]);

    const exitX = exitCx ?? cx;
    const exitY = exitCy ?? cy;
    const exitMaxRadius = useMemo(() => {
        const w = window.innerWidth,
            h = window.innerHeight;
        const dx = Math.max(exitX, w - exitX),
            dy = Math.max(exitY, h - exitY);
        return Math.hypot(dx, dy);
    }, [exitX, exitY]);

    useEffect(() => {
        if (isActive) setPhase("enter");
    }, [isActive]);

    useEffect(() => {
        const clean = () => {
            if (enterTimer.current) window.clearTimeout(enterTimer.current);
            if (exitTimer.current) window.clearTimeout(exitTimer.current);
        };

        if (phase === "enter") {
            enterTimer.current = window.setTimeout(async () => {
                const start = Date.now();

                if (onEnter) {
                    await onEnter();
                }

                const elapsed = Date.now() - start;
                const delay =
                    elapsed >= waiting * 1000 ? 0 : waiting * 1000 - elapsed;

                console.log("enter");

                exitTimer.current = window.setTimeout(() => {
                    setPhase("exit");
                }, delay);
            }, duration * 1000);
        } else if (phase === "exit") {
            exitTimer.current = window.setTimeout(() => {
                setPhase(null);
                onComplete?.();
            }, duration * 1000);
        }

        return clean;
    }, [phase, duration, setPhase, waiting]);

    if (!phase) return null;

    const variants: Variants = {
        enterStart: { "--r": `${maxRadius}px` },
        enterEnd: { "--r": `0px` },
        exitStart: { "--r": `0px` },
        exitEnd: { "--r": `${exitMaxRadius}px` },
    };

    return (
        <motion.div
            className="overlay fixed top-0 left-0 w-screen h-screen z-[9999] game-background"
            style={
                {
                    "--cx": `${cx}px`,
                    "--cy": `${cy}px`,
                    "--r": `${phase === "enter" ? maxRadius : 0}px`,
                    backgroundColor: color,
                } as MotionStyle
            }
            initial={phase === "enter" ? "enterStart" : "exitStart"}
            animate={phase === "enter" ? "enterEnd" : "exitEnd"}
            variants={variants}
            transition={{ duration, ease: "easeInOut" }}
        >
            {!hideLogo && (
                <div className="absolute top-[80%] left-[60%] w-[40vw]">
                    <Image src={getImagePath("launch-logo")} square={false} />
                </div>
            )}
            {children}
        </motion.div>
    );
};
