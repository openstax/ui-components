"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledArrow = exports.ButtonNavGroup = exports.ButtonNavWrapper = exports.ButtonNavContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const palette_1 = require("../../theme/palette");
exports.ButtonNavContainer = styled_components_1.default.div `
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 4rem;
  max-width: fit-content;
`;
exports.ButtonNavWrapper = styled_components_1.default.div `
  display: flex;
  position: inherit;
  overflow-x: auto;
  width: auto;
  transition: transform 0.3s ease-in-out;
`;
exports.ButtonNavGroup = styled_components_1.default.div `
  flex: 0 0 auto;
  &:not(:last-child) {
    margin-right: 0.8rem;
  }
`;
exports.StyledArrow = styled_components_1.default.button `
  position: absolute;
  top: 50%;
  width: 2.8rem;
  height: 100%;
  transform: translateY(-50%);
  border: transparent;
  background: transparent;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    border: 0.1rem solid ${palette_1.palette.pale};
  }

  svg {
    position: relative;
    margin-top: 0.5rem;
  }

  &.left-arrow {
    left: -3rem;
  }

  &.right-arrow {
    right: -3rem;
  }
`;
