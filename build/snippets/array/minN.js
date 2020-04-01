"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);
exports.default = minN;
