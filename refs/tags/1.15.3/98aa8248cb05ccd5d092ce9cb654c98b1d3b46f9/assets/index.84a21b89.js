import{r,R as m,s as v,a as h}from"./index.61fda8ed.js";import{I as C,c as y,$ as B,d as R,a as E,f as D,n as w,i as K,j as F,k as M}from"./context.module.32260de9.js";import{a as z}from"./useButton.module.2d20d353.js";import{s as k}from"./Collection.module.48d2eee0.js";import{c as S}from"./theme.add8cbd9.js";import{t as L}from"./Tabs.284e3b5f.js";function p(t,e,d){const{isSelected:a}=e,{isPressed:s,buttonProps:i}=z({...t,onPress:C(e.toggle,t.onPress)},d);return{isPressed:s,isSelected:a,isDisabled:t.isDisabled||!1,buttonProps:y(i,{"aria-pressed":a})}}function A(t,e){const{"aria-label":d,"aria-labelledby":a,orientation:s="horizontal"}=t;let[i,l]=r.exports.useState(!1);B(()=>{var o;l(!!(e.current&&((o=e.current.parentElement)===null||o===void 0?void 0:o.closest('[role="toolbar"]'))))});const{direction:n}=R(),f=n==="rtl"&&s==="horizontal";let u=k(e);const $=o=>{if(!!o.currentTarget.contains(o.target)){if(s==="horizontal"&&o.key==="ArrowRight"||s==="vertical"&&o.key==="ArrowDown")f?u.focusPrevious():u.focusNext();else if(s==="horizontal"&&o.key==="ArrowLeft"||s==="vertical"&&o.key==="ArrowUp")f?u.focusNext():u.focusPrevious();else if(o.key==="Tab"){o.stopPropagation(),c.current=document.activeElement,o.shiftKey?u.focusFirst():u.focusLast();return}else return;o.stopPropagation(),o.preventDefault()}},c=r.exports.useRef(null),x=o=>{!o.currentTarget.contains(o.relatedTarget)&&!c.current&&(c.current=o.target)},g=o=>{var b;if(c.current&&!o.currentTarget.contains(o.relatedTarget)&&((b=e.current)===null||b===void 0?void 0:b.contains(o.target))){var P;(P=c.current)===null||P===void 0||P.focus(),c.current=null}};return{toolbarProps:{...E(t,{labelable:!0}),role:i?"group":"toolbar","aria-orientation":s,"aria-label":d,"aria-labelledby":d==null?a:void 0,onKeyDownCapture:i?void 0:$,onFocusCapture:i?void 0:g,onBlurCapture:i?void 0:x}}}function G(t,e,d){let{isDisabled:a}=t,{toolbarProps:s}=A(t,d);return{groupProps:{...s,role:e.selectionMode==="single"?"radiogroup":s.role,"aria-disabled":a}}}function N(t,e,d){let a={isSelected:e.selectedKeys.has(t.id),setSelected(f){e.setSelected(t.id,f)},toggle(){e.toggleKey(t.id)}},{isPressed:s,isSelected:i,isDisabled:l,buttonProps:n}=p({...t,id:void 0,isDisabled:t.isDisabled||e.isDisabled},a,d);return e.selectionMode==="single"&&(n.role="radio",n["aria-checked"]=a.isSelected,delete n["aria-pressed"]),{isPressed:s,isSelected:i,isDisabled:l,buttonProps:n}}function H(t={}){let{isReadOnly:e}=t,[d,a]=D(t.isSelected,t.defaultSelected||!1,t.onChange);function s(l){e||a(l)}function i(){e||a(!d)}return{isSelected:d,setSelected:s,toggle:i}}function I(t){let{selectionMode:e="single",disallowEmptySelection:d,isDisabled:a=!1}=t,[s,i]=D(r.exports.useMemo(()=>t.selectedKeys?new Set(t.selectedKeys):void 0,[t.selectedKeys]),r.exports.useMemo(()=>t.defaultSelectedKeys?new Set(t.defaultSelectedKeys):new Set,[t.defaultSelectedKeys]),t.onSelectionChange);return{selectionMode:e,isDisabled:a,selectedKeys:s,setSelectedKeys:i,toggleKey(l){let n;e==="multiple"?(n=new Set(s),n.has(l)&&(!d||n.size>1)?n.delete(l):n.add(l)):n=new Set(s.has(l)&&!d?[]:[l]),i(n)},setSelected(l,n){n!==s.has(l)&&this.toggleKey(l)}}}const V=r.exports.createContext({}),T=r.exports.createContext(null),j=r.exports.forwardRef(function(e,d){[e,d]=w(e,d,V);let a=I(e),{groupProps:s}=G(e,a,d),i=K({...e,values:{isDisabled:a.isDisabled,state:a},defaultClassName:"react-aria-ToggleButtonGroup"});return m.createElement("div",{...s,...i,ref:d,slot:e.slot||void 0,"data-orientation":e.orientation||"horizontal","data-disabled":e.isDisabled||void 0},m.createElement(T.Provider,{value:a},i.children))}),O=r.exports.createContext({}),U=r.exports.forwardRef(function(e,d){[e,d]=w(e,d,O);let a=r.exports.useContext(T),s=H(a&&e.id!=null?{isSelected:a.selectedKeys.has(e.id),onChange(b){a.setSelected(e.id,b)}}:e),{buttonProps:i,isPressed:l,isSelected:n,isDisabled:f}=a&&e.id!=null?N({...e,id:e.id},a,d):p({...e,id:e.id!=null?String(e.id):void 0},s,d),{focusProps:u,isFocused:$,isFocusVisible:c}=F(e),{hoverProps:x,isHovered:g}=M(e),o=K({...e,id:void 0,values:{isHovered:g,isPressed:l,isFocused:$,isSelected:s.isSelected,isFocusVisible:c,isDisabled:f,state:s},defaultClassName:"react-aria-ToggleButton"});return m.createElement("button",{...y(i,u,x),...o,ref:d,slot:e.slot||void 0,"data-focused":$||void 0,"data-disabled":f||void 0,"data-pressed":l||void 0,"data-selected":n||void 0,"data-hovered":g||void 0,"data-focus-visible":c||void 0})}),_=v(j)`
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
`,ee=({children:t,selectedItems:e,onSelectionChange:d,selectionMode:a="single",...s})=>h(_,{selectionMode:a,selectedKeys:e,onSelectionChange:d,...s,children:t.map(i=>h(q,{"data-section-id":i.id,id:i.id,onPressStart:l=>l.continuePropagation(),children:i.value},i.id))});export{ee as T};
