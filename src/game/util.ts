export function timeLogger(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);

        if (result instanceof Promise) {
            return result.then((res) => {
                const end = performance.now();
                console.log(
                    `${propertyKey} executed in ${(end - start).toFixed(2)} ms`,
                );
                return res;
            });
        } else {
            const end = performance.now();
            console.log(
                `${propertyKey} executed in ${(end - start).toFixed(2)} ms`,
            );
            return result;
        }
    };

    return descriptor;
}

export function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}
export function clampProb(value: number) {
    return clamp(value, 0, 1);
}
