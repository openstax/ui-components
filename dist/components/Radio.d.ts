import { PropsWithChildren } from "react";
import { InputHTMLAttributes } from "react";
declare type RadioProps = PropsWithChildren<Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>>;
export declare const Radio: ({ children, ...props }: RadioProps) => JSX.Element;
export {};
