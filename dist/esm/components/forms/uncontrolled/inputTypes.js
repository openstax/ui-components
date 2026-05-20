import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import styled from 'styled-components';
import { FormInputWrapper, FormLabelText, HelpText, RequiredIndicator } from "./inputDecorations";
import { partitionSequence } from "@openstax/ts-utils/misc/partitionSequence";
import { Radio as StyledRadio } from "../../Radio";
import { Checkbox as StyledCheckbox } from "../../Checkbox/Checkbox";
/*
 * input element
 */
const InputElement = styled.input `
  flex: 1;
  justify-content: stretch;
`;
const FlexRow = styled.div `
  flex-direction: row;
  display: flex;
`;
export const TextInput = ({ label, addon, help, transformValue, wrapperProps, onChangeValue, ...props }) => _jsxs(FormInputWrapper, { ...wrapperProps, children: [_jsxs(FormLabelText, { children: [_jsx(RequiredIndicator, { show: props.required }), label, ":"] }), _jsxs(FlexRow, { children: [_jsx(InputElement, { type: "text", ...props, onChange: e => {
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
const RadioLine = styled.div `
  flex-direction: row;
  display: flex;
  align-items: center;
`;
const RadioFormLabelText = styled(FormLabelText) `
  white-space: normal;
`;
export const Radio = ({ label, help, wrapperProps, onChangeValue, ...props }) => {
    return _jsxs(FormInputWrapper, { ...wrapperProps, children: [_jsx(RadioLine, { children: _jsx(StyledRadio, { ...props, labelAs: "div", onChange: e => {
                        var _a;
                        if (e.target.checked) {
                            onChangeValue === null || onChangeValue === void 0 ? void 0 : onChangeValue(e.target.value);
                        }
                        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
                    }, children: _jsxs(RadioFormLabelText, { children: [_jsx(RequiredIndicator, { show: props.required }), label] }) }) }), _jsx(HelpText, { value: help })] });
};
const CheckboxLine = styled.div `
  flex-direction: row;
  display: flex;
  align-items: center;
`;
const StyledErrorMessage = styled.p `
  color: #C22032;
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
  line-height: 2.5rem;
`;
export const Checkbox = ({ label, help, wrapperProps, error, onChangeValue, ...props }) => {
    return _jsxs(FormInputWrapper, { ...wrapperProps, children: [_jsx(CheckboxLine, { children: _jsx(StyledCheckbox, { ...props, onChange: e => {
                        var _a;
                        onChangeValue === null || onChangeValue === void 0 ? void 0 : onChangeValue(!!e.target.checked);
                        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
                    }, children: _jsxs(FormLabelText, { children: [_jsx(RequiredIndicator, { show: props.required }), label] }) }) }), _jsx(HelpText, { value: help }), error !== undefined && (_jsx(_Fragment, { children: error.map((msg, i) => (_jsx(StyledErrorMessage, { children: msg }, i))) }))] });
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
const RangeInputWrapper = styled(FormInputWrapper) `
  datalist {
    display: flex;
    justify-content: space-between;
    writing-mode:unset;
    flex-direction: row;
    padding: 0 1em;

    option {
      width: 0;
      text-align: center;
      display: flex;
      justify-content: center;
    }
  }
`;
export const RangeInput = ({ label, help, wrapperProps, onChangeValue, labels, ...props }) => {
    const datalistId = React.useMemo(() => `datalist-${Math.random().toString(36).substring(2, 15)}`, []);
    return _jsxs(RangeInputWrapper, { ...wrapperProps, children: [_jsxs(FormLabelText, { children: [_jsx(RequiredIndicator, { show: props.required }), label, ":"] }), _jsx("input", { type: "range", ...props, list: labels && labels.length > 0 ? datalistId : undefined, onChange: e => {
                    var _a;
                    const newValue = parseFloat(e.target.value);
                    onChangeValue === null || onChangeValue === void 0 ? void 0 : onChangeValue(isNaN(newValue) ? undefined : newValue);
                    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
                } }), labels && labels.length > 0 && (_jsx("datalist", { id: datalistId, children: labels.map(label => (_jsx("option", { value: label.value, label: label.label }, label.value))) })), _jsx(HelpText, { value: help })] });
};
