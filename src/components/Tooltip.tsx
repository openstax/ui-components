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

// icon/ariaLabel configure the trigger button, so they are only accepted by TooltipGroup.
// isOpen/defaultOpen/onOpenChange drive the *trigger*, not the tooltip element — see the
// comment on TooltipGroup for why that distinction matters.
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

/**
 * An info icon that reveals a tooltip. The trigger is a real button: pressing it toggles the
 * tooltip, so `role="button"` describes something the control actually does.
 *
 * Two things here are deliberate and easy to undo by accident.
 *
 * `isOpen`/`defaultOpen`/`onOpenChange` are handed to `TooltipTrigger`, not spread into
 * `Tooltip`. react-aria's `Tooltip` reads `state = props.isOpen != null || props.defaultOpen
 * != null || !contextState ? localState : contextState`, so passing either prop to the
 * tooltip element gives it a second state that the trigger knows nothing about — the
 * trigger's own state stays closed, which means `useTooltipTrigger` never emits
 * `aria-describedby` and Escape-to-dismiss stops working.
 *
 * `useTooltipTrigger` closes the tooltip from its own `onPointerDown` and `onKeyDown`, before
 * `onPress` runs, so `onPress` closes it only for a press that had neither, such as a screen
 * reader click (pointerType "virtual"). Closing it again would report the same close to
 * `onOpenChange` twice. The state is recorded in `onPressStart` because by `onPress`
 * react-aria has already closed the tooltip.
 * That close-on-press default is also why the button used to do nothing useful: tabbing to
 * it opened the tooltip and then Enter or Space dismissed it, and on touch, where hover
 * never fires, the tap closed it and the content was unreachable.
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
