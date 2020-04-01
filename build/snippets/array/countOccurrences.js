"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
exports.default = countOccurrences;
