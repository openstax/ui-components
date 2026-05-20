import { jsx as _jsx } from "react/jsx-runtime";
import { assertString } from "@openstax/ts-utils/assertions";
import DOMPurify from 'dompurify';
export const Html = (props) => {
    if (props.children === undefined) {
        return null;
    }
    const html = DOMPurify.sanitize(assertString(props.children), { ADD_ATTR: ['target'] });
    return props.block
        ? _jsx("div", { dangerouslySetInnerHTML: { __html: html }, className: props.className })
        : _jsx("span", { dangerouslySetInnerHTML: { __html: html }, className: props.className });
};
