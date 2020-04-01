"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redirect = (url, asLink = true) => asLink ? (window.location.href = url) : window.location.replace(url);
exports.default = redirect;
