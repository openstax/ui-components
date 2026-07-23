import styled from "styled-components";
import { Checkbox, RangeInput, TextInput, TextArea, Select, Radio, File } from "./inputTypes";


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

export const textInput = () => <>
  <h2>Basic TextInput</h2>
  <TextInput label="Name" name="name" placeholder="Enter your name" />
  <h2>TextInput with Help Text</h2>
  <TextInput label="Email" name="email" placeholder="email@example.com" help="We'll never share your email" />
  <h2>Required TextInput</h2>
  <TextInput label="Username" name="username" required placeholder="Choose a username" />
  <h2>TextInput with Addon</h2>
  <TextInput label="Website" name="website" placeholder="example.com" addon={<span>https://</span>} />
</>;

export const textArea = () => <>
  <h2>Basic TextArea</h2>
  <TextArea label="Comments" name="comments" placeholder="Enter your comments" />
  <h2>TextArea with Help Text</h2>
  <TextArea label="Description" name="description" help="Please provide a detailed description" />
  <h2>Required TextArea</h2>
  <TextArea label="Feedback" name="feedback" required placeholder="Your feedback is important to us" />
</>;

export const selectInput = () => <>
  <h2>Basic Select</h2>
  <Select label="Country" name="country" options={[
    {label: 'United States', value: 'us'},
    {label: 'Canada', value: 'ca'},
    {label: 'Mexico', value: 'mx'}
  ]} />
  <h2>Select with Help Text</h2>
  <Select label="State" name="state" help="Select your state of residence" options={[
    {label: 'California', value: 'ca'},
    {label: 'Texas', value: 'tx'},
    {label: 'New York', value: 'ny'}
  ]} />
  <h2>Required Select</h2>
  <Select label="Department" name="department" required options={[
    {label: 'Engineering', value: 'eng'},
    {label: 'Sales', value: 'sales'},
    {label: 'Marketing', value: 'marketing'}
  ]} />
  <h2>Select with Groups</h2>
  <Select label="Product" name="product" options={[
    {label: 'Biology', value: 'bio', group: 'Science'},
    {label: 'Chemistry', value: 'chem', group: 'Science'},
    {label: 'History', value: 'hist', group: 'Humanities'},
    {label: 'Literature', value: 'lit', group: 'Humanities'}
  ]} />
</>;

export const radioInput = () => <>
  <h2>Basic Radio</h2>
  <Radio label="Option 1" name="choice" value="1" />
  <Radio label="Option 2" name="choice" value="2" />
  <Radio label="Option 3" name="choice" value="3" />
  <h2>Radio with Help Text</h2>
  <Radio label="Yes" name="agreement" value="yes" help="I agree to the terms" />
  <Radio label="No" name="agreement" value="no" help="I do not agree" />
  <h2>Required Radio</h2>
  <Radio label="Required Option" name="required" value="req" required />
</>;

export const fileInput = () => <>
  <h2>Basic File Input</h2>
  <File label="Upload Document" name="document" />
  <h2>File Input with Help Text</h2>
  <File label="Profile Picture" name="avatar" help="Please upload a JPG or PNG file" accept="image/jpeg,image/png" />
  <h2>Multiple Files</h2>
  <File label="Attachments" name="attachments" multiple help="You can select multiple files" />
</>;
