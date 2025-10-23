import React from 'react';
import * as Uncontrolled from '../uncontrolled/inputTypes';
import { useFormHelpers, AbstractFormData } from "./hooks";

type MakeControlled<T extends React.ComponentType<any>> =
  Omit<React.ComponentPropsWithoutRef<T>, 'value'> & {
    name: string;
    emptyDisabledValue?: boolean;
  };
type MakeControlledCheckbox<T extends React.ComponentType<any>> =
  Omit<React.ComponentPropsWithoutRef<T>, 'checked'> & {
    name: string;
    emptyDisabledValue?: boolean;
  };

const useEmptyDisabledValue = (
  props: {disabled?: boolean; emptyDisabledValue?: boolean},
  value: AbstractFormData[string],
  onChangeValue: (value: AbstractFormData[string]) => void
) => {
  const {disabled, emptyDisabledValue} = props;
  const previousValueRef = React.useRef<any>();
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

export const TextInput = (props: MakeControlled<typeof Uncontrolled.TextInput>) => {
  const {data, namespace, setInput} = useFormHelpers();

  const onChangeValue = (value: string | undefined) => {
    props.onChangeValue?.(value);
    setInput.field(props.name)(value);
  };

  const value = data[props.name];
  useEmptyDisabledValue(props, value, onChangeValue);

  return <Uncontrolled.TextInput
    {...props}
    name={namespace + '.' + props.name}
    value={(value ?? '').toString()}
    onChangeValue={onChangeValue}
  />;
};

export const TextArea = (props: MakeControlled<typeof Uncontrolled.TextArea>) => {
  const {data, namespace, setInput} = useFormHelpers();

  const onChangeValue = (value: string | undefined) => {
    props.onChangeValue?.(value);
    setInput.field(props.name)(value);
  };

  const value = data[props.name];
  useEmptyDisabledValue(props, value, onChangeValue);

  return <Uncontrolled.TextArea
    {...props}
    name={namespace + '.' + props.name}
    value={value || ''}
    onChangeValue={onChangeValue}
  />;
};

export const Radio = (props: MakeControlledCheckbox<typeof Uncontrolled.Radio>) => {
  const {data, namespace, setInput} = useFormHelpers();

  const onChangeValue = (value: string) => {
    props.onChangeValue?.(value);
    setInput.field(props.name)(value);
  };

  const checked = data[props.name];
  useEmptyDisabledValue(props, checked, onChangeValue);

  return <Uncontrolled.Radio
    {...props}
    name={namespace + '.' + props.name}
    onChangeValue={onChangeValue}
  />;
};

export const Checkbox = (props: MakeControlledCheckbox<typeof Uncontrolled.Checkbox>) => {
  const {data, namespace, setInput} = useFormHelpers();

  const onChangeValue = (value: boolean | undefined) => {
    props.onChangeValue?.(value);
    setInput.field(props.name)(value);
  };

  const checked = data[props.name];
  useEmptyDisabledValue(props, checked, onChangeValue);

  return <Uncontrolled.Checkbox
    {...props}
    name={namespace + '.' + props.name}
    checked={!!checked}
    onChangeValue={onChangeValue}
  />;
};

type SelectProps = {
  onChangeValue?: (value: string | undefined) => void;
  multiple?: false;
} | {
  onChangeValue?: (value: readonly string[] | undefined) => void;
  multiple: true;
};
export const Select = (props: MakeControlled<typeof Uncontrolled.Select> & SelectProps) => {
  const {data, namespace, setInput} = useFormHelpers();
  const value = data[props.name];

  const onChangeValue = (value: any) => {
    props.onChangeValue?.(value);
    setInput.field(props.name)(value);
  };

  useEmptyDisabledValue(props, value, onChangeValue);

  return <Uncontrolled.Select
    {...props}
    name={namespace + '.' + props.name}
    value={value}
    onOptionDisappear={(disappeared) => {
      if (props.multiple && value instanceof Array) {
        onChangeValue(value.filter(value => !disappeared.includes(value)));
      } else if (value) {
        onChangeValue(undefined);
      }
      props.onOptionDisappear?.(disappeared);
    }}
    onOptionAppear={(appeared) => {
      if (!props.multiple && !value && appeared[0] === props.options[0]?.value) {
        onChangeValue(appeared[0]);
      }
      props.onOptionAppear?.(appeared);
    }}
    onOptionReappear={(reappeared) => {
      if (props.multiple) {
        onChangeValue([...value, ...reappeared]);
      } else {
        onChangeValue(reappeared[0]);
      }
      props.onOptionReappear?.(reappeared);
    }}
    onChangeValue={onChangeValue}
  />;
};

export const File = (props: MakeControlled<typeof Uncontrolled.File>) => {
  const {data, namespace, setInput} = useFormHelpers();

  const onChangeValue = (value: string | undefined) => {
    props.onChangeValue?.(value);
    setInput.field(props.name)(value);
  };

  const value = data[props.name];
  useEmptyDisabledValue(props, value, onChangeValue);

  return <Uncontrolled.File
    {...props}
    required={props.required && !value}
    name={namespace + '.' + props.name}
    value={value || ''}
    onChangeValue={onChangeValue}
  />;
};

export const RangeInput = (props: MakeControlled<typeof Uncontrolled.RangeInput>) => {
  const {data, namespace, setInput} = useFormHelpers();

  const onChangeValue = (value: number | undefined) => {
    props.onChangeValue?.(value);
    setInput.field(props.name)(value);
  };

  const value = data[props.name];
  const numberValue = parseFloat((value ?? '').toString());
  const formValue = isNaN(numberValue) ? '' : numberValue;

  useEmptyDisabledValue(props, formValue, onChangeValue);

  return <Uncontrolled.RangeInput
    {...props}
    name={namespace + '.' + props.name}
    value={formValue}
    onChangeValue={onChangeValue}
  />;
}
