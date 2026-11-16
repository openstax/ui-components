import React from 'react';
import { merge } from "@openstax/ts-utils/misc/merge";
const randomId = () => window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
export const FormStateContext = React.createContext(() => { throw new Error('form helpers not provided'); });
export const useFormHelpers = () => React.useContext(FormStateContext)();
const makeSetInput = (setState) => {
    const mergeFields = (input) => setState(previous => merge(previous, input));
    const setInputField = (fieldName) => (value) => {
        setState(previous => ({ ...previous, [fieldName]: value }));
    };
    return { field: setInputField, fields: setState, merge: mergeFields };
};
export const useFormState = (state, defaultValue, onSubmit) => {
    const [inputFields, setInputFields] = React.useState('data' in state && state.data ? state.data : (defaultValue || {}));
    const inputFieldsRef = React.useRef(inputFields);
    inputFieldsRef.current = inputFields;
    const submitHandler = React.useCallback(() => {
        onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(inputFieldsRef.current);
    }, [onSubmit]);
    const helpers = {
        namespace: 'form',
        submit: submitHandler,
        data: inputFields,
        state,
        setInput: makeSetInput(setInputFields)
    };
    helpers.rootHelpers = helpers;
    return helpers;
};
export const useFormNameSpace = (field) => {
    const parentState = useFormHelpers();
    const setInputFields = (input) => parentState.setInput.fields(previous => ({
        ...previous,
        [field]: input instanceof Function ? input(previous[field] || {}) : input
    }));
    return {
        namespace: parentState.namespace + '.' + field,
        submit: parentState.submit,
        data: parentState.data[field] || {},
        rootHelpers: parentState.rootHelpers,
        state: parentState.state,
        setInput: makeSetInput(setInputFields)
    };
};
export const FormListContext = React.createContext(() => { throw new Error('form list helpers not provided'); });
export const useFormListHelpers = () => React.useContext(FormListContext)();
export const useFormList = ({ name }) => {
    const parentState = useFormHelpers();
    const setData = React.useCallback((input) => parentState.setInput.fields(previous => ({
        ...previous,
        [name]: input instanceof Function ? input(previous[name] || []) : input
    })), [name, parentState.setInput]);
    const makeRecordHelpers = (data) => ({
        data,
        rootHelpers: parentState.rootHelpers,
        state: parentState.state,
        submit: parentState.submit,
        namespace: parentState.namespace + '.' + data.id,
        setInput: makeSetInput((input) => setData(previous => previous.map((record) => record.id === data.id
            ? input instanceof Function ? input(record) : input
            : record)))
    });
    const value = React.useMemo(() => parentState.data[name] || [], [name, parentState.data]);
    const hasIds = React.useMemo(() => value.every((record) => !!record.id), [value]);
    React.useEffect(() => {
        if (!hasIds) {
            parentState.setInput.fields(previous => ({
                ...previous,
                [name]: value.map((record) => record.id === undefined ? { ...record, id: randomId() } : record)
            }));
        }
    }, [value, hasIds, name, parentState.setInput]);
    return {
        addRecord: (record) => parentState.setInput.fields(previous => ({
            ...previous,
            [name]: [...(previous[name] || []), { id: randomId(), ...record }]
        })),
        removeRecord: (id) => parentState.setInput.fields(previous => ({
            ...previous,
            [name]: (previous[name] || []).filter((record) => record.id !== id)
        })),
        data: hasIds ? value : [],
        rootHelpers: parentState.rootHelpers,
        setData,
        makeRecordHelpers,
    };
};
