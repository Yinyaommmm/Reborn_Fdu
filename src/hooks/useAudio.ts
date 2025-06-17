import { useRef } from "react";

import { useAudioEnabled } from "./useAudioEnabled";

export const useAudio = (url: string, volume: number = 1) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const { enabled } = useAudioEnabled();

    if (!audioRef.current) {
        audioRef.current = new Audio(url);
        audioRef.current.volume = volume;
    }

    const play = () => {
        if (!enabled) return;
        audioRef.current!.play().catch(console.error);
    };

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
