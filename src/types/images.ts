import { CGFileList } from "./cgImages";

const levels = ["D", "D+", "C", "C+", "B", "B+", "A", "A+", "S", "S+"];
const icons = ["A", "C", "H", "L", "M"];
const sequence = [0, 1, 2, 3, 4];
const tools = [1, 2, 3, 4, 5, 6, 7, 8];

export const ImageType: "png" | "webp" = "webp";

export const getImagePath = (path: string): string => {
    const fullPath = `/reborn/${ImageType}/${path}.${ImageType}`;
    return fullPath;
};

export const ImageUrls = [
    getImagePath("introduction/introduction-1"),
    getImagePath("introduction/introduction-2"),
    getImagePath("introduction/introduction-3"),
    getImagePath("introduction/introduction-4"),
    getImagePath("introduction/introduction-5"),
    getImagePath("introduction/introduction-6"),
    getImagePath("introduction/introduction-7"),
    getImagePath("introduction/introduction-text-1"),
    getImagePath("introduction/introduction-text-2"),
    getImagePath("introduction/introduction-text-3"),
    getImagePath("introduction/introduction-text-4"),
    getImagePath("introduction/introduction-text-5"),
    getImagePath("introduction/introduction-text-6"),
    getImagePath("introduction/introduction-text-7"),
    getImagePath("tools/1"),
    getImagePath("tools/2"),
    getImagePath("tools/3"),
    getImagePath("tools/4"),
    getImagePath("tools/5"),
    getImagePath("tools/6"),
    getImagePath("tools/7"),
    getImagePath("tools/8"),
    getImagePath("after-decoration"),
    getImagePath("back-blue"),
    getImagePath("back-green"),
    getImagePath("back-pink"),
    getImagePath("back-purple"),
    getImagePath("back-red"),
    getImagePath("back-yellow"),
    getImagePath("background"),
    getImagePath("board"),
    getImagePath("calender"),
    getImagePath("card-decoration"),
    getImagePath("card-go"),
    getImagePath("end-footer"),
    getImagePath("end-header"),
    getImagePath("failure"),
    getImagePath("flower"),
    getImagePath("icon-h"),
    getImagePath("icon-l"),
    getImagePath("icon-a"),
    getImagePath("icon-c"),
    getImagePath("icon-m"),
    getImagePath("launch-border"),
    getImagePath("launch-bar"),
    getImagePath("launch-female"),
    getImagePath("launch-fly"),
    getImagePath("launch-logo"),
    getImagePath("launch-male"),
    getImagePath("launch-progress"),
    getImagePath("launch-star"),
    getImagePath("launch-start"),
    getImagePath("letter-bottom"),
    getImagePath("letter"),
    getImagePath("light"),
    getImagePath("pass"),
    getImagePath("petal-1"),
    getImagePath("petal-2"),
    getImagePath("portrait-male"),
    getImagePath("portrait-female"),
    getImagePath("punishment"),
    getImagePath("success"),
    getImagePath("up"),
    getImagePath("wall-calender"),
    ...tools.map((tool) => getImagePath(`tools/${tool}`)),
    ...levels
        .flatMap((level) => icons.map((icon) => `${level}/${icon}-${level}`))
        .flatMap((levelPath) =>
            sequence.map((i) => getImagePath(`levels/${levelPath}-${i}`)),
        ),
    ...CGFileList.map((i) => getImagePath(i)),
];
