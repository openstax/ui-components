import React from "react";
import classNames from "classnames";
import { DismissIcon } from "../svgs/DismissIcon";
import { Html } from "../Html";
import { CSSPropertiesWithVariables } from "../../types";
import './Banner.css';
import '../../theme/theme.css';

export type BannerSeverity = 'note' | 'warning' | 'error';

// style is widened to CSSPropertiesWithVariables so callers can set the documented
// --banner-* custom properties without casting.
type WithVariableStyle<E extends keyof JSX.IntrinsicElements> =
  Omit<React.ComponentPropsWithoutRef<E>, 'style'> & { style?: CSSPropertiesWithVariables };

export const Severity = ({ className, ...props }: WithVariableStyle<'span'>) => (
  <span {...props} className={classNames('banner-severity', className)} />
);

export interface StyledBannerProps extends WithVariableStyle<'div'> {
  severity: BannerSeverity;
}

export const StyledBanner = ({ severity, className, ...props }: StyledBannerProps) => (
  <div {...props} className={classNames('banner', `banner-${severity}`, className)} />
);

export interface CloseButtonProps extends WithVariableStyle<'button'> {
  severity: BannerSeverity;
}

export const CloseButton = ({ severity, className, ...props }: CloseButtonProps) => (
  <button {...props} className={classNames('banner-close-button', `banner-${severity}`, className)} />
);

export const Banner = (props: {messages: string[]; severity: BannerSeverity; onDismiss?: () => void}) => {
  const numWarnings = props.messages.length;

  return <StyledBanner severity={props.severity}>
    <div>
      {props.severity !== 'error' ? <Severity>{props.severity === 'note' ? 'Note: ' : 'Warning: '}</Severity> : null}
      {props.messages.map((message, i) =>
        <Html block={numWarnings > 1} key={i}>
          {numWarnings > 1 ? `[${i + 1} of ${numWarnings}]: ${message}`: message}
        </Html>
      )}
    </div>
    {props.onDismiss
      ? <CloseButton severity={props.severity} onClick={props.onDismiss} aria-label='dismiss'>
          <DismissIcon aria-hidden='true' focusable='false' />
        </CloseButton>
      : null}
  </StyledBanner>;
};
