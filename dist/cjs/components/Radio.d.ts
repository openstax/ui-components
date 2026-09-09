import { PropsWithChildren } from "react";
import { InputHTMLAttributes } from "react";
import "./Radio.css";
import '../theme/theme.css';
type RadioProps = PropsWithChildren<Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>>;
export declare const Radio: ({ children, disabled, labelAs, className, style, tooltipText, ...props }: RadioProps & {
    tooltipText?: string;
    labelAs?: string;
}) => import("react/jsx-runtime").JSX.Element;
export {};
