"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerRegion = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const Banner_1 = require("./Banner");
require("./BannerRegion.css");
/**
 * A Banner that announces itself when it appears.
 *
 * The wrapper is always rendered and the Banner is conditional inside it,
 * which is the part that is easy to get wrong: a live region has to already
 * be in the accessibility tree before its content changes. Putting the role
 * on the Banner itself would insert the region and its content in the same
 * tick, and AT reads that as initial state rather than a change — Chrome +
 * NVDA usually announces it anyway, Safari + VoiceOver reliably does not.
 *
 * Use it when something the user or the app did causes the banner to
 * appear or change, such as a failed request. Use plain `Banner` for one
 * that is already on the page when it loads: steady-state information
 * inside a live region announces itself again on every remount, for a
 * change the user never made.
 *
 * Messages present on the first render are page content, read in order, and are not
 * announced. Only messages that arrive after it has mounted are, so keep it mounted rather
 * than rendering it only when there is something to show.
 *
 * While it is empty the wrapper is taken out of flow, so in a flex or grid parent it does
 * not add a gap or take a grid cell. It stays in the accessibility tree, and with a banner
 * in it, it is an ordinary block; `className` styles it then.
 *
 * `role="status"` is polite for every severity, deliberately. Mapping
 * `error` to `role="alert"` would make a banner rendered on page load
 * interrupt whatever the user was doing; severity describes how loud the
 * banner looks, not how urgently it needs to reach someone.
 */
const BannerRegion = ({ className, ...props }) => (0, jsx_runtime_1.jsx)("div", { role: 'status', className: (0, classnames_1.default)('banner-region', className), children: props.messages.length ? (0, jsx_runtime_1.jsx)(Banner_1.Banner, { ...props }) : null });
exports.BannerRegion = BannerRegion;
