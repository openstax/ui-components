import { TreeCheckbox } from "./TreeCheckbox";
import "../stories.css";

type CheckboxProps = React.ComponentProps<typeof TreeCheckbox>;

const renderCheckboxes = (
  variant: CheckboxProps['variant'],
  size: CheckboxProps['size'],
  isIndeterminate = false,
) => (
  <div className="story-group story-group-capitalize">
    <h2>Size {size}</h2>
    <TreeCheckbox slot='selection' {...{ size, variant, isIndeterminate }}>Checkbox label</TreeCheckbox>
    <TreeCheckbox slot='selection' {...{ size, variant, isIndeterminate }} defaultSelected>
      Checkbox label
    </TreeCheckbox>
    <TreeCheckbox slot='selection' {...{ size, variant, isIndeterminate }} defaultSelected bold>
      Checkbox label
    </TreeCheckbox>
  </div>
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

export const IsIndeterminate = () => (
  <>
    {renderCheckboxes("primary", 1.4, true)}
    {renderCheckboxes("primary", 1.6, true)}
    {renderCheckboxes("primary", 1.8, true)}
    {renderCheckboxes("primary", 2, true)}
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
    <div className="story-group story-group-capitalize">
      <h2>Disabled</h2>
      <TreeCheckbox slot='selection' variant="primary" size={1.6} isDisabled>
        Checkbox label
      </TreeCheckbox>
      <TreeCheckbox slot='selection' variant="primary" size={1.6} isDisabled defaultSelected>
        Checkbox label
      </TreeCheckbox>
    </div>
  </>
);