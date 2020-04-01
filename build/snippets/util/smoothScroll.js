"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smoothScroll = element => document.querySelector(element).scrollIntoView({ behavior: "smooth" });
exports.default = smoothScroll;
