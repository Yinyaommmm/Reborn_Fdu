import { useRef, useEffect, useMemo } from "react";

import { useAudioEnabled } from "./useAudioEnabled";

export const useAudio = (
    url: string,
    volume: number = 1,
    repeat: boolean = false,
) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const { enabled } = useAudioEnabled();

    if (!audioRef.current) {
        audioRef.current = new Audio(`/reborn/${url}`);
        audioRef.current.volume = volume;
        audioRef.current.loop = repeat;
    }

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.loop = repeat;
        }
    }, [repeat]);

    const play = useMemo(() => {
        if (!enabled) return () => {};
        return () => {
            if (!enabled) return;
            audioRef.current!.play().catch(console.error);
        };
    }, [enabled]);

    const pause = () => {
        audioRef.current!.pause();
    };

    const stop = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    return { play, pause, stop, audio: audioRef.current! };
};
