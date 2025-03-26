import { HTMLMotionProps, motion } from "motion/react";
import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface GameCardProps extends HTMLMotionProps<"div"> {
    backgroundColor?: string;
    children?: ReactNode;
    customZIndex?: number;
}

const GameCard: FC<GameCardProps> = (props) => {
    const {
        backgroundColor,
        className,
        children,
        customZIndex = 1,
        style,
        ...rest
    } = props;

    return (
        <motion.div
            className={twMerge("w-[85vw] aspect-[0.75]", className)}
            transition={{ duration: 0.6 }}
            style={{ zIndex: customZIndex, ...style }}
            {...rest}
        >
            <div
                className="absolute w-full h-full backface-hidden flex items-center justify-center"
                style={{ backgroundColor }}
            >
                <span className="text-white text-5xl">Front {children}</span>
            </div>

            <div
                className="absolute w-full h-full backface-hidden flex items-center justify-center rotate-y-180"
                style={{ backgroundColor }}
            >
                <span className="text-white text-5xl">Back {children}</span>
            </div>
        </motion.div>
    );
};

GameCard.displayName = "GameCard";
export default GameCard;
