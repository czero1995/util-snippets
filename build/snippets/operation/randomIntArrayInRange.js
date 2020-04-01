"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const randomIntArrayInRange = (min, max, n = 1) => Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
exports.default = randomIntArrayInRange;
