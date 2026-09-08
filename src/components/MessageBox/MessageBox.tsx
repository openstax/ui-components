import React from "react";
import classNames from "classnames";
import { CSSPropertiesWithVariables } from "../../types";
import "./MessageBox.css";
import "../../theme/theme.css";

export interface MessageBoxProps {
  customMargin?: string;
  children?: React.ReactNode;
}

// style is widened to CSSPropertiesWithVariables so callers can set the documented
// --message-box-* custom properties without casting.
type BoxProps<E extends keyof JSX.IntrinsicElements> =
  Omit<React.ComponentPropsWithoutRef<E>, 'style'> & { style?: CSSPropertiesWithVariables };

export interface BoxWrapperProps extends BoxProps<'div'> {
  margin?: string;
}

export const BoxWrapper = ({ margin, className, style, ...props }: BoxWrapperProps) => (
  <div
    {...props}
    className={classNames('message-box', className)}
    // Only the margin is bound from JS, because only the margin varies at runtime. It is
    // left unset when the prop is absent so the stylesheet's `0 auto` default still wins.
    style={margin === undefined ? style : { '--message-box-margin': margin, ...style }}
  />
);

export const BoxHeading = ({ className, ...props }: BoxProps<'h3'>) => (
  <h3 {...props} className={classNames('message-box-heading', className)} />
);

export const BoxBody = ({ className, ...props }: BoxProps<'div'>) => (
  <div {...props} className={classNames('message-box-body', className)} />
);

export const BoxEventId = ({ className, ...props }: BoxProps<'div'>) => (
  <div {...props} className={classNames('message-box-event-id', className)} />
);

export const MessageBox = ({ children, customMargin, ...props }: MessageBoxProps) => {

  return (
    <BoxWrapper margin={customMargin}>
      <BoxBody {...props} data-testid='message-box'>
        {children}
      </BoxBody>
    </BoxWrapper>
  );
};
