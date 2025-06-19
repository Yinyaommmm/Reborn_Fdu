import { useState, useEffect, useRef } from "react";

export function useAudioPreloader(urls: string[]) {
    const [loadedCount, setLoadedCount] = useState(0);
    const [start, setStart] = useState(false);
    const startedRef = useRef(false);
    const audioMapRef = useRef<Record<string, HTMLAudioElement>>({});

    useEffect(() => {
        if (startedRef.current || !start) return;
        startedRef.current = true;

        urls.forEach((url) => {
            const audio = new Audio();
            audio.preload = "auto";
            audio.src = `/reborn/${url}`;
            audioMapRef.current[url] = audio;
            const onLoaded = () => {
                setLoadedCount((c) => c + 1);
                cleanup();
            };
            const onError = () => {
                setLoadedCount((c) => c + 1);
                cleanup();
            };
            const cleanup = () => {
                audio.removeEventListener("loadedmetadata", onLoaded);
                audio.removeEventListener("error", onError);
            };

            audio.addEventListener("loadedmetadata", onLoaded, { once: true });
            audio.addEventListener("error", onError, { once: true });
            audio.load();
        });
    }, [urls, start]);

    const total = urls.length;
    const progress =
        total === 0
            ? 100
            : Math.min(100, Math.round((loadedCount / total) * 100));
    const done = loadedCount >= total;

    const startLoading = () => {
        if (!startedRef.current) setStart(true);
    };

    return {
        progress,
        done,
        startLoading,
        audios: audioMapRef.current,
    };
}
