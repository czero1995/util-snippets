"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isAndroid = () => {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1;
};
exports.default = isAndroid;
