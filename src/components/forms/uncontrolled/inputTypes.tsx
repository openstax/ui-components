import React from 'react';
import styled from 'styled-components';
import { FormInputWrapper, FormLabelText, HelpText, InputProps, RequiredIndicator } from "./inputs";
import { AbstractFormData } from "../controlled/hooks";
import { partitionSequence } from "@openstax/ts-utils/misc/partitionSequence";

/*
 * input element
 */
const InputElement = styled.input`
  flex: 1;
  justify-content: stretch;
`;
const FlexRow = styled.div`
  flex-direction: row;
  display: flex;
`;
type TextInputProps = React.ComponentPropsWithoutRef<'input'> & InputProps & {
  wrapperProps?: React.ComponentPropsWithoutRef<'label'>;
  onChangeValue?: (value: any) => void;
  transformValue?: (value: string | undefined) => any;
  addon?: React.ReactElement;
  pattern?: string;
};
export const TextInput = ({label, addon, help, wrapperProps, onChangeValue, ...props}: TextInputProps) =>
  <FormInputWrapper {...wrapperProps}>
    <FormLabelText><RequiredIndicator show={props.required} />{label}:</FormLabelText>
    <FlexRow>
      <InputElement type="text" {...props} onChange={e => {
        onChangeValue?.(props.transformValue ? props.transformValue(e.target.value) : e.target.value);
        props.onChange?.(e);
      }} />
      {addon}
    </FlexRow>
    <HelpText value={help} />
  </FormInputWrapper>;

/*
 * textarea element
 */
type TextAreaProps = React.ComponentPropsWithoutRef<'textarea'> & InputProps & {
  wrapperProps?: React.ComponentPropsWithoutRef<'label'>;
  onChangeValue?: (value: any) => void;
  transformValue?: (value: string | undefined) => any;
};
export const TextArea = ({label, help, wrapperProps, onChangeValue, ...props}: TextAreaProps) =>
  <FormInputWrapper {...wrapperProps}>
    <FormLabelText><RequiredIndicator show={props.required} />{label}:</FormLabelText>
    <textarea rows={8} {...props} onChange={e => {
      onChangeValue?.(props.transformValue ? props.transformValue(e.target.value) : e.target.value);
      props.onChange?.(e);
    }} />
    <HelpText value={help} />
  </FormInputWrapper>;

/*
 * select element
 */
