import React from "react";
import { BoxWrapper, BoxBody } from "./MessageBox.styles";

export interface MessageBoxProps {
  margin?: string;
  children?: React.ReactNode;
}

export const MessageBox = ({ children, margin, ...props }: MessageBoxProps) => {

  return (
    <BoxWrapper margin={margin}>
      <BoxBody {...props} data-testid='message-box'>
        {children}
      </BoxBody>
    </BoxWrapper>
  );
};
