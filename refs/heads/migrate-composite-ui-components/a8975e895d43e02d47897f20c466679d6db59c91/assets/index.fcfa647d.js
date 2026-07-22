import{r as n,R as P,s as v,a as m}from"./index.37f1621c.js";import{$ as T,a as y,b as C,c as B,d as E,e as p,f as w,g as F,h as M}from"./useFocusRing.module.0afedc9a.js";import{$ as z}from"./useButton.module.5378e3a1.js";import{$ as L}from"./FocusScope.module.7df9a234.js";import{$ as R}from"./context.module.81a51207.js";import{$ as k}from"./useToggleState.module.b96520f7.js";import{c as b}from"./theme.469067e1.js";function D(t,e,a){const{isSelected:d}=e,{isPressed:o,buttonProps:i}=z({...t,onPress:T(e.toggle,t.onPress)},a);return{isPressed:o,isSelected:d,isDisabled:t.isDisabled||!1,buttonProps:y(i,{"aria-pressed":d})}}function A(t,e){const{"aria-label":a,"aria-labelledby":d,orientation:o="horizontal"}=t;let[i,r]=n.exports.useState(!1);C(()=>{var s;r(!!(e.current&&((s=e.current.parentElement)===null||s===void 0?void 0:s.closest('[role="toolbar"]'))))});const{direction:l}=R(),f=l==="rtl"&&o==="horizontal";let u=L(e);const g=s=>{if(!!s.currentTarget.contains(s.target)){if(o==="horizontal"&&s.key==="ArrowRight"||o==="vertical"&&s.key==="ArrowDown")f?u.focusPrevious():u.focusNext();else if(o==="horizontal"&&s.key==="ArrowLeft"||o==="vertical"&&s.key==="ArrowUp")f?u.focusNext():u.focusPrevious();else if(s.key==="Tab"){s.stopPropagation(),c.current=document.activeElement,s.shiftKey?u.focusFirst():u.focusLast();return}else return;s.stopPropagation(),s.preventDefault()}},c=n.exports.useRef(null),h=s=>{!s.currentTarget.contains(s.relatedTarget)&&!c.current&&(c.current=s.target)},x=s=>{var $;if(c.current&&!s.currentTarget.contains(s.relatedTarget)&&(($=e.current)===null||$===void 0?void 0:$.contains(s.target))){var S;(S=c.current)===null||S===void 0||S.focus(),c.current=null}};return{toolbarProps:{...B(t,{labelable:!0}),role:i?"group":"toolbar","aria-orientation":o,"aria-label":a,"aria-labelledby":a==null?d:void 0,onKeyDownCapture:i?void 0:g,onFocusCapture:i?void 0:x,onBlurCapture:i?void 0:h}}}function G(t,e,a){let{isDisabled:d}=t,{toolbarProps:o}=A(t,a);return{groupProps:{...o,role:e.selectionMode==="single"?"radiogroup":o.role,"aria-disabled":d}}}function N(t,e,a){let d={isSelected:e.selectedKeys.has(t.id),setSelected(f){e.setSelected(t.id,f)},toggle(){e.toggleKey(t.id)}},{isPressed:o,isSelected:i,isDisabled:r,buttonProps:l}=D({...t,id:void 0,isDisabled:t.isDisabled||e.isDisabled},d,a);return e.selectionMode==="single"&&(l.role="radio",l["aria-checked"]=d.isSelected,delete l["aria-pressed"]),{isPressed:o,isSelected:i,isDisabled:r,buttonProps:l}}function H(t){let{selectionMode:e="single",disallowEmptySelection:a,isDisabled:d=!1}=t,[o,i]=E(n.exports.useMemo(()=>t.selectedKeys?new Set(t.selectedKeys):void 0,[t.selectedKeys]),n.exports.useMemo(()=>t.defaultSelectedKeys?new Set(t.defaultSelectedKeys):new Set,[t.defaultSelectedKeys]),t.onSelectionChange);return{selectionMode:e,isDisabled:d,selectedKeys:o,setSelectedKeys:i,toggleKey(r){let l;e==="multiple"?(l=new Set(o),l.has(r)&&(!a||l.size>1)?l.delete(r):l.add(r)):l=new Set(o.has(r)&&!a?[]:[r]),i(l)},setSelected(r,l){l!==o.has(r)&&this.toggleKey(r)}}}const V=n.exports.createContext({}),K=n.exports.createContext(null),I=n.exports.forwardRef(function(e,a){[e,a]=p(e,a,V);let d=H(e),{groupProps:o}=G(e,d,a),i=w({...e,values:{isDisabled:d.isDisabled,state:d},defaultClassName:"react-aria-ToggleButtonGroup"});return P.createElement("div",{...o,...i,ref:a,slot:e.slot||void 0,"data-orientation":e.orientation||"horizontal","data-disabled":e.isDisabled||void 0},P.createElement(K.Provider,{value:d},i.children))}),j=n.exports.createContext({}),U=n.exports.forwardRef(function(e,a){[e,a]=p(e,a,j);let d=n.exports.useContext(K),o=k(d&&e.id!=null?{isSelected:d.selectedKeys.has(e.id),onChange($){d.setSelected(e.id,$)}}:e),{buttonProps:i,isPressed:r,isSelected:l,isDisabled:f}=d&&e.id!=null?N({...e,id:e.id},d,a):D({...e,id:e.id!=null?String(e.id):void 0},o,a),{focusProps:u,isFocused:g,isFocusVisible:c}=F(e),{hoverProps:h,isHovered:x}=M(e),s=w({...e,id:void 0,values:{isHovered:x,isPressed:r,isFocused:g,isSelected:o.isSelected,isFocusVisible:c,isDisabled:f,state:o},defaultClassName:"react-aria-ToggleButton"});return P.createElement("button",{...y(i,u,h),...s,ref:a,slot:e.slot||void 0,"data-focused":g||void 0,"data-disabled":f||void 0,"data-pressed":r||void 0,"data-selected":l||void 0,"data-hovered":x||void 0,"data-focus-visible":c||void 0})}),_=v(I)`
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
`,ee=({items:t,selectedItems:e,...a})=>m(_,{selectedKeys:e,...a,children:t.map(({value:d,...o})=>m(q,{"data-button-id":o.id,...o,onPressStart:i=>i.continuePropagation(),children:d},o.id))});export{ee as T};
