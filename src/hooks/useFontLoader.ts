import { useEffect, useState } from "react";

export function useFontLoader(fontName: string, fontUrl: string) {
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        const font = new FontFace(
            fontName,
            `url(${fontUrl}) format("truetype")`,
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
