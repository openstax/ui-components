"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paragraph = exports.H3 = exports.H2 = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const palette_1 = require("../theme/palette");
exports.H2 = styled_components_1.default.h2 `
  color: ${palette_1.palette.neutralDarker};
  font-size: 3.6rem;
  font-weight: 700;
`;
exports.H3 = styled_components_1.default.h3 `
  color: ${palette_1.palette.neutralDarker};
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
`;
exports.Paragraph = styled_components_1.default.p `
  color: ${palette_1.palette.neutralDarker};
  font-size: 1.8rem;
`;
