"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);
exports.default = maxN;
