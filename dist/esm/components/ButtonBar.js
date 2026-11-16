import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
import './ButtonBar.css';
import '../theme/theme.css';
export const ButtonBar = ({ size = "medium", children, className, style, ...restProps }) => {
    const buttonBarClass = classNames('button-bar', {
        'button-bar-small': size === 'small',
        'button-bar-medium': size === 'medium',
        'button-bar-large': size === 'large',
    }, className);
    return (_jsx("div", { className: buttonBarClass, style: style, ...restProps, children: children }));
};
