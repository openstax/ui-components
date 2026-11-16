"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeFromError = void 0;
const getTypeFromError = (error) => {
    if (!error) {
        return undefined;
    }
    const { TYPE, name } = error.constructor;
    return TYPE && typeof TYPE === 'string' ? TYPE : name;
};
exports.getTypeFromError = getTypeFromError;
