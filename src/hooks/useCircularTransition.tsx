import {
    useState,
    MouseEvent as ReactMouseEvent,
    TouchEvent as ReactTouchEvent,
    useRef,
} from "react";

import { CircleTransition } from "@/components/transition";
import {
    CardsTransition,
    CardsTransitionHandler,
} from "@/pages/game/components/transition";
import { $UI, UIRoute } from "@/store/ui";

export type CircularTransitionTrigger = (
    e: MouseEvent | TouchEvent | ReactMouseEvent | ReactTouchEvent,
    goto?: UIRoute,
) => void;

export function useCircularTransition(
    onEnter?: () => void,
    duration: number = 0.6,
    waiting: number = 1,
    type?: "cards" | undefined,
) {
    const [isActive, setActive] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [UI, setUI] = useState<UIRoute | undefined>(undefined);
    const cardsRef = useRef<CardsTransitionHandler>(null);

    const trigger: CircularTransitionTrigger = (e, goto) => {
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
        setUI(goto);
    };

    const TransitionComponent = (
        <CircleTransition
            isActive={isActive}
            duration={duration}
            waiting={waiting}
            cx={pos.x}
            cy={pos.y}
            onComplete={() => {
                setActive(false);
            }}
            onEnter={() => {
                onEnter?.();
                if (cardsRef.current !== null && type === "cards") {
                    cardsRef.current.startTear();
                }
                if (UI) {
                    $UI.update("go to game", (draft) => {
                        draft.route = UI;
                    });
                }
            }}
            hideLogo={type === "cards"}
        >
            {type === "cards" && <CardsTransition ref={cardsRef} />}
        </CircleTransition>
    );

    return { trigger, TransitionComponent };
}
