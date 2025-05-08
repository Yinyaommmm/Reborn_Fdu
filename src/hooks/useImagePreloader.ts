import { useState, useEffect, useRef } from "react";

export function useImagePreloader(urls: string[]) {
    const [loaded, setLoaded] = useState(0);
    const [start, setStart] = useState(false);

    const startedRef = useRef(false);
    const total = urls.length;

    useEffect(() => {
        if (startedRef.current || !start) return;
        startedRef.current = true;

        urls.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => setLoaded((c) => c + 1);
            img.onerror = () => setLoaded((c) => c + 1);
        });
    }, [urls, start]);

    const progress = total
        ? Math.min(100, Math.round((loaded / total) * 100))
        : 100;

    const startLoading = () => {
        setStart(true);
    };

    console.log("loaded", loaded, "/", total);

    return { progress, done: loaded >= total, startLoading };
}
