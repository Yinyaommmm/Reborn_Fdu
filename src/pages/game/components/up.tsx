import { motion, useAnimation } from "motion/react";
import { FC, useEffect } from "react";

import Image from "@/components/image";
import { $Data } from "@/store/data";
import { getImagePath } from "@/types/images";

interface ChoiceUpProps {
    electionBuff?: boolean;
    showBDToolBuff?: boolean;
    showHFToolBuff?: boolean;
}

export const ChoiceUp: FC<ChoiceUpProps> = (props) => {
    const { electionBuff, showBDToolBuff, showHFToolBuff } = props;
    const upContext = $Data.use((state) => state.upContext);
    const rotateControls = useAnimation();

    useEffect(() => {
        if (electionBuff) {
            rotateControls.start({
                rotate: [-5, 5, -5, 5, 0],
                transition: { duration: 0.5, ease: "easeInOut" },
            });
        }
    }, [upContext]);

    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                rotate: [-5, 5, -5, 5, 0],
            }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
            exit={{
                opacity: 0,
                rotate: [-5, 5, -5, 5, 0],
            }}
            style={{
                display: "inline-block",
                transformOrigin: "50% 50%",
            }}
        >
            <motion.div animate={rotateControls} initial={{ rotate: 0 }}>
                <Image src={getImagePath("up")} square={false} />
                <div className="absolute left-[42%] top-[35%] rotate-[-7deg] w-[40%] h-[40%] bg-[#F0D399] flex items-center justify-center font-cursive text-sm">
                    {showBDToolBuff
                        ? "必胜"
                        : showHFToolBuff
                          ? "💗💗💗"
                          : upContext}
                </div>
            </motion.div>
        </motion.div>
    );
};
