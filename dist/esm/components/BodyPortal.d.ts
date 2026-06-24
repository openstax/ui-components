import React from 'react';
export declare type BodyPortalProps = React.PropsWithChildren<{
    className?: string;
    role?: string;
    slot?: string;
    tagName?: string;
    id?: string;
    'data-testid'?: string;
    ariaLabel?: string;
}>;
export declare const BodyPortal: React.ForwardRefExoticComponent<{
    className?: string | undefined;
    role?: string | undefined;
    slot?: string | undefined;
    tagName?: string | undefined;
    id?: string | undefined;
    'data-testid'?: string | undefined;
    ariaLabel?: string | undefined;
} & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLElement>>;
