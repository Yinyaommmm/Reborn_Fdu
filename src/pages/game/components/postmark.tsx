import { FC, useEffect } from "react";

import Image from "@/components/image";
import { useAudio } from "@/hooks/useAudio";
import { EndingType } from "@/store/game";
import { getImagePath } from "@/types/images";

const getPostmark = (et: EndingType) => {
    switch (et) {
        case "B":
            return getImagePath("pass");
        case "Pass":
            return getImagePath("pass");
        case "Punish":
            return getImagePath("punishment");
        case "F":
            return getImagePath("failure");
        default:
            return getImagePath("success");
    }
};

interface PostmarkProps {
    endingType: EndingType;
}

export const Postmark: FC<PostmarkProps> = ({ endingType }) => {
    const { play: playSuccess } = useAudio("audio/04 成功.mp3", 1);
    const { play: playFailed } = useAudio("audio/05 失败.wav", 1);

    useEffect(() => {
        if (endingType === "B" || endingType === "Pass" || endingType === "S") {
            playSuccess();
        } else if (endingType === "F" || endingType === "Punish") {
            playFailed();
        }
    }, [endingType]);

    return <Image src={getPostmark(endingType)} />;
};
