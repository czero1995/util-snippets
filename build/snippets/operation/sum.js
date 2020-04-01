"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum = (...arr) => {
    return [...arr].reduce((acc, val) => acc + val, 0);
};
exports.default = sum;
