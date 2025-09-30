import React from "react";
import { BoxWrapper, BoxBody } from "./MessageBox.styles";

export interface MessageBoxProps {
  customMargin?: string;
  children?: React.ReactNode;
}

export const MessageBox = ({ children, customMargin, ...props }: MessageBoxProps) => {

  return (
    <BoxWrapper margin={customMargin}>
      <BoxBody {...props} data-testid='message-box'>
        {children}
      </BoxBody>
    </BoxWrapper>
  );
};
