export declare function makeChannel<T>(): Channel;
/**
 * Channel
 */
export declare class Channel {
    consumers: Promise<string>[];
    producers: Promise<void>[];
    take(): Promise<string>;
    put(value: string): Promise<void>;
}
