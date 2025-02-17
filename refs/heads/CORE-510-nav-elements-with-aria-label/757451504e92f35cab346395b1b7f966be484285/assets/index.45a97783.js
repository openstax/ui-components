import{r,R as y,s as v,a as m}from"./index.d9b1cd26.js";import{G as C,c as h,$ as B,d as k,a as R,f as D,m as w,i as K,j as E,k as F}from"./context.module.f04d4e5b.js";import{a as M}from"./useButton.module.ef025766.js";import{c as z}from"./FocusScope.module.024e9d21.js";import{c as P}from"./theme.949ce14b.js";function T(t,e,s){const{isSelected:a}=e,{isPressed:d,buttonProps:i}=M({...t,onPress:C(e.toggle,t.onPress)},s);return{isPressed:d,isSelected:a,isDisabled:t.isDisabled||!1,buttonProps:h(i,{"aria-pressed":a})}}function G(t,e){const{"aria-label":s,"aria-labelledby":a,orientation:d="horizontal"}=t;let[i,n]=r.exports.useState(!1);B(()=>{var o;n(!!(e.current&&((o=e.current.parentElement)===null||o===void 0?void 0:o.closest('[role="toolbar"]'))))});const{direction:l}=k(),f=l==="rtl"&&d==="horizontal";let u=z(e);const $=o=>{if(!!o.currentTarget.contains(o.target)){if(d==="horizontal"&&o.key==="ArrowRight"||d==="vertical"&&o.key==="ArrowDown")f?u.focusPrevious():u.focusNext();else if(d==="horizontal"&&o.key==="ArrowLeft"||d==="vertical"&&o.key==="ArrowUp")f?u.focusNext():u.focusPrevious();else if(o.key==="Tab"){o.stopPropagation(),c.current=document.activeElement,o.shiftKey?u.focusFirst():u.focusLast();return}else return;o.stopPropagation(),o.preventDefault()}},c=r.exports.useRef(null),S=o=>{!o.currentTarget.contains(o.relatedTarget)&&!c.current&&(c.current=o.target)},g=o=>{var b;if(c.current&&!o.currentTarget.contains(o.relatedTarget)&&((b=e.current)===null||b===void 0?void 0:b.contains(o.target))){var x;(x=c.current)===null||x===void 0||x.focus(),c.current=null}};return{toolbarProps:{...R(t,{labelable:!0}),role:i?"group":"toolbar","aria-orientation":d,"aria-label":s,"aria-labelledby":s==null?a:void 0,onKeyDownCapture:i?void 0:$,onFocusCapture:i?void 0:g,onBlurCapture:i?void 0:S}}}function L(t,e,s){let{isDisabled:a}=t,{toolbarProps:d}=G(t,s);return{groupProps:{...d,role:e.selectionMode==="single"?"radiogroup":d.role,"aria-disabled":a}}}function A(t,e,s){let a={isSelected:e.selectedKeys.has(t.id),setSelected(f){e.setSelected(t.id,f)},toggle(){e.toggleKey(t.id)}},{isPressed:d,isSelected:i,isDisabled:n,buttonProps:l}=T({...t,id:void 0,isDisabled:t.isDisabled||e.isDisabled},a,s);return e.selectionMode==="single"&&(l.role="radio",l["aria-checked"]=a.isSelected,delete l["aria-pressed"]),{isPressed:d,isSelected:i,isDisabled:n,buttonProps:l}}function N(t={}){let{isReadOnly:e}=t,[s,a]=D(t.isSelected,t.defaultSelected||!1,t.onChange);function d(n){e||a(n)}function i(){e||a(!s)}return{isSelected:s,setSelected:d,toggle:i}}function H(t){let{selectionMode:e="single",disallowEmptySelection:s,isDisabled:a=!1}=t,[d,i]=D(r.exports.useMemo(()=>t.selectedKeys?new Set(t.selectedKeys):void 0,[t.selectedKeys]),r.exports.useMemo(()=>t.defaultSelectedKeys?new Set(t.defaultSelectedKeys):new Set,[t.defaultSelectedKeys]),t.onSelectionChange);return{selectionMode:e,isDisabled:a,selectedKeys:d,setSelectedKeys:i,toggleKey(n){let l;e==="multiple"?(l=new Set(d),l.has(n)&&(!s||l.size>1)?l.delete(n):l.add(n)):l=new Set(d.has(n)&&!s?[]:[n]),i(l)},setSelected(n,l){l!==d.has(n)&&this.toggleKey(n)}}}const V=r.exports.createContext({}),p=r.exports.createContext(null),j=r.exports.forwardRef(function(e,s){[e,s]=w(e,s,V);let a=H(e),{groupProps:d}=L(e,a,s),i=K({...e,values:{isDisabled:a.isDisabled,state:a},defaultClassName:"react-aria-ToggleButtonGroup"});return y.createElement("div",{...d,...i,ref:s,slot:e.slot||void 0,"data-orientation":e.orientation||"horizontal","data-disabled":e.isDisabled||void 0},y.createElement(p.Provider,{value:a},i.children))}),I=r.exports.createContext({}),O=r.exports.forwardRef(function(e,s){[e,s]=w(e,s,I);let a=r.exports.useContext(p),d=N(a&&e.id!=null?{isSelected:a.selectedKeys.has(e.id),onChange(b){a.setSelected(e.id,b)}}:e),{buttonProps:i,isPressed:n,isSelected:l,isDisabled:f}=a&&e.id!=null?A({...e,id:e.id},a,s):T({...e,id:e.id!=null?String(e.id):void 0},d,s),{focusProps:u,isFocused:$,isFocusVisible:c}=E(e),{hoverProps:S,isHovered:g}=F(e),o=K({...e,id:void 0,values:{isHovered:g,isPressed:n,isFocused:$,isSelected:d.isSelected,isFocusVisible:c,isDisabled:f,state:d},defaultClassName:"react-aria-ToggleButton"});return y.createElement("button",{...h(i,u,S),...o,ref:s,slot:e.slot||void 0,"data-focused":$||void 0,"data-disabled":f||void 0,"data-pressed":n||void 0,"data-selected":l||void 0,"data-hovered":g||void 0,"data-focus-visible":c||void 0})}),U=v(j)`
    display: flex;
`,_=v(O)`
    min-width: 4.4rem;
    height: 3.6rem;
    padding: 0.8rem;
    background-color: ${P.palette.white};
    border: solid 0.1rem ${P.palette.pale};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;

    & + & {
     border-left: none;
    }

    &[data-selected],
    &[data-focus-visible] {
        background-color: ${P.palette.neutralLighter};
    }
`,Y=({children:t,selectedItems:e,onSelectionChange:s,selectionMode:a="single"})=>m(U,{selectionMode:a,selectedKeys:e,onSelectionChange:s,children:t.map(d=>m(_,{"data-key":d.key,id:d.key,onPressStart:i=>i.continuePropagation(),children:d.value},d.key))});export{Y as T};
