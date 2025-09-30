import styled from "styled-components";
import { Checkbox, RangeInput } from "./inputTypes";


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

export const slider = () => <>
  <RangeInput min={0} max={100} defaultValue={50} label="Label" name="name" help="Help text" />
  <RangeInput min={0} max={100} defaultValue={50} label="Label" name="name" help="Help text"
    labels={[{value: 0, label: '0%'}, {value: 50, label: '50%'}, {value: 100, label: '100%'}]}
  />
</>;
