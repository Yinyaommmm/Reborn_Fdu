// 仅计算上半圆 rotate 从 -90 - 90
export function calYFromDeltaX(
    radius: number,
    rotate: number,
    deltaX: number,
): { rotate: number; deltaY: number; y: number } {
    if (rotate < -90 || rotate > 90)
        throw Error("calYFromX: rotate ~ [-90, 90]");
    const nowY = Math.cos((rotate / 180) * Math.PI) * radius;
    const nowX = Math.sin((rotate / 180) * Math.PI) * radius;
    const newX = nowX + deltaX;
    if (newX >= radius || newX <= -radius)
        return {
            rotate: newX >= radius ? 90 : -90,
            deltaY: -nowY,
            y: 0,
        };
    const newY = Math.sqrt(radius ** 2 - newX ** 2);

    const newRotate = (Math.asin(newX / radius) / Math.PI) * 180;
    return {
        rotate: newRotate,
        deltaY: newY - nowY,
        y: newY,
    };
}
