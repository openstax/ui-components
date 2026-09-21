import{r as n,R as S,s as v,j as P}from"./index-a4575406.js";import{p as T,d as y,n as C,$ as w,c as D,b as B,a as E}from"./useFocusRing-1050d8be.js";import{$ as F,i as M}from"./useFocusable-3e37605e.js";import{$ as z}from"./useButton-e78ffb32.js";import{b as L}from"./FocusScope-f22f9cc4.js";import{$ as R}from"./context-d841ad98.js";import{$ as k}from"./useToggleState-046d6e5f.js";import{c as b}from"./theme-bed77ad0.js";function p(t,e,d){const{isSelected:s}=e,{isPressed:o,buttonProps:i}=z({...t,onPress:T(e.toggle,t.onPress)},d);return{isPressed:o,isSelected:s,isDisabled:t.isDisabled||!1,buttonProps:y(i,{"aria-pressed":s})}}function A(t,e){const{"aria-label":d,"aria-labelledby":s,orientation:o="horizontal"}=t;let[i,r]=n.useState(!1);C(()=>{var a;r(!!(e.current&&(!((a=e.current.parentElement)===null||a===void 0)&&a.closest('[role="toolbar"]'))))});const{direction:l}=R(),f=l==="rtl"&&o==="horizontal";let u=L(e);const g=a=>{if(a.currentTarget.contains(a.target)){if(o==="horizontal"&&a.key==="ArrowRight"||o==="vertical"&&a.key==="ArrowDown")f?u.focusPrevious():u.focusNext();else if(o==="horizontal"&&a.key==="ArrowLeft"||o==="vertical"&&a.key==="ArrowUp")f?u.focusNext():u.focusPrevious();else if(a.key==="Tab"){a.stopPropagation(),c.current=document.activeElement,a.shiftKey?u.focusFirst():u.focusLast();return}else return;a.stopPropagation(),a.preventDefault()}},c=n.useRef(null),h=a=>{!a.currentTarget.contains(a.relatedTarget)&&!c.current&&(c.current=a.target)},x=a=>{var $;if(c.current&&!a.currentTarget.contains(a.relatedTarget)&&(!(($=e.current)===null||$===void 0)&&$.contains(a.target))){var m;(m=c.current)===null||m===void 0||m.focus(),c.current=null}};return{toolbarProps:{...F(t,{labelable:!0}),role:i?"group":"toolbar","aria-orientation":o,"aria-label":d,"aria-labelledby":d==null?s:void 0,onKeyDownCapture:i?void 0:g,onFocusCapture:i?void 0:x,onBlurCapture:i?void 0:h}}}function G(t,e,d){let{isDisabled:s}=t,{toolbarProps:o}=A(t,d);return{groupProps:{...o,role:e.selectionMode==="single"?"radiogroup":o.role,"aria-disabled":s}}}function N(t,e,d){let s={isSelected:e.selectedKeys.has(t.id),setSelected(f){e.setSelected(t.id,f)},toggle(){e.toggleKey(t.id)}},{isPressed:o,isSelected:i,isDisabled:r,buttonProps:l}=p({...t,id:void 0,isDisabled:t.isDisabled||e.isDisabled},s,d);return e.selectionMode==="single"&&(l.role="radio",l["aria-checked"]=s.isSelected,delete l["aria-pressed"]),{isPressed:o,isSelected:i,isDisabled:r,buttonProps:l}}function H(t){let{selectionMode:e="single",disallowEmptySelection:d,isDisabled:s=!1}=t,[o,i]=M(n.useMemo(()=>t.selectedKeys?new Set(t.selectedKeys):void 0,[t.selectedKeys]),n.useMemo(()=>t.defaultSelectedKeys?new Set(t.defaultSelectedKeys):new Set,[t.defaultSelectedKeys]),t.onSelectionChange);return{selectionMode:e,isDisabled:s,selectedKeys:o,setSelectedKeys:i,toggleKey(r){let l;e==="multiple"?(l=new Set(o),l.has(r)&&(!d||l.size>1)?l.delete(r):l.add(r)):l=new Set(o.has(r)&&!d?[]:[r]),i(l)},setSelected(r,l){l!==o.has(r)&&this.toggleKey(r)}}}const V=n.createContext({}),K=n.createContext(null),j=n.forwardRef(function(e,d){[e,d]=w(e,d,V);let s=H(e),{groupProps:o}=G(e,s,d),i=D({...e,values:{isDisabled:s.isDisabled,state:s},defaultClassName:"react-aria-ToggleButtonGroup"});return S.createElement("div",{...o,...i,ref:d,slot:e.slot||void 0,"data-orientation":e.orientation||"horizontal","data-disabled":e.isDisabled||void 0},S.createElement(K.Provider,{value:s},i.children))}),I=n.createContext({}),U=n.forwardRef(function(e,d){[e,d]=w(e,d,I);let s=n.useContext(K),o=k(s&&e.id!=null?{isSelected:s.selectedKeys.has(e.id),onChange($){s.setSelected(e.id,$)}}:e),{buttonProps:i,isPressed:r,isSelected:l,isDisabled:f}=s&&e.id!=null?N({...e,id:e.id},s,d):p({...e,id:e.id!=null?String(e.id):void 0},o,d),{focusProps:u,isFocused:g,isFocusVisible:c}=B(e),{hoverProps:h,isHovered:x}=E(e),a=D({...e,id:void 0,values:{isHovered:x,isPressed:r,isFocused:g,isSelected:o.isSelected,isFocusVisible:c,isDisabled:f,state:o},defaultClassName:"react-aria-ToggleButton"});return S.createElement("button",{...y(i,u,h),...a,ref:d,slot:e.slot||void 0,"data-focused":g||void 0,"data-disabled":f||void 0,"data-pressed":r||void 0,"data-selected":l||void 0,"data-hovered":x||void 0,"data-focus-visible":c||void 0})}),_=v(j)`
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
`,te=({items:t,selectedItems:e,...d})=>P(_,{selectedKeys:e,...d,children:t.map(({value:s,...o})=>P(q,{"data-button-id":o.id,...o,onPressStart:i=>i.continuePropagation(),children:s},o.id))});export{te as T};
