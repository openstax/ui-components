import React from 'react';
import './Loader.css';
interface Props extends React.SVGProps<SVGSVGElement> {
    large?: boolean;
    delay?: number;
    className?: string;
}
export declare const Loader: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<SVGSVGElement>>;
export {};
