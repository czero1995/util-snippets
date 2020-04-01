"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const randomHexColorCode = () => {
    const n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
};
exports.default = randomHexColorCode;
