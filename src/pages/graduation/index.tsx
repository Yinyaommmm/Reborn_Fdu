import { FC } from "react";

import { CircularTransitionTrigger } from "@/hooks/useCircularTransition";

interface GraduationProps {
    trigger?: CircularTransitionTrigger;
}

export const Graduation: FC<GraduationProps> = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <h1>一阶段游戏结束力</h1>
        </div>
    );
};
