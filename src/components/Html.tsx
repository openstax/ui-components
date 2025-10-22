import React from 'react';
import { assertString } from "@openstax/ts-utils/assertions";
import DOMPurify from 'dompurify';

export const Html = (props: React.PropsWithChildren<{block?: boolean; className?: string}>) => {
  if (props.children === undefined) {
    return null;
  }
  const html = DOMPurify.sanitize(assertString(props.children), {ADD_ATTR: ['target']});
  return props.block
    ? <div dangerouslySetInnerHTML={{__html: html}} className={props.className} />
    : <span dangerouslySetInnerHTML={{__html: html}} className={props.className} />
  ;
};
