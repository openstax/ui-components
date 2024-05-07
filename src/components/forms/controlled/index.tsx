import React from 'react';
import { FetchState } from "@openstax/ts-utils/fetch";
import * as Uncontrolled from '../uncontrolled';
import {
  useFormHelpers,
  useFormState,
  FormStateContext,
  AbstractFormData,
  useFormNameSpace,
  FormListContext,
  useFormListHelpers,
  useFormList,
  FormListConfig
} from "./hooks";

export * from './inputs';
export * from './hooks';
export {Submit, Cancel, FormSection} from '../uncontrolled';

/*
 * form element
 */
type FormProps = Omit<React.ComponentPropsWithoutRef<typeof Uncontrolled.Form>, 'onSubmit'> & {
  state: FetchState<any, string>;
  defaultData?: AbstractFormData;
  onSubmit?: (data: AbstractFormData) => void;
};
export const Form = ({children, state, onSubmit, defaultData, ...props}: FormProps) => {
  const formHelpers = useFormState(state, defaultData, onSubmit);

  return <FormStateContext.Provider value={() => formHelpers}>
    <Uncontrolled.Form {...props} onSubmit={e => {
      e.preventDefault();
      formHelpers.submit();
    }}>
      {children}
    </Uncontrolled.Form>
  </FormStateContext.Provider>;
};

export const Messages = (props: Omit<React.ComponentPropsWithoutRef<typeof Uncontrolled.Messages>, 'state'>) => {
  const {state} = useFormHelpers();
  return <Uncontrolled.Messages {...props} state={state} />;
};

export const Buttons = (props: Omit<React.ComponentPropsWithoutRef<typeof Uncontrolled.Buttons>, 'state'>) => {
  const {state} = useFormHelpers();
  return <Uncontrolled.Buttons {...props} state={state} />;
};

type GetFormValueProps = {
  name: string;
  children: (value: AbstractFormData[string]) => JSX.Element | null;
};
export const GetFormValue = (props: GetFormValueProps) => {
  const {data} = useFormHelpers();
  return props.children(data[props.name]);
};

type GetFormDataProps = {
  children: (value: AbstractFormData) => JSX.Element | null;
};
export const GetFormData = (props: GetFormDataProps) => {
  const {data} = useFormHelpers();
  return props.children(data);
};

export const NameSpace = (props: React.PropsWithChildren<{name: string}>) => {
  const formHelpers = useFormNameSpace(props.name);

  return <FormStateContext.Provider value={() => formHelpers}>
    {props.children}
  </FormStateContext.Provider>;
};

export const List = ({children, ...props}: React.PropsWithChildren<FormListConfig>) => {
  const listHelpers = useFormList(props);

  return <FormListContext.Provider value={() => listHelpers}>
    {children}
  </FormListContext.Provider>;
};

const SortableContext = React.createContext<() => React.MutableRefObject<boolean | undefined>>(
  () => {throw new Error('context not provided');}
);

export const ListItems = (props: {children: React.ReactNode}) => {
  const listState = useFormListHelpers();
  const sortableEnabledRef = React.useRef<boolean>();
  const draggingElementRef = React.useRef<string>();

  const dragOver = (record: {id: string}) => (e: React.DragEvent<HTMLElement>) => {
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

  const dragEnd = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    sortableEnabledRef.current = false;
  };

  const dragStart = (record: {id: string}) => (e: React.DragEvent<HTMLElement>) => {
    if (!sortableEnabledRef.current) {
      e.preventDefault();
      return;
    }
    e.dataTransfer.effectAllowed = "move";
    draggingElementRef.current = record.id;
  };

  return <Uncontrolled.FormSection>
    {listState.data.map(record =>
      <SortableContext.Provider key={record.id} value={() => sortableEnabledRef}>
        <FormStateContext.Provider value={() => listState.makeRecordHelpers(record)}> 
          <Uncontrolled.FormSection
            draggable 
            onDrop={dragEnd}
            onDragOver={dragOver(record)}
            onDragStart={dragStart(record)}
            style={{userSelect: 'text'}}
          >
            {props.children}
          </Uncontrolled.FormSection>
        </FormStateContext.Provider>
      </SortableContext.Provider>
    )}
  </Uncontrolled.FormSection>;
};

type ListRecordSortableHandleProps = React.ComponentPropsWithoutRef<'div'>;
export const ListRecordSortableHandle = (props: ListRecordSortableHandleProps) => {
  const sortableEnabledRef = React.useContext(SortableContext)();

  return <div
    tabIndex={-1}
    {...props}
    onMouseDown={() => sortableEnabledRef.current = true}
    style={{
      cursor: 'move',
      backgroundImage: 'radial-gradient(circle at 1px 1px, #aaa 1px, transparent 0), ' +
        'radial-gradient(circle at 4px 4px, #aaa 1px, transparent 0)',
      backgroundSize: '5px 6px',
      height: '11px',
      width: '11px',
      ...props.style
    }}
  />; 
};

type ListRecordRemoveButtonProps = React.ComponentPropsWithoutRef<'button'>;
export const ListRecordRemoveButton = (props: ListRecordRemoveButtonProps) => {
  const formHelpers = useFormHelpers();
  const listHelpers = useFormListHelpers();

  return <button {...props} onClick={(e) => {
    listHelpers.removeRecord(formHelpers.data.id);
    props.onClick?.(e);
  }} type="button" />;
};

type ListRecordAddButtonProps = React.ComponentPropsWithoutRef<'button'>;
export const ListRecordAddButton = (props: ListRecordAddButtonProps) => {
  const listHelpers = useFormListHelpers();

  return <button {...props} onClick={(e) => {
    listHelpers.addRecord();
    props.onClick?.(e);
  }} type="button" />;
};
