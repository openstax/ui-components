import{r as n,R as m,s as v,a as h}from"./index.31ec41c5.js";import{J as T,c as y,o as C,$ as B,e as E,l as p,h as D,i as F,j as M}from"./useFocusRing.module.620dc375.js";import{$ as z}from"./useButton.module.d4983e58.js";import{m as R}from"./Collection.module.ba792399.js";import{$ as L}from"./context.module.b256b1a9.js";import{$ as k}from"./useToggleState.module.9533ccc9.js";import{c as x}from"./theme.455e3fb8.js";import{t as A}from"./Tabs.db6599db.js";function w(t,e,d){const{isSelected:a}=e,{isPressed:s,buttonProps:i}=z({...t,onPress:T(e.toggle,t.onPress)},d);return{isPressed:s,isSelected:a,isDisabled:t.isDisabled||!1,buttonProps:y(i,{"aria-pressed":a})}}function G(t,e){const{"aria-label":d,"aria-labelledby":a,orientation:s="horizontal"}=t;let[i,r]=n.exports.useState(!1);C(()=>{var o;r(!!(e.current&&((o=e.current.parentElement)===null||o===void 0?void 0:o.closest('[role="toolbar"]'))))});const{direction:l}=L(),f=l==="rtl"&&s==="horizontal";let u=R(e);const $=o=>{if(!!o.currentTarget.contains(o.target)){if(s==="horizontal"&&o.key==="ArrowRight"||s==="vertical"&&o.key==="ArrowDown")f?u.focusPrevious():u.focusNext();else if(s==="horizontal"&&o.key==="ArrowLeft"||s==="vertical"&&o.key==="ArrowUp")f?u.focusNext():u.focusPrevious();else if(o.key==="Tab"){o.stopPropagation(),c.current=document.activeElement,o.shiftKey?u.focusFirst():u.focusLast();return}else return;o.stopPropagation(),o.preventDefault()}},c=n.exports.useRef(null),P=o=>{!o.currentTarget.contains(o.relatedTarget)&&!c.current&&(c.current=o.target)},g=o=>{var b;if(c.current&&!o.currentTarget.contains(o.relatedTarget)&&((b=e.current)===null||b===void 0?void 0:b.contains(o.target))){var S;(S=c.current)===null||S===void 0||S.focus(),c.current=null}};return{toolbarProps:{...B(t,{labelable:!0}),role:i?"group":"toolbar","aria-orientation":s,"aria-label":d,"aria-labelledby":d==null?a:void 0,onKeyDownCapture:i?void 0:$,onFocusCapture:i?void 0:g,onBlurCapture:i?void 0:P}}}function N(t,e,d){let{isDisabled:a}=t,{toolbarProps:s}=G(t,d);return{groupProps:{...s,role:e.selectionMode==="single"?"radiogroup":s.role,"aria-disabled":a}}}function H(t,e,d){let a={isSelected:e.selectedKeys.has(t.id),setSelected(f){e.setSelected(t.id,f)},toggle(){e.toggleKey(t.id)}},{isPressed:s,isSelected:i,isDisabled:r,buttonProps:l}=w({...t,id:void 0,isDisabled:t.isDisabled||e.isDisabled},a,d);return e.selectionMode==="single"&&(l.role="radio",l["aria-checked"]=a.isSelected,delete l["aria-pressed"]),{isPressed:s,isSelected:i,isDisabled:r,buttonProps:l}}function V(t){let{selectionMode:e="single",disallowEmptySelection:d,isDisabled:a=!1}=t,[s,i]=E(n.exports.useMemo(()=>t.selectedKeys?new Set(t.selectedKeys):void 0,[t.selectedKeys]),n.exports.useMemo(()=>t.defaultSelectedKeys?new Set(t.defaultSelectedKeys):new Set,[t.defaultSelectedKeys]),t.onSelectionChange);return{selectionMode:e,isDisabled:a,selectedKeys:s,setSelectedKeys:i,toggleKey(r){let l;e==="multiple"?(l=new Set(s),l.has(r)&&(!d||l.size>1)?l.delete(r):l.add(r)):l=new Set(s.has(r)&&!d?[]:[r]),i(l)},setSelected(r,l){l!==s.has(r)&&this.toggleKey(r)}}}const j=n.exports.createContext({}),K=n.exports.createContext(null),I=n.exports.forwardRef(function(e,d){[e,d]=p(e,d,j);let a=V(e),{groupProps:s}=N(e,a,d),i=D({...e,values:{isDisabled:a.isDisabled,state:a},defaultClassName:"react-aria-ToggleButtonGroup"});return m.createElement("div",{...s,...i,ref:d,slot:e.slot||void 0,"data-orientation":e.orientation||"horizontal","data-disabled":e.isDisabled||void 0},m.createElement(K.Provider,{value:a},i.children))}),J=n.exports.createContext({}),U=n.exports.forwardRef(function(e,d){[e,d]=p(e,d,J);let a=n.exports.useContext(K),s=k(a&&e.id!=null?{isSelected:a.selectedKeys.has(e.id),onChange(b){a.setSelected(e.id,b)}}:e),{buttonProps:i,isPressed:r,isSelected:l,isDisabled:f}=a&&e.id!=null?H({...e,id:e.id},a,d):w({...e,id:e.id!=null?String(e.id):void 0},s,d),{focusProps:u,isFocused:$,isFocusVisible:c}=F(e),{hoverProps:P,isHovered:g}=M(e),o=D({...e,id:void 0,values:{isHovered:g,isPressed:r,isFocused:$,isSelected:s.isSelected,isFocusVisible:c,isDisabled:f,state:s},defaultClassName:"react-aria-ToggleButton"});return m.createElement("button",{...y(i,u,P),...o,ref:d,slot:e.slot||void 0,"data-focused":$||void 0,"data-disabled":f||void 0,"data-pressed":r||void 0,"data-selected":l||void 0,"data-hovered":g||void 0,"data-focus-visible":c||void 0})}),_=v(I)`
  ${A}
`,q=v(U)`
  all: unset;
  height: 3.6rem;
  padding: 0 0.8rem;
  background-color: ${x.palette.white};
  border: solid 0.1rem ${x.palette.pale};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
  white-space: nowrap;
  user-select: none;

  & + & {
    border-left: none;
  }

  &[data-selected] {
    background-color: ${x.palette.neutralLighter};
  }

  &[data-focus-visible] {
    outline: none;
    box-shadow: inset 0 0 0 0.1rem ${x.palette.black};
  }
`,se=({items:t,selectedItems:e,onSelectionChange:d,selectionMode:a="single",...s})=>h(_,{selectionMode:a,selectedKeys:e,onSelectionChange:d,...s,children:t.map(i=>h(q,{"data-button-id":i.id,id:i.id,onPressStart:r=>r.continuePropagation(),children:i.value},i.id))});export{se as T};
