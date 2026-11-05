import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { FormInputWrapper, FormLabelText, HelpText, RequiredIndicator } from "./inputDecorations";
import { partitionSequence } from "@openstax/ts-utils/misc/partitionSequence";
import { Radio as StyledRadio } from "../../Radio";
import { Checkbox as StyledCheckbox } from "../../Checkbox/Checkbox";
import classNames from 'classnames';
import './inputTypes.css';
import '../../../theme/theme.css';
export const TextInput = ({ label, addon, help, transformValue, wrapperProps, onChangeValue, className, ...props }) => _jsxs(FormInputWrapper, { ...wrapperProps, children: [_jsxs(FormLabelText, { children: [_jsx(RequiredIndicator, { show: props.required }), label, ":"] }), _jsxs("div", { className: "uncontrolled-flex-row", children: [_jsx("input", { type: "text", ...props, className: classNames("uncontrolled-input-element", className), onChange: e => {
                        var _a;
                        onChangeValue === null || onChangeValue === void 0 ? void 0 : onChangeValue(transformValue ? transformValue(e.target.value) : e.target.value);
                        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
                    } }), addon] }), _jsx(HelpText, { value: help })] });
export const TextArea = ({ label, help, transformValue, wrapperProps, onChangeValue, ...props }) => _jsxs(FormInputWrapper, { ...wrapperProps, children: [_jsxs(FormLabelText, { children: [_jsx(RequiredIndicator, { show: props.required }), label, ":"] }), _jsx("textarea", { rows: 8, ...props, onChange: e => {
                var _a;
                onChangeValue === null || onChangeValue === void 0 ? void 0 : onChangeValue(transformValue ? transformValue(e.target.value) : e.target.value);
                (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
            } }), _jsx(HelpText, { value: help })] });
export const Select = ({ onChangeValue, onOptionDisappear, onOptionAppear, onOptionReappear, label, help, transformValue, options, wrapperProps, ...props }) => {
    const changedSinceLastOptionUpdate = React.useRef(false);
    const optionsRef = React.useRef([]);
    const { value } = props;
    const disappearedOption = React.useRef([]);
    const arrayCoercedValueRef = React.useRef([]);
    arrayCoercedValueRef.current =
        value === undefined ? value : value instanceof Array ? value : [value.toString()];
    const callbacksRef = React.useRef({ onOptionAppear, onOptionReappear, onOptionDisappear });
    callbacksRef.current = { onOptionAppear, onOptionReappear, onOptionDisappear };
    React.useEffect(() => {
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
    const groupedOptions = React.useMemo(() => partitionSequence(option => ({ value: option.group }), options), [options]);
    return _jsxs(FormInputWrapper, { ...wrapperProps, children: [_jsxs(FormLabelText, { children: [_jsx(RequiredIndicator, { show: props.required }), label, ":"] }), _jsx("select", { ...props, onChange: e => {
                    var _a;
                    changedSinceLastOptionUpdate.current = true;
                    onChangeValue === null || onChangeValue === void 0 ? void 0 : onChangeValue(transformValue ? transformValue(e.target.value) : e.target.value);
                    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
                }, children: groupedOptions.map(([group, options], i) => group === undefined
                    ? _jsx(React.Fragment, { children: options.map(({ value, label }) => _jsx("option", { value: value, children: label }, value)) }, group !== null && group !== void 0 ? group : `no-label-${i}`)
                    : _jsx("optgroup", { label: group, children: options.map(({ value, label }) => _jsx("option", { value: value, children: label }, value)) }, group)) }), _jsx(HelpText, { value: help })] });
};
export const Radio = ({ label, help, wrapperProps, onChangeValue, ...props }) => {
    return _jsxs(FormInputWrapper, { ...wrapperProps, children: [_jsx("div", { className: "uncontrolled-radio-line", children: _jsx(StyledRadio, { ...props, labelAs: "div", onChange: e => {
                        var _a;
                        if (e.target.checked) {
                            onChangeValue === null || onChangeValue === void 0 ? void 0 : onChangeValue(e.target.value);
                        }
                        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
                    }, children: _jsxs(FormLabelText, { className: "uncontrolled-radio-form-label-text", children: [_jsx(RequiredIndicator, { show: props.required }), label] }) }) }), _jsx(HelpText, { value: help })] });
};
export const Checkbox = ({ label, help, wrapperProps, error, onChangeValue, ...props }) => {
    return _jsxs(FormInputWrapper, { ...wrapperProps, children: [_jsx("div", { className: "uncontrolled-checkbox-line", children: _jsx(StyledCheckbox, { ...props, onChange: e => {
                        var _a;
                        onChangeValue === null || onChangeValue === void 0 ? void 0 : onChangeValue(!!e.target.checked);
                        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
                    }, children: _jsxs(FormLabelText, { children: [_jsx(RequiredIndicator, { show: props.required }), label] }) }) }), _jsx(HelpText, { value: help }), error !== undefined && (_jsx(_Fragment, { children: error.map((msg, i) => (_jsx("p", { className: "uncontrolled-error-message", children: msg }, i))) }))] });
};
export const File = ({ label, help, wrapperProps, onChangeValue, uploader, value, ...props }) => {
    return _jsxs(FormInputWrapper, { ...wrapperProps, children: [_jsxs(FormLabelText, { children: [label, ":"] }), _jsx("input", { type: "file", ...props, onChange: e => {
                    var _a;
                    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
                    if (uploader) {
                        uploader(e.target.files).then(onChangeValue);
                    }
                    else {
                        onChangeValue === null || onChangeValue === void 0 ? void 0 : onChangeValue(e.target.files);
                    }
                } }), _jsx(HelpText, { value: help })] });
};
export const RangeInput = ({ label, help, wrapperProps, onChangeValue, labels, ...props }) => {
    const datalistId = React.useMemo(() => `datalist-${Math.random().toString(36).substring(2, 15)}`, []);
    return _jsxs(FormInputWrapper, { ...wrapperProps, className: `uncontrolled-range-input-wrapper ${(wrapperProps === null || wrapperProps === void 0 ? void 0 : wrapperProps.className) || ''}`, children: [_jsxs(FormLabelText, { children: [_jsx(RequiredIndicator, { show: props.required }), label, ":"] }), _jsx("input", { type: "range", ...props, list: labels && labels.length > 0 ? datalistId : undefined, onChange: e => {
                    var _a;
                    const newValue = parseFloat(e.target.value);
                    onChangeValue === null || onChangeValue === void 0 ? void 0 : onChangeValue(isNaN(newValue) ? undefined : newValue);
                    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
                } }), labels && labels.length > 0 && (_jsx("datalist", { id: datalistId, children: labels.map(label => (_jsx("option", { value: label.value, label: label.label }, label.value))) })), _jsx(HelpText, { value: help })] });
};
