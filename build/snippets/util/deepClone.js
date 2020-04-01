"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deepClone = (obj) => {
    const target = {};
    for (const key in obj) {
        if (Reflect.has(obj, key)) {
            typeof obj[key] === "object"
                ? (target[key] = deepClone(obj[key]))
                : (target[key] = obj[key]);
        }
    }
    return target;
};
exports.default = deepClone;
