import { HTMLMotionProps, motion } from "motion/react";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.8,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

interface StaggeredTextProps extends HTMLMotionProps<"div"> {
    lines: string[];
    tailRightAlign?: boolean;
}

export const StaggeredText: FC<StaggeredTextProps> = (props) => {
    const { lines, tailRightAlign = false, ...rest } = props;
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            {...rest}
        >
            {lines.map((text, idx) =>
                text === "" ? (
                    <motion.div key={idx} className="h-1"></motion.div>
                ) : (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={twMerge(
                            "w-full",
                            idx === lines.length - 1 && tailRightAlign
                                ? "text-right"
                                : "text-center",
                        )}
                    >
                        {text}
                    </motion.div>
                ),
            )}
        </motion.div>
    );
};