type SelectProps = React.ComponentPropsWithoutRef<'select'> & InputProps & {
  options: Array<{label: string; value: string; group?: string}>;
  onChangeValue?: (value: any) => void;
  transformValue?: (value: string | string[] | undefined) => any;
  onOptionDisappear?: (disappeared: readonly string[]) => void;
  onOptionReappear?: (reappeared: readonly string[]) => void;
  onOptionAppear?: (appeared: readonly string[]) => void;
  wrapperProps?: React.ComponentPropsWithoutRef<'label'>;
  loading?: boolean;
};
export const Select = ({
  onChangeValue,
  onOptionDisappear,
  onOptionAppear,
  onOptionReappear,
  label,
  help,
  options,
  wrapperProps,
  ...props
}: SelectProps) => {
  const changedSinceLastOptionUpdate = React.useRef<boolean>(false);
  const optionsRef = React.useRef<SelectProps['options']>([]);
  const {value} = props;
  const disappearedOption = React.useRef<string[]>([]);

  const arrayCoercedValueRef = React.useRef<readonly string[] | undefined>([]);
  arrayCoercedValueRef.current =
    value === undefined ? value : value instanceof Array ? value : [value.toString()]
  ;

  const callbacksRef = React.useRef({onOptionAppear, onOptionReappear, onOptionDisappear});
  callbacksRef.current = {onOptionAppear, onOptionReappear, onOptionDisappear};

  React.useEffect(() => {
    if (callbacksRef.current.onOptionDisappear && arrayCoercedValueRef.current) {
      const disappearedOptions = arrayCoercedValueRef.current.filter(
        valueString => !options.find(option => option.value === valueString)
      );

      if (disappearedOptions.length > 0) {
        disappearedOption.current = disappearedOptions;
        changedSinceLastOptionUpdate.current = false;
        callbacksRef.current.onOptionDisappear(disappearedOptions);
      }
    }

    const reappearedOptions = callbacksRef.current.onOptionReappear
      && disappearedOption.current
      && !changedSinceLastOptionUpdate.current
        ? options.filter(option =>
          disappearedOption.current.includes(option.value)
        ).map(option => option.value)
        : [];

    if (callbacksRef.current.onOptionReappear && reappearedOptions.length > 0) {
      disappearedOption.current = disappearedOption.current.filter(
        disappeared => !reappearedOptions.includes(disappeared)
      );
      callbacksRef.current.onOptionReappear(reappearedOptions);
    } else if (callbacksRef.current.onOptionAppear) {
      const newOptions = options.filter(newOption =>
        !optionsRef.current.find(oldOption => oldOption.value === newOption.value)
      ).map(option => option.value);
      if (newOptions.length > 0) {
        callbacksRef.current.onOptionAppear(newOptions);
      }
    }

    optionsRef.current = options;
  }, [options]);

  const groupedOptions = React.useMemo(() =>
    partitionSequence(option => ({value: option.group}), options)
  , [options]);

  return <FormInputWrapper {...wrapperProps}>
    <FormLabelText><RequiredIndicator show={props.required} />{label}:</FormLabelText>
    <select {...props} onChange={e => {
      changedSinceLastOptionUpdate.current = true;
      onChangeValue?.(props.transformValue ? props.transformValue(e.target.value) : e.target.value);
      props.onChange?.(e);
    }}>
      {groupedOptions.map(([group, options], i) => group === undefined
        ? <React.Fragment key={group ?? `no-label-${i}`}>
          {options.map(({value, label}) => <option key={value} value={value}>{label}</option>)}
        </React.Fragment>
        : <optgroup key={group} label={group}>
          {options.map(({value, label}) => <option key={value} value={value}>{label}</option>)}
        </optgroup>
      )}
    </select>
    <HelpText value={help} />
  </FormInputWrapper>;
};

/*
 * checkbox element
 */
type CheckboxProps = React.ComponentPropsWithoutRef<'input'> & InputProps & {
  onChangeValue?: (value: boolean | undefined) => void;
  wrapperProps?: React.ComponentPropsWithoutRef<'label'>;
};
const CheckboxLine = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;
export const Checkbox = ({
  label,
  help,
  wrapperProps,
  onChangeValue,
  ...props
}: CheckboxProps) => {
  return <FormInputWrapper {...wrapperProps}>
    <CheckboxLine>
      <input type="checkbox" {...props} onChange={e => {
        onChangeValue?.(!!e.target.checked);
        props.onChange?.(e);
      }}/>
      <FormLabelText><RequiredIndicator show={props.required} />{label}</FormLabelText>
    </CheckboxLine>
    <HelpText value={help} />
  </FormInputWrapper>;
};

/*
 * file input element
 */
type FileProps = React.ComponentPropsWithoutRef<'input'> & InputProps & {
  accept?: string;
  wrapperProps?: React.ComponentPropsWithoutRef<'label'>;
  onChangeValue?: (value: any) => void;
  uploader?: (value: FileList | null) => Promise<undefined | string | string[] | AbstractFormData | AbstractFormData[]>;

  // these are missing from the react types
  directory?: string;
  webkitdirectory?: string;
};
export const File = ({label, help, wrapperProps, onChangeValue, uploader, value, ...props}: FileProps) => {

  return <FormInputWrapper {...wrapperProps}>
    <FormLabelText>{label}:</FormLabelText>
    <input type="file" {...props} onChange={e => {
      props.onChange?.(e);
      if (uploader) {
        uploader(e.target.files).then(onChangeValue);
      } else {
        onChangeValue?.(e.target.files);
      }
    }} />
    <HelpText value={help} />
  </FormInputWrapper>;
};
