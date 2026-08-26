import React from 'react';
import { Button, OverlayArrow, Tooltip as AriaTooltip, TooltipTrigger } from 'react-aria-components';
import { Info } from './svgs/Info';
import {mergeProps, Placement, useTooltip} from 'react-aria';
import { palette } from '../theme/palette';
import { CSSPropertiesWithVariables } from '../types';
import './Tooltip.css';

type TooltipProps = {
  placement?: Placement;
  isOpen?: boolean;
};

// icon/ariaLabel configure the trigger button, so they are only accepted by TooltipGroup
type TooltipGroupProps = TooltipProps & {
  icon?: any;
  ariaLabel?: string;
};

export const Tooltip = ({children, placement, ...props}: React.PropsWithChildren<TooltipProps>) => {
  const style: CSSPropertiesWithVariables = {
    '--tooltip-bg': palette.white,
    '--tooltip-color': palette.neutralThin,
    '--tooltip-border-color': '#ccc',
  };

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

export const TooltipGroup = ({icon, ariaLabel, ...props}: React.PropsWithChildren<TooltipGroupProps>) =>
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

  const style: CSSPropertiesWithVariables = {
    '--tooltip-bg': palette.white,
    '--tooltip-color': palette.neutralThin,
    '--tooltip-border-color': '#ccc',
  };

  // mergeProps combines className with clsx, but style is last-wins, so merge it explicitly
  const mergedProps = mergeProps(props, tooltipProps, { className: 'tooltip' });

  return (
    <div
      data-placement={props.placement}
      {...mergedProps}
      style={{...style, ...mergedProps.style}}
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