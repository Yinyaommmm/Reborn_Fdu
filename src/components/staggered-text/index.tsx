import { HTMLMotionProps, motion } from "motion/react";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

interface StaggeredTextProps extends HTMLMotionProps<"div"> {
    lines: string[];
    tailRightAlign?: boolean;
    emphasisHead?: boolean;
    delay?: number;
}

export const StaggeredText: FC<StaggeredTextProps> = (props) => {
    const {
        lines,
        tailRightAlign = false,
        emphasisHead = false,
        delay = 0,
        className,
        ...rest
    } = props;

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: delay,
                staggerChildren: 1,
            },
        },
    };

    return (
        <motion.div
            className={twMerge("font-fhl text-blue-950", className)}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            {...rest}
        >
            {lines.map((text, idx) =>
                text === "" ? (
                    <motion.div key={idx} className="h-4"></motion.div>
                ) : (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        className={twMerge(
                            "w-full",
                            idx === lines.length - 1 && tailRightAlign
                                ? "text-right text-[#585858]"
                                : "text-center",
                            emphasisHead && idx === 0 && "text-2xl",
                        )}
                    >
                        {text}
                    </motion.div>
                ),
            )}
        </motion.div>
    );
};
