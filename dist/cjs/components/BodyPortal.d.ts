import React from 'react';
import { CSSPropertiesWithVariables } from '../types';
export type BodyPortalProps = React.PropsWithChildren<{
    className?: string;
    role?: string;
    slot?: string;
    tagName?: string;
    id?: string;
    'data-testid'?: string;
    ariaLabel?: string;
    style?: CSSPropertiesWithVariables;
}>;
export declare const BodyPortal: React.ForwardRefExoticComponent<{
    className?: string;
    role?: string;
    slot?: string;
    tagName?: string;
    id?: string;
    'data-testid'?: string;
    ariaLabel?: string;
    style?: CSSPropertiesWithVariables;
} & {
    children?: React.ReactNode | undefined;
} & React.RefAttributes<HTMLElement>>;
