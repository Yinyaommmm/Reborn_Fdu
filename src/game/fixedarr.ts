export class FixedSizeNumberQueue {
    private queue: number[] = [];
    private capacity: number;

    constructor(capacity: number) {
        if (capacity <= 0) {
            throw new Error("Capacity must be greater than 0.");
        }
        this.capacity = capacity;
    }

    enqueue(value: number): void {
        if (this.queue.length >= this.capacity) {
            this.queue.shift(); // 移除队首元素
        }
        this.queue.push(value);
    }

    dequeue(): number | undefined {
        return this.queue.shift();
    }

    peek(): number | undefined {
        return this.queue[0];
    }

    size(): number {
        return this.queue.length;
    }

    isEmpty(): boolean {
        return this.queue.length === 0;
    }

    isFull(): boolean {
        return this.queue.length === this.capacity;
    }

    toArray(): number[] {
        return [...this.queue];
    }

    clear(): void {
        this.queue = [];
    }
    isInQueue(num: number): boolean {
        return this.queue.includes(num);
    }

    print(): void {
        console.log(`Queue [${this.queue.join(", ")}]`);

        const seen = new Set<number>();
        const repeated = new Set<number>();

        for (const num of this.queue) {
            if (seen.has(num)) {
                repeated.add(num);
            } else {
                seen.add(num);
            }
        }

        for (const repeatID of repeated) {
            console.warn(`Warning, repeat ID ${repeatID}`);
        }
    }
}
