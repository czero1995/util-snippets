"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isValidJSON = (str) => {
    try {
        JSON.parse(str);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.default = isValidJSON;
