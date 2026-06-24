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
exports.CloseModalButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importStar(require("styled-components"));
const Times_1 = require("./svgs/Times");
const theme_1 = require("../theme");
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
exports.CloseModalButton = (0, styled_components_1.default)(({ variant, ...props }) => ((0, jsx_runtime_1.jsx)("button", { ...props, type: 'button', "aria-label": 'Close', children: (0, jsx_runtime_1.jsx)(Times_1.Times, { "aria-hidden": 'true', focusable: 'false' }) }))) `
  padding: 0;
  cursor: pointer;
  margin-right: 0;
  background: transparent;
  color: ${theme_1.colors.palette.neutralMedium};
  height: 2.4rem;
  width: 2.4rem;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    color: ${theme_1.colors.palette.neutralDark};
  }

  ${(props) => props.variant === 'error' && (0, styled_components_1.css) `
    color: ${theme_1.colors.palette.darkRed};
  `}

  ${(props) => props.variant === 'inverted-circle' && (0, styled_components_1.css) `
    color: ${theme_1.colors.palette.white};
    border: 0.1rem solid ${theme_1.colors.palette.white};
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    &:hover, &:focus {
      color: ${theme_1.colors.palette.black};
      background-color: ${theme_1.colors.palette.white};
      border-color: ${theme_1.colors.palette.white};
    }
  `}
`;
