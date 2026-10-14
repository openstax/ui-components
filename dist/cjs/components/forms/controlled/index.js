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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRecordAddButton = exports.ListRecordRemoveButton = exports.ListRecordSortableHandle = exports.ListItems = exports.List = exports.NameSpace = exports.GetFormDataRoot = exports.GetFormData = exports.GetFormValue = exports.Buttons = exports.Messages = exports.Form = exports.FormSection = exports.Cancel = exports.Submit = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Uncontrolled = __importStar(require("../uncontrolled"));
const hooks_1 = require("./hooks");
__exportStar(require("./inputs"), exports);
__exportStar(require("./hooks"), exports);
var uncontrolled_1 = require("../uncontrolled");
Object.defineProperty(exports, "Submit", { enumerable: true, get: function () { return uncontrolled_1.Submit; } });
Object.defineProperty(exports, "Cancel", { enumerable: true, get: function () { return uncontrolled_1.Cancel; } });
Object.defineProperty(exports, "FormSection", { enumerable: true, get: function () { return uncontrolled_1.FormSection; } });
const Form = ({ children, state, onSubmit, defaultData, ...props }) => {
    const formHelpers = (0, hooks_1.useFormState)(state, defaultData, onSubmit);
    return (0, jsx_runtime_1.jsx)(hooks_1.FormStateContext.Provider, { value: () => formHelpers, children: (0, jsx_runtime_1.jsx)(Uncontrolled.Form, { ...props, onSubmit: e => {
                e.preventDefault();
                formHelpers.submit();
            }, children: children }) });
};
exports.Form = Form;
const Messages = (props) => {
    const { state } = (0, hooks_1.useFormHelpers)();
    return (0, jsx_runtime_1.jsx)(Uncontrolled.Messages, { ...props, state: state });
};
exports.Messages = Messages;
const Buttons = (props) => {
    const { state } = (0, hooks_1.useFormHelpers)();
    return (0, jsx_runtime_1.jsx)(Uncontrolled.Buttons, { ...props, state: state });
};
exports.Buttons = Buttons;
const GetFormValue = (props) => {
    const { data } = (0, hooks_1.useFormHelpers)();
    return props.children(data[props.name]);
};
exports.GetFormValue = GetFormValue;
const GetFormData = (props) => {
    const { data } = (0, hooks_1.useFormHelpers)();
    return props.children(data);
};
exports.GetFormData = GetFormData;
const GetFormDataRoot = (props) => {
    const { rootHelpers } = (0, hooks_1.useFormHelpers)();
    return props.children(rootHelpers.data);
};
exports.GetFormDataRoot = GetFormDataRoot;
const NameSpace = (props) => {
    const formHelpers = (0, hooks_1.useFormNameSpace)(props.name);
    return (0, jsx_runtime_1.jsx)(hooks_1.FormStateContext.Provider, { value: () => formHelpers, children: props.children });
};
exports.NameSpace = NameSpace;
const List = ({ children, ...props }) => {
    const listHelpers = (0, hooks_1.useFormList)(props);
    return (0, jsx_runtime_1.jsx)(hooks_1.FormListContext.Provider, { value: () => listHelpers, children: children });
};
exports.List = List;
const SortableContext = react_1.default.createContext(() => { throw new Error('context not provided'); });
const ListItems = (props) => {
    const listState = (0, hooks_1.useFormListHelpers)();
    const [sortableEnabled, setSortableEnabled] = react_1.default.useState(false);
    const draggingElementRef = react_1.default.useRef();
    const dragOver = (record) => (e) => {
        if (!draggingElementRef.current) {
            return;
        }
        e.preventDefault();
        const current = listState.data.findIndex(r => r.id === draggingElementRef.current);
        const target = listState.data.findIndex(r => r.id === record.id);
        if (current !== target) {
            const copy = [...listState.data];
            copy.splice(target, 0, copy.splice(current, 1)[0]);
            listState.setData(copy);
        }
    };
    const dragEnd = (e) => {
        e.preventDefault();
        setSortableEnabled(false);
    };
    const dragStart = (record) => (e) => {
        if (!sortableEnabled) {
            e.preventDefault();
            return;
        }
        e.dataTransfer.effectAllowed = "move";
        draggingElementRef.current = record.id;
    };
    return (0, jsx_runtime_1.jsx)(Uncontrolled.FormSection, { children: listState.data.map(record => (0, jsx_runtime_1.jsx)(SortableContext.Provider, { value: setSortableEnabled, children: (0, jsx_runtime_1.jsx)(hooks_1.FormStateContext.Provider, { value: () => listState.makeRecordHelpers(record), children: (0, jsx_runtime_1.jsx)(Uncontrolled.FormSection, { draggable: sortableEnabled, onDrop: dragEnd, onDragOver: dragOver(record), onDragStart: dragStart(record), style: { userSelect: 'text' }, children: props.children }) }) }, record.id)) });
};
exports.ListItems = ListItems;
const ListRecordSortableHandle = (props) => {
    const setSortableEnabled = react_1.default.useContext(SortableContext);
    return (0, jsx_runtime_1.jsx)("div", { tabIndex: -1, ...props, onMouseDown: () => setSortableEnabled(true), style: {
            cursor: 'move',
            backgroundImage: 'radial-gradient(circle at 1px 1px, #aaa 1px, transparent 0), ' +
                'radial-gradient(circle at 4px 4px, #aaa 1px, transparent 0)',
            backgroundSize: '5px 6px',
            height: '11px',
            width: '11px',
            ...props.style
        } });
};
exports.ListRecordSortableHandle = ListRecordSortableHandle;
const ListRecordRemoveButton = (props) => {
    const formHelpers = (0, hooks_1.useFormHelpers)();
    const listHelpers = (0, hooks_1.useFormListHelpers)();
    return (0, jsx_runtime_1.jsx)("button", { ...props, onClick: (e) => {
            var _a;
            listHelpers.removeRecord(formHelpers.data.id);
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        }, type: "button" });
};
exports.ListRecordRemoveButton = ListRecordRemoveButton;
const ListRecordAddButton = (props) => {
    const listHelpers = (0, hooks_1.useFormListHelpers)();
    return (0, jsx_runtime_1.jsx)("button", { ...props, onClick: (e) => {
            var _a;
            listHelpers.addRecord();
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        }, type: "button" });
};
exports.ListRecordAddButton = ListRecordAddButton;
