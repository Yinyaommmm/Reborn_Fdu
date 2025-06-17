import { FC } from "react";

import Image from "@/components/image";
import { StaggeredText } from "@/components/staggered-text";
import { getImagePath } from "@/types/images";

const lines = [
    "梧桐叶间漏下的细碎阳光",
    "编织了一场梦境",
    "",
    "母校的沃土",
    "淬炼了我们“追求卓越”的勇气",
    "也温养了我们“坦然自洽”的底气",
    "",
    "感谢家人、导师、辅导员的温情守望",
    "感谢同学、同门、挚友们的青春共航",
    "感谢坚守在宿舍、食堂、门卫的叔叔阿姨",
    "更别忘记感谢一路坚持、从未放弃的自己",
    "",
    "毕业钟声已响",
    "此去天高海阔",
    "且从容，且峥嵘",
];

export const Dev: FC = () => {
    return (
        <div className="w-screen h-screen game-background">
            <div className="absolute top-0 left-0 w-screen">
                <Image src={getImagePath("end-header")} square={false} />
            </div>
            <StaggeredText
                className="absolute flex flex-col gap-px top-[16%] left-[10%] text-sm"
                lines={lines}
            />

            <div className="absolute bottom-0 left-0 w-screen">
                <Image src={getImagePath("end-footer")} square={false} />
            </div>
        </div>
    );
};
