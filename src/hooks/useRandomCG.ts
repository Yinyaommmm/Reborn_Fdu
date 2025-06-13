import { useMemo } from "react";

const IMAGE_KEYS = [
    "event/special/028-期末考试",
    "event/special/031-课程报告",
    "event/special/032-优秀大学生夏令营",
    "event/special/061-公司实习",
    "event/special/087-学位论文中期考核",
    "event/special/091-招聘会",
    "event/special/100-返校宣讲",
    "event/special/101-学科周",
    "event/special/104-辉相堂打卡",
    "event/special/105-郸郸樱花打卡",
    "event/special/106-老校门打卡",
    "event/special/107-湾湾银杏打卡",
    "event/special/108-湾湾黑天鹅打卡",
    "event/special/109-游园会",
    "event/special/129-校企合作实习",
];

export const UseRandomCG = (): { chosenKeys: string[]; chosenSex: number } => {
    const chosenKeys = useMemo(() => {
        const keys = [...IMAGE_KEYS];
        const result: string[] = [];
        for (let i = 0; i < 3 && keys.length > 0; i++) {
            const idx = Math.floor(Math.random() * keys.length);
            const [key] = keys.splice(idx, 1);
            result.push(key);
        }
        return result;
    }, []);
    const chosenSex = useMemo(() => {
        const idx = Math.floor(Math.random() * 2);
        return idx;
    }, []);

    return { chosenKeys, chosenSex };
};
