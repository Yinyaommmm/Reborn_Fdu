import {
    careerClimax,
    getExtraRollTime,
    getMainPropVal,
    getNiceEventCount,
    loveClimax,
    randomIntBetween,
} from "./util";

import { CivilServantPath } from "@/data/line/CivilServantPath";
import { CorporatePath } from "@/data/line/CorporatePath";
import { CounselorPath } from "@/data/line/CounselorPath";
import { FreelancePath } from "@/data/line/FreelancePath";
import { LifeLine } from "@/data/line/LifeLine";
import { LoveAfterPath } from "@/data/line/LoveAfterPath";
import { LovePath } from "@/data/line/LovePath";
import { NewsList } from "@/data/line/NewsList";
import { OldList } from "@/data/line/OldList";
import { SomeNiceEventList } from "@/data/line/SomeNiceEventList";
import { YoungResearcherPath } from "@/data/line/YoungResearcherPath";
import { YoungResearcherPrePath } from "@/data/line/YoungResearcherPrePath";
import { Player } from "@/game/player";
import { Logger } from "@/logger/logger";

interface Stage2Map {
    path: string;
    min: number;
    max: number;
    doc: string;
}

interface HashArrItem {
    abstract: string;
    detail: string;
}
interface LifeLineItem {
    type: "GOOD" | "BAD";
    text: string;
}
interface NiceItem {
    key: string;
    text: string;
}
interface NewsItem {
    id: number;
    doc: string;
}
interface OldItem {
    idx: number;
    text: string;
}
export interface YearItem {
    abstract: string;
    detail: string;
    year: number;
}
export class Stage2Sys {
    private logger = new Logger("故事二阶段", true);
    private loveMap: Map<number, Stage2Map> = LovePath;
    private loveAfterMap: Map<number, Stage2Map> = LoveAfterPath;
    private careerMap: Map<number, Stage2Map> = new Map();
    private hashArr: HashArrItem[];
    private randYear: number | undefined = undefined;
    private lifeArr: LifeLineItem[] = LifeLine;
    private niceArr: NiceItem[] = SomeNiceEventList;
    private newsArr: NewsItem[] = NewsList;
    private oldArr: OldItem[] = OldList;
    private youngPreMap = YoungResearcherPrePath;

    constructor(private player: Player) {
        this.careerMap = this.initCareerMap(player.gradDestination);
        console.log(this.endYear, this.startYear);
        this.hashArr = new Array(this.endYear - this.startYear);
    }

    private initCareerMap(type: string): Map<number, Stage2Map> {
        switch (type) {
            case "青椒":
                return YoungResearcherPath;
            case "选调":
                return CivilServantPath;
            case "辅导员":
                return CounselorPath;
            case "企业":
                return CorporatePath;
            case "灵活就业":
                return FreelancePath;
            default:
                return FreelancePath;
        }
    }

    private get startYear() {
        return this.player.eduDestination === "本科" ? 22 : 28;
    }

    private get randYearVal() {
        if (this.randYear === undefined) {
            this.randYear = randomIntBetween(-2, 2); // -2 ~ 2
        }
        return this.randYear;
    }

    private get endYear() {
        return Math.ceil(
            50 +
                0.25 * (this.player.props.H + this.player.props.L) +
                this.randYearVal,
        );
    }
    public setAllLine() {
        this.setDeadEnd();
        this.setCareerLine();
        this.setLoveLine();
        this.setNiceLine();
        this.setOldLine();
        this.setNewsLine();
    }

    private setDeadEnd() {
        const extralRollTime = getExtraRollTime(this.player.props.L);
        const rollResult = new Array(1 + extralRollTime)
            .fill(0)
            .map(() => (Math.random() <= 0.5 ? 0 : 1));
        const abstract = "结局";
        const arr = rollResult.some((item) => item === 1)
            ? this.lifeArr.filter((item) => item.type === "GOOD")
            : this.lifeArr.filter((item) => item.type === "BAD");
        const randIdx = randomIntBetween(0, arr.length - 1);
        const doc = arr[randIdx];
        this.insert(this.endYear, abstract, doc.text);
    }

