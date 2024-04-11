import styled from "styled-components";
import { Radio } from "./Radio";

const RadioGroup = styled.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`;

type RadioProps = React.ComponentProps<typeof Radio>;
const renderRadios = (props: RadioProps) => <RadioGroup>
  <Radio {...props}>Label</Radio>
  <Radio {...props} defaultChecked>Label</Radio>
  <Radio {...props}>Label</Radio>
  <Radio disabled {...props}>Disabled label</Radio>
</RadioGroup>;

export const Default = () => <>
  {renderRadios({name: 'default'})}
</>;
