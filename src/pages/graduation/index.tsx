import { HTMLMotionProps, motion } from "motion/react";
import { FC } from "react";

import { CircularTransitionTrigger } from "@/hooks/useCircularTransition";
import { $Data } from "@/store/data";

interface GraduationProps extends HTMLMotionProps<"div"> {
    trigger?: CircularTransitionTrigger;
}

export const Graduation: FC<GraduationProps> = ({ trigger, ...rest }) => {
    const eduDestination = $Data.use((state) => state.eduDestination);
    const gradDestination = $Data.use((state) => state.gradDestination);

    return (
        <motion.div
            className="w-screen h-screen flex items-center justify-center"
            onClick={(e) => {
                trigger?.(e, "after");
            }}
            {...rest}
        >
            <div>
                <h1>一阶段游戏结束力</h1>
                <h1>学历: {eduDestination}</h1>
                <h1>结局: {gradDestination}</h1>
            </div>
        </motion.div>
    );
};
