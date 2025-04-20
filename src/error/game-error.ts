export function GameErrorFactory(functionName: string, reason: string) {
    return new Error(`函数 ${functionName} 出错：${reason}`);
}
