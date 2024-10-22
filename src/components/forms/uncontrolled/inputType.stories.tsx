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
const renderCheckboxes = (props: CheckboxProps) => 
<CheckboxGroup>
  <h2>Size {props.size}</h2>
  <Checkbox {...props} defaultChecked></Checkbox>
  <Checkbox {...props} defaultChecked></Checkbox>
  <Checkbox {...props} defaultChecked></Checkbox>
</CheckboxGroup>;

export const defaultCheckbox = () => <>
  {renderCheckboxes({error: [], label: 'Checkbox Label', variant: 'primary', size: 1.4})}
  {renderCheckboxes({error: [], label: 'Checkbox Label', variant: 'primary', size: 1.6})}
  {renderCheckboxes({error: undefined, label: 'Checkbox Label', variant: 'primary', size: 1.8})}
  {renderCheckboxes({error: undefined, label: 'Checkbox Label', variant: 'primary', size: 2.0})}
</>;

export const errorCheckbox = () => <>
  {renderCheckboxes({error: ['Error messages go here'], label: 'Checkbox Label', variant: 'error', size: 1.4})}
  {renderCheckboxes({error: ['Error messages go here'], label: 'Checkbox Label', variant: 'error', size: 1.6})}
  {renderCheckboxes({error: ['Error messages go here'], label: 'Checkbox Label', variant: 'error', size: 1.8})}
  {renderCheckboxes({error: ['Error messages go here'], label: 'Checkbox Label', variant: 'error', size: 2.0})}
</>;

export const disabledCheckbox = () => <>
  {renderCheckboxes({error: [], disabled: true, label: 'Checkbox Label', variant: 'disabled', size: 1.4})}
  {renderCheckboxes({error: [], disabled: true, label: 'Checkbox Label', variant: 'disabled', size: 1.6})}
  {renderCheckboxes({error: [], disabled: true, label: 'Checkbox Label', variant: 'disabled', size: 1.8})}
  {renderCheckboxes({error: [], disabled: true, label: 'Checkbox Label', variant: 'disabled', size: 2.0})}
</>;