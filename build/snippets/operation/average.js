"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const average = (...nums) => {
    return nums.reduce((acc, val) => acc + val, 0) / nums.length;
};
exports.default = average;
