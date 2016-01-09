/// <reference path="../typings/tsd.d.ts" />

import {makeChannel} from '../src/typechannel';

describe('simple channel example', () => {
    itAsync('should transfer a single value', async function() {
        const channel = makeChannel();
        const prod = producer();
        const cons = consumer();
        await prod;
        await cons;
        
        async function producer() {
            await channel.put('hello');
        }
        
        async function consumer() {
            const value = await channel.take();
            expect(value).toEqual('hello');
        }
    })
})

function itAsync(description: string, asyncTest: () => Promise<void>) {
    it(description, (done) => {
        asyncTest().then(done);
    })
}