"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeInput = exports.File = exports.Checkbox = exports.Radio = exports.Select = exports.TextArea = exports.TextInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const inputDecorations_1 = require("./inputDecorations");
const partitionSequence_1 = require("@openstax/ts-utils/misc/partitionSequence");
const Radio_1 = require("../../Radio");
const Checkbox_1 = require("../../Checkbox/Checkbox");
const classnames_1 = __importDefault(require("classnames"));
require("./inputTypes.css");
require("../../../theme/theme.css");
const TextInput = ({ label, addon, help, transformValue, wrapperProps, onChangeValue, className, ...props }) => (0, jsx_runtime_1.jsxs)(inputDecorations_1.FormInputWrapper, { ...wrapperProps, children: [(0, jsx_runtime_1.jsxs)(inputDecorations_1.FormLabelText, { children: [(0, jsx_runtime_1.jsx)(inputDecorations_1.RequiredIndicator, { show: props.required }), label, ":"] }), (0, jsx_runtime_1.jsxs)("div", { className: "uncontrolled-flex-row", children: [(0, jsx_runtime_1.jsx)("input", { type: "text", ...props, className: (0, classnames_1.default)("uncontrolled-input-element", className), onChange: e => {
                        var _a;
                        onChangeValue === null || onChangeValue === void 0 ? void 0 : onChangeValue(transformValue ? transformValue(e.target.value) : e.target.value);
                        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
                    } }), addon] }), (0, jsx_runtime_1.jsx)(inputDecorations_1.HelpText, { value: help })] });
