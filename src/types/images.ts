import { eventSpecialPngFiles } from "@/data/pngname";

const levels = ["D", "D+", "C", "C+", "B", "B+", "A", "A+", "S", "S+"];
const icons = ["A", "C", "H", "L", "M"];
const sequence = [0, 1, 2, 3, 4];
const tools = [1, 2, 3, 4, 5, 6, 7, 8];

export const ImageUrls = [
    "png/background.png",
    "png/calender.png",
    "png/card-decoration.png",
    "png/card-go.png",
    "png/data-icon.png",
    "png/event-bg.png",
    "png/portrait-girl.png",
    "/png/icon-h.png",
    "/png/icon-l.png",
    "/png/icon-a.png",
    "/png/icon-c.png",
    "/png/icon-m.png",
    "/png/after-decoration.png",
    "/png/back-blue.png",
    "/png/back-green.png",
    "/png/back-pink.png",
    "/png/back-purple.png",
    "/png/back-red.png",
    "/png/back-yellow.png",
    "/png/failure.png",
    "/png/success.png",
    "/png/light.png",
    "/png/wall-calender.png",
    "/png/board.png",
    ...tools.map((tool) => `png/tools/${tool}.png`),
    ...levels
        .flatMap((level) =>
            icons.map((icon) => `png/${level}/${icon}-${level}`),
        )
        .flatMap((levelPath) => sequence.map((i) => `${levelPath}-${i}.png`)),
    ...eventSpecialPngFiles.map((url) => `/event/special/${url}`),
    // [...CGFileList],
];
