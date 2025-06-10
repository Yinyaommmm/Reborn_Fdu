import { motion } from "motion/react";

import Image from "@/components/image";
import { getImagePath } from "@/types/images";

export const ChoiceUp = () => {
    return (
        <motion.div
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
            <Image src={getImagePath("up")} square={false} />
        </motion.div>
    );
};
