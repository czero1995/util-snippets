"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function decoratorTimeTaken(message) {
    return (target, name, descriptor) => {
        let oldValue = descriptor.value;
        descriptor.value = () => {
            console.time(message);
            oldValue.call(this);
            console.timeEnd(message);
        };
    };
}
exports.decoratorTimeTaken = decoratorTimeTaken;
