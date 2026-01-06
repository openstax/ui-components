import{r as n,R as S,s as v,a as P}from"./index.97ecd76e.js";import{J as T,c as y,o as C,$ as B,e as E,l as p,h as w,i as F,j as M}from"./useFocusRing.module.e0fe8a29.js";import{$ as z}from"./useButton.module.39ab81c2.js";import{m as L}from"./Collection.module.456bed97.js";import{$ as R}from"./context.module.c932fb5c.js";import{$ as k}from"./useToggleState.module.6bf1f513.js";import{c as b}from"./theme.77988faf.js";import{t as A}from"./Tabs.221caba0.js";function D(t,e,a){const{isSelected:d}=e,{isPressed:s,buttonProps:i}=z({...t,onPress:T(e.toggle,t.onPress)},a);return{isPressed:s,isSelected:d,isDisabled:t.isDisabled||!1,buttonProps:y(i,{"aria-pressed":d})}}function G(t,e){const{"aria-label":a,"aria-labelledby":d,orientation:s="horizontal"}=t;let[i,r]=n.exports.useState(!1);C(()=>{var o;r(!!(e.current&&((o=e.current.parentElement)===null||o===void 0?void 0:o.closest('[role="toolbar"]'))))});const{direction:l}=R(),f=l==="rtl"&&s==="horizontal";let u=L(e);const g=o=>{if(!!o.currentTarget.contains(o.target)){if(s==="horizontal"&&o.key==="ArrowRight"||s==="vertical"&&o.key==="ArrowDown")f?u.focusPrevious():u.focusNext();else if(s==="horizontal"&&o.key==="ArrowLeft"||s==="vertical"&&o.key==="ArrowUp")f?u.focusNext():u.focusPrevious();else if(o.key==="Tab"){o.stopPropagation(),c.current=document.activeElement,o.shiftKey?u.focusFirst():u.focusLast();return}else return;o.stopPropagation(),o.preventDefault()}},c=n.exports.useRef(null),h=o=>{!o.currentTarget.contains(o.relatedTarget)&&!c.current&&(c.current=o.target)},x=o=>{var $;if(c.current&&!o.currentTarget.contains(o.relatedTarget)&&(($=e.current)===null||$===void 0?void 0:$.contains(o.target))){var m;(m=c.current)===null||m===void 0||m.focus(),c.current=null}};return{toolbarProps:{...B(t,{labelable:!0}),role:i?"group":"toolbar","aria-orientation":s,"aria-label":a,"aria-labelledby":a==null?d:void 0,onKeyDownCapture:i?void 0:g,onFocusCapture:i?void 0:x,onBlurCapture:i?void 0:h}}}function N(t,e,a){let{isDisabled:d}=t,{toolbarProps:s}=G(t,a);return{groupProps:{...s,role:e.selectionMode==="single"?"radiogroup":s.role,"aria-disabled":d}}}function H(t,e,a){let d={isSelected:e.selectedKeys.has(t.id),setSelected(f){e.setSelected(t.id,f)},toggle(){e.toggleKey(t.id)}},{isPressed:s,isSelected:i,isDisabled:r,buttonProps:l}=D({...t,id:void 0,isDisabled:t.isDisabled||e.isDisabled},d,a);return e.selectionMode==="single"&&(l.role="radio",l["aria-checked"]=d.isSelected,delete l["aria-pressed"]),{isPressed:s,isSelected:i,isDisabled:r,buttonProps:l}}function V(t){let{selectionMode:e="single",disallowEmptySelection:a,isDisabled:d=!1}=t,[s,i]=E(n.exports.useMemo(()=>t.selectedKeys?new Set(t.selectedKeys):void 0,[t.selectedKeys]),n.exports.useMemo(()=>t.defaultSelectedKeys?new Set(t.defaultSelectedKeys):new Set,[t.defaultSelectedKeys]),t.onSelectionChange);return{selectionMode:e,isDisabled:d,selectedKeys:s,setSelectedKeys:i,toggleKey(r){let l;e==="multiple"?(l=new Set(s),l.has(r)&&(!a||l.size>1)?l.delete(r):l.add(r)):l=new Set(s.has(r)&&!a?[]:[r]),i(l)},setSelected(r,l){l!==s.has(r)&&this.toggleKey(r)}}}const j=n.exports.createContext({}),K=n.exports.createContext(null),I=n.exports.forwardRef(function(e,a){[e,a]=p(e,a,j);let d=V(e),{groupProps:s}=N(e,d,a),i=w({...e,values:{isDisabled:d.isDisabled,state:d},defaultClassName:"react-aria-ToggleButtonGroup"});return S.createElement("div",{...s,...i,ref:a,slot:e.slot||void 0,"data-orientation":e.orientation||"horizontal","data-disabled":e.isDisabled||void 0},S.createElement(K.Provider,{value:d},i.children))}),J=n.exports.createContext({}),U=n.exports.forwardRef(function(e,a){[e,a]=p(e,a,J);let d=n.exports.useContext(K),s=k(d&&e.id!=null?{isSelected:d.selectedKeys.has(e.id),onChange($){d.setSelected(e.id,$)}}:e),{buttonProps:i,isPressed:r,isSelected:l,isDisabled:f}=d&&e.id!=null?H({...e,id:e.id},d,a):D({...e,id:e.id!=null?String(e.id):void 0},s,a),{focusProps:u,isFocused:g,isFocusVisible:c}=F(e),{hoverProps:h,isHovered:x}=M(e),o=w({...e,id:void 0,values:{isHovered:x,isPressed:r,isFocused:g,isSelected:s.isSelected,isFocusVisible:c,isDisabled:f,state:s},defaultClassName:"react-aria-ToggleButton"});return S.createElement("button",{...y(i,u,h),...o,ref:a,slot:e.slot||void 0,"data-focused":g||void 0,"data-disabled":f||void 0,"data-pressed":r||void 0,"data-selected":l||void 0,"data-hovered":x||void 0,"data-focus-visible":c||void 0})}),_=v(I)`
  ${A}
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
`,se=({items:t,selectedItems:e,...a})=>P(_,{selectedKeys:e,...a,children:t.map(({value:d,...s})=>P(q,{"data-button-id":s.id,...s,onPressStart:i=>i.continuePropagation(),children:d},s.id))});export{se as T};
