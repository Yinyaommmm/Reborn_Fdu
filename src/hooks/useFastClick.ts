import { useRef, useEffect, useCallback } from "react";

type AnyEvent = React.TouchEvent | React.MouseEvent;

export function useFastClick(onActivate: (e: AnyEvent) => void) {
    const touched = useRef(false);
    const touchReset = useRef<number>(0);

    useEffect(() => {
        return () => {
            if (touchReset.current) window.clearTimeout(touchReset.current);
        };
    }, []);

    const handleTouchEnd = useCallback(
        (e: React.TouchEvent) => {
            touched.current = true;
            onActivate(e);
            touchReset.current = window.setTimeout(() => {
                touched.current = false;
            }, 350);
        },
        [onActivate],
    );

    const handleClick = useCallback(
        (e: React.MouseEvent) => {
            if (!touched.current) {
                onActivate(e);
            }
        },
        [onActivate],
    );

    return { onTouchEnd: handleTouchEnd, onClick: handleClick };
}
