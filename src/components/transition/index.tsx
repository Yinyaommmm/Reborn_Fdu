import { motion, Variants } from "motion/react";
import { useState, useEffect, FC, useMemo } from "react";

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
}

export const CircleTransition: FC<CircleTransitionProps> = ({
    isActive,
    cx,
    cy,
    exitCx,
    exitCy,
    color = "#fff",
    duration = 0.6,
    waiting = 0,
    onComplete,
}) => {
    const [phase, setPhase] = useState<"enter" | "exit" | null>(null);

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
        if (phase === "enter") {
            const t = setTimeout(
                () => setPhase("exit"),
                duration * 1000 + waiting * 1000,
            );
            return () => clearTimeout(t);
        }
        if (phase === "exit") {
            const t = setTimeout(() => {
                setPhase(null);
                onComplete?.();
            }, duration * 1000);
            return () => clearTimeout(t);
        }
    }, [phase, duration, onComplete]);

    // define clip-path variants
    const variants: Variants = {
        enterStart: {
            clipPath: `circle(0px at ${cx}px ${cy}px)`,
        },
        enterEnd: {
            clipPath: `circle(${maxRadius}px at ${cx}px ${cy}px)`,
        },
        exitStart: {
            clipPath: `circle(${exitMaxRadius}px at ${exitX}px ${exitY}px)`,
        },
        exitEnd: {
            clipPath: `circle(0px at ${exitX}px ${exitY}px)`,
        },
    };

    if (phase === null) return null;

    console.log(phase, maxRadius, exitMaxRadius);

    return (
        <motion.div
            className="fixed top-0 left-0 w-screen h-screen z-10"
            style={{ backgroundColor: color }}
            initial={phase === "enter" ? "enterStart" : "exitStart"}
            animate={phase === "enter" ? "enterEnd" : "exitEnd"}
            variants={variants}
            transition={{ duration, ease: "easeInOut" }}
        />
    );
};
