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
import { mergeProps, Placement, useTooltip } from 'react-aria';
import { CSSPropertiesWithVariables } from '../types';
import classNames from 'classnames';
import './Tooltip.css';
import '../theme/theme.css';

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

// icon and ariaLabel configure the trigger. isOpen, defaultOpen and onOpenChange drive the
// trigger, not the tooltip element; see TooltipGroup.
type TooltipGroupProps = TooltipProps & {
  icon?: any;
  ariaLabel?: string;
  defaultOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
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
    style={style}
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

/**
 * An info icon that reveals a tooltip. The trigger is a button: pressing it toggles the tooltip.
 *
 * `isOpen`, `defaultOpen` and `onOpenChange` go to `TooltipTrigger`, not `Tooltip`. Giving
 * either prop to `Tooltip` makes react-aria build a second state the trigger cannot see, so
 * `aria-describedby` is never set and Escape stops dismissing it.
 *
 * react-aria closes the tooltip on `onPointerDown` and `onKeyDown`, before `onPress`. So
 * `onPress` closes it only for a press with neither, such as a screen reader click
 * (pointerType "virtual"), and the state at press start is recorded in `onPressStart`.
 */
export const TooltipGroup = (
  {icon, ariaLabel, isOpen, defaultOpen, onOpenChange, ...props}: React.PropsWithChildren<TooltipGroupProps>
) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen ?? false);
  const open = isOpen ?? uncontrolledOpen;
  const openAtPressStart = React.useRef(false);

  const setOpen = (next: boolean) => {
    setUncontrolledOpen(next);
    onOpenChange?.(next);
  };

  return <TooltipTrigger delay={0} isOpen={open} onOpenChange={setOpen}>
    <StyledTrigger
      aria-label={ariaLabel || 'More information'}
      aria-expanded={open}
      onPressStart={() => { openAtPressStart.current = open; }}
      onPress={(e) => {
        if (!openAtPressStart.current || e.pointerType === 'virtual') setOpen(!openAtPressStart.current);
      }}
    >
      {icon
        ? <img src={icon} aria-hidden={true} alt='' />
        : <Info aria-hidden={true} />
      }
    </StyledTrigger>
    <Tooltip {...props} />
  </TooltipTrigger>;
};

export const CustomTooltip = ({ state, ...props }: any) => {
  const { tooltipProps } = useTooltip(props, state);

  const mergedProps = mergeProps(props, tooltipProps, { className: 'tooltip' });

  return (
    <div data-placement={props.placement} {...mergedProps}>
      {props.children}
      <OverlayArrow {...props}>
        <svg width={8} height={8} viewBox="0 0 8 8">
          <path d="M0 0 L4 4 L8 0" stroke="var(--tooltip-border-color, #ccc)" strokeWidth="1" />
        </svg>
      </OverlayArrow>
    </div>
  );
}
