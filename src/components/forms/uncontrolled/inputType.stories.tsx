import styled from "styled-components";
import { Checkbox } from "./inputTypes";


const CheckboxGroup = styled.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`;

type CheckboxProps = React.ComponentProps<typeof Checkbox>;
const renderCheckboxes = (error: CheckboxProps['error'], label: CheckboxProps['label'], variant: CheckboxProps['variant'], size: CheckboxProps['size']) => 
<CheckboxGroup>
  <h2>Size {size}</h2>
  <Checkbox {...{error, label, variant, size}} defaultChecked></Checkbox>
  <Checkbox {...{error, label, variant, size}} defaultChecked></Checkbox>
</CheckboxGroup>;

export const defaultCheckbox = () => <>
  {renderCheckboxes([], 'Checkbox Label', 'primary', 1.4)}
  {renderCheckboxes([], 'Checkbox Label', 'primary', 1.6)}
  {renderCheckboxes(undefined, 'Checkbox Label', 'primary', 1.8)}
  {renderCheckboxes(undefined, 'Checkbox Label', 'primary', 2.0)}
</>;

export const errorCheckbox = () => <>
  {renderCheckboxes(['Error message goes here'], 'Checkbox Label', 'error', 1.4)}
  {renderCheckboxes(['Error message goes here'], 'Checkbox Label', 'error', 1.6)}
  {renderCheckboxes(['Error message goes here'], 'Checkbox Label', 'error', 1.8)}
  {renderCheckboxes(['Error message goes here'], 'Checkbox Label', 'error', 2.0)}
</>;