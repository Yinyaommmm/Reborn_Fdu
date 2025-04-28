import {
    useState,
    MouseEvent as ReactMouseEvent,
    TouchEvent as ReactTouchEvent,
    FC,
} from "react";

import { CircleTransition } from "@/components/transition";

export function useCircularTransition(
    duration: number = 0.6,
    waiting: number = 1,
) {
    const [isActive, setActive] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const trigger = (
        e: MouseEvent | TouchEvent | ReactMouseEvent | ReactTouchEvent,
    ) => {
        console.log("trigger", e);
        const touch = "touches" in e ? e.touches[0] : null;
        let cx = touch?.clientX ?? (e as MouseEvent).clientX;
        let cy = touch?.clientY ?? (e as MouseEvent).clientY;
        if (cx === undefined || cy === undefined) {
            const changedTouch =
                "changedTouches" in e ? e.changedTouches[0] : null;
            cx = changedTouch?.clientX ?? (e as MouseEvent).clientX;
            cy = changedTouch?.clientY ?? (e as MouseEvent).clientY;
        }
        setPos({ x: cx, y: cy });
        setActive(true);
    };

    const TransitionComponent: FC = () => {
        return (
            <CircleTransition
                isActive={isActive}
                duration={duration}
                waiting={waiting}
                cx={pos.x}
                cy={pos.y}
                onComplete={() => setActive(false)}
            />
        );
    };

    return { trigger, TransitionComponent };
}
