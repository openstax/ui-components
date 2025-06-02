import styled from "styled-components";
import { CheckboxRAC } from "./CheckboxRAC";

const CheckboxGroup = styled.div`
  text-transform: capitalize;

  & + & {
    margin-top: 3.2rem;
  }

  > * + * {
    margin-top: 0.5rem;
  }
`;

type CheckboxProps = React.ComponentProps<typeof CheckboxRAC>;

const renderCheckboxes = (
  variant: CheckboxProps['variant'],
  size: CheckboxProps['size']
) => (
  <CheckboxGroup>
    <h2>Size {size}</h2>
    <CheckboxRAC slot='selection' {...{ size, variant }}>Checkbox label</CheckboxRAC>
    <CheckboxRAC slot='selection' {...{ size, variant }} defaultSelected>
      Checkbox label
    </CheckboxRAC>
    <CheckboxRAC slot='selection' {...{ size, variant }} defaultSelected bold>
      Checkbox label
    </CheckboxRAC>
  </CheckboxGroup>
);

export const Primary = () => (
  <>
    {renderCheckboxes("primary", 1.4)}
    {renderCheckboxes("primary", 1.6)}
    {renderCheckboxes("primary", 1.8)}
    {renderCheckboxes("primary", 2)}
  </>
);

export const Light = () => (
  <>
    {renderCheckboxes("light", 1.4)}
    {renderCheckboxes("light", 1.6)}
    {renderCheckboxes("light", 1.8)}
    {renderCheckboxes("light", 2)}
  </>
);

export const Error = () => (
  <>
    {renderCheckboxes("error", 1.4)}
    {renderCheckboxes("error", 1.6)}
    {renderCheckboxes("error", 1.8)}
    {renderCheckboxes("error", 2)}
  </>
);

export const Disabled = () => (
  <>
    <CheckboxGroup>
      <h2>Disabled</h2>
      <CheckboxRAC slot='selection' variant="primary" size={1.6} isDisabled>
        Checkbox label
      </CheckboxRAC>
      <CheckboxRAC slot='selection' variant="primary" size={1.6} isDisabled defaultSelected>
        Checkbox label
      </CheckboxRAC>
    </CheckboxGroup>
  </>
);