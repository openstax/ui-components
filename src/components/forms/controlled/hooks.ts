import React from 'react';
import { FetchState } from "@openstax/ts-utils/fetch";
import { merge } from "@openstax/ts-utils";

const randomId = () => crypto.getRandomValues(new Uint32Array(1))[0].toString(16)

export type AbstractFormData = Record<string, any>;

type FormStateHelpers<T extends {}> = {
  data: Partial<T>;
  submit: () => void;
  namespace: string;
  state: FetchState<T, string>;
  setInput: {
    fields: React.Dispatch<React.SetStateAction<Partial<T>>>;
    field: <F extends keyof T>(fieldName: F) => (value: T[F]) => void;
    merge: (input: Partial<T>) => void;
  };
};

export const FormStateContext = React.createContext<() => FormStateHelpers<AbstractFormData>>(
  () => { throw new Error('form helpers not provided');}
);

export const useFormHelpers = () => React.useContext(FormStateContext)();

const makeSetInput = <T extends {}>(setState: React.Dispatch<React.SetStateAction<T>>) => {
  const mergeFields = (input: Partial<T>) => setState(previous => merge(previous, input) as T);

  const setInputField = <F extends keyof T>(fieldName: F) => (value: T[F]) => {
    setState(previous => ({...previous, [fieldName]: value}));
  };

  return {field: setInputField, fields: setState, merge: mergeFields};
};

export const useFormState = <T extends {}>(
  state: FormStateHelpers<T>['state'],
  defaultValue?: Partial<T>,
  onSubmit?: (data: Partial<T>) => void
): FormStateHelpers<T> => {
  const [inputFields, setInputFields] = React.useState<Partial<T>>(
    'data' in state && state.data ? state.data : (defaultValue || {})
  );
  const inputFieldsRef = React.useRef<Partial<T>>(inputFields);
  inputFieldsRef.current = inputFields;
  const submitHandler = React.useCallback(() => {
    onSubmit?.(inputFieldsRef.current);
  }, [onSubmit]);
  return {namespace: 'form', submit: submitHandler, data: inputFields, state, setInput: makeSetInput(setInputFields)};
};

export const useFormNameSpace = (field: string): FormStateHelpers<AbstractFormData> => {
  const parentState = useFormHelpers();

  const setInputFields: React.Dispatch<React.SetStateAction<any>> = (input) =>
    parentState.setInput.fields(previous => ({
      ...previous,
      [field]: input instanceof Function ? input(previous[field] || {}) : input
    }))
  ;

  return {
    namespace: parentState.namespace + '.' + field,
    submit: parentState.submit,
    data: parentState.data[field] || {},
    state: parentState.state,
    setInput: makeSetInput(setInputFields)
  };
};

export const FormListContext = React.createContext<() => ListStateHelpers>(
  () => { throw new Error('form list helpers not provided');}
);

export const useFormListHelpers = () => React.useContext(FormListContext)();

type ListStateHelpers = {
  addRecord: (record?: AbstractFormData) => void;
  removeRecord: (id: string) => void;
  data: Array<AbstractFormData & {id: string}>;
  setData: React.Dispatch<React.SetStateAction<AbstractFormData[]>>;
  makeRecordHelpers: (record: AbstractFormData & {id: string}) => FormStateHelpers<AbstractFormData>;
};

export type FormListConfig = {
  name: string;
};
export const useFormList = ({name}: FormListConfig): ListStateHelpers => {
  const parentState = useFormHelpers();

  const setData: React.Dispatch<React.SetStateAction<AbstractFormData[]>> = React.useCallback((input) =>
    parentState.setInput.fields(previous => ({
      ...previous,
      [name]: input instanceof Function ? input(previous[name] || []) : input
    }))
  , [name, parentState.setInput]);

  const makeRecordHelpers = (data: ListStateHelpers['data'][number]) => ({
    data,
    state: parentState.state,
    submit: parentState.submit,
    namespace: parentState.namespace + '.' + data.id,
    setInput: makeSetInput<AbstractFormData>((input) =>
      setData(previous => previous.map(
        (record: AbstractFormData) => record.id === data.id
          ? input instanceof Function ? input(record) : input
          : record
      ))
    )
  });

  const value = React.useMemo(() => parentState.data[name] || [], [name, parentState.data]);
  const hasIds = React.useMemo(() => value.every((record: any) => !!record.id), [value]);

  React.useEffect(() => {
    if (!hasIds) {
      parentState.setInput.fields(previous => ({
        ...previous,
        [name]: value.map((record: any) => record.id === undefined ? {...record, id: randomId()} : record)
      }));
    }
  }, [value, hasIds, name, parentState.setInput]);

  return {
    addRecord: (record) => parentState.setInput.fields(previous => ({
      ...previous,
      [name]: [...(previous[name] || []), {id: randomId(), ...record}]
    })),
    removeRecord: (id) => parentState.setInput.fields(previous => ({
      ...previous,
      [name]: (previous[name] || []).filter((record: AbstractFormData) => record.id !== id)
    })),
    data: hasIds ? value : [],
    setData,
    makeRecordHelpers,
  };
};
