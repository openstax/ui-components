import React from 'react';
import { PropsWithChildren } from "react";
import { colors } from "../theme";
import { InputHTMLAttributes } from "react";
import {useTooltipTriggerState} from 'react-stately';
import {useTooltipTrigger} from 'react-aria';
import { CustomTooltip } from './Tooltip';
import classNames from 'classnames';
import "./Radio.css";

type RadioProps = PropsWithChildren<
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>>;

export const Radio = ({ children, disabled, labelAs, className, style, tooltipText, ...props }: RadioProps & {
  tooltipText?: string;
  labelAs?: string;
}) => {
  const state = useTooltipTriggerState({delay: 0});
  const ref = React.useRef(null);

  const { triggerProps, tooltipProps } = useTooltipTrigger({delay: 0}, state, ref);

  // Label className
  const labelClassName = classNames(
    'radio-label',
    { 'disabled': disabled }
  );

  // Label style with CSS variables
  const labelStyle = {
    '--radio-label-color': 'inherit',
    '--radio-disabled-color': colors.palette.pale,
  } as unknown as React.CSSProperties;

  // Input className
  const inputClassName = classNames(
    'radio-input',
    { 'disabled': disabled },
    className
  );

  // Input style with CSS variables
  const inputStyle = {
    '--radio-bg': colors.palette.white,
    '--radio-border': `1px solid ${colors.palette.neutralThin}`,
    '--radio-border-color': colors.palette.pale,
    '--radio-checked': colors.palette.mediumBlue,
    '--radio-opacity': disabled ? '0.4' : '1',
    '--radio-checked-opacity': disabled ? '0' : '1',
    ...style
  } as unknown as React.CSSProperties;

  const labelElement = labelAs || 'label';

  const labelContent = (
    <>
      <input
        type="radio"
        className={inputClassName}
        style={inputStyle}
        disabled={disabled}
        {...props}
      />
      {children}
    </>
  );

  const labelWithTooltip = (
    <>
      {labelContent}
      {state.isOpen && (
        <CustomTooltip state={state} {...tooltipProps} placement='right'>{tooltipText}</CustomTooltip>
      )}
    </>
  );
  const tPropsWithUpdatedOnFocus = {
    ...triggerProps,
    onFocus: (e: React.FocusEvent<HTMLElement>) => {
      triggerProps.onFocus?.(e);
      state.open();
    },
  };

  return tooltipText
    ? <div>
        <div className="radio-label-with-tooltip-wrapper">
          {React.createElement(
            labelElement,
            {
              ref,
              className: labelClassName,
              style: labelStyle,
              ...tPropsWithUpdatedOnFocus,
            },
            labelWithTooltip
          )}
        </div>
      </div>
    : React.createElement(
        labelElement,
        {
          className: labelClassName,
          style: labelStyle,
        },
        labelContent
      );
};
