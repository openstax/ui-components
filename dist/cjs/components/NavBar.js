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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importStar(require("styled-components"));
const Constants = __importStar(require("../constants"));
const theme_1 = __importDefault(require("../theme"));
const BodyPortal_1 = require("./BodyPortal");
const NavBarLogo_1 = require("./NavBarLogo");
const BarWrapper = (0, styled_components_1.default)(BodyPortal_1.BodyPortal) `
  overflow: visible;
  z-index: ${theme_1.default.zIndex.navbar};
  background: ${theme_1.default.colors.palette.white};
  position: relative;
  padding: 0 ${theme_1.default.padding.navbar.mobile}rem;
  box-shadow: 0 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.1);
  ${theme_1.default.breakpoints.desktop((0, styled_components_1.css) `
    padding: 0 ${theme_1.default.padding.navbar.mobile}rem;
  `)}
  min-width: 0;
`;
const StyledNavBar = styled_components_1.default.div `
  overflow: visible;
  display: flex;
  justify-content: ${props => props.justifyContent || 'space-between'};
  align-items: center;
  height: ${props => props.navMobileHeight}rem;
  ${props => props.maxWidth ? `max-width: ${props.maxWidth}rem;` : null}
  margin: 0 auto;
  ${props => theme_1.default.breakpoints.desktop((0, styled_components_1.css) `
    height: ${props.navDesktopHeight}rem;
  `)}
  @media print { display: none; }
`;
const NavBar = ({ logo = false, maxWidth, navDesktopHeight, navMobileHeight, justifyContent, ariaLabel, ...props }) => {
    const logoIsObject = typeof logo === 'object';
    const renderAnchor = logoIsObject && 'href' in logo;
    const { alt = 'OpenStax Logo', ...anchorProps } = logoIsObject ? logo : {};
    const logoComponent = logo ? (0, jsx_runtime_1.jsx)(NavBarLogo_1.NavBarLogo, { alt: alt }) : null;
    return (0, jsx_runtime_1.jsx)(BarWrapper, { tagName: 'nav', ariaLabel: ariaLabel, slot: 'nav', ...props, children: (0, jsx_runtime_1.jsxs)(StyledNavBar, { maxWidth: maxWidth, navDesktopHeight: navDesktopHeight || Constants.navDesktopHeight, navMobileHeight: navMobileHeight || Constants.navMobileHeight, justifyContent: justifyContent, children: [renderAnchor ? (0, jsx_runtime_1.jsx)("a", { ...anchorProps, children: logoComponent }) : logoComponent, props.children] }) });
};
exports.NavBar = NavBar;
