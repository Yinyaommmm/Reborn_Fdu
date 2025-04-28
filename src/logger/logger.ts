export class Logger {
    constructor(
        private name: string,
        private enable: boolean = true,
    ) {
        this.name = name.toUpperCase();
    }

    info(message: string, ...optionalParams: unknown[]) {
        if (this.enable) {
            console.info(`[${this.name} INFO]: ${message}`, ...optionalParams);
        }
    }

    warn(message: string, ...optionalParams: unknown[]) {
        if (this.enable) {
            console.warn(`[${this.name} WARN]: ${message}`, ...optionalParams);
        }
    }

    bug(message: string, ...optionalParams: unknown[]) {
        if (this.enable) {
            console.error(`${this.name} [BUG]: ${message}`, ...optionalParams);
        }
    }

    // 可选：动态打开/关闭日志
    setEnable(enable: boolean) {
        this.enable = enable;
    }
    getEnable() {
        return this.enable;
    }
}
