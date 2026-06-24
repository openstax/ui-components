"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpMenu = exports.NewTabIcon = exports.HelpMenuItem = exports.HelpMenuButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const NavBarMenuButtons_1 = require("../NavBarMenuButtons");
const theme_1 = require("../../theme");
const styled_components_1 = __importDefault(require("styled-components"));
const BodyPortal_1 = require("../BodyPortal");
const hooks_1 = require("./hooks");
exports.HelpMenuButton = (0, styled_components_1.default)(NavBarMenuButtons_1.NavBarMenuButton) `
  color: ${theme_1.colors.palette.gray};
  font-size: 1.4rem;
`;
exports.HelpMenuItem = (0, styled_components_1.default)(NavBarMenuButtons_1.NavBarMenuItem) `
  color: ${theme_1.colors.palette.neutralDarker};
  text-decoration: none;

  :focus-visible {
    outline: 0;
    background: ${theme_1.colors.palette.neutralLighter};
  }
  :hover {
    color: ${theme_1.colors.palette.neutralDarker};
    text-decoration: none;
  }
`;
const IframeWrapper = (0, styled_components_1.default)(BodyPortal_1.BodyPortal) `
  background-color: ${theme_1.colors.palette.neutralBright};
  position: absolute;
  width: 100%;
  top: 4rem;
  left: 0;
  bottom: 0;
  z-index: 20;
`;
const Iframe = styled_components_1.default.iframe `
  border: 0;
  width: 100%;
  height: calc(100% - 5rem);
`;
function PutAway({ onClick, className }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: className, children: (0, jsx_runtime_1.jsx)("button", { type: 'button', onClick: onClick, "aria-label": 'close form', children: "Back" }) }));
}
const StyledPutAway = (0, styled_components_1.default)(PutAway) `
  border-top: 0.1rem solid ${theme_1.colors.palette.pale};
  width: 100%;
  height: 5.6rem;
  display: flex;
  align-items: center;
  background-color: ${theme_1.colors.palette.neutralBright};
  padding-left: 1.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 20;

  @media(min-width: 56em) {
    padding: 0 calc(50vw - 43rem);
  }

  button {
    height: 3rem;
    background-color: ${theme_1.colors.palette.white};
    border: 1px solid ${theme_1.colors.palette.pale};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    width: 9rem;
    border-radius: 0.5rem;
  }
`;
/**
 * SVG icon representing a "new tab" indicator
 * Used to visually indicate when a link or action will open in a new tab/window
 *
 * Dimensions: 12x11 pixels
 * Uses theme color: colors.palette.neutralThin
 */
const NewTabIcon = () => ((0, jsx_runtime_1.jsxs)("svg", { role: 'img', width: '12', height: '11', viewBox: '0 0 12 11', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("title", { children: "new tab" }), (0, jsx_runtime_1.jsx)("path", { d: 'M12 0.832214V3.49855C12 3.94565 11.4592 4.1648 11.1464 3.85211L10.4025 3.10817L5.32915 8.18157C5.13387 8.37684 4.81731 8.37684 4.62204 8.18157L4.15065 7.71017C3.95538 7.5149 3.95538 7.19832 4.15065 7.00307L9.22408 1.92963L8.48027 1.18578C8.16629 0.871798 8.38867 0.332214 8.83383 0.332214H11.5C11.7761 0.332214 12 0.556069 12 0.832214ZM8.47977 5.97376L8.14644 6.30709C8.10001 6.35352 8.06318 6.40864 8.03805 6.46931C8.01293 6.52997 8 6.59499 8 6.66065V9.66555H1.33333V2.99888H6.83333C6.96594 2.99887 7.0931 2.9462 7.18688 2.85244L7.52021 2.51911C7.83519 2.20411 7.6121 1.66555 7.16667 1.66555H1C0.447708 1.66555 0 2.11326 0 2.66555V9.99888C0 10.5512 0.447708 10.9989 1 10.9989H8.33333C8.88562 10.9989 9.33333 10.5512 9.33333 9.99888V6.3273C9.33333 5.88184 8.79475 5.65876 8.47977 5.97376Z', fill: theme_1.colors.palette.neutralThin })] }));
exports.NewTabIcon = NewTabIcon;
const HelpMenu = ({ contactFormParams, chatConfig, children }) => {
    const [showIframe, setShowIframe] = react_1.default.useState();
    const { chatEmbedPath, businessHours, err: chatError } = react_1.default.useMemo(() => (chatConfig !== null && chatConfig !== void 0 ? chatConfig : {}), [chatConfig]);
    const hoursRange = (0, hooks_1.useHoursRange)(businessHours);
    const preChatFields = react_1.default.useMemo(() => ((0, hooks_1.getPreChatFields)(contactFormParams)), [contactFormParams]);
    const { openChat } = (0, hooks_1.useChatController)(chatEmbedPath, preChatFields);
    const contactFormUrl = react_1.default.useMemo(() => {
        const formUrl = 'https://openstax.org/embedded/contact';
        const params = contactFormParams
            .map(({ key, value }) => encodeURIComponent(`${key}=${value}`))
            .map((p) => `body=${p}`)
            .join('&');
        return `${formUrl}?${params}`;
    }, [contactFormParams]);
    react_1.default.useEffect(() => {
        const closeIt = ({ data }) => {
            if (data === 'CONTACT_FORM_SUBMITTED') {
                setShowIframe(undefined);
            }
        };
        window.addEventListener('message', closeIt, false);
        return () => window.removeEventListener('message', closeIt, false);
    }, []);
    if (chatError) {
        // Silently fail while leaving some indication as to why
        console.error('Error getting chat config', chatError);
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(exports.HelpMenuButton, { label: 'Help', "aria-label": 'Help menu', children: [hoursRange && openChat
                        ? ((0, jsx_runtime_1.jsxs)(exports.HelpMenuItem, { onAction: () => openChat(), children: ["Chat With Us (", hoursRange, ")"] })) : ((0, jsx_runtime_1.jsx)(exports.HelpMenuItem, { onAction: () => setShowIframe(contactFormUrl), children: "Report an issue" })), children] }), showIframe && ((0, jsx_runtime_1.jsxs)(IframeWrapper, { children: [(0, jsx_runtime_1.jsx)(Iframe, { title: 'Contact form', src: showIframe }), (0, jsx_runtime_1.jsx)(StyledPutAway, { onClick: () => setShowIframe(undefined) })] }))] }));
};
exports.HelpMenu = HelpMenu;
