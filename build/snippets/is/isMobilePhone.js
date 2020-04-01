"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isMobilePhone = (num) => /(^1[3|4|5|7|8][0-9]{9}$)/.test(num + "");
exports.default = isMobilePhone;
