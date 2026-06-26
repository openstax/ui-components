import React from 'react';
export type BodyPortalProps = React.PropsWithChildren<{
    className?: string;
    role?: string;
    slot?: string;
    tagName?: string;
    id?: string;
    'data-testid'?: string;
    ariaLabel?: string;
}>;
export declare const BodyPortal: React.ForwardRefExoticComponent<{
    className?: string;
    role?: string;
    slot?: string;
    tagName?: string;
    id?: string;
    'data-testid'?: string;
    ariaLabel?: string;
} & {
    children?: React.ReactNode | undefined;
} & React.RefAttributes<HTMLElement>>;
