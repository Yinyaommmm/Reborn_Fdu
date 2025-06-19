import { HTMLMotionProps } from "motion/react";
import { FC, useRef } from "react";

import { End } from "../end";

import Image from "@/components/image";
import { StaggeredText } from "@/components/staggered-text";
import { CircularTransitionTrigger } from "@/hooks/useCircularTransition";
import { $Data } from "@/store/data";
import { getImagePath } from "@/types/images";

interface GraduationProps extends HTMLMotionProps<"div"> {
    trigger?: CircularTransitionTrigger;
}

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
];

// const lines2 = ["毕业钟声已响", "此去天高海阔", "且从容，且峥嵘"];

export const Graduation: FC<GraduationProps> = ({ trigger }) => {
    const eduDestination = $Data.use((state) => state.eduDestination);
    const gradDestination = $Data.use((state) => state.gradDestination);
    const triggerRef = useRef<NodeJS.Timeout>(undefined);

    if (gradDestination === "退学") {
        return <End dropout />;
    }

    return (
        <div
            className="w-screen h-screen game-background"
            onClick={(e) => {
                if (!triggerRef.current) {
                    triggerRef.current = setTimeout(() => {
                        trigger?.(e, "after");
                    }, 2000);
                }
            }}
        >
            <div className="absolute top-0 left-0 w-screen">
                <Image src={getImagePath("end-header")} square={false} />
            </div>
            <StaggeredText
                className="absolute flex flex-col gap-px top-[17%] left-[7%] text-sm"
                lines={lines}
            />
            {/* <StaggeredText
                className="absolute flex flex-col gap-px top-[35%] left-[70%] text-sm"
                lines={lines2}
            /> */}

            <div className="absolute bottom-0 left-0 w-screen">
                <Image src={getImagePath("end-footer")} square={false} />
            </div>
            <div className="absolute top-[58%] left-[50%]">
                <h1>一阶段游戏结束力</h1>
                <h1>学历: {eduDestination}</h1>
                <h1>结局: {gradDestination}</h1>
            </div>
        </div>
    );
};
