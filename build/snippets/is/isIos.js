"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isIos = () => {
    const ua = navigator.userAgent;
    return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
};
exports.default = isIos;
