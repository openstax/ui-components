import { TextResizerValue } from "./constants";
import "./TextResizer.css";
import "../../theme/theme.css";
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
export declare const TextResizer: ({ value, onChange, sliderLabel, decreaseLabel, increaseLabel, announcement, fillColor, className, "aria-labelledby": ariaLabelledby, "aria-label": ariaLabel, }: TextResizerProps) => import("react/jsx-runtime").JSX.Element;
