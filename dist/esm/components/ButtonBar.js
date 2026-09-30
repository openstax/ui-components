import { jsx as _jsx } from "react/jsx-runtime";
import { palette } from "../theme/palette";
import classNames from "classnames";
import './ButtonBar.css';
export const ButtonBar = ({ size = "medium", children, className, style: customStyle, ...restProps }) => {
    const buttonBarClass = classNames('button-bar', {
        'button-bar-small': size === 'small',
        'button-bar-medium': size === 'medium',
        'button-bar-large': size === 'large',
    }, className);
    const style = {
        '--button-bar-border-color': palette.pale,
        '--button-bar-selected-bg': palette.neutralLight,
        '--button-bar-hover-bg': palette.neutralLighter,
        ...customStyle,
    };
    return (_jsx("div", { className: buttonBarClass, style: style, ...restProps, children: children }));
};
