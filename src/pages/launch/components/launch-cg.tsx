import { HTMLMotionProps, motion } from "motion/react";
import { FC, useMemo } from "react";
import { twMerge } from "tailwind-merge";

import Image from "@/components/image";
import { getImagePath } from "@/types/images";

interface LaunchCGProps extends HTMLMotionProps<"div"> {
    src: string;
}

export const LaunchCG: FC<LaunchCGProps> = (props) => {
    const { src, className, ...rest } = props;

    const xDirection = useMemo(() => {
        const idx = Math.floor(Math.random() * 2);
        return idx;
    }, []);
    const yDirection = useMemo(() => {
        const idx = Math.floor(Math.random() * 2);
        return idx;
    }, []);

    return (
        <motion.div
            className={twMerge(
                "absolute top-[-3%] left-[-3%] w-[110%] h-[65%] pointer-events-none",
                className,
            )}
            animate={{
                x: xDirection ? ["-3%", "3%"] : ["3%", "-3%"],
                y: yDirection ? ["-3%", "3%"] : ["3%", "-3%"],
            }}
            transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            }}
            {...rest}
        >
            <Image
                src={getImagePath(src)}
                adjustHeight={true}
                adjustWidth={false}
            />
        </motion.div>
    );
};
