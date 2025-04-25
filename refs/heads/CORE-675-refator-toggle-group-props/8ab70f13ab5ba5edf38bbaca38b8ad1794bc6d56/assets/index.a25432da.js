import{r,R as h,s as v,a as m}from"./index.4193e21a.js";import{E as C,c as y,$ as B,d as E,a as R,f as D,n as w,i as K,j as F,k as M}from"./context.module.4ccba5d3.js";import{$ as z}from"./useButton.module.7e2fcd8b.js";import{m as k}from"./Collection.module.2a78be1f.js";import{c as S}from"./theme.44905229.js";import{t as L}from"./Tabs.3e9edf74.js";function p(t,e,s){const{isSelected:a}=e,{isPressed:d,buttonProps:i}=z({...t,onPress:C(e.toggle,t.onPress)},s);return{isPressed:d,isSelected:a,isDisabled:t.isDisabled||!1,buttonProps:y(i,{"aria-pressed":a})}}function A(t,e){const{"aria-label":s,"aria-labelledby":a,orientation:d="horizontal"}=t;let[i,l]=r.exports.useState(!1);B(()=>{var o;l(!!(e.current&&((o=e.current.parentElement)===null||o===void 0?void 0:o.closest('[role="toolbar"]'))))});const{direction:n}=E(),f=n==="rtl"&&d==="horizontal";let u=k(e);const $=o=>{if(!!o.currentTarget.contains(o.target)){if(d==="horizontal"&&o.key==="ArrowRight"||d==="vertical"&&o.key==="ArrowDown")f?u.focusPrevious():u.focusNext();else if(d==="horizontal"&&o.key==="ArrowLeft"||d==="vertical"&&o.key==="ArrowUp")f?u.focusNext():u.focusPrevious();else if(o.key==="Tab"){o.stopPropagation(),c.current=document.activeElement,o.shiftKey?u.focusFirst():u.focusLast();return}else return;o.stopPropagation(),o.preventDefault()}},c=r.exports.useRef(null),x=o=>{!o.currentTarget.contains(o.relatedTarget)&&!c.current&&(c.current=o.target)},g=o=>{var b;if(c.current&&!o.currentTarget.contains(o.relatedTarget)&&((b=e.current)===null||b===void 0?void 0:b.contains(o.target))){var P;(P=c.current)===null||P===void 0||P.focus(),c.current=null}};return{toolbarProps:{...R(t,{labelable:!0}),role:i?"group":"toolbar","aria-orientation":d,"aria-label":s,"aria-labelledby":s==null?a:void 0,onKeyDownCapture:i?void 0:$,onFocusCapture:i?void 0:g,onBlurCapture:i?void 0:x}}}function G(t,e,s){let{isDisabled:a}=t,{toolbarProps:d}=A(t,s);return{groupProps:{...d,role:e.selectionMode==="single"?"radiogroup":d.role,"aria-disabled":a}}}function N(t,e,s){let a={isSelected:e.selectedKeys.has(t.id),setSelected(f){e.setSelected(t.id,f)},toggle(){e.toggleKey(t.id)}},{isPressed:d,isSelected:i,isDisabled:l,buttonProps:n}=p({...t,id:void 0,isDisabled:t.isDisabled||e.isDisabled},a,s);return e.selectionMode==="single"&&(n.role="radio",n["aria-checked"]=a.isSelected,delete n["aria-pressed"]),{isPressed:d,isSelected:i,isDisabled:l,buttonProps:n}}function H(t={}){let{isReadOnly:e}=t,[s,a]=D(t.isSelected,t.defaultSelected||!1,t.onChange);function d(l){e||a(l)}function i(){e||a(!s)}return{isSelected:s,setSelected:d,toggle:i}}function V(t){let{selectionMode:e="single",disallowEmptySelection:s,isDisabled:a=!1}=t,[d,i]=D(r.exports.useMemo(()=>t.selectedKeys?new Set(t.selectedKeys):void 0,[t.selectedKeys]),r.exports.useMemo(()=>t.defaultSelectedKeys?new Set(t.defaultSelectedKeys):new Set,[t.defaultSelectedKeys]),t.onSelectionChange);return{selectionMode:e,isDisabled:a,selectedKeys:d,setSelectedKeys:i,toggleKey(l){let n;e==="multiple"?(n=new Set(d),n.has(l)&&(!s||n.size>1)?n.delete(l):n.add(l)):n=new Set(d.has(l)&&!s?[]:[l]),i(n)},setSelected(l,n){n!==d.has(l)&&this.toggleKey(l)}}}const j=r.exports.createContext({}),T=r.exports.createContext(null),I=r.exports.forwardRef(function(e,s){[e,s]=w(e,s,j);let a=V(e),{groupProps:d}=G(e,a,s),i=K({...e,values:{isDisabled:a.isDisabled,state:a},defaultClassName:"react-aria-ToggleButtonGroup"});return h.createElement("div",{...d,...i,ref:s,slot:e.slot||void 0,"data-orientation":e.orientation||"horizontal","data-disabled":e.isDisabled||void 0},h.createElement(T.Provider,{value:a},i.children))}),O=r.exports.createContext({}),U=r.exports.forwardRef(function(e,s){[e,s]=w(e,s,O);let a=r.exports.useContext(T),d=H(a&&e.id!=null?{isSelected:a.selectedKeys.has(e.id),onChange(b){a.setSelected(e.id,b)}}:e),{buttonProps:i,isPressed:l,isSelected:n,isDisabled:f}=a&&e.id!=null?N({...e,id:e.id},a,s):p({...e,id:e.id!=null?String(e.id):void 0},d,s),{focusProps:u,isFocused:$,isFocusVisible:c}=F(e),{hoverProps:x,isHovered:g}=M(e),o=K({...e,id:void 0,values:{isHovered:g,isPressed:l,isFocused:$,isSelected:d.isSelected,isFocusVisible:c,isDisabled:f,state:d},defaultClassName:"react-aria-ToggleButton"});return h.createElement("button",{...y(i,u,x),...o,ref:s,slot:e.slot||void 0,"data-focused":$||void 0,"data-disabled":f||void 0,"data-pressed":l||void 0,"data-selected":n||void 0,"data-hovered":g||void 0,"data-focus-visible":c||void 0})}),_=v(I)`
  ${L}
`,q=v(U)`
  all: unset;
  height: 3.6rem;
  padding: 0 0.8rem;
  background-color: ${S.palette.white};
  border: solid 0.1rem ${S.palette.pale};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
  white-space: nowrap;

  & + & {
    border-left: none;
  }

  &[data-selected] {
    background-color: ${S.palette.neutralLighter};
  }

  &[data-focus-visible] {
    outline: none;
    box-shadow: inset 0 0 0 0.1rem ${S.palette.black};
  }
`,ee=({items:t,selectedItems:e,onSelectionChange:s,selectionMode:a="single",...d})=>m(_,{selectionMode:a,selectedKeys:e,onSelectionChange:s,...d,children:t.map(i=>m(q,{"data-button-id":i.id,id:i.id,onPressStart:l=>l.continuePropagation(),children:i.value},i.id))});export{ee as T};