    private setCareerLine() {
        const mainPropVal = getMainPropVal(this.player.props);
        const luck = this.player.props.L;
        const crty = this.player.props.C;
        const climax = careerClimax(mainPropVal, crty, luck);
        let year = this.startYear;
        for (let i = 1; i <= climax; i++) {
            const item = this.careerMap.get(i) as Stage2Map;
            const addYear = randomIntBetween(item.min, item.max);
            year += addYear;
            this.insert(year, item.path, item.doc);
            // 青椒插入后置
            if (
                this.player.gradDestination === "青椒" &&
                i <= this.youngPreMap.size &&
                i >= 4
            ) {
                const item = this.youngPreMap.get(i) as Stage2Map;
                const afterYear = (year += randomIntBetween(
                    item.min,
                    item.max,
                ));
                this.insert(afterYear, item.path, item.doc, "前向");
            }
        }
    }
    private setLoveLine() {
        const luck = this.player.props.L;
        const climax = loveClimax(luck);
        let year = this.startYear;

        const insertYear = [];
        for (let i = 1; i <= climax; i++) {
            const item = this.loveMap.get(i) as Stage2Map;
            const addYear = randomIntBetween(item.min, item.max);
            year += addYear;
            insertYear.push(year);
            this.insert(year, item.path, item.doc);
            // 插入后置事件
            if (i <= this.loveAfterMap.size) {
                const item = this.loveAfterMap.get(i) as Stage2Map;
                const afterYear = (year += randomIntBetween(
                    item.min,
                    item.max,
                ));
                this.insert(afterYear, item.path, item.doc, "后向");
            }
        }
    }
    private setNiceLine() {
        const crty = this.player.props.C;
        const niceNum = getNiceEventCount(crty);
        const shuffled = this.cardShuffle(this.niceArr);
        const chosedArr = shuffled.slice(0, niceNum);
        chosedArr.forEach((item) => {
            const year = randomIntBetween(this.startYear, 65);
            this.insert(year, item.key, item.text);
        });
    }
    private setNewsLine() {
        const shuffled = this.cardShuffle(this.newsArr);
        let shuffledIdx = 0;

        for (let i = this.startYear; i < this.endYear; ) {
            const isBefore65 = i < 65;
            const groupSize = isBefore65 ? 3 : 5;

            let skipGroup = false;

            // 如果该组内任意一个年份已被占用，则跳过这组
            for (let j = 0; j < groupSize; j++) {
                if (i + j >= this.endYear) break;
                if (this.hashArr[i + j] !== undefined) {
                    skipGroup = true;
                    break;
                }
            }

            if (!skipGroup) {
                const minV = i;
                const maxV = Math.min(i + groupSize - 1, this.endYear - 1);
                const randYear = randomIntBetween(minV, maxV);

                if (shuffledIdx >= shuffled.length) {
                    shuffledIdx = 0;
                    this.logger.bug("填充的新闻太多了！");
                }

                this.insert(randYear, "NEWS", shuffled[shuffledIdx].doc);
                shuffledIdx++;
            }

            i += groupSize;
        }
    }

    private setOldLine() {
        const age = this.endYear;
        const oldNum = age <= 70 ? 1 : 2;
        const shuffled = this.cardShuffle(this.oldArr);
        const chosedArr = shuffled.slice(0, oldNum);
        chosedArr.forEach((item) => {
            const year = randomIntBetween(66, this.endYear - 3);
            this.insert(year, "老年", item.text);
        });
    }

    private insert(
        year: number,
        abstract: string,
        doc: string,
        strategy: "前向" | "后向" | "两端" = "两端",
    ) {
        if (year < this.startYear || year > this.endYear) {
            this.logger.info(`第${year}事件：${doc}不在范围内，不再插入`);
            return;
        }

        const tryInsert = (y: number) => {
            const index = y;
            if (this.hashArr[index] === undefined) {
                this.hashArr[index] = {
                    abstract,
                    detail: doc,
                };
                return true;
            }
            return false;
        };

        const range = this.endYear - this.startYear;

        if (tryInsert(year)) return;

        switch (strategy) {
            case "前向": {
                for (let y = year - 1; y >= this.startYear; y--) {
                    if (tryInsert(y)) return;
                }
                break;
            }
            case "后向": {
                for (let y = year + 1; y <= this.endYear; y++) {
                    if (tryInsert(y)) return;
                }
                break;
            }
            case "两端": {
                for (let offset = 1; offset <= range; offset++) {
                    const before = year - offset;
                    const after = year + offset;
                    if (before >= this.startYear && tryInsert(before)) return;
                    if (after <= this.endYear && tryInsert(after)) return;
                }
                break;
            }
        }
    }
    private cardShuffle<T>(arr: T[]): T[] {
        const shuffled = [...arr];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    public show() {
        console.log(
            "startyear",
            this.startYear,
            "endyear",
            this.endYear,
            "H",
            this.player.props.H,
            "L",
            this.player.props.L,
            "结局",
            this.player.gradDestination,
        );
        console.log("careermap", this.careerMap);
        console.log("hashArr", this.hashArr);
    }
    public getAll(): YearItem[] {
        return this.hashArr
            .map((item, index) => ({
                detail: item.detail,
                abstract: item.abstract,
                year: index,
            }))
            .filter(
                (item) =>
                    item.detail !== undefined && item.detail !== undefined,
            );
    }
}
