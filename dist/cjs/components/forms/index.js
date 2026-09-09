"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uncontrolled = exports.Controlled = void 0;
/*
 * controlled input helpers aim to:
 *   - provide data bindings to form state
 *   - improve behavior of mutable inputs to behave more like raw html and/or more intuitively. for example:
 *     - disabled checkboxes don't post a value
 *     - a selected select option that disappears and reappers will become selected when it reappears as long as
 *       a new option wasn't selected in the meantime.
 */
exports.Controlled = __importStar(require("./controlled"));
/* uncontrolled input helpers aim to:
 *   - maintain behavior of native react elements
 *   - provide basic consistent layout including labels and required indicators
 *   - provide basic additive quality of life features like onChangeValue and transformValue
 */
exports.Uncontrolled = __importStar(require("./uncontrolled"));
