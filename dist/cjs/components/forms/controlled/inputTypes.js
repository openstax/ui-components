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
exports.RangeInput = exports.File = exports.Select = exports.Checkbox = exports.Radio = exports.TextArea = exports.TextInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Uncontrolled = __importStar(require("../uncontrolled/inputTypes"));
const hooks_1 = require("./hooks");
const useEmptyDisabledValue = (props, value, onChangeValue) => {
    const { disabled, emptyDisabledValue } = props;
    const previousValueRef = react_1.default.useRef();
    const onChangeValueRef = react_1.default.useRef(onChangeValue);
    onChangeValueRef.current = onChangeValue;
    react_1.default.useEffect(() => {
        if (emptyDisabledValue !== false && disabled && value) {
            previousValueRef.current = value;
            onChangeValueRef.current(undefined);
        }
        if (emptyDisabledValue !== false && !disabled && value === undefined && value !== previousValueRef.current) {
            onChangeValueRef.current(previousValueRef.current);
        }
    }, [disabled, emptyDisabledValue, value]);
};
const TextInput = (props) => {
    const { data, namespace, setInput } = (0, hooks_1.useFormHelpers)();
    const onChangeValue = (value) => {
        var _a;
        (_a = props.onChangeValue) === null || _a === void 0 ? void 0 : _a.call(props, value);
        setInput.field(props.name)(value);
    };
    const value = data[props.name];
    useEmptyDisabledValue(props, value, onChangeValue);
    return (0, jsx_runtime_1.jsx)(Uncontrolled.TextInput, { ...props, name: namespace + '.' + props.name, value: (value !== null && value !== void 0 ? value : '').toString(), onChangeValue: onChangeValue });
};
exports.TextInput = TextInput;
const TextArea = (props) => {
    const { data, namespace, setInput } = (0, hooks_1.useFormHelpers)();
    const onChangeValue = (value) => {
        var _a;
        (_a = props.onChangeValue) === null || _a === void 0 ? void 0 : _a.call(props, value);
        setInput.field(props.name)(value);
    };
    const value = data[props.name];
    useEmptyDisabledValue(props, value, onChangeValue);
    return (0, jsx_runtime_1.jsx)(Uncontrolled.TextArea, { ...props, name: namespace + '.' + props.name, value: value || '', onChangeValue: onChangeValue });
};
exports.TextArea = TextArea;
const Radio = (props) => {
    const { data, namespace, setInput } = (0, hooks_1.useFormHelpers)();
    const onChangeValue = (value) => {
        var _a;
        (_a = props.onChangeValue) === null || _a === void 0 ? void 0 : _a.call(props, value);
        setInput.field(props.name)(value);
    };
    const checked = data[props.name];
    useEmptyDisabledValue(props, checked, onChangeValue);
    return (0, jsx_runtime_1.jsx)(Uncontrolled.Radio, { ...props, name: namespace + '.' + props.name, onChangeValue: onChangeValue });
};
exports.Radio = Radio;
const Checkbox = (props) => {
    const { data, namespace, setInput } = (0, hooks_1.useFormHelpers)();
    const onChangeValue = (value) => {
        var _a;
        (_a = props.onChangeValue) === null || _a === void 0 ? void 0 : _a.call(props, value);
        setInput.field(props.name)(value);
    };
    const checked = data[props.name];
    useEmptyDisabledValue(props, checked, onChangeValue);
    return (0, jsx_runtime_1.jsx)(Uncontrolled.Checkbox, { ...props, name: namespace + '.' + props.name, checked: !!checked, onChangeValue: onChangeValue });
};
exports.Checkbox = Checkbox;
const Select = (props) => {
    const { data, namespace, setInput } = (0, hooks_1.useFormHelpers)();
    const value = data[props.name];
    const onChangeValue = (value) => {
        var _a;
        (_a = props.onChangeValue) === null || _a === void 0 ? void 0 : _a.call(props, value);
        setInput.field(props.name)(value);
    };
    useEmptyDisabledValue(props, value, onChangeValue);
    return (0, jsx_runtime_1.jsx)(Uncontrolled.Select, { ...props, name: namespace + '.' + props.name, value: value, onOptionDisappear: (disappeared) => {
            var _a;
            if (props.multiple && value instanceof Array) {
                onChangeValue(value.filter(value => !disappeared.includes(value)));
            }
            else if (value) {
                onChangeValue(undefined);
            }
            (_a = props.onOptionDisappear) === null || _a === void 0 ? void 0 : _a.call(props, disappeared);
        }, onOptionAppear: (appeared) => {
            var _a, _b;
            if (!props.multiple && !value && appeared[0] === ((_a = props.options[0]) === null || _a === void 0 ? void 0 : _a.value)) {
                onChangeValue(appeared[0]);
            }
            (_b = props.onOptionAppear) === null || _b === void 0 ? void 0 : _b.call(props, appeared);
        }, onOptionReappear: (reappeared) => {
            var _a;
            if (props.multiple) {
                onChangeValue([...value, ...reappeared]);
            }
            else {
                onChangeValue(reappeared[0]);
            }
            (_a = props.onOptionReappear) === null || _a === void 0 ? void 0 : _a.call(props, reappeared);
        }, onChangeValue: onChangeValue });
};
exports.Select = Select;
const File = (props) => {
    const { data, namespace, setInput } = (0, hooks_1.useFormHelpers)();
    const onChangeValue = (value) => {
        var _a;
        (_a = props.onChangeValue) === null || _a === void 0 ? void 0 : _a.call(props, value);
        setInput.field(props.name)(value);
    };
    const value = data[props.name];
    useEmptyDisabledValue(props, value, onChangeValue);
    return (0, jsx_runtime_1.jsx)(Uncontrolled.File, { ...props, required: props.required && !value, name: namespace + '.' + props.name, value: value || '', onChangeValue: onChangeValue });
};
exports.File = File;
const RangeInput = (props) => {
    const { data, namespace, setInput } = (0, hooks_1.useFormHelpers)();
    const onChangeValue = (value) => {
        var _a;
        (_a = props.onChangeValue) === null || _a === void 0 ? void 0 : _a.call(props, value);
        setInput.field(props.name)(value);
    };
    const value = data[props.name];
    const numberValue = parseFloat((value !== null && value !== void 0 ? value : '').toString());
    const formValue = isNaN(numberValue) ? '' : numberValue;
    useEmptyDisabledValue(props, formValue, onChangeValue);
    return (0, jsx_runtime_1.jsx)(Uncontrolled.RangeInput, { ...props, name: namespace + '.' + props.name, value: formValue, onChangeValue: onChangeValue });
};
exports.RangeInput = RangeInput;
