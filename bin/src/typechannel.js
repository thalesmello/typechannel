'use strict';
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
function makeChannel() {
    return new Channel();
}
exports.makeChannel = makeChannel;
/**
 * Channel
 */
class Channel {
    constructor() {
        this.consumers = [];
        this.producers = [];
    }
    take() {
        return __awaiter(this, void 0, Promise, function* () {
            return "hello";
        });
    }
    put(value) {
        return __awaiter(this, void 0, Promise, function* () {
        });
    }
}
exports.Channel = Channel;
