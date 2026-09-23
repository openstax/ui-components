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

export const BoxWrapper = React.forwardRef<HTMLDivElement, BoxWrapperProps>(
  ({ margin, className, style, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={classNames('message-box', className)}
      // Only the margin is bound from JS, because only the margin varies at runtime. It is
      // left unset when the prop is absent so the stylesheet's `0 auto` default still wins.
      style={margin === undefined ? style : { '--message-box-margin': margin, ...style }}
    />
  )
);
BoxWrapper.displayName = 'BoxWrapper';

export const BoxHeading = React.forwardRef<HTMLHeadingElement, BoxProps<'h3'>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} {...props} className={classNames('message-box-heading', className)} />
  )
);
BoxHeading.displayName = 'BoxHeading';

export const BoxBody = React.forwardRef<HTMLDivElement, BoxProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} {...props} className={classNames('message-box-body', className)} />
  )
);
BoxBody.displayName = 'BoxBody';

export const BoxEventId = React.forwardRef<HTMLDivElement, BoxProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} {...props} className={classNames('message-box-event-id', className)} />
  )
);
BoxEventId.displayName = 'BoxEventId';

export const MessageBox = ({ children, customMargin, ...props }: MessageBoxProps) => {

  return (
    <BoxWrapper margin={customMargin}>
      <BoxBody {...props} data-testid='message-box'>
        {children}
      </BoxBody>
    </BoxWrapper>
  );
};
