import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import * as Uncontrolled from '../uncontrolled';
import { useFormHelpers, useFormState, FormStateContext, useFormNameSpace, FormListContext, useFormListHelpers, useFormList } from "./hooks";
export * from './inputs';
export * from './hooks';
export { Submit, Cancel, FormSection } from '../uncontrolled';
export const Form = ({ children, state, onSubmit, defaultData, ...props }) => {
    const formHelpers = useFormState(state, defaultData, onSubmit);
    return _jsx(FormStateContext.Provider, { value: () => formHelpers, children: _jsx(Uncontrolled.Form, { ...props, onSubmit: e => {
                e.preventDefault();
                formHelpers.submit();
            }, children: children }) });
};
export const Messages = (props) => {
    const { state } = useFormHelpers();
    return _jsx(Uncontrolled.Messages, { ...props, state: state });
};
export const Buttons = (props) => {
    const { state } = useFormHelpers();
    return _jsx(Uncontrolled.Buttons, { ...props, state: state });
};
export const GetFormValue = (props) => {
    const { data } = useFormHelpers();
    return props.children(data[props.name]);
};
export const GetFormData = (props) => {
    const { data } = useFormHelpers();
    return props.children(data);
};
export const GetFormDataRoot = (props) => {
    const { rootHelpers } = useFormHelpers();
    return props.children(rootHelpers.data);
};
export const NameSpace = (props) => {
    const formHelpers = useFormNameSpace(props.name);
    return _jsx(FormStateContext.Provider, { value: () => formHelpers, children: props.children });
};
export const List = ({ children, ...props }) => {
    const listHelpers = useFormList(props);
    return _jsx(FormListContext.Provider, { value: () => listHelpers, children: children });
};
const SortableContext = React.createContext(() => { throw new Error('context not provided'); });
export const ListItems = (props) => {
    const listState = useFormListHelpers();
    const [sortableEnabled, setSortableEnabled] = React.useState(false);
    const draggingElementRef = React.useRef();
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
    return _jsx(Uncontrolled.FormSection, { children: listState.data.map(record => _jsx(SortableContext.Provider, { value: setSortableEnabled, children: _jsx(FormStateContext.Provider, { value: () => listState.makeRecordHelpers(record), children: _jsx(Uncontrolled.FormSection, { draggable: sortableEnabled, onDrop: dragEnd, onDragOver: dragOver(record), onDragStart: dragStart(record), style: { userSelect: 'text' }, children: props.children }) }) }, record.id)) });
};
export const ListRecordSortableHandle = (props) => {
    const setSortableEnabled = React.useContext(SortableContext);
    return _jsx("div", { tabIndex: -1, ...props, onMouseDown: () => setSortableEnabled(true), style: {
            cursor: 'move',
            backgroundImage: 'radial-gradient(circle at 1px 1px, #aaa 1px, transparent 0), ' +
                'radial-gradient(circle at 4px 4px, #aaa 1px, transparent 0)',
            backgroundSize: '5px 6px',
            height: '11px',
            width: '11px',
            ...props.style
        } });
};
export const ListRecordRemoveButton = (props) => {
    const formHelpers = useFormHelpers();
    const listHelpers = useFormListHelpers();
    return _jsx("button", { ...props, onClick: (e) => {
            var _a;
            listHelpers.removeRecord(formHelpers.data.id);
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        }, type: "button" });
};
export const ListRecordAddButton = (props) => {
    const listHelpers = useFormListHelpers();
    return _jsx("button", { ...props, onClick: (e) => {
            var _a;
            listHelpers.addRecord();
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        }, type: "button" });
};
