import {
    animate,
    HTMLMotionProps,
    motion,
    useMotionValue,
    useTransform,
} from "motion/react";
import { FC, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

import { End } from "../end";

import { IconSkip } from "@/assets";
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
    "",
    "毕业钟声已响",
    "此去天高海阔",
    "且从容，且峥嵘",
];

const hat1Points = 15;
const hat2Points = 17;
const hat3Points = 18;

export const Graduation: FC<GraduationProps> = ({ trigger }) => {
    const gradDestination = $Data.use((state) => state.gradDestination);
    const triggerRef = useRef<NodeJS.Timeout>(undefined);

    const x1 = useMotionValue(0);
    const y1 = useTransform(
        x1,
        Array.from({ length: hat1Points }).map((_, i) => i * 12),
        Array.from({ length: hat1Points }).map(
            (_, i) => -(-i * i + 12 * i) * 2,
        ),
    );
    const opacity1 = useTransform(x1, [0, 130, 140], [1, 1, 0]);
    const x2 = useMotionValue(0);
    const y2 = useTransform(
        x2,
        Array.from({ length: hat2Points }).map((_, i) => -i * 10),
        Array.from({ length: hat2Points }).map(
            (_, i) => -(-i * i + 18 * i) * 1.2,
        ),
    );
    const opacity2 = useTransform(x2, [0, -150, -160], [1, 1, 0]);

    const x3 = useMotionValue(0);
    const y3 = useTransform(
        x3,
        Array.from({ length: hat3Points }).map((_, i) => -i * 10),
        Array.from({ length: hat3Points }).map(
            (_, i) => -(-i * i + 16 * i) * 1,
        ),
    );
    const opacity3 = useTransform(x3, [0, -160, -170], [1, 1, 0]);

    useEffect(() => {
        setTimeout(() => {
            animate(x1, 140, { duration: 2, ease: "easeInOut" });
            animate(x2, -160, { duration: 2, ease: "easeInOut" });
            animate(x3, -170, { duration: 2, ease: "easeInOut" });
        }, 9000);
    }, []);

    if (gradDestination === "退学") {
        return <End trigger={trigger} dropout />;
    }

    return (
        <div
            className="w-screen h-screen game-background"
            onClick={(e) => {
                if (!triggerRef.current) {
                    triggerRef.current = setTimeout(() => {
                        trigger?.(e, "after");
                    }, 0);
                }
            }}
        >
            <div className="absolute top-[-3%] left-0 w-screen">
                <Image src={getImagePath("end-header")} square={false} />
            </div>
            <div className="absolute right-[2%] top-[1%] z-[50]">
                <IconSkip
                    onClick={(e) => {
                        e.stopPropagation();
                        trigger?.(e, "after");
                    }}
                    className={twMerge(
                        "text-4xl transition-colors",
                        "text-[#7897B5]",
                    )}
                />
            </div>
            <StaggeredText
                className="absolute flex flex-col w-[90vw] gap-px top-[16%] left-[50%] -translate-x-1/2"
                lines={lines}
            />
            {/* <StaggeredText
                className="absolute flex flex-col gap-px top-[35%] left-[70%] text-sm"
                lines={lines2}
            /> */}

            <div className="absolute bottom-0 left-0 w-screen">
                <Image src={getImagePath("end-footer")} square={false}>
                    <motion.div
                        className="absolute bottom-[57%] right-[52%] w-[16vw]"
                        style={{ x: x1, y: y1, opacity: opacity1 }}
                    >
                        <Image src={getImagePath("end-hat-1")} square={false} />
                    </motion.div>
                    <motion.div
                        className="absolute bottom-[57%] right-[22%] w-[16vw]"
                        style={{ x: x2, y: y2, opacity: opacity2 }}
                    >
                        <Image src={getImagePath("end-hat-2")} square={false} />
                    </motion.div>
                    <motion.div
                        className="absolute bottom-[52%] right-[4%] w-[16vw]"
                        style={{ x: x3, y: y3, opacity: opacity3 }}
                    >
                        <Image src={getImagePath("end-hat-3")} square={false} />
                    </motion.div>
                </Image>
            </div>
        </div>
    );
};
