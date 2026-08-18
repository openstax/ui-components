import{r as n,R as P,s as v,j as x}from"./index-052b89a7.js";import{p as T,a as y,n as C,e as B,D as E,b as D,d as w,E as F,u as M}from"./useFocusRing-0d61779e.js";import{$ as z}from"./useButton-72db263f.js";import{n as L}from"./Collection-1125efd2.js";import{a as R}from"./context-f9473ec8.js";import{$ as k}from"./useToggleState-e3049bd9.js";import{c as b}from"./theme-e8c258fa.js";import{t as A}from"./Tabs-6dbfd753.js";function p(t,e,s){const{isSelected:o}=e,{isPressed:a,buttonProps:i}=z({...t,onPress:T(e.toggle,t.onPress)},s);return{isPressed:a,isSelected:o,isDisabled:t.isDisabled||!1,buttonProps:y(i,{"aria-pressed":o})}}function G(t,e){const{"aria-label":s,"aria-labelledby":o,orientation:a="horizontal"}=t;let[i,r]=n.useState(!1);C(()=>{var d;r(!!(e.current&&(!((d=e.current.parentElement)===null||d===void 0)&&d.closest('[role="toolbar"]'))))});const{direction:l}=R(),f=l==="rtl"&&a==="horizontal";let u=L(e);const g=d=>{if(d.currentTarget.contains(d.target)){if(a==="horizontal"&&d.key==="ArrowRight"||a==="vertical"&&d.key==="ArrowDown")f?u.focusPrevious():u.focusNext();else if(a==="horizontal"&&d.key==="ArrowLeft"||a==="vertical"&&d.key==="ArrowUp")f?u.focusNext():u.focusPrevious();else if(d.key==="Tab"){d.stopPropagation(),c.current=document.activeElement,d.shiftKey?u.focusFirst():u.focusLast();return}else return;d.stopPropagation(),d.preventDefault()}},c=n.useRef(null),h=d=>{!d.currentTarget.contains(d.relatedTarget)&&!c.current&&(c.current=d.target)},S=d=>{var $;if(c.current&&!d.currentTarget.contains(d.relatedTarget)&&(!(($=e.current)===null||$===void 0)&&$.contains(d.target))){var m;(m=c.current)===null||m===void 0||m.focus(),c.current=null}};return{toolbarProps:{...B(t,{labelable:!0}),role:i?"group":"toolbar","aria-orientation":a,"aria-label":s,"aria-labelledby":s==null?o:void 0,onKeyDownCapture:i?void 0:g,onFocusCapture:i?void 0:S,onBlurCapture:i?void 0:h}}}function N(t,e,s){let{isDisabled:o}=t,{toolbarProps:a}=G(t,s);return{groupProps:{...a,role:e.selectionMode==="single"?"radiogroup":a.role,"aria-disabled":o}}}function H(t,e,s){let o={isSelected:e.selectedKeys.has(t.id),setSelected(f){e.setSelected(t.id,f)},toggle(){e.toggleKey(t.id)}},{isPressed:a,isSelected:i,isDisabled:r,buttonProps:l}=p({...t,id:void 0,isDisabled:t.isDisabled||e.isDisabled},o,s);return e.selectionMode==="single"&&(l.role="radio",l["aria-checked"]=o.isSelected,delete l["aria-pressed"]),{isPressed:a,isSelected:i,isDisabled:r,buttonProps:l}}function V(t){let{selectionMode:e="single",disallowEmptySelection:s,isDisabled:o=!1}=t,[a,i]=E(n.useMemo(()=>t.selectedKeys?new Set(t.selectedKeys):void 0,[t.selectedKeys]),n.useMemo(()=>t.defaultSelectedKeys?new Set(t.defaultSelectedKeys):new Set,[t.defaultSelectedKeys]),t.onSelectionChange);return{selectionMode:e,isDisabled:o,selectedKeys:a,setSelectedKeys:i,toggleKey(r){let l;e==="multiple"?(l=new Set(a),l.has(r)&&(!s||l.size>1)?l.delete(r):l.add(r)):l=new Set(a.has(r)&&!s?[]:[r]),i(l)},setSelected(r,l){l!==a.has(r)&&this.toggleKey(r)}}}const j=n.createContext({}),K=n.createContext(null),I=n.forwardRef(function(e,s){[e,s]=D(e,s,j);let o=V(e),{groupProps:a}=N(e,o,s),i=w({...e,values:{isDisabled:o.isDisabled,state:o},defaultClassName:"react-aria-ToggleButtonGroup"});return P.createElement("div",{...a,...i,ref:s,slot:e.slot||void 0,"data-orientation":e.orientation||"horizontal","data-disabled":e.isDisabled||void 0},P.createElement(K.Provider,{value:o},i.children))}),U=n.createContext({}),_=n.forwardRef(function(e,s){[e,s]=D(e,s,U);let o=n.useContext(K),a=k(o&&e.id!=null?{isSelected:o.selectedKeys.has(e.id),onChange($){o.setSelected(e.id,$)}}:e),{buttonProps:i,isPressed:r,isSelected:l,isDisabled:f}=o&&e.id!=null?H({...e,id:e.id},o,s):p({...e,id:e.id!=null?String(e.id):void 0},a,s),{focusProps:u,isFocused:g,isFocusVisible:c}=F(e),{hoverProps:h,isHovered:S}=M(e),d=w({...e,id:void 0,values:{isHovered:S,isPressed:r,isFocused:g,isSelected:a.isSelected,isFocusVisible:c,isDisabled:f,state:a},defaultClassName:"react-aria-ToggleButton"});return P.createElement("button",{...y(i,u,h),...d,ref:s,slot:e.slot||void 0,"data-focused":g||void 0,"data-disabled":f||void 0,"data-pressed":r||void 0,"data-selected":l||void 0,"data-hovered":S||void 0,"data-focus-visible":c||void 0})}),q=v(I)`
  ${A}
`,J=v(_)`
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
`,ae=({items:t,selectedItems:e,...s})=>x(q,{selectedKeys:e,...s,children:t.map(({value:o,...a})=>x(J,{"data-button-id":a.id,...a,onPressStart:i=>i.continuePropagation(),children:o},a.id))});export{ae as T};
