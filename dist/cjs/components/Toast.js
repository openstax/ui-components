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
exports.Toast = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const theme_1 = require("../../src/theme");
const styled_components_1 = __importStar(require("styled-components"));
const ANIMATION_TIME_MS = 500;
const DISMISS_AFTER_MS_FLOOR = 1000;
const StyledToast = styled_components_1.default.div `
  min-height: 5rem;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  ${props => !props.inline && (0, styled_components_1.css) `
    max-width: 28rem;
  `}
  font-size: 1.6rem;

  ${props => props.dismissAfterMs ? (0, styled_components_1.css) `
    animation-duration: ${ANIMATION_TIME_MS}ms;
    animation-timing-function: ease;
    animation-delay: ${props.dismissAfterMs - ANIMATION_TIME_MS}ms;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-play-state: running;
    animation-fill-mode: forwards;
    animation-name: toast-animation;

    @keyframes toast-animation {
      from {
        transform: translateY(0);
        opacity: 1;
      }
      to {
        transform: translateY(-100%);
        opacity: 0;
      }
    }
  ` : null}

  ${props => props.inline && (0, styled_components_1.css) `
    margin: 0 auto;
    box-shadow: none;
    border: 1px solid rgba(0,0,0,0.2);
  `}

  > * {
    flex-grow: 1;
  }

  .title {
    padding: 1rem;
    font-weight: bold;
    display: flex;
    align-content: center;
    justify-content: space-between;
  }

  .body {
    padding: 1rem;
  }

  .success {
    .title {
      color: ${theme_1.colors.palette.darkerGreen};
      background-color: ${theme_1.colors.palette.paleGreen};
    }
  }

  .neutral {
    .title {
      color: ${theme_1.colors.palette.neutralDarker};
      background-color: ${theme_1.colors.palette.neutralLighter};
    }
  }

  .failure {
    .title {
      color: ${theme_1.colors.palette.darkRed};
      background-color: ${theme_1.colors.palette.paleRed};
      .openstax-icon[type="close"] {
        color: ${theme_1.colors.palette.neutralDark};
        margin-left: 2rem;
        align-self: flex-start;
      }
    }
    .body {
      button {
        padding-left: 0;
        font-size: 1.6rem;
      }
    }
  }
`;
const Toast = ({ id, title, children, variant = 'neutral', inline = false, dismissAfterMs, onDismiss, }) => {
    const [show, setShow] = react_1.default.useState(true);
    if (dismissAfterMs) {
        dismissAfterMs = Math.max(dismissAfterMs, DISMISS_AFTER_MS_FLOOR);
    }
    react_1.default.useEffect(() => {
        if (!dismissAfterMs) {
            return;
        }
        const timeoutId = setTimeout(() => {
            setShow(false);
            if (onDismiss) {
                onDismiss(id);
            }
        }, dismissAfterMs);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    if (!show) {
        return null;
    }
    return (0, jsx_runtime_1.jsx)(StyledToast, { dismissAfterMs: dismissAfterMs, inline: inline, children: (0, jsx_runtime_1.jsxs)("div", { className: variant, children: [(0, jsx_runtime_1.jsx)("div", { className: 'title', children: title }), (0, jsx_runtime_1.jsx)("div", { className: 'body', children: children })] }) });
};
exports.Toast = Toast;
