import { GlobalProvider } from "@ladle/react";
import { useEffect } from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  *, ::before, ::after {
    box-sizing: border-box;
  }
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #424242;
  height: 100%;
`;

export const Provider: GlobalProvider = ({ children }) => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerText = 'html { font-size: 62.5%; }';
    document.head.append(style);
  }, []);

  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};
