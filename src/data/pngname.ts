// src/utils/getPngFiles.ts
const pngFiles = import.meta.glob('/public/event/special/*.png', { eager: true });

export const getPngFileNames = () => {
  return Object.keys(pngFiles).map((filePath) => {
    // 提取文件名（如 "1.png"）
    return filePath.split('/').pop()!;
  });
};

// 示例输出：["1.png", "2.png", ...]
export const eventSpecialPngFiles = getPngFileNames();
console.log(
    "jjj",
    eventSpecialPngFiles.map((url) => `/event/special/${url}`).slice(0, 10),
);