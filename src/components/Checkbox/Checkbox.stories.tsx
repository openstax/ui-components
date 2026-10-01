import React from "react";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";

const CheckboxGroup = styled.div`
  text-transform: capitalize;
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`;

type CheckboxProps = React.ComponentProps<typeof Checkbox>;
const renderCheckboxes = (variant: CheckboxProps['variant'], size: CheckboxProps['size']) => <CheckboxGroup>
  <h2>Size {size}</h2>
  <Checkbox {...{size, variant}}>Checkbox label</Checkbox>
  <Checkbox {...{size, variant}} defaultChecked>Checkbox label</Checkbox>
  <Checkbox {...{size, variant}} defaultChecked bold>Checkbox label</Checkbox>
</CheckboxGroup>;

export const Primary = () => <>
  {renderCheckboxes('primary', 1.4)}
  {renderCheckboxes('primary', 1.6)}
  {renderCheckboxes('primary', 1.8)}
  {renderCheckboxes('primary', 2)}
</>;

export const Light = () => <>
  {renderCheckboxes('light', 1.4)}
  {renderCheckboxes('light', 1.6)}
  {renderCheckboxes('light', 1.8)}
  {renderCheckboxes('light', 2)}
</>

const renderDisabledCheckboxes = (variant: CheckboxProps['variant'], size: CheckboxProps['size']) => <CheckboxGroup>
  <h2>{variant} - Size {size}</h2>
  <Checkbox {...{size, variant}} disabled>Checkbox label</Checkbox>
  <Checkbox {...{size, variant}} disabled defaultChecked>Checkbox label</Checkbox>
  <Checkbox {...{size, variant}} disabled defaultChecked bold>Checkbox label</Checkbox>
</CheckboxGroup>;

export const Disabled = () => <>
  {renderDisabledCheckboxes('primary', 1.6)}
  {renderDisabledCheckboxes('primary', 2)}
  {renderDisabledCheckboxes('light', 1.6)}
  {renderDisabledCheckboxes('light', 2)}
</>

const renderIndeterminateCheckboxes = (variant: CheckboxProps['variant'], size: CheckboxProps['size']) => <CheckboxGroup>
  <h2>{variant} - Size {size}</h2>
  <Checkbox {...{size, variant}} indeterminate>Checkbox label</Checkbox>
  <Checkbox {...{size, variant}} indeterminate bold>Checkbox label</Checkbox>
  <Checkbox {...{size, variant}} indeterminate disabled>Checkbox label</Checkbox>
</CheckboxGroup>;

export const Indeterminate = () => <>
  {renderIndeterminateCheckboxes('primary', 1.6)}
  {renderIndeterminateCheckboxes('primary', 2)}
  {renderIndeterminateCheckboxes('light', 1.6)}
  {renderIndeterminateCheckboxes('light', 2)}
  {renderIndeterminateCheckboxes('error', 1.6)}
</>;

const options = ['Option one', 'Option two', 'Option three'];

// The parent is mixed while only some options are chosen, and selects all from the mixed state.
export const ParentOfOptions = () => {
  const [selected, setSelected] = React.useState<string[]>(['Option two']);
  const all = selected.length === options.length;

  return <CheckboxGroup>
    <Checkbox
      bold
      size={2}
      checked={all}
      indeterminate={selected.length > 0 && !all}
      onChange={() => setSelected(all ? [] : options)}
    >
      All options
    </Checkbox>
    {options.map(option => <Checkbox
      key={option}
      checked={selected.includes(option)}
      onChange={event => setSelected(event.target.checked
        ? [...selected, option]
        : selected.filter(item => item !== option))}
    >
      {option}
    </Checkbox>)}
  </CheckboxGroup>;
};
