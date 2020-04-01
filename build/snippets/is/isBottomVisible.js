"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isBottomVisible = () => document.documentElement.clientHeight + window.scrollY >=
    (document.documentElement.scrollHeight ||
        document.documentElement.clientHeight);
exports.default = isBottomVisible;
