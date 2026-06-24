"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyPortal = void 0;
const react_1 = __importDefault(require("react"));
const react_dom_1 = require("react-dom");
const BodyPortalSlotsContext_1 = require("./BodyPortalSlotsContext");
const getInsertBeforeTarget = (bodyPortalSlots, slot) => {
    // Note: If the slot is not found in bodyPortalSlots, this code will append the tag instead,
    //       meaning the ordering will then depend on the rendering order and may change
    const slotIndex = bodyPortalSlots.findIndex((sl) => sl === slot);
    if (slotIndex === -1) {
        return null;
    }
    // Find the next slot that is present in the DOM and return it
    for (let index = slotIndex + 1; index < bodyPortalSlots.length; index++) {
        const sl = bodyPortalSlots[index];
        const tag = sl === 'root'
            ? document.body.querySelector('#root')
            : document.body.querySelector(`[data-portal-slot="${sl}"]`);
        if (tag) {
            return tag;
        }
    }
    // None of the slots after this one are present in the DOM, so just append it instead
    return null;
};
exports.BodyPortal = react_1.default.forwardRef(({ children, className, role, slot, tagName, id, ariaLabel, ...props }, ref) => {
    var _a;
    const tag = (_a = tagName === null || tagName === void 0 ? void 0 : tagName.toUpperCase()) !== null && _a !== void 0 ? _a : 'DIV';
    const internalRef = react_1.default.useRef(typeof document !== 'undefined' ? document.createElement(tag) : null);
    if (typeof document !== 'undefined' && (!internalRef.current || internalRef.current.tagName !== tag)) {
        internalRef.current = document.createElement(tag);
    }
    if (ref && internalRef.current) {
        if (typeof ref === 'function') {
            ref(internalRef.current);
        }
        else {
            ref.current = internalRef.current;
        }
    }
    const bodyPortalOrderedRefs = react_1.default.useContext(BodyPortalSlotsContext_1.BodyPortalSlotsContext);
    const testId = props['data-testid'];
    react_1.default.useLayoutEffect(() => {
        const element = internalRef.current;
        if (!element) {
            return;
        }
        if (className) {
            element.classList.add(...className.split(' '));
        }
        if (id) {
            element.id = id;
        }
        if (testId) {
            element.dataset.testid = testId;
        }
        if (role) {
            element.setAttribute('role', role);
        }
        if (slot) {
            element.dataset.portalSlot = slot;
        }
        if (ariaLabel)
            element.setAttribute('aria-label', ariaLabel);
        document.body.insertBefore(element, getInsertBeforeTarget(bodyPortalOrderedRefs, slot));
        return () => {
            if (element.parentNode) {
                element.parentNode.removeChild(element);
            }
            if (slot) {
                delete element.dataset.portalSlot;
            }
            if (role) {
                element.removeAttribute('role');
            }
            if (ariaLabel) {
                element.removeAttribute('aria-label');
            }
            if (className) {
                element.classList.remove(...className.split(' '));
            }
            if (id) {
                element.id = '';
            }
            if (testId) {
                delete element.dataset.testid;
            }
        };
    }, [bodyPortalOrderedRefs, className, id, role, slot, ariaLabel, tag, testId]);
    if (!internalRef.current) {
        return null;
    }
    return (0, react_dom_1.createPortal)(children, internalRef.current);
});
