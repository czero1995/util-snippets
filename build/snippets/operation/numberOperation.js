"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function plus(num1, num2, ...others) {
    if (others.length > 0) {
        return plus(plus(num1, num2), others[0], ...others.slice(1));
    }
    const baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
    return (multiply(num1, baseNum) + multiply(num2, baseNum)) / baseNum;
}
exports.plus = plus;
function subtract(num1, num2, ...others) {
    if (others.length > 0) {
        return subtract(subtract(num1, num2), others[0], ...others.slice(1));
    }
    const baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
    return (multiply(num1, baseNum) - multiply(num2, baseNum)) / baseNum;
}
exports.subtract = subtract;
function multiply(num1, num2, ...others) {
    if (others.length > 0) {
        return multiply(multiply(num1, num2), others[0], ...others.slice(1));
    }
    const num1Changed = decimalCovertInteger(num1);
    const num2Changed = decimalCovertInteger(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    return leftValue / Math.pow(10, baseNum);
}
exports.multiply = multiply;
function divide(num1, num2, ...others) {
    if (others.length > 0) {
        return divide(divide(num1, num2), others[0], ...others.slice(1));
    }
    const num1Changed = decimalCovertInteger(num1);
    const num2Changed = decimalCovertInteger(num2);
    return multiply(num1Changed / num2Changed, amendNumber(Math.pow(10, digitLength(num2) - digitLength(num1))));
}
exports.divide = divide;
function amendNumber(num, precision = 12) {
    return +parseFloat(num.toPrecision(precision));
}
exports.amendNumber = amendNumber;
function digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
}
exports.digitLength = digitLength;
function decimalCovertInteger(num) {
    if (num.toString().indexOf("e") === -1) {
        return Number(num.toString().replace(".", ""));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? amendNumber(num * Math.pow(10, dLen)) : num;
}
exports.decimalCovertInteger = decimalCovertInteger;
