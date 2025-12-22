import{c as g}from"./theme.48d111e7.js";import{r as u,R as v,C as k,s as B,a as A}from"./index.0958d440.js";import{p as H}from"./palette.15e4d008.js";import{$ as z,a as T,b as O,c as j,d as W,e as U,f as G,g as I,h as q,i as J,j as Q,k as X}from"./Collection.module.6c05d418.js";import{$ as D,a as Y,b as Z,c as P,d as _,e as ee,f as te,g as w,h as C,i as F,j as le,k as V,l as ae}from"./useFocusRing.module.5faf7d13.js";import{$ as ie,a as se}from"./context.module.1c33aef1.js";import{$ as oe}from"./useHasTabbableChild.module.cd41ca54.js";function E(l){const e=u.exports.version.split(".");return parseInt(e[0],10)>=19?l:l?"true":void 0}const N=new WeakMap;function S(l,e,t){return l?(typeof e=="string"&&(e=e.replace(/\s+/g,"")),`${N.get(l)}-${t}-${e}`):""}function re(l,e,t){let{key:a,isDisabled:i,shouldSelectOnPressUp:n}=l,{selectionManager:s,selectedKey:o}=e,r=a===o,d=i||e.isDisabled||e.selectionManager.isDisabled(a),{itemProps:c,isPressed:f}=z({selectionManager:s,key:a,ref:t,isDisabled:d,shouldSelectOnPressUp:n,linkBehavior:"selection"}),b=S(e,a,"tab"),x=S(e,a,"tabpanel"),{tabIndex:$}=c,y=e.collection.getItem(a),m=D(y==null?void 0:y.props,{labelable:!0});delete m.id;let h=Y(y==null?void 0:y.props),{focusableProps:p}=Z({isDisabled:d},t);return{tabProps:P(m,p,h,c,{id:b,"aria-selected":r,"aria-disabled":d||void 0,"aria-controls":r?x:void 0,tabIndex:d?void 0:$,role:"tab"}),isSelected:r,isDisabled:d,isPressed:f}}function ne(l,e,t){let a=oe(t)?void 0:0;var i;const n=S(e,(i=l.id)!==null&&i!==void 0?i:e==null?void 0:e.selectedKey,"tabpanel"),s=T({...l,id:n,"aria-labelledby":S(e,e==null?void 0:e.selectedKey,"tab")});return{tabPanelProps:P(s,{tabIndex:a,role:"tabpanel","aria-describedby":l["aria-describedby"],"aria-details":l["aria-details"]})}}class de{getKeyLeftOf(e){return this.flipDirection?this.getNextKey(e):this.getPreviousKey(e)}getKeyRightOf(e){return this.flipDirection?this.getPreviousKey(e):this.getNextKey(e)}isDisabled(e){var t,a;return this.disabledKeys.has(e)||!!(!((a=this.collection.getItem(e))===null||a===void 0||(t=a.props)===null||t===void 0)&&t.isDisabled)}getFirstKey(){let e=this.collection.getFirstKey();return e!=null&&this.isDisabled(e)&&(e=this.getNextKey(e)),e}getLastKey(){let e=this.collection.getLastKey();return e!=null&&this.isDisabled(e)&&(e=this.getPreviousKey(e)),e}getKeyAbove(e){return this.tabDirection?null:this.getPreviousKey(e)}getKeyBelow(e){return this.tabDirection?null:this.getNextKey(e)}getNextKey(e){let t=e;do t=this.collection.getKeyAfter(t),t==null&&(t=this.collection.getFirstKey());while(t!=null&&this.isDisabled(t));return t}getPreviousKey(e){let t=e;do t=this.collection.getKeyBefore(t),t==null&&(t=this.collection.getLastKey());while(t!=null&&this.isDisabled(t));return t}constructor(e,t,a,i=new Set){this.collection=e,this.flipDirection=t==="rtl"&&a==="horizontal",this.disabledKeys=i,this.tabDirection=a==="horizontal"}}function ce(l,e,t){let{orientation:a="horizontal",keyboardActivation:i="automatic"}=l,{collection:n,selectionManager:s,disabledKeys:o}=e,{direction:r}=ie(),d=u.exports.useMemo(()=>new de(n,r,a,o),[n,o,a,r]),{collectionProps:c}=O({ref:t,selectionManager:s,keyboardDelegate:d,selectOnFocus:i==="automatic",disallowEmptySelection:!0,scrollRef:t,linkBehavior:"selection"}),f=_();N.set(e,f);let b=T({...l,id:f});return{tabListProps:{...P(c,b),role:"tablist","aria-orientation":a,tabIndex:void 0}}}class L{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);var a;return t&&(a=t.prevKey)!==null&&a!==void 0?a:null}getKeyAfter(e){let t=this.keyMap.get(e);var a;return t&&(a=t.nextKey)!==null&&a!==void 0?a:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){var t;return(t=this.keyMap.get(e))!==null&&t!==void 0?t:null}at(e){const t=[...this.getKeys()];return this.getItem(t[e])}getChildren(e){let t=this.keyMap.get(e);return(t==null?void 0:t.childNodes)||[]}constructor(e){this.keyMap=new Map,this.firstKey=null,this.lastKey=null,this.iterable=e;let t=s=>{if(this.keyMap.set(s.key,s),s.childNodes&&s.type==="section")for(let o of s.childNodes)t(o)};for(let s of e)t(s);let a=null,i=0;for(let[s,o]of this.keyMap)a?(a.nextKey=s,o.prevKey=a.key):(this.firstKey=s,o.prevKey=void 0),o.type==="item"&&(o.index=i++),a=o,a.nextKey=void 0;var n;this.lastKey=(n=a==null?void 0:a.key)!==null&&n!==void 0?n:null}}function ue(l){let{filter:e,layoutDelegate:t}=l,a=j(l),i=u.exports.useMemo(()=>l.disabledKeys?new Set(l.disabledKeys):new Set,[l.disabledKeys]),n=u.exports.useCallback(d=>e?new L(e(d)):new L(d),[e]),s=u.exports.useMemo(()=>({suppressTextValueWarning:l.suppressTextValueWarning}),[l.suppressTextValueWarning]),o=W(l,n,s),r=u.exports.useMemo(()=>new U(o,a,{layoutDelegate:t}),[o,a,t]);return fe(o,r),{collection:o,disabledKeys:i,selectionManager:r}}function fe(l,e){const t=u.exports.useRef(null);u.exports.useEffect(()=>{if(e.focusedKey!=null&&!l.getItem(e.focusedKey)&&t.current){const c=t.current.getItem(e.focusedKey),f=[...t.current.getKeys()].map(h=>{const p=t.current.getItem(h);return(p==null?void 0:p.type)==="item"?p:null}).filter(h=>h!==null),b=[...l.getKeys()].map(h=>{const p=l.getItem(h);return(p==null?void 0:p.type)==="item"?p:null}).filter(h=>h!==null);var a,i;const x=((a=f==null?void 0:f.length)!==null&&a!==void 0?a:0)-((i=b==null?void 0:b.length)!==null&&i!==void 0?i:0);var n,s,o;let $=Math.min(x>1?Math.max(((n=c==null?void 0:c.index)!==null&&n!==void 0?n:0)-x+1,0):(s=c==null?void 0:c.index)!==null&&s!==void 0?s:0,((o=b==null?void 0:b.length)!==null&&o!==void 0?o:0)-1),y=null,m=!1;for(;$>=0;){if(!e.isDisabled(b[$].key)){y=b[$];break}if($<b.length-1&&!m)$++;else{m=!0;var r,d;$>((r=c==null?void 0:c.index)!==null&&r!==void 0?r:0)&&($=(d=c==null?void 0:c.index)!==null&&d!==void 0?d:0),$--}}e.setFocusedKey(y?y.key:null)}t.current=l},[l,e])}function be(l){var e;let[t,a]=ee(l.selectedKey,(e=l.defaultSelectedKey)!==null&&e!==void 0?e:null,l.onSelectionChange),i=u.exports.useMemo(()=>t!=null?[t]:[],[t]),{collection:n,disabledKeys:s,selectionManager:o}=ue({...l,selectionMode:"single",disallowEmptySelection:!0,allowDuplicateSelectionEvents:!0,selectedKeys:i,onSelectionChange:d=>{if(d==="all")return;var c;let f=(c=d.values().next().value)!==null&&c!==void 0?c:null;f===t&&l.onSelectionChange&&l.onSelectionChange(f),a(f)}}),r=t!=null?n.getItem(t):null;return{collection:n,disabledKeys:s,selectionManager:o,selectedKey:t,setSelectedKey:a,selectedItem:r}}function $e(l){var e,t;let a=be({...l,onSelectionChange:l.onSelectionChange?r=>{var d;r!=null&&((d=l.onSelectionChange)===null||d===void 0||d.call(l,r))}:void 0,suppressTextValueWarning:!0,defaultSelectedKey:(t=(e=l.defaultSelectedKey)!==null&&e!==void 0?e:R(l.collection,l.disabledKeys?new Set(l.disabledKeys):new Set))!==null&&t!==void 0?t:void 0}),{selectionManager:i,collection:n,selectedKey:s}=a,o=u.exports.useRef(s);return u.exports.useEffect(()=>{let r=s;l.selectedKey==null&&(i.isEmpty||r==null||!n.getItem(r))&&(r=R(n,a.disabledKeys),r!=null&&i.setSelectedKeys([r])),(r!=null&&i.focusedKey==null||!i.isFocused&&r!==o.current)&&i.setFocusedKey(r),o.current=r}),{...a,isDisabled:l.isDisabled||!1}}function R(l,e){let t=null;if(l){var a,i,n,s;for(t=l.getFirstKey();t!=null&&(e.has(t)||((i=l.getItem(t))===null||i===void 0||(a=i.props)===null||a===void 0?void 0:a.isDisabled))&&t!==l.getLastKey();)t=l.getKeyAfter(t);t!=null&&(e.has(t)||((s=l.getItem(t))===null||s===void 0||(n=s.props)===null||n===void 0?void 0:n.isDisabled))&&t===l.getLastKey()&&(t=l.getFirstKey())}return t}const M=u.exports.createContext(null),K=u.exports.createContext(null),ye=u.exports.forwardRef(function(e,t){[e,t]=ae(e,t,M);let{children:a,orientation:i="horizontal"}=e;return a=u.exports.useMemo(()=>typeof a=="function"?a({orientation:i,defaultChildren:null}):a,[a,i]),v.createElement(X,{content:a},n=>v.createElement(ve,{props:e,collection:n,tabsRef:t}))});function ve({props:l,tabsRef:e,collection:t}){let{orientation:a="horizontal"}=l,i=$e({...l,collection:t,children:void 0}),{focusProps:n,isFocused:s,isFocusVisible:o}=F({within:!0}),r=u.exports.useMemo(()=>({orientation:a,isFocusWithin:s,isFocusVisible:o}),[a,s,o]),d=C({...l,defaultClassName:"react-aria-Tabs",values:r});return v.createElement("div",{...D(l),...n,...d,ref:e,slot:l.slot||void 0,"data-focused":s||void 0,"data-orientation":a,"data-focus-visible":o||void 0,"data-disabled":i.isDisabled||void 0},v.createElement(V,{values:[[M,l],[K,i]]},d.children))}const Le=u.exports.forwardRef(function(e,t){return u.exports.useContext(K)?v.createElement(pe,{props:e,forwardedRef:t}):v.createElement(G,e)});function pe({props:l,forwardedRef:e}){let t=u.exports.useContext(K),{CollectionRoot:a}=u.exports.useContext(I),{orientation:i="horizontal",keyboardActivation:n="automatic"}=te(M),s=w(e),{tabListProps:o}=ce({...l,orientation:i,keyboardActivation:n},t,s),r=C({...l,children:null,defaultClassName:"react-aria-TabList",values:{orientation:i,state:t}}),d=D(l);return delete d.id,v.createElement("div",{...d,...o,ref:s,...r,"data-orientation":i||void 0},v.createElement(a,{collection:t.collection,persistedKeys:q(t.selectionManager.focusedKey)}))}const Re=J("item",(l,e,t)=>{let a=u.exports.useContext(K),i=w(e),{tabProps:n,isSelected:s,isDisabled:o,isPressed:r}=re({key:t.key,...l},a,i),{focusProps:d,isFocused:c,isFocusVisible:f}=F(),{hoverProps:b,isHovered:x}=le({isDisabled:o,onHoverStart:l.onHoverStart,onHoverEnd:l.onHoverEnd,onHoverChange:l.onHoverChange}),$=C({...l,id:void 0,children:t.rendered,defaultClassName:"react-aria-Tab",values:{isSelected:s,isDisabled:o,isFocused:c,isFocusVisible:f,isPressed:r,isHovered:x}}),y=t.props.href?"a":"div";return v.createElement(y,{...P(n,d,b,$),ref:i,"data-selected":s||void 0,"data-disabled":o||void 0,"data-focused":c||void 0,"data-focus-visible":f||void 0,"data-pressed":r||void 0,"data-hovered":x||void 0},$.children)}),Te=se(function(e,t){const a=u.exports.useContext(K);let i=w(t),{tabPanelProps:n}=ne(e,a,i),{focusProps:s,isFocused:o,isFocusVisible:r}=F(),d=a.selectedKey===e.id,c=C({...e,defaultClassName:"react-aria-TabPanel",values:{isFocused:o,isFocusVisible:r,isInert:E(!d),state:a}});if(!d&&!e.shouldForceMount)return null;let f=D(e);delete f.id;let b=d?P(f,n,s,c):c;return v.createElement("div",{...b,ref:i,"data-focused":o||void 0,"data-focus-visible":r||void 0,inert:E(!d),"data-inert":d?void 0:"true"},v.createElement(V,{values:[[M,null],[K,null]]},v.createElement(I.Provider,{value:Q},c.children)))}),he=`
  overflow-x: auto;
  overscroll-behavior: contain;
  display: flex;
  flex-direction: row;
`,xe=k`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  outline-offset: -0.1rem; // Prevent overflow scroll from clipping outline
  white-space: nowrap;
  font-size: ${({size:l})=>l==="small"?"1.6":l==="large"?"2.4":"1.8"}rem;

  &:hover {
    cursor: pointer;
  }
`,ge=`
  border: 0.1rem solid ${g.palette.pale};
  border-radius: 0.5rem;
`,Ke=k`
  padding: 0 1.6rem;
  min-height: ${({size:l})=>l==="small"?"2.8":l==="large"?"4.8":"4.0"}rem;
  background: #fff;
  border-right: 0.1rem solid ${g.palette.pale};

  &:first-child {
    border-top-left-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
    border-left: 0;
  }
  &:last-child {
    border-top-right-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
    border-right: 0;
  }

  &[data-selected=true] {
    background: ${g.palette.neutralLight};
    box-shadow: inset 0 0 0 0.1rem ${g.palette.pale};
  }
  &:hover:not([data-selected=true]) {
    background: ${g.palette.neutralLighter};
  }
`,me=k`
  [role="tablist"] {
    ${ge}
  }

  [role="tab"] {
    ${Ke}
  }
`,Pe=k`
  &[data-orientation="horizontal"] [role="tablist"] {
    border-bottom: 0.1rem solid ${g.palette.pale};
  }

  [role="tab"] {
    padding: 0 1.6rem;
    height: ${({size:l})=>l==="small"?"2.9":"4.8"}rem;
    border-bottom: 0.4rem solid transparent;

    &[data-selected=true], &:hover {
      border-color: ${H.darkGreen};
    }
  }
`,Se=B(ye)`
  [role="tablist"] {
    ${he}
  }

  [role="tab"] {
    ${xe}
  }

  ${l=>l.variant==="button-bar"?me:Pe}
`,Ie=({variant:l,size:e="medium",className:t,children:a,...i})=>A(Se,{variant:l,size:e,className:t,...i,children:a});export{Le as $,Ie as T,xe as a,ge as b,Ke as c,Re as d,Te as e,he as t};
