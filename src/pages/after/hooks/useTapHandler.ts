import { useEffect } from "react";

import { useAudio } from "@/hooks/useAudio";
import { YearItem } from "@/stage2/stage2";

export function useTapHandler(
    items: YearItem[],
    setDisplayItems: React.Dispatch<React.SetStateAction<YearItem[]>>,
) {
    const { play: playTriggerEvent } = useAudio(
        "audio/06 二阶段事件产生.wav",
        1,
    );

    useEffect(() => {
        let startX = 0;
        let startY = 0;
        let moved = false;
        const THRESHOLD = 10;

        const onPointerDown = (e: PointerEvent) => {
            if (e.pointerType !== "touch") return;
            moved = false;
            startX = e.clientX;
            startY = e.clientY;
        };

        const onPointerMove = (e: PointerEvent) => {
            if (e.pointerType !== "touch") return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            if (Math.hypot(dx, dy) > THRESHOLD) {
                moved = true;
            }
        };

        const onPointerUp = (e: PointerEvent) => {
            if (e.pointerType !== "touch") return;
            if (!moved) {
                playTriggerEvent();
                setDisplayItems((prev) =>
                    prev.length < items.length
                        ? [...prev, items[prev.length]]
                        : prev,
                );
            }
        };

        document.addEventListener("pointerdown", onPointerDown);
        document.addEventListener("pointermove", onPointerMove);
        document.addEventListener("pointerup", onPointerUp);

        return () => {
            document.removeEventListener("pointerdown", onPointerDown);
            document.removeEventListener("pointermove", onPointerMove);
            document.removeEventListener("pointerup", onPointerUp);
        };
    }, [items, setDisplayItems]);
}