exports.TextInput = TextInput;
const TextArea = ({ label, help, transformValue, wrapperProps, onChangeValue, ...props }) => (0, jsx_runtime_1.jsxs)(inputDecorations_1.FormInputWrapper, { ...wrapperProps, children: [(0, jsx_runtime_1.jsxs)(inputDecorations_1.FormLabelText, { children: [(0, jsx_runtime_1.jsx)(inputDecorations_1.RequiredIndicator, { show: props.required }), label, ":"] }), (0, jsx_runtime_1.jsx)("textarea", { rows: 8, ...props, onChange: e => {
                var _a;
                onChangeValue === null || onChangeValue === void 0 ? void 0 : onChangeValue(transformValue ? transformValue(e.target.value) : e.target.value);
                (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
            } }), (0, jsx_runtime_1.jsx)(inputDecorations_1.HelpText, { value: help })] });
exports.TextArea = TextArea;
const Select = ({ onChangeValue, onOptionDisappear, onOptionAppear, onOptionReappear, label, help, transformValue, options, wrapperProps, ...props }) => {
    const changedSinceLastOptionUpdate = react_1.default.useRef(false);
    const optionsRef = react_1.default.useRef([]);
    const { value } = props;
    const disappearedOption = react_1.default.useRef([]);
    const arrayCoercedValueRef = react_1.default.useRef([]);
    arrayCoercedValueRef.current =
        value === undefined ? value : value instanceof Array ? value : [value.toString()];
    const callbacksRef = react_1.default.useRef({ onOptionAppear, onOptionReappear, onOptionDisappear });
    callbacksRef.current = { onOptionAppear, onOptionReappear, onOptionDisappear };
    react_1.default.useEffect(() => {
        if (callbacksRef.current.onOptionDisappear && arrayCoercedValueRef.current) {
            const disappearedOptions = arrayCoercedValueRef.current.filter(valueString => !options.find(option => option.value === valueString));
            if (disappearedOptions.length > 0) {
                disappearedOption.current = disappearedOptions;
                changedSinceLastOptionUpdate.current = false;
                callbacksRef.current.onOptionDisappear(disappearedOptions);
            }
        }
        const reappearedOptions = callbacksRef.current.onOptionReappear
            && disappearedOption.current
            && !changedSinceLastOptionUpdate.current
            ? options.filter(option => disappearedOption.current.includes(option.value)).map(option => option.value)
            : [];
        if (callbacksRef.current.onOptionReappear && reappearedOptions.length > 0) {
            disappearedOption.current = disappearedOption.current.filter(disappeared => !reappearedOptions.includes(disappeared));
            callbacksRef.current.onOptionReappear(reappearedOptions);
        }
        else if (callbacksRef.current.onOptionAppear) {
            const newOptions = options.filter(newOption => !optionsRef.current.find(oldOption => oldOption.value === newOption.value)).map(option => option.value);
            if (newOptions.length > 0) {
                callbacksRef.current.onOptionAppear(newOptions);
            }
        }
        optionsRef.current = options;
    }, [options]);
    const groupedOptions = react_1.default.useMemo(() => (0, partitionSequence_1.partitionSequence)(option => ({ value: option.group }), options), [options]);
    return (0, jsx_runtime_1.jsxs)(inputDecorations_1.FormInputWrapper, { ...wrapperProps, children: [(0, jsx_runtime_1.jsxs)(inputDecorations_1.FormLabelText, { children: [(0, jsx_runtime_1.jsx)(inputDecorations_1.RequiredIndicator, { show: props.required }), label, ":"] }), (0, jsx_runtime_1.jsx)("select", { ...props, onChange: e => {
                    var _a;
                    changedSinceLastOptionUpdate.current = true;
                    onChangeValue === null || onChangeValue === void 0 ? void 0 : onChangeValue(transformValue ? transformValue(e.target.value) : e.target.value);
                    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
                }, children: groupedOptions.map(([group, options], i) => group === undefined
                    ? (0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: options.map(({ value, label }) => (0, jsx_runtime_1.jsx)("option", { value: value, children: label }, value)) }, group !== null && group !== void 0 ? group : `no-label-${i}`)
                    : (0, jsx_runtime_1.jsx)("optgroup", { label: group, children: options.map(({ value, label }) => (0, jsx_runtime_1.jsx)("option", { value: value, children: label }, value)) }, group)) }), (0, jsx_runtime_1.jsx)(inputDecorations_1.HelpText, { value: help })] });
};
exports.Select = Select;
const Radio = ({ label, help, wrapperProps, onChangeValue, ...props }) => {
    return (0, jsx_runtime_1.jsxs)(inputDecorations_1.FormInputWrapper, { ...wrapperProps, children: [(0, jsx_runtime_1.jsx)("div", { className: "uncontrolled-radio-line", children: (0, jsx_runtime_1.jsx)(Radio_1.Radio, { ...props, labelAs: "div", onChange: e => {
                        var _a;
                        if (e.target.checked) {
                            onChangeValue === null || onChangeValue === void 0 ? void 0 : onChangeValue(e.target.value);
                        }
                        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
                    }, children: (0, jsx_runtime_1.jsxs)(inputDecorations_1.FormLabelText, { className: "uncontrolled-radio-form-label-text", children: [(0, jsx_runtime_1.jsx)(inputDecorations_1.RequiredIndicator, { show: props.required }), label] }) }) }), (0, jsx_runtime_1.jsx)(inputDecorations_1.HelpText, { value: help })] });
};
exports.Radio = Radio;
const Checkbox = ({ label, help, wrapperProps, error, onChangeValue, ...props }) => {
    return (0, jsx_runtime_1.jsxs)(inputDecorations_1.FormInputWrapper, { ...wrapperProps, children: [(0, jsx_runtime_1.jsx)("div", { className: "uncontrolled-checkbox-line", children: (0, jsx_runtime_1.jsx)(Checkbox_1.Checkbox, { ...props, onChange: e => {
                        var _a;
                        onChangeValue === null || onChangeValue === void 0 ? void 0 : onChangeValue(!!e.target.checked);
                        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
                    }, children: (0, jsx_runtime_1.jsxs)(inputDecorations_1.FormLabelText, { children: [(0, jsx_runtime_1.jsx)(inputDecorations_1.RequiredIndicator, { show: props.required }), label] }) }) }), (0, jsx_runtime_1.jsx)(inputDecorations_1.HelpText, { value: help }), error !== undefined && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: error.map((msg, i) => ((0, jsx_runtime_1.jsx)("p", { className: "uncontrolled-error-message", children: msg }, i))) }))] });
};
exports.Checkbox = Checkbox;
const File = ({ label, help, wrapperProps, onChangeValue, uploader, value, ...props }) => {
    return (0, jsx_runtime_1.jsxs)(inputDecorations_1.FormInputWrapper, { ...wrapperProps, children: [(0, jsx_runtime_1.jsxs)(inputDecorations_1.FormLabelText, { children: [label, ":"] }), (0, jsx_runtime_1.jsx)("input", { type: "file", ...props, onChange: e => {
                    var _a;
                    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
                    if (uploader) {
                        uploader(e.target.files).then(onChangeValue);
                    }
                    else {
                        onChangeValue === null || onChangeValue === void 0 ? void 0 : onChangeValue(e.target.files);
                    }
                } }), (0, jsx_runtime_1.jsx)(inputDecorations_1.HelpText, { value: help })] });
};
exports.File = File;
const RangeInput = ({ label, help, wrapperProps, onChangeValue, labels, ...props }) => {
    const datalistId = react_1.default.useMemo(() => `datalist-${Math.random().toString(36).substring(2, 15)}`, []);
    return (0, jsx_runtime_1.jsxs)(inputDecorations_1.FormInputWrapper, { ...wrapperProps, className: `uncontrolled-range-input-wrapper ${(wrapperProps === null || wrapperProps === void 0 ? void 0 : wrapperProps.className) || ''}`, children: [(0, jsx_runtime_1.jsxs)(inputDecorations_1.FormLabelText, { children: [(0, jsx_runtime_1.jsx)(inputDecorations_1.RequiredIndicator, { show: props.required }), label, ":"] }), (0, jsx_runtime_1.jsx)("input", { type: "range", ...props, list: labels && labels.length > 0 ? datalistId : undefined, onChange: e => {
                    var _a;
                    const newValue = parseFloat(e.target.value);
                    onChangeValue === null || onChangeValue === void 0 ? void 0 : onChangeValue(isNaN(newValue) ? undefined : newValue);
                    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
                } }), labels && labels.length > 0 && ((0, jsx_runtime_1.jsx)("datalist", { id: datalistId, children: labels.map(label => ((0, jsx_runtime_1.jsx)("option", { value: label.value, label: label.label }, label.value))) })), (0, jsx_runtime_1.jsx)(inputDecorations_1.HelpText, { value: help })] });
};
exports.RangeInput = RangeInput;
