import { FC } from "react";

import { useCircularTransition } from "@/hooks/useCircularTransition";

export const Birth: FC = () => {
    const { trigger, TransitionComponent } = useCircularTransition();

    return (
        <div
            className="w-screen h-screen game-background pt-[2vh] box-border"
            onClick={trigger}
        >
            <div className="relative bg-[#EBE6D3] m-auto w-[90%] h-[18vh]">
                <div className="absolute top-[2%] left-[3%] w-full h-full border-decorate border-solid border-decorate-border border-t-0" />
            </div>
            <TransitionComponent />
        </div>
    );
};
