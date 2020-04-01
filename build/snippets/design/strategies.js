"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strategies = {
    isNonEmpty(value, errorMsg) {
        if (value == "" || value == null) {
            return errorMsg;
        }
    },
    minLength(value, length, errorMsg) {
        if (value.length < length) {
            return errorMsg;
        }
    },
    arrayThanZero(value, errorMsg) {
        if (value.length == 0) {
            return errorMsg;
        }
    }
};
exports.default = strategies;
