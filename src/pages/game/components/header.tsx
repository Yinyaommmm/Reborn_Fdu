import { motion } from "motion/react";
import { FC } from "react";

import { $Data } from "@/store/data";

const GameHeader: FC = () => {
    const honesty = $Data.use((state) => state.honesty);
    const lucky = $Data.use((state) => state.lucky);
    const academic = $Data.use((state) => state.academic);
    const creativity = $Data.use((state) => state.creativity);
    const management = $Data.use((state) => state.management);

    return (
        <div className="relative w-full h-[9vh] bg-[#EBE6D3] z-50 flex items-center justify-evenly">
            {[honesty, lucky, academic, creativity, management].map(
                (item, index) => (
                    <div
                        key={`header-${index}`}
                        className="flex flex-col items-center gap-0.5"
                    >
                        <div
                            className="w-[10vw] h-[10vw] bg-center bg-cover"
                            style={{
                                backgroundImage: `url("/png/data-icon.png")`,
                            }}
                        />
                        <div className="relative w-[12vw] h-2">
                            <div className="absolute border-decorate border-[#A5C6C8] h-full w-full overflow-hidden">
                                <motion.div
                                    className="relative bg-[#A5C6C8] h-full"
                                    initial={{
                                        width: 0,
                                    }}
                                    animate={{
                                        width: `${((item % 20) / 20) * 100}%`,
                                    }}
                                >
                                    <div
                                        className="absolute h-0 left-full"
                                        style={{
                                            borderTop: `6px solid #A5C6C8`,
                                            borderRight: `6px solid transparent`,
                                        }}
                                    />
                                </motion.div>
                            </div>
                            <div className="absolute top-px left-0.5 border-decorate border-decorate-border w-[12vw] h-2 overflow-hidden">
                                <motion.div
                                    className="absolute bg-black h-decorate w-2.5 rotate-135 origin-top-left"
                                    initial={{
                                        left: 0,
                                    }}
                                    animate={{
                                        left: `calc(${((item % 20) / 20) * 100}% + 6px)`,
                                    }}
                                />
                                <motion.div
                                    className="absolute bg-black h-decorate w-[5px] rotate-135 origin-top-left"
                                    initial={{
                                        left: 0,
                                    }}
                                    animate={{
                                        left: `calc(${((item % 20) / 20) * 100}% - 2px)`,
                                    }}
                                />
                                <motion.div
                                    className="absolute bg-black top-0.5 h-decorate w-[5px] rotate-135 origin-top-left"
                                    initial={{
                                        left: 0,
                                    }}
                                    animate={{
                                        left: `calc(${((item % 20) / 20) * 100}% - 8px)`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ),
            )}
        </div>
    );
};

GameHeader.displayName = "GameHeader";
export default GameHeader;
