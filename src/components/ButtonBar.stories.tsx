import React from "react";
import styled from "styled-components";
import { ButtonBar } from "./ButtonBar";

type ButtonBarProps = React.ComponentProps<typeof ButtonBar>;

const Wrapper = styled.div`
  padding: 2.4rem;
`;

export const Examples = () => {
  const [size, setSize] =
    React.useState<ButtonBarProps["size"]>("medium");

  const handleSetSize = (e: any) => setSize(e.currentTarget.value as ButtonBarProps['size']);

  return <Wrapper>
    <label>
      <b>Size</b><br/>
      <select onChange={handleSetSize} defaultValue={size}>
        {['large', 'medium', 'small'].map((v) =>
          <option key={v}>{v}</option>)}
      </select>
    </label>
    <br/><br/>
    <ButtonBar size={size}>
      <a>First Item</a>
      <a data-selected>Second Item</a>
    </ButtonBar>
    <br/><br/>
    <ButtonBar size={size}>
      <button>First Item</button>
      <button data-selected>Second Item</button>
      <button>Third Item</button>
    </ButtonBar>
    <br/><br/>
    <ButtonBar size={size}>
      <button>First Item with a really long title</button>
      <button>Second Item</button>
      <button>Third Item</button>
    </ButtonBar>
  </Wrapper>
};
