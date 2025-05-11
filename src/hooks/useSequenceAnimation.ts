import { useState, useEffect, useRef } from "react";

const sequence = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0];

export function useSequenceAnimation(
    prefix: string,
    levelFrame: string,
    duration: number = 1000,
): { frame: string; trigger: () => void } {
    const [index, setIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const frameDuration = duration / sequence.length;
    const timeRef = useRef<NodeJS.Timeout>(undefined);

    const animate = () => {
        if (index < sequence.length - 1) {
            setIndex((prevIndex) => prevIndex + 1);
        } else {
            setAnimating(false);
        }
    };

    const trigger = () => {
        setIndex(0);
        setAnimating(true);
        if (timeRef.current) {
            clearTimeout(timeRef.current);
        }
    };

    useEffect(() => {
        if (animating) {
            if (timeRef.current) {
                clearTimeout(timeRef.current);
            }
            timeRef.current = setTimeout(() => {
                animate();
            }, frameDuration);
        }
    }, [animating, index, frameDuration]);

    return {
        frame: `/png/levels/${levelFrame}/${prefix}-${levelFrame}-${sequence[index]}.png`,
        trigger,
    };
}
