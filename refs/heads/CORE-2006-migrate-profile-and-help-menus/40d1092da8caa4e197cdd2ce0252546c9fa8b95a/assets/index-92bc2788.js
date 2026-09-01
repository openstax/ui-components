import{r as n,R as P,s as v,j as m}from"./index-5734254e.js";import{q as T,b as y,o as C,g as B,F as E,c as w,f as D,G as F,v as M}from"./useFocusRing-806159a4.js";import{$ as z}from"./useButton-c6544dee.js";import{b as L}from"./FocusScope-8751b70e.js";import{$ as R}from"./context-34338731.js";import{$ as k}from"./useToggleState-cf8cb316.js";import{c as b}from"./theme-a67f9953.js";function p(t,e,d){const{isSelected:s}=e,{isPressed:o,buttonProps:i}=z({...t,onPress:T(e.toggle,t.onPress)},d);return{isPressed:o,isSelected:s,isDisabled:t.isDisabled||!1,buttonProps:y(i,{"aria-pressed":s})}}function G(t,e){const{"aria-label":d,"aria-labelledby":s,orientation:o="horizontal"}=t;let[i,r]=n.useState(!1);C(()=>{var a;r(!!(e.current&&(!((a=e.current.parentElement)===null||a===void 0)&&a.closest('[role="toolbar"]'))))});const{direction:l}=R(),f=l==="rtl"&&o==="horizontal";let u=L(e);const g=a=>{if(a.currentTarget.contains(a.target)){if(o==="horizontal"&&a.key==="ArrowRight"||o==="vertical"&&a.key==="ArrowDown")f?u.focusPrevious():u.focusNext();else if(o==="horizontal"&&a.key==="ArrowLeft"||o==="vertical"&&a.key==="ArrowUp")f?u.focusNext():u.focusPrevious();else if(a.key==="Tab"){a.stopPropagation(),c.current=document.activeElement,a.shiftKey?u.focusFirst():u.focusLast();return}else return;a.stopPropagation(),a.preventDefault()}},c=n.useRef(null),h=a=>{!a.currentTarget.contains(a.relatedTarget)&&!c.current&&(c.current=a.target)},x=a=>{var $;if(c.current&&!a.currentTarget.contains(a.relatedTarget)&&(!(($=e.current)===null||$===void 0)&&$.contains(a.target))){var S;(S=c.current)===null||S===void 0||S.focus(),c.current=null}};return{toolbarProps:{...B(t,{labelable:!0}),role:i?"group":"toolbar","aria-orientation":o,"aria-label":d,"aria-labelledby":d==null?s:void 0,onKeyDownCapture:i?void 0:g,onFocusCapture:i?void 0:x,onBlurCapture:i?void 0:h}}}function A(t,e,d){let{isDisabled:s}=t,{toolbarProps:o}=G(t,d);return{groupProps:{...o,role:e.selectionMode==="single"?"radiogroup":o.role,"aria-disabled":s}}}function N(t,e,d){let s={isSelected:e.selectedKeys.has(t.id),setSelected(f){e.setSelected(t.id,f)},toggle(){e.toggleKey(t.id)}},{isPressed:o,isSelected:i,isDisabled:r,buttonProps:l}=p({...t,id:void 0,isDisabled:t.isDisabled||e.isDisabled},s,d);return e.selectionMode==="single"&&(l.role="radio",l["aria-checked"]=s.isSelected,delete l["aria-pressed"]),{isPressed:o,isSelected:i,isDisabled:r,buttonProps:l}}function H(t){let{selectionMode:e="single",disallowEmptySelection:d,isDisabled:s=!1}=t,[o,i]=E(n.useMemo(()=>t.selectedKeys?new Set(t.selectedKeys):void 0,[t.selectedKeys]),n.useMemo(()=>t.defaultSelectedKeys?new Set(t.defaultSelectedKeys):new Set,[t.defaultSelectedKeys]),t.onSelectionChange);return{selectionMode:e,isDisabled:s,selectedKeys:o,setSelectedKeys:i,toggleKey(r){let l;e==="multiple"?(l=new Set(o),l.has(r)&&(!d||l.size>1)?l.delete(r):l.add(r)):l=new Set(o.has(r)&&!d?[]:[r]),i(l)},setSelected(r,l){l!==o.has(r)&&this.toggleKey(r)}}}const V=n.createContext({}),K=n.createContext(null),j=n.forwardRef(function(e,d){[e,d]=w(e,d,V);let s=H(e),{groupProps:o}=A(e,s,d),i=D({...e,values:{isDisabled:s.isDisabled,state:s},defaultClassName:"react-aria-ToggleButtonGroup"});return P.createElement("div",{...o,...i,ref:d,slot:e.slot||void 0,"data-orientation":e.orientation||"horizontal","data-disabled":e.isDisabled||void 0},P.createElement(K.Provider,{value:s},i.children))}),I=n.createContext({}),q=n.forwardRef(function(e,d){[e,d]=w(e,d,I);let s=n.useContext(K),o=k(s&&e.id!=null?{isSelected:s.selectedKeys.has(e.id),onChange($){s.setSelected(e.id,$)}}:e),{buttonProps:i,isPressed:r,isSelected:l,isDisabled:f}=s&&e.id!=null?N({...e,id:e.id},s,d):p({...e,id:e.id!=null?String(e.id):void 0},o,d),{focusProps:u,isFocused:g,isFocusVisible:c}=F(e),{hoverProps:h,isHovered:x}=M(e),a=D({...e,id:void 0,values:{isHovered:x,isPressed:r,isFocused:g,isSelected:o.isSelected,isFocusVisible:c,isDisabled:f,state:o},defaultClassName:"react-aria-ToggleButton"});return P.createElement("button",{...y(i,u,h),...a,ref:d,slot:e.slot||void 0,"data-focused":g||void 0,"data-disabled":f||void 0,"data-pressed":r||void 0,"data-selected":l||void 0,"data-hovered":x||void 0,"data-focus-visible":c||void 0})}),U=v(j)`
  /* formerly tabListBaseCss */
  overflow-x: auto;
  overscroll-behavior: contain;
  display: flex;
  flex-direction: row;
`,_=v(q)`
  all: unset;
  height: 3.6rem;
  padding: 0 0.8rem;
  background-color: ${b.palette.white};
  border: solid 0.1rem ${b.palette.pale};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
  white-space: nowrap;
  user-select: none;

  & + & {
    border-left: none;
  }

  &[data-selected] {
    background-color: ${b.palette.neutralLighter};
    // achieve a 2px border effect without disrupting layout
    box-shadow: inset 0 0 0 0.1rem ${b.palette.pale};
  }

  &[data-disabled] {
    color: ${b.palette.neutralLight};
  }

  &[data-focus-visible] {
    outline: none;
    box-shadow: inset 0 0 0 0.1rem ${b.palette.black};
  }
`,ee=({items:t,selectedItems:e,...d})=>m(U,{selectedKeys:e,...d,children:t.map(({value:s,...o})=>m(_,{"data-button-id":o.id,...o,onPressStart:i=>i.continuePropagation(),children:s},o.id))});export{ee as T};
