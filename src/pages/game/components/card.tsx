import { HTMLMotionProps, motion } from "motion/react";
import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface GameCardProps extends HTMLMotionProps<"div"> {
    backgroundColor?: string;
    children?: ReactNode;
    customZIndex?: number;
    border?: boolean;
}

const GameCard: FC<GameCardProps> = (props) => {
    const {
        backgroundColor,
        className,
        children,
        customZIndex = 1,
        style,
        border = false,
        ...rest
    } = props;

    return (
        <motion.div
            className={twMerge("w-[80vw] aspect-[0.75]", className)}
            transition={{ duration: 0.6 }}
            style={{ zIndex: customZIndex, ...style }}
            {...rest}
        >
            <div
                className="absolute w-full h-full backface-hidden flex items-center justify-center"
                style={{ backgroundColor }}
            >
                <span className="text-white text-5xl">Front {children}</span>
                {border && (
                    <div className="absolute top-[2%] left-[3%] w-full h-full border-decorate border-solid border-decorate-border border-t-0" />
                )}
                {border && (
                    <div className="absolute top-[2%] w-full left-[3%] flex items-top gap-4">
                        <div className="flex-1 h-decorate bg-decorate-border" />
                        <div className="relative h-10 bg-[#CA7968] -translate-y-1/2 flex items-center justify-center px-4 text-white">
                            这里是标题
                            <div className="absolute top-1 left-1 w-full h-full border-decorate border-b-0 border-l-0 border-solid border-decorate-border" />
                            <div className="absolute -bottom-1 -right-1 w-[70%] h-decorate bg-decorate-border" />
                            <div className="absolute top-1 left-1 w-decorate h-[70%] bg-decorate-border" />
                        </div>
                        <div className="w-[10%] h-decorate bg-decorate-border" />
                    </div>
                )}
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
