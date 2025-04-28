import { useState, MouseEvent, TouchEvent } from "react";

import { CircleTransition } from "@/components/transition";

export function useCircularTransition(
    duration: number = 0.6,
    waiting: number = 1,
) {
    const [isActive, setActive] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const trigger = (e: MouseEvent | TouchEvent) => {
        const touch = "touches" in e ? e.touches[0] : null;
        const cx = touch?.clientX ?? (e as MouseEvent).clientX;
        const cy = touch?.clientY ?? (e as MouseEvent).clientY;
        setPos({ x: cx, y: cy });
        setActive(true);
    };

    const TransitionComponent = (
        <CircleTransition
            isActive={isActive}
            duration={duration}
            waiting={waiting}
            cx={pos.x}
            cy={pos.y}
            onComplete={() => setActive(false)}
        />
    );

    return { trigger, TransitionComponent };
}
