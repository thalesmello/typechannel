'use strict';

export function makeChannel<T>(): Channel {
    return new Channel();
}

/**
 * Channel
 */
export class Channel {
    consumers: Promise<string>[] = [];
    producers: Promise<void>[] = [];

    async take(): Promise<string> {
        return "hello";
    }
    async put(value: string): Promise<void> {
        
    }
}
