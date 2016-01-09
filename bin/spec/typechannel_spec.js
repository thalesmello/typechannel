/// <reference path="../typings/tsd.d.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
        function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
        function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
var typechannel_1 = require('../src/typechannel');
describe('simple channel example', () => {
    itAsync('should transfer a single value', function () {
        return __awaiter(this, void 0, Promise, function* () {
            const channel = typechannel_1.makeChannel();
            const prod = producer();
            const cons = consumer();
            yield prod;
            yield cons;
            function producer() {
                return __awaiter(this, void 0, Promise, function* () {
                    yield channel.put('hello');
                });
            }
            function consumer() {
                return __awaiter(this, void 0, Promise, function* () {
                    const value = yield channel.take();
                    expect(value).toEqual('hello');
                });
            }
        });
    });
});
function itAsync(description, asyncTest) {
    it(description, (done) => {
        asyncTest().then(done);
    });
}
