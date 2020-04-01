"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debounce = (fn, interval = 600) => {
    let timeout = null;
    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply();
        }, interval);
    };
};
exports.default = debounce;
