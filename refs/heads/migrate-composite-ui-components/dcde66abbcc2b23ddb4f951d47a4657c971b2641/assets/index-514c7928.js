import{r as n,R as P,s as v,j as m}from"./index-401d3572.js";import{p as T,a as y,n as C,e as B,E,b as w,d as D,F,u as M}from"./useFocusRing-9cbfdfd7.js";import{$ as z}from"./useButton-3af8ea51.js";import{b as L}from"./FocusScope-1028a59a.js";import{$ as R}from"./context-129c94fe.js";import{$ as k}from"./useToggleState-9ebac28f.js";import{c as b}from"./theme-bed77ad0.js";function p(t,e,d){const{isSelected:s}=e,{isPressed:a,buttonProps:i}=z({...t,onPress:T(e.toggle,t.onPress)},d);return{isPressed:a,isSelected:s,isDisabled:t.isDisabled||!1,buttonProps:y(i,{"aria-pressed":s})}}function A(t,e){const{"aria-label":d,"aria-labelledby":s,orientation:a="horizontal"}=t;let[i,r]=n.useState(!1);C(()=>{var o;r(!!(e.current&&(!((o=e.current.parentElement)===null||o===void 0)&&o.closest('[role="toolbar"]'))))});const{direction:l}=R(),f=l==="rtl"&&a==="horizontal";let u=L(e);const g=o=>{if(o.currentTarget.contains(o.target)){if(a==="horizontal"&&o.key==="ArrowRight"||a==="vertical"&&o.key==="ArrowDown")f?u.focusPrevious():u.focusNext();else if(a==="horizontal"&&o.key==="ArrowLeft"||a==="vertical"&&o.key==="ArrowUp")f?u.focusNext():u.focusPrevious();else if(o.key==="Tab"){o.stopPropagation(),c.current=document.activeElement,o.shiftKey?u.focusFirst():u.focusLast();return}else return;o.stopPropagation(),o.preventDefault()}},c=n.useRef(null),h=o=>{!o.currentTarget.contains(o.relatedTarget)&&!c.current&&(c.current=o.target)},x=o=>{var $;if(c.current&&!o.currentTarget.contains(o.relatedTarget)&&(!(($=e.current)===null||$===void 0)&&$.contains(o.target))){var S;(S=c.current)===null||S===void 0||S.focus(),c.current=null}};return{toolbarProps:{...B(t,{labelable:!0}),role:i?"group":"toolbar","aria-orientation":a,"aria-label":d,"aria-labelledby":d==null?s:void 0,onKeyDownCapture:i?void 0:g,onFocusCapture:i?void 0:x,onBlurCapture:i?void 0:h}}}function G(t,e,d){let{isDisabled:s}=t,{toolbarProps:a}=A(t,d);return{groupProps:{...a,role:e.selectionMode==="single"?"radiogroup":a.role,"aria-disabled":s}}}function N(t,e,d){let s={isSelected:e.selectedKeys.has(t.id),setSelected(f){e.setSelected(t.id,f)},toggle(){e.toggleKey(t.id)}},{isPressed:a,isSelected:i,isDisabled:r,buttonProps:l}=p({...t,id:void 0,isDisabled:t.isDisabled||e.isDisabled},s,d);return e.selectionMode==="single"&&(l.role="radio",l["aria-checked"]=s.isSelected,delete l["aria-pressed"]),{isPressed:a,isSelected:i,isDisabled:r,buttonProps:l}}function H(t){let{selectionMode:e="single",disallowEmptySelection:d,isDisabled:s=!1}=t,[a,i]=E(n.useMemo(()=>t.selectedKeys?new Set(t.selectedKeys):void 0,[t.selectedKeys]),n.useMemo(()=>t.defaultSelectedKeys?new Set(t.defaultSelectedKeys):new Set,[t.defaultSelectedKeys]),t.onSelectionChange);return{selectionMode:e,isDisabled:s,selectedKeys:a,setSelectedKeys:i,toggleKey(r){let l;e==="multiple"?(l=new Set(a),l.has(r)&&(!d||l.size>1)?l.delete(r):l.add(r)):l=new Set(a.has(r)&&!d?[]:[r]),i(l)},setSelected(r,l){l!==a.has(r)&&this.toggleKey(r)}}}const V=n.createContext({}),K=n.createContext(null),j=n.forwardRef(function(e,d){[e,d]=w(e,d,V);let s=H(e),{groupProps:a}=G(e,s,d),i=D({...e,values:{isDisabled:s.isDisabled,state:s},defaultClassName:"react-aria-ToggleButtonGroup"});return P.createElement("div",{...a,...i,ref:d,slot:e.slot||void 0,"data-orientation":e.orientation||"horizontal","data-disabled":e.isDisabled||void 0},P.createElement(K.Provider,{value:s},i.children))}),I=n.createContext({}),U=n.forwardRef(function(e,d){[e,d]=w(e,d,I);let s=n.useContext(K),a=k(s&&e.id!=null?{isSelected:s.selectedKeys.has(e.id),onChange($){s.setSelected(e.id,$)}}:e),{buttonProps:i,isPressed:r,isSelected:l,isDisabled:f}=s&&e.id!=null?N({...e,id:e.id},s,d):p({...e,id:e.id!=null?String(e.id):void 0},a,d),{focusProps:u,isFocused:g,isFocusVisible:c}=F(e),{hoverProps:h,isHovered:x}=M(e),o=D({...e,id:void 0,values:{isHovered:x,isPressed:r,isFocused:g,isSelected:a.isSelected,isFocusVisible:c,isDisabled:f,state:a},defaultClassName:"react-aria-ToggleButton"});return P.createElement("button",{...y(i,u,h),...o,ref:d,slot:e.slot||void 0,"data-focused":g||void 0,"data-disabled":f||void 0,"data-pressed":r||void 0,"data-selected":l||void 0,"data-hovered":x||void 0,"data-focus-visible":c||void 0})}),_=v(j)`
  /* formerly tabListBaseCss */
  overflow-x: auto;
  overscroll-behavior: contain;
  display: flex;
  flex-direction: row;
`,q=v(U)`
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
`,ee=({items:t,selectedItems:e,...d})=>m(_,{selectedKeys:e,...d,children:t.map(({value:s,...a})=>m(q,{"data-button-id":a.id,...a,onPressStart:i=>i.continuePropagation(),children:s},a.id))});export{ee as T};
