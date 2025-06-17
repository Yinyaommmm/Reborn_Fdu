import { HTMLMotionProps, motion } from "motion/react";
import { FC, useEffect, useState } from "react";

import Image from "@/components/image";
import { useFastClick } from "@/hooks/useFastClick";
import { $UI } from "@/store/ui";
import { getImagePath } from "@/types/images";

export const Introduction: FC<HTMLMotionProps<"div">> = (props) => {
    const { ...rest } = props;
    const [current, setCurrent] = useState<number>(1);
    const { onClick, onTouchEnd } = useFastClick(() => {
        setCurrent((prev) => prev + 1);
    });

    useEffect(() => {
        if (current > 7) {
            $UI.update("goto add talent", (draft) => {
                draft.route = "birth";
            });
        }
    }, [current]);

    return (
        <motion.div {...rest} onClick={onClick} onTouchEnd={onTouchEnd}>
            {Array.from(
                { length: current > 4 ? 4 : current },
                (_, i) => i + 1,
            ).map((i) => (
                <motion.div
                    key={`introduction-${i}`}
                    className="absolute top-0 left-0 w-full h-full flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                >
                    <Image
                        className="relative"
                        src={getImagePath(`introduction/introduction-${i}`)}
                        square={false}
                        adjustHeight={false}
                        adjustWidth={true}
                    ></Image>
                </motion.div>
            ))}
            {Array.from(
                { length: current > 4 ? 4 : current },
                (_, i) => i + 1,
            ).map((i) => (
                <motion.div
                    key={`introduction-text-${i}`}
                    className="absolute top-0 left-0 w-full h-full flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                >
                    <Image
                        className="relative"
                        src={getImagePath(
                            `introduction/introduction-text-${i}`,
                        )}
                        square={false}
                        adjustHeight={false}
                        adjustWidth={true}
                    ></Image>
                </motion.div>
            ))}
            {Array.from(
                { length: current > 4 ? current - 4 : 0 },
                (_, i) => i + 5,
            ).map((i) => (
                <motion.div
                    key={`introduction-${i}`}
                    className="absolute top-0 left-0 w-full h-full flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                >
                    <Image
                        className="relative"
                        src={getImagePath(`introduction/introduction-${i}`)}
                        square={false}
                        adjustHeight={false}
                        adjustWidth={true}
                    ></Image>
                </motion.div>
            ))}
            {Array.from(
                { length: current > 4 ? current - 4 : 0 },
                (_, i) => i + 5,
            ).map((i) => (
                <motion.div
                    key={`introduction-text-${i}`}
                    className="absolute top-0 left-0 w-full h-full flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                >
                    <Image
                        className="relative"
                        src={getImagePath(
                            `introduction/introduction-text-${i}`,
                        )}
                        square={false}
                        adjustHeight={false}
                        adjustWidth={true}
                    ></Image>
                </motion.div>
            ))}
        </motion.div>
    );
};
