import { useEffect, useState } from "react";

import { baseUrl } from "@/types/images";

const isDev = import.meta.env.MODE === "development";

export function useFontLoader(fontName: string, fontUrl: string) {
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        const font = new FontFace(
            fontName,
            `url(${isDev ? fontUrl : baseUrl + "/" + encodeURIComponent(fontUrl)}) format("truetype")`,
            {
                style: "normal",
                weight: "400",
            },
        );
        font.load()
            .then((loadedFont) => {
                document.fonts.add(loadedFont);
                setFinished(true);
            })
            .catch(console.error);
    }, [fontName, fontUrl]);

    return finished;
}
