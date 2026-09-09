import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import classNames from 'classnames';
import { Times } from "./svgs/Times";
import './CloseModalButton.css';
import '../theme/theme.css';
export const CloseModalButton = React.forwardRef(({ variant, className, ...props }, ref) => (_jsx("button", { ...props, ref: ref, type: 'button', "aria-label": 'Close', className: classNames('close-modal-button', variant !== 'default' && variant, className), children: _jsx(Times, { "aria-hidden": 'true', focusable: 'false' }) })));
CloseModalButton.displayName = 'CloseModalButton';
