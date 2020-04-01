"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isBrowser = () => ![typeof window, typeof document].includes("undefined");
exports.default = isBrowser;
