"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const difference = (a, b) => {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
};
exports.default = difference;
