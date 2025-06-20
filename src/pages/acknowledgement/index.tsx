import { HTMLMotionProps, motion } from "motion/react";
import { FC } from "react";

import { CircularTransitionTrigger } from "@/hooks/useCircularTransition";

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0,
            staggerChildren: 1,
        },
    },
};

interface AcknowledgementProps extends HTMLMotionProps<"div"> {
    trigger?: CircularTransitionTrigger;
}

export const Acknowledgement: FC<AcknowledgementProps> = ({ trigger }) => {
    return (
        <div
            className="w-screen h-screen font-fhl game-background flex flex-col items-center justify-center"
            onClick={(e) => {
                trigger?.(e, "launch");
            }}
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="text-4xl mb-3 text-center"
                    variants={itemVariants}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    鸣谢
                </motion.div>
                <motion.div
                    className="text-xl text-center"
                    variants={itemVariants}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    出品方
                </motion.div>
                <motion.div
                    className="text-center mb-3 text-blue-950"
                    variants={itemVariants}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    晨曦工作室
                </motion.div>
                <motion.div
                    className="text-xl text-center"
                    variants={itemVariants}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    总策划
                </motion.div>
                <motion.div
                    className="text-center mb-3 text-blue-950"
                    variants={itemVariants}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    崔漠寒、赵琼
                </motion.div>
                <motion.div
                    className="text-xl text-center"
                    variants={itemVariants}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    故事脚本
                </motion.div>
                <motion.div
                    className="text-center text-blue-950"
                    variants={itemVariants}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    崔漠寒、翁文斌、董宇泽
                </motion.div>
                <motion.div
                    className="text-center mb-3 text-blue-950"
                    variants={itemVariants}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    王越越、邹懿、郝硕
                </motion.div>
                <motion.div
                    className="text-xl text-center"
                    variants={itemVariants}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    系统设计
                </motion.div>
                <motion.div
                    className="text-center mb-3 text-blue-950"
                    variants={itemVariants}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    崔漠寒
                </motion.div>
                <motion.div
                    className="text-xl text-center"
                    variants={itemVariants}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    系统工程
                </motion.div>
                <motion.div
                    className="text-center mb-3 text-blue-950"
                    variants={itemVariants}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    卫清渠
                </motion.div>
                <motion.div
                    className="text-xl text-center"
                    variants={itemVariants}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    UI工程
                </motion.div>
                <motion.div
                    className="text-center mb-3 text-blue-950"
                    variants={itemVariants}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    郭航飞
                </motion.div>
                <motion.div
                    className="text-xl text-center"
                    variants={itemVariants}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    视觉设计
                </motion.div>
                <motion.div
                    className="text-center mb-3 text-blue-950"
                    variants={itemVariants}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    马琦珉、崔漠寒、郭航飞
                </motion.div>
                <motion.div
                    className="text-xl text-center"
                    variants={itemVariants}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    事件插图
                </motion.div>
                <motion.div
                    className="text-center mb-3 text-blue-950"
                    variants={itemVariants}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    卫清渠、董宇泽
                </motion.div>
                <motion.div
                    className="text-xl text-center"
                    variants={itemVariants}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    大模型
                </motion.div>
                <motion.div
                    className="text-center text-blue-950"
                    variants={itemVariants}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    D老师DeepSeek、M老师Midjunery
                </motion.div>
            </motion.div>
        </div>
    );
};
