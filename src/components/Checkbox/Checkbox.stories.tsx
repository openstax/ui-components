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

const VerticalCheckboxGroup = styled.div`
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  & + & {
    margin-top: 3.2rem;
  }
`;

export const WithTooltip = () => <>
  <VerticalCheckboxGroup>
    <h2>Primary</h2>
    <Checkbox variant="primary" tooltipText="Tooltip text for checkbox goes here">Checkbox label</Checkbox>
    <Checkbox variant="primary" defaultChecked tooltipText="Tooltip text for checkbox goes here">Checked label with tooltip</Checkbox>
    <Checkbox variant="primary" disabled tooltipText="This option is unavailable">Disabled label with tooltip</Checkbox>
    <Checkbox variant="primary" disabled defaultChecked tooltipText="This option is unavailable">Disabled checked label with tooltip</Checkbox>
  </VerticalCheckboxGroup>
  <VerticalCheckboxGroup>
    <h2>Light</h2>
    <Checkbox variant="light" tooltipText="Tooltip text for checkbox goes here">Checkbox label</Checkbox>
    <Checkbox variant="light" defaultChecked tooltipText="Tooltip text for checkbox goes here">Checked label with tooltip</Checkbox>
    <Checkbox variant="light" disabled tooltipText="This option is unavailable">Disabled label with tooltip</Checkbox>
    <Checkbox variant="light" disabled defaultChecked tooltipText="This option is unavailable">Disabled checked label with tooltip</Checkbox>
  </VerticalCheckboxGroup>
</>;
