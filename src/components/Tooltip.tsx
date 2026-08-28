import React from 'react';
import {
  Button,
  ButtonProps as AriaButtonProps,
  OverlayArrow,
  Tooltip as AriaTooltip,
  TooltipProps as AriaTooltipProps,
  TooltipTrigger,
} from 'react-aria-components';
import { Info } from './svgs/Info';
import {mergeProps, Placement, useTooltip} from 'react-aria';
import { palette } from '../theme/palette';
import { CSSPropertiesWithVariables } from '../types';
import classNames from 'classnames';
import './Tooltip.css';

const tooltipCssVariables: CSSPropertiesWithVariables = {
  '--tooltip-bg': palette.white,
  '--tooltip-color': palette.neutralThin,
  '--tooltip-border-color': '#ccc',
};

// The styled-components versions of these accepted a plain className/style and merged
// them, so the replacements narrow away the react-aria render-callback forms rather
// than silently dropping a callback. style is widened to CSSPropertiesWithVariables so
// callers can override the documented --tooltip-* custom properties without casting.
type ClassNameAndStyle = {
  className?: string;
  style?: CSSPropertiesWithVariables;
};

type TooltipProps = ClassNameAndStyle & {
  placement?: Placement;
  isOpen?: boolean;
};

// icon/ariaLabel configure the trigger button, so they are only accepted by TooltipGroup
type TooltipGroupProps = TooltipProps & {
  icon?: any;
  ariaLabel?: string;
};

/**
 * @deprecated The styles now live in the `.tooltip` class in Tooltip.css. Prefer `Tooltip`;
 * this remains so consumers that composed the old styled-component keep working.
 */
export const StyledTooltip = React.forwardRef<
  React.ElementRef<typeof AriaTooltip>,
  Omit<AriaTooltipProps, 'className' | 'style'> & ClassNameAndStyle
>(({className, style, ...props}, ref) => (
  <AriaTooltip
    ref={ref}
    className={classNames('tooltip', className)}
    style={{...tooltipCssVariables, ...style}}
    {...props}
  />
));
StyledTooltip.displayName = 'StyledTooltip';

/**
 * @deprecated The styles now live in the `.tooltip-trigger` class in Tooltip.css. Prefer
 * `TooltipGroup`; this remains so consumers that composed the old styled-component keep working.
 */
export const StyledTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  Omit<AriaButtonProps, 'className' | 'style'> & ClassNameAndStyle
>(({className, style, ...props}, ref) => (
  <Button
    ref={ref}
    className={classNames('tooltip-trigger', className)}
    style={style}
    {...props}
  />
));
StyledTrigger.displayName = 'StyledTrigger';

export const Tooltip = ({children, placement, className, style, ...props}: React.PropsWithChildren<TooltipProps>) =>
  <StyledTooltip {...props} placement={placement} className={className} style={style}>
    <OverlayArrow>
      <svg width={8} height={8} viewBox="0 0 8 8">
        <path d="M0 0 L4 4 L8 0" stroke="var(--tooltip-border-color, #ccc)" strokeWidth="1" />
      </svg>
    </OverlayArrow>
    {children}
  </StyledTooltip>;

export const TooltipGroup = ({icon, ariaLabel, ...props}: React.PropsWithChildren<TooltipGroupProps>) =>
  <TooltipTrigger delay={0}>
    <StyledTrigger aria-label={ariaLabel || 'More information'}>
      {icon
        ? <img src={icon} aria-hidden={true} alt='' />
        : <Info aria-hidden={true} />
      }
    </StyledTrigger>
    <Tooltip {...props} />
  </TooltipTrigger>;

export const CustomTooltip = ({ state, ...props }: any) => {
  const { tooltipProps } = useTooltip(props, state);

  // mergeProps combines className with clsx, but style is last-wins, so merge it explicitly
  const mergedProps = mergeProps(props, tooltipProps, { className: 'tooltip' });

  return (
    <div
      data-placement={props.placement}
      {...mergedProps}
      style={{...tooltipCssVariables, ...mergedProps.style}}
    >
      {props.children}
      <OverlayArrow {...props}>
        <svg width={8} height={8} viewBox="0 0 8 8">
          <path d="M0 0 L4 4 L8 0" stroke="var(--tooltip-border-color, #ccc)" strokeWidth="1" />
        </svg>
      </OverlayArrow>
    </div>
  );
}
