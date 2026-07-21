import { Button, OverlayArrow, Tooltip as AriaTooltip, TooltipTrigger } from 'react-aria-components';
import { Info } from './svgs/Info';
import {mergeProps, Placement, useTooltip} from 'react-aria';
import { palette } from '../theme/palette';
import './Tooltip.css';

type TooltipProps = {
  placement?: Placement;
  icon?: any;
  isOpen?: boolean;
  ariaLabel?: string;
};

export const Tooltip = ({children, placement, icon, ...props}: React.PropsWithChildren<TooltipProps>) => {
  const style = {
    '--tooltip-bg': palette.white,
    '--tooltip-color': palette.neutralThin,
    '--tooltip-border-color': '#ccc',
  } as React.CSSProperties;

  return (
    <AriaTooltip {...props} placement={placement} className="tooltip" style={style}>
      <OverlayArrow>
        <svg width={8} height={8} viewBox="0 0 8 8">
          <path d="M0 0 L4 4 L8 0" stroke="var(--tooltip-border-color, #ccc)" strokeWidth="1" />
        </svg>
      </OverlayArrow>
      {children}
    </AriaTooltip>
  );
};

export const TooltipGroup = ({icon, ariaLabel, ...props}: React.PropsWithChildren<TooltipProps>) =>
  <TooltipTrigger delay={0}>
    <Button aria-label={ariaLabel || 'More information'} className="tooltip-trigger">
      {icon
        ? <img src={icon} aria-hidden={true} alt='' />
        : <Info aria-hidden={true} />
      }
    </Button>
    <Tooltip {...props} />
  </TooltipTrigger>;

export const CustomTooltip = ({ state, ...props }: any) => {
  const { tooltipProps } = useTooltip(props, state);

  const style = {
    '--tooltip-bg': palette.white,
    '--tooltip-color': palette.neutralThin,
    '--tooltip-border-color': '#ccc',
  } as React.CSSProperties;

  return (
    <div
      data-placement={props.placement}
      className="tooltip"
      style={style}
      {...mergeProps(props, tooltipProps)}
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