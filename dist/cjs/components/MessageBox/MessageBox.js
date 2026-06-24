"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageBox = exports.BoxEventId = exports.BoxBody = exports.BoxHeading = exports.BoxWrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const theme_1 = require("../../theme");
const modalPadding = 3;
exports.BoxWrapper = styled_components_1.default.div `
  margin: ${props => { var _a; return (_a = props.margin) !== null && _a !== void 0 ? _a : '0 auto'; }};
  max-width: 90.2rem;
  border: 0.1rem solid ${theme_1.colors.palette.pale};
`;
exports.BoxHeading = styled_components_1.default.h3 `
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: 0;
`;
exports.BoxBody = styled_components_1.default.div `
  font-size: 1.6rem;
  padding: ${modalPadding}rem;
`;
exports.BoxEventId = styled_components_1.default.div `
  font-size: 1.4rem;
  color: ${theme_1.colors.palette.neutralMedium};
  margin-top: 1.6rem;
`;
const MessageBox = ({ children, customMargin, ...props }) => {
    return ((0, jsx_runtime_1.jsx)(exports.BoxWrapper, { margin: customMargin, children: (0, jsx_runtime_1.jsx)(exports.BoxBody, { ...props, "data-testid": 'message-box', children: children }) }));
};
exports.MessageBox = MessageBox;
