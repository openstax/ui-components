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
const renderRadios = (variant: RadioProps['variant']) => <RadioGroup>
  <Radio name='primary' {...{variant}}>Label 1</Radio>
  <Radio name='primary' {...{variant}} defaultChecked>Label 2</Radio>
  <Radio name='primary' {...{variant}}>Label 3</Radio>
</RadioGroup>;

export const Primary = () => <>
  {renderRadios('primary')}
</>;
