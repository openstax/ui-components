import{e as E,a as i,o as S,$ as h,g as T,j as O,f as U}from"./context.module.cbef6687.js";import{R as u,r as f}from"./index.0a27c5ce.js";import{c as H}from"./focusSafely.module.baee9b88.js";import{g as I,d as K,a as R,b as V}from"./useFocusRing.module.b05559ad.js";function v(e){if(!e)return;let t=!0;return a=>{let s={...a,preventDefault(){a.preventDefault()},isDefaultPrevented(){return a.isDefaultPrevented()},stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}};e(s),t&&a.stopPropagation()}}function B(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:v(e.onKeyDown),onKeyUp:v(e.onKeyUp)}}}let m=u.createContext(null);function N(e){let t=f.exports.useContext(m)||{};S(t,e);let{ref:a,...s}=t;return s}function j(e,t){let{children:a,...s}=e,r=E(t),o={...s,ref:r};return u.createElement(m.Provider,{value:o},a)}let J=u.forwardRef(j);function A(e,t){let{focusProps:a}=I(e),{keyboardProps:s}=B(e),r=i(a,s),o=N(t),d=e.isDisabled?{}:o,n=f.exports.useRef(e.autoFocus);return f.exports.useEffect(()=>{n.current&&t.current&&H(t.current),n.current=!1},[t]),{focusableProps:i({...r,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},d)}}function M(e,t){let{elementType:a="button",isDisabled:s,onPress:r,onPressStart:o,onPressEnd:d,onPressUp:n,onPressChange:b,preventFocusOnPress:c,allowFocusWhenDisabled:l,onClick:p,href:D,target:F,rel:g,type:x="button"}=e,$;a==="button"?$={type:x,disabled:s}:$={role:"button",tabIndex:s?void 0:0,href:a==="a"&&s?void 0:D,target:a==="a"?F:void 0,type:a==="input"?x:void 0,disabled:a==="input"?s:void 0,"aria-disabled":!s||a==="input"?void 0:s,rel:a==="a"?g:void 0};let{pressProps:y,isPressed:C}=K({onPressStart:o,onPressEnd:d,onPressChange:b,onPress:r,onPressUp:n,isDisabled:s,preventFocusOnPress:c,ref:t}),{focusableProps:P}=A(e,t);l&&(P.tabIndex=s?-1:P.tabIndex);let w=i(P,y,h(e,{labelable:!0}));return{isPressed:C,buttonProps:i($,w,{"aria-haspopup":e["aria-haspopup"],"aria-expanded":e["aria-expanded"],"aria-controls":e["aria-controls"],"aria-pressed":e["aria-pressed"],onClick:k=>{p&&(p(k),console.warn("onClick is deprecated, please use onPress"))}})}}const W=new Set(["form","formAction","formEncType","formMethod","formNoValidate","formTarget","name","value"]),L=f.exports.createContext({});function Y(e,t){[e,t]=O(e,t,L);let a=e,{buttonProps:s,isPressed:r}=M(e,t),{focusProps:o,isFocused:d,isFocusVisible:n}=R(e),{hoverProps:b,isHovered:c}=V(e),l=U({...e,values:{isHovered:c,isPressed:r,isFocused:d,isFocusVisible:n,isDisabled:e.isDisabled||!1},defaultClassName:"react-aria-Button"});return u.createElement("button",{...h(e,{propNames:W}),...i(s,o,b),...l,ref:t,slot:e.slot||void 0,"data-disabled":e.isDisabled||void 0,"data-pressed":a.isPressed||r||void 0,"data-hovered":c||void 0,"data-focused":d||void 0,"data-focus-visible":n||void 0})}const Q=T(Y);export{Q as $,B as a,A as b,J as c};
