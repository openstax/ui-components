import styled from 'styled-components';
import { colors } from '../theme';
import { Button, OverlayArrow, Tooltip as AriaTooltip, TooltipTrigger } from 'react-aria-components';
import { Info } from './svgs/Info';
import {mergeProps, Placement, useTooltip} from 'react-aria';

const tooltipStyles = `
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
  border-radius: 0.3rem;
  border: 1px solid #ccc;
  background: ${colors.palette.white};
  color: ${colors.palette.neutralThin};
  forced-color-adjust: none;
  outline: none;
  padding: 1rem;
  /* fixes FF gap */
  transform: translate3d(0, 0, 0);
  position: absolute;
  min-width: 24rem;
  z-index: 1000;

  &[data-placement=top] {
    margin-bottom: 8px;
    --origin: translateY(4px);
  }

  &[data-placement=bottom] {
    margin-top: 8px;
    top: 50%;
    --origin: translateY(-4px);
    & .react-aria-OverlayArrow svg {
      transform: rotate(180deg);
    }
  }

  &[data-placement=right] {
    left: 100%;
    margin-left: 8px;
    --origin: translateX(-4px);
    & .react-aria-OverlayArrow {
      top: 50%;
      svg {
        transform: rotate(90deg);
      }
    }
  }

  &[data-placement=left] {
    margin-right: 8px;
    --origin: translateX(4px);
    & .react-aria-OverlayArrow svg {
      transform: rotate(-90deg);
    }
  }

  & .react-aria-OverlayArrow svg {
    display: block;
    fill: ${colors.palette.white};
  }
`;

export const Tooltip = styled(AriaTooltip)`${tooltipStyles}`;

const StyledCustomTooltip = styled.div`
  ${tooltipStyles}  
`;

export const StyledTrigger = styled(Button)`
  border: none;
  padding: 0;
  margin-left: 0.4rem;
  display: flex;
  background-color: inherit;
`;

type TooltipProps = {
  placement?: Placement;
  icon?: any;
  isOpen?: boolean;
};

export const TooltipGroup = ({children, placement, icon, ...props}: React.PropsWithChildren<TooltipProps>) =>
  <TooltipTrigger delay={0}>
    <StyledTrigger>
      {icon
        ? <img src={icon} aria-hidden={true} alt='' />
        : <Info aria-hidden={true} />
      }
    </StyledTrigger>
    <Tooltip {...props} placement={placement}>
      <OverlayArrow>
        <svg width={8} height={8} viewBox="0 0 8 8">
          <path d="M0 0 L4 4 L8 0" stroke="#ccc" stroke-width="1" />
        </svg>
      </OverlayArrow>
      {children}
    </Tooltip>
  </TooltipTrigger>;

export const CustomTooltip = ({ state, ...props }: any) => {
  const { tooltipProps } = useTooltip(props, state);

  return (
    <StyledCustomTooltip data-placement={props.placement} {...mergeProps(props, tooltipProps)}>
      {props.children}
      <OverlayArrow {...props}>
        <svg width={8} height={8} viewBox="0 0 8 8">
          <path d="M0 0 L4 4 L8 0" stroke="#ccc" stroke-width="1" />
        </svg>
      </OverlayArrow>
    </StyledCustomTooltip>
  );
}