"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const capitalizeEveryWord = (str) => str.replace(/\b[a-z]/g, char => char.toUpperCase());
exports.default = capitalizeEveryWord;
