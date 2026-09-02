import React from 'react';
import { PropsWithChildren } from "react";
import { InputHTMLAttributes } from "react";
import {useTooltipTriggerState} from 'react-stately';
import {useTooltipTrigger} from 'react-aria';
import { CustomTooltip } from './Tooltip';
import classNames from 'classnames';
import "./Radio.css";
import '../theme/theme.css';

type RadioProps = PropsWithChildren<
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>>;

export const Radio = ({ children, disabled, labelAs, className, style, tooltipText, ...props }: RadioProps & {
  tooltipText?: string;
  labelAs?: string;
}) => {
  const state = useTooltipTriggerState({delay: 0});
  const ref = React.useRef<HTMLElement>(null);

  const { triggerProps, tooltipProps } = useTooltipTrigger({delay: 0}, state, ref);

  // Label className
  const labelClassName = classNames(
    'radio-label',
    { 'radio-label--disabled': disabled }
  );

  // Input className
  const inputClassName = classNames(
    'radio-input',
    { 'radio-input--disabled': disabled },
    className
  );

  // Input style: only the values that vary at runtime. Static colours come from the
  // token defaults in Radio.css.
  const inputStyle = {
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
              ...tPropsWithUpdatedOnFocus,
            },
            labelWithTooltip
          )}
        </div>
      </div>
    : React.createElement(
        labelElement,
        { className: labelClassName },
        labelContent
      );
};
