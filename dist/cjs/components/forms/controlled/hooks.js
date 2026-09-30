"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormList = exports.useFormListHelpers = exports.FormListContext = exports.useFormNameSpace = exports.useFormState = exports.useFormHelpers = exports.FormStateContext = void 0;
const react_1 = __importDefault(require("react"));
const merge_1 = require("@openstax/ts-utils/misc/merge");
const randomId = () => window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
exports.FormStateContext = react_1.default.createContext(() => { throw new Error('form helpers not provided'); });
const useFormHelpers = () => react_1.default.useContext(exports.FormStateContext)();
exports.useFormHelpers = useFormHelpers;
const makeSetInput = (setState) => {
    const mergeFields = (input) => setState(previous => (0, merge_1.merge)(previous, input));
    const setInputField = (fieldName) => (value) => {
        setState(previous => ({ ...previous, [fieldName]: value }));
    };
    return { field: setInputField, fields: setState, merge: mergeFields };
};
const useFormState = (state, defaultValue, onSubmit) => {
    const [inputFields, setInputFields] = react_1.default.useState('data' in state && state.data ? state.data : (defaultValue || {}));
    const inputFieldsRef = react_1.default.useRef(inputFields);
    inputFieldsRef.current = inputFields;
    const submitHandler = react_1.default.useCallback(() => {
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
exports.useFormState = useFormState;
const useFormNameSpace = (field) => {
    const parentState = (0, exports.useFormHelpers)();
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
exports.useFormNameSpace = useFormNameSpace;
exports.FormListContext = react_1.default.createContext(() => { throw new Error('form list helpers not provided'); });
const useFormListHelpers = () => react_1.default.useContext(exports.FormListContext)();
exports.useFormListHelpers = useFormListHelpers;
const useFormList = ({ name }) => {
    const parentState = (0, exports.useFormHelpers)();
    const setData = react_1.default.useCallback((input) => parentState.setInput.fields(previous => ({
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
    const value = react_1.default.useMemo(() => parentState.data[name] || [], [name, parentState.data]);
    const hasIds = react_1.default.useMemo(() => value.every((record) => !!record.id), [value]);
    react_1.default.useEffect(() => {
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
exports.useFormList = useFormList;
