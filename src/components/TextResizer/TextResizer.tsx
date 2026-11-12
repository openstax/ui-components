import React from "react";
import classNames from "classnames";
import { CSSPropertiesWithVariables } from "../../types";
import { TextSizeDecrease } from "../svgs/TextSizeDecrease";
import { TextSizeIncrease } from "../svgs/TextSizeIncrease";
import {
  TextResizerValue,
  textResizerMaxValue,
  textResizerMinValue,
  textResizerValueMap,
  textResizerValues,
} from "./constants";
import "./TextResizer.css";
import "../../theme/theme.css";

const percent = (value: TextResizerValue) => `${Math.round((textResizerValueMap.get(value) ?? 1) * 100)}%`;

export type TextResizerProps = {
  value: TextResizerValue;
  onChange: (value: TextResizerValue) => void;
  /** Name of the slider. */
  sliderLabel?: string;
  decreaseLabel?: string;
  increaseLabel?: string;
  /** Text announced after a button changes the size, given the new size as a percentage, such as "125%". */
  announcement?: (percent: string) => string;
  /** Fill color of the slider up to the current size. */
  fillColor?: string;
  className?: string;
  /** Names the controls as a group. The heading is the consumer's, so it can also name a popover. */
  "aria-labelledby"?: string;
  "aria-label"?: string;
};

/**
 * Controls for the text size: a slider with a button at each end. It reports the size as
 * a percentage and announces a change made with a button. It has no popover and no
 * heading, so a consumer puts it in its own.
 */
export const TextResizer = ({
  value,
  onChange,
  sliderLabel = "Text size",
  decreaseLabel = "Decrease text size",
  increaseLabel = "Increase text size",
  announcement = (size) => `Text size ${size}`,
  fillColor,
  className,
  "aria-labelledby": ariaLabelledby,
  "aria-label": ariaLabel,
}: TextResizerProps) => {
  const [announced, setAnnounced] = React.useState<{ value: TextResizerValue; text: string }>();

  const change = (next: number) => {
    if (next < textResizerMinValue || next > textResizerMaxValue) return;
    onChange(next as TextResizerValue);
    setAnnounced({ value: next as TextResizerValue, text: announcement(percent(next as TextResizerValue)) });
  };

  const onSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = parseInt(event.currentTarget.value, 10) as TextResizerValue;
    if (!textResizerValues.includes(next)) return;
    onChange(next);
  };

  const style: CSSPropertiesWithVariables = {
    "--text-resizer-progress": `${((value - textResizerMinValue) / (textResizerMaxValue - textResizerMinValue)) * 100}%`,
    ...(fillColor ? { "--text-resizer-fill": fillColor } : {}),
  };
  const isGroup = ariaLabel !== undefined || ariaLabelledby !== undefined;

  return (
    <div
      className={classNames("ox-text-resizer", className)}
      style={style}
      role={isGroup ? "group" : undefined}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
    >
      <button
        type="button"
        className="ox-text-resizer-button"
        aria-label={decreaseLabel}
        aria-disabled={value <= textResizerMinValue || undefined}
        onClick={() => change(value - 1)}
      >
        <TextSizeDecrease />
      </button>
      <input
        type="range"
        className="ox-text-resizer-slider"
        step="1"
        min={textResizerMinValue}
        max={textResizerMaxValue}
        value={value}
        onChange={onSliderChange}
        aria-label={sliderLabel}
        aria-valuetext={percent(value)}
      />
      <button
        type="button"
        className="ox-text-resizer-button"
        aria-label={increaseLabel}
        aria-disabled={value >= textResizerMaxValue || undefined}
        onClick={() => change(value + 1)}
      >
        <TextSizeIncrease />
      </button>
      <div className="ox-text-resizer-status" role="status">
        {announced?.value === value ? announced.text : ""}
      </div>
    </div>
  );
};
