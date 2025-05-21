import * as RAC from "react-aria-components";
import { MouseEventHandler } from "react";
export declare const Tree: import("styled-components").StyledComponent<(<T extends object>(props: RAC.TreeProps<T> & import("react").RefAttributes<HTMLDivElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null), any, {}, never>;
export declare const TreeItem: import("styled-components").StyledComponent<(<T extends object>(props: RAC.TreeItemProps<T> & import("react").RefAttributes<HTMLDivElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null), any, {}, never>;
export declare const TreeItemContent: import("styled-components").StyledComponent<(props: RAC.TreeItemContentProps & import("react").RefAttributes<object>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null, any, {}, never>;
export declare const TreeChevron: import("styled-components").StyledComponent<(props: React.PropsWithChildren<{
    className?: string;
    onClickHandler?: MouseEventHandler<HTMLButtonElement> | undefined;
}>) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
