import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import * as Uncontrolled from '../uncontrolled/inputTypes';
import { useFormHelpers } from "./hooks";
const useEmptyDisabledValue = (props, value, onChangeValue) => {
    const { disabled, emptyDisabledValue } = props;
    const previousValueRef = React.useRef();
    const onChangeValueRef = React.useRef(onChangeValue);
    onChangeValueRef.current = onChangeValue;
    React.useEffect(() => {
        if (emptyDisabledValue !== false && disabled && value) {
            previousValueRef.current = value;
            onChangeValueRef.current(undefined);
        }
        if (emptyDisabledValue !== false && !disabled && value === undefined && value !== previousValueRef.current) {
            onChangeValueRef.current(previousValueRef.current);
        }
    }, [disabled, emptyDisabledValue, value]);
};
export const TextInput = (props) => {
    const { data, namespace, setInput } = useFormHelpers();
    const onChangeValue = (value) => {
        var _a;
        (_a = props.onChangeValue) === null || _a === void 0 ? void 0 : _a.call(props, value);
        setInput.field(props.name)(value);
    };
    const value = data[props.name];
    useEmptyDisabledValue(props, value, onChangeValue);
    return _jsx(Uncontrolled.TextInput, { ...props, name: namespace + '.' + props.name, value: (value !== null && value !== void 0 ? value : '').toString(), onChangeValue: onChangeValue });
};
export const TextArea = (props) => {
    const { data, namespace, setInput } = useFormHelpers();
    const onChangeValue = (value) => {
        var _a;
        (_a = props.onChangeValue) === null || _a === void 0 ? void 0 : _a.call(props, value);
        setInput.field(props.name)(value);
    };
    const value = data[props.name];
    useEmptyDisabledValue(props, value, onChangeValue);
    return _jsx(Uncontrolled.TextArea, { ...props, name: namespace + '.' + props.name, value: value || '', onChangeValue: onChangeValue });
};
export const Radio = (props) => {
    const { data, namespace, setInput } = useFormHelpers();
    const onChangeValue = (value) => {
        var _a;
        (_a = props.onChangeValue) === null || _a === void 0 ? void 0 : _a.call(props, value);
        setInput.field(props.name)(value);
    };
    const checked = data[props.name];
    useEmptyDisabledValue(props, checked, onChangeValue);
    return _jsx(Uncontrolled.Radio, { ...props, name: namespace + '.' + props.name, onChangeValue: onChangeValue });
};
export const Checkbox = (props) => {
    const { data, namespace, setInput } = useFormHelpers();
    const onChangeValue = (value) => {
        var _a;
        (_a = props.onChangeValue) === null || _a === void 0 ? void 0 : _a.call(props, value);
        setInput.field(props.name)(value);
    };
    const checked = data[props.name];
    useEmptyDisabledValue(props, checked, onChangeValue);
    return _jsx(Uncontrolled.Checkbox, { ...props, name: namespace + '.' + props.name, checked: !!checked, onChangeValue: onChangeValue });
};
export const Select = (props) => {
    const { data, namespace, setInput } = useFormHelpers();
    const value = data[props.name];
    const onChangeValue = (value) => {
        var _a;
        (_a = props.onChangeValue) === null || _a === void 0 ? void 0 : _a.call(props, value);
        setInput.field(props.name)(value);
    };
    useEmptyDisabledValue(props, value, onChangeValue);
    return _jsx(Uncontrolled.Select, { ...props, name: namespace + '.' + props.name, value: value, onOptionDisappear: (disappeared) => {
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
export const File = (props) => {
    const { data, namespace, setInput } = useFormHelpers();
    const onChangeValue = (value) => {
        var _a;
        (_a = props.onChangeValue) === null || _a === void 0 ? void 0 : _a.call(props, value);
        setInput.field(props.name)(value);
    };
    const value = data[props.name];
    useEmptyDisabledValue(props, value, onChangeValue);
    return _jsx(Uncontrolled.File, { ...props, required: props.required && !value, name: namespace + '.' + props.name, value: value || '', onChangeValue: onChangeValue });
};
export const RangeInput = (props) => {
    const { data, namespace, setInput } = useFormHelpers();
    const onChangeValue = (value) => {
        var _a;
        (_a = props.onChangeValue) === null || _a === void 0 ? void 0 : _a.call(props, value);
        setInput.field(props.name)(value);
    };
    const value = data[props.name];
    const numberValue = parseFloat((value !== null && value !== void 0 ? value : '').toString());
    const formValue = isNaN(numberValue) ? '' : numberValue;
    useEmptyDisabledValue(props, formValue, onChangeValue);
    return _jsx(Uncontrolled.RangeInput, { ...props, name: namespace + '.' + props.name, value: formValue, onChangeValue: onChangeValue });
};
