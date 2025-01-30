import{h as w,D as E,c as i,u as S,E as O,r as U,a as I}from"./context.module.3ec39813.js";import{R as f,r as l}from"./index.8a38cd12.js";function P(e){if(!e)return;let t=!0;return r=>{let a={...r,preventDefault(){r.preventDefault()},isDefaultPrevented(){return r.isDefaultPrevented()},stopPropagation(){t?console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior."):t=!0},continuePropagation(){t=!1},isPropagationStopped(){return t}};e(a),t&&r.stopPropagation()}}function K(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:P(e.onKeyDown),onKeyUp:P(e.onKeyUp)}}}let $=f.createContext(null);function R(e){let t=l.exports.useContext($)||{};O(t,e);let{ref:r,...a}=t;return a}const Y=f.forwardRef(function(t,r){let{children:a,...n}=t,o=w(r),s={...n,ref:o};return f.createElement($.Provider,{value:s},a)});function T(e,t){let{focusProps:r}=E(e),{keyboardProps:a}=K(e),n=i(r,a),o=R(t),s=e.isDisabled?{}:o,d=l.exports.useRef(e.autoFocus);return l.exports.useEffect(()=>{d.current&&t.current&&S(t.current),d.current=!1},[t]),{focusableProps:i({...n,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},s)}}function _(e,t){let{elementType:r="button",isDisabled:a,onPress:n,onPressStart:o,onPressEnd:s,onPressUp:d,onPressChange:x,preventFocusOnPress:h,allowFocusWhenDisabled:v,onClick:b,href:D,target:g,rel:y,type:p="button"}=e,u;r==="button"?u={type:p,disabled:a}:u={role:"button",tabIndex:a?void 0:0,href:r==="a"&&!a?D:void 0,target:r==="a"?g:void 0,type:r==="input"?p:void 0,disabled:r==="input"?a:void 0,"aria-disabled":!a||r==="input"?void 0:a,rel:r==="a"?y:void 0};let{pressProps:C,isPressed:F}=U({onPressStart:o,onPressEnd:s,onPressChange:x,onPress:n,onPressUp:d,isDisabled:a,preventFocusOnPress:h,ref:t}),{focusableProps:c}=T(e,t);v&&(c.tabIndex=a?-1:c.tabIndex);let k=i(c,C,I(e,{labelable:!0}));return{isPressed:F,buttonProps:i(u,k,{"aria-haspopup":e["aria-haspopup"],"aria-expanded":e["aria-expanded"],"aria-controls":e["aria-controls"],"aria-pressed":e["aria-pressed"],onClick:m=>{b&&(b(m),console.warn("onClick is deprecated, please use onPress"))}})}}export{_ as $,K as a,T as b,Y as c};
