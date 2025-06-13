import { CGFileList } from "./cgImages";

const levels = ["D", "D+", "C", "C+", "B", "B+", "A", "A+", "S", "S+"];
const icons = ["A", "C", "H", "L", "M"];
const sequence = [0, 1, 2, 3, 4];
const tools = [1, 2, 3, 4, 5, 6, 7, 8];

export const ImageType: "png" | "webp" = "webp";

export const getImagePath = (name: string) =>
    `${ImageType}/${name}.${ImageType}`;

export const ImageUrls = [
    getImagePath("background"),
    getImagePath("calender"),
    getImagePath("card-decoration"),
    getImagePath("card-go"),
    getImagePath("data-icon"),
    getImagePath("event-bg"),
    getImagePath("portrait-girl"),
    getImagePath("icon-h"),
    getImagePath("icon-l"),
    getImagePath("icon-a"),
    getImagePath("icon-c"),
    getImagePath("icon-m"),
    getImagePath("after-decoration"),
    getImagePath("back-blue"),
    getImagePath("back-green"),
    getImagePath("back-pink"),
    getImagePath("back-purple"),
    getImagePath("back-red"),
    getImagePath("back-yellow"),
    getImagePath("failure"),
    getImagePath("success"),
    getImagePath("pass"),
    getImagePath("punishment"),
    getImagePath("light"),
    getImagePath("wall-calender"),
    getImagePath("board"),
    getImagePath("launch-border"),
    getImagePath("launch-bar"),
    getImagePath("launch-female"),
    getImagePath("launch-fly"),
    getImagePath("launch-logo"),
    getImagePath("launch-male"),
    getImagePath("launch-progress"),
    getImagePath("launch-star"),
    getImagePath("launch-start"),
    ...tools.map((tool) => getImagePath(`tools/${tool}`)),
    ...levels
        .flatMap((level) => icons.map((icon) => `${level}/${icon}-${level}`))
        .flatMap((levelPath) =>
            sequence.map((i) => getImagePath(`${levelPath}-${i}`)),
        ),
    ...CGFileList,
];
