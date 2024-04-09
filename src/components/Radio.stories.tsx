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
  <Radio {...props}>Label 1</Radio>
  <Radio {...props} defaultChecked>Label 2</Radio>
  <Radio {...props}>Label 3</Radio>
</RadioGroup>;

export const Default = () => <>
  {renderRadios({name: 'default'})}
</>;
