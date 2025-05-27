import{c as m}from"./theme.7a5a8684.js";import{r as u,R as v,C as k,s as N,a as B}from"./index.dbff1511.js";import{p as H}from"./palette.15e4d008.js";import{$ as A,a as O,b as T,c as z,d as j,e as W,f as U,g as G,h as I,i as q,j as J,k as Q,l as X}from"./Collection.module.9db131f5.js";import{$ as Y,a as D,b as Z,c as _,d as P,e as ee,f as te,g as le,h as ae,i as w,j as C,k as F,l as ie,m as se,n as R,o as re}from"./useFocusRing.module.adbe0f5c.js";function oe(l){const e=u.exports.version.split(".");return parseInt(e[0],10)>=19?l:l?"true":void 0}function ne(l,e){let t=e==null?void 0:e.isDisabled,[a,i]=u.exports.useState(!1);return Y(()=>{if((l==null?void 0:l.current)&&!t){let o=()=>{if(l.current){let r=A(l.current,{tabbable:!0});i(!!r.nextNode())}};o();let s=new MutationObserver(o);return s.observe(l.current,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["tabIndex","disabled"]}),()=>{s.disconnect()}}}),t?!1:a}const V=new WeakMap;function S(l,e,t){return l?(typeof e=="string"&&(e=e.replace(/\s+/g,"")),`${V.get(l)}-${t}-${e}`):""}function de(l,e,t){let{key:a,isDisabled:i,shouldSelectOnPressUp:o}=l,{selectionManager:s,selectedKey:r}=e,n=a===r,d=i||e.isDisabled||e.selectionManager.isDisabled(a),{itemProps:c,isPressed:f}=O({selectionManager:s,key:a,ref:t,isDisabled:d,shouldSelectOnPressUp:o,linkBehavior:"selection"}),b=S(e,a,"tab"),x=S(e,a,"tabpanel"),{tabIndex:$}=c,y=e.collection.getItem(a),K=D(y==null?void 0:y.props,{labelable:!0});delete K.id;let p=Z(y==null?void 0:y.props),{focusableProps:h}=_({isDisabled:d},t);return{tabProps:P(K,h,p,c,{id:b,"aria-selected":n,"aria-disabled":d||void 0,"aria-controls":n?x:void 0,tabIndex:d?void 0:$,role:"tab"}),isSelected:n,isDisabled:d,isPressed:f}}function ce(l,e,t){let a=ne(t)?void 0:0;var i;const o=S(e,(i=l.id)!==null&&i!==void 0?i:e==null?void 0:e.selectedKey,"tabpanel"),s=T({...l,id:o,"aria-labelledby":S(e,e==null?void 0:e.selectedKey,"tab")});return{tabPanelProps:P(s,{tabIndex:a,role:"tabpanel","aria-describedby":l["aria-describedby"],"aria-details":l["aria-details"]})}}class ue{getKeyLeftOf(e){return this.flipDirection?this.getNextKey(e):this.getPreviousKey(e)}getKeyRightOf(e){return this.flipDirection?this.getPreviousKey(e):this.getNextKey(e)}isDisabled(e){var t,a;return this.disabledKeys.has(e)||!!(!((a=this.collection.getItem(e))===null||a===void 0||(t=a.props)===null||t===void 0)&&t.isDisabled)}getFirstKey(){let e=this.collection.getFirstKey();return e!=null&&this.isDisabled(e)&&(e=this.getNextKey(e)),e}getLastKey(){let e=this.collection.getLastKey();return e!=null&&this.isDisabled(e)&&(e=this.getPreviousKey(e)),e}getKeyAbove(e){return this.tabDirection?null:this.getPreviousKey(e)}getKeyBelow(e){return this.tabDirection?null:this.getNextKey(e)}getNextKey(e){let t=e;do t=this.collection.getKeyAfter(t),t==null&&(t=this.collection.getFirstKey());while(t!=null&&this.isDisabled(t));return t}getPreviousKey(e){let t=e;do t=this.collection.getKeyBefore(t),t==null&&(t=this.collection.getLastKey());while(t!=null&&this.isDisabled(t));return t}constructor(e,t,a,i=new Set){this.collection=e,this.flipDirection=t==="rtl"&&a==="horizontal",this.disabledKeys=i,this.tabDirection=a==="horizontal"}}function fe(l,e,t){let{orientation:a="horizontal",keyboardActivation:i="automatic"}=l,{collection:o,selectionManager:s,disabledKeys:r}=e,{direction:n}=ee(),d=u.exports.useMemo(()=>new ue(o,n,a,r),[o,r,a,n]),{collectionProps:c}=z({ref:t,selectionManager:s,keyboardDelegate:d,selectOnFocus:i==="automatic",disallowEmptySelection:!0,scrollRef:t,linkBehavior:"selection"}),f=te();V.set(e,f);let b=T({...l,id:f});return{tabListProps:{...P(c,b),role:"tablist","aria-orientation":a,tabIndex:void 0}}}class E{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);var a;return t&&(a=t.prevKey)!==null&&a!==void 0?a:null}getKeyAfter(e){let t=this.keyMap.get(e);var a;return t&&(a=t.nextKey)!==null&&a!==void 0?a:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){var t;return(t=this.keyMap.get(e))!==null&&t!==void 0?t:null}at(e){const t=[...this.getKeys()];return this.getItem(t[e])}getChildren(e){let t=this.keyMap.get(e);return(t==null?void 0:t.childNodes)||[]}constructor(e){this.keyMap=new Map,this.firstKey=null,this.lastKey=null,this.iterable=e;let t=s=>{if(this.keyMap.set(s.key,s),s.childNodes&&s.type==="section")for(let r of s.childNodes)t(r)};for(let s of e)t(s);let a=null,i=0;for(let[s,r]of this.keyMap)a?(a.nextKey=s,r.prevKey=a.key):(this.firstKey=s,r.prevKey=void 0),r.type==="item"&&(r.index=i++),a=r,a.nextKey=void 0;var o;this.lastKey=(o=a==null?void 0:a.key)!==null&&o!==void 0?o:null}}function be(l){let{filter:e,layoutDelegate:t}=l,a=j(l),i=u.exports.useMemo(()=>l.disabledKeys?new Set(l.disabledKeys):new Set,[l.disabledKeys]),o=u.exports.useCallback(d=>e?new E(e(d)):new E(d),[e]),s=u.exports.useMemo(()=>({suppressTextValueWarning:l.suppressTextValueWarning}),[l.suppressTextValueWarning]),r=W(l,o,s),n=u.exports.useMemo(()=>new U(r,a,{layoutDelegate:t}),[r,a,t]);return $e(r,n),{collection:r,disabledKeys:i,selectionManager:n}}function $e(l,e){const t=u.exports.useRef(null);u.exports.useEffect(()=>{if(e.focusedKey!=null&&!l.getItem(e.focusedKey)&&t.current){const c=t.current.getItem(e.focusedKey),f=[...t.current.getKeys()].map(p=>{const h=t.current.getItem(p);return(h==null?void 0:h.type)==="item"?h:null}).filter(p=>p!==null),b=[...l.getKeys()].map(p=>{const h=l.getItem(p);return(h==null?void 0:h.type)==="item"?h:null}).filter(p=>p!==null);var a,i;const x=((a=f==null?void 0:f.length)!==null&&a!==void 0?a:0)-((i=b==null?void 0:b.length)!==null&&i!==void 0?i:0);var o,s,r;let $=Math.min(x>1?Math.max(((o=c==null?void 0:c.index)!==null&&o!==void 0?o:0)-x+1,0):(s=c==null?void 0:c.index)!==null&&s!==void 0?s:0,((r=b==null?void 0:b.length)!==null&&r!==void 0?r:0)-1),y=null,K=!1;for(;$>=0;){if(!e.isDisabled(b[$].key)){y=b[$];break}if($<b.length-1&&!K)$++;else{K=!0;var n,d;$>((n=c==null?void 0:c.index)!==null&&n!==void 0?n:0)&&($=(d=c==null?void 0:c.index)!==null&&d!==void 0?d:0),$--}}e.setFocusedKey(y?y.key:null)}t.current=l},[l,e])}function ye(l){var e;let[t,a]=le(l.selectedKey,(e=l.defaultSelectedKey)!==null&&e!==void 0?e:null,l.onSelectionChange),i=u.exports.useMemo(()=>t!=null?[t]:[],[t]),{collection:o,disabledKeys:s,selectionManager:r}=be({...l,selectionMode:"single",disallowEmptySelection:!0,allowDuplicateSelectionEvents:!0,selectedKeys:i,onSelectionChange:d=>{if(d==="all")return;var c;let f=(c=d.values().next().value)!==null&&c!==void 0?c:null;f===t&&l.onSelectionChange&&l.onSelectionChange(f),a(f)}}),n=t!=null?o.getItem(t):null;return{collection:o,disabledKeys:s,selectionManager:r,selectedKey:t,setSelectedKey:a,selectedItem:n}}function ve(l){var e,t;let a=ye({...l,onSelectionChange:l.onSelectionChange?n=>{var d;n!=null&&((d=l.onSelectionChange)===null||d===void 0||d.call(l,n))}:void 0,suppressTextValueWarning:!0,defaultSelectedKey:(t=(e=l.defaultSelectedKey)!==null&&e!==void 0?e:L(l.collection,l.disabledKeys?new Set(l.disabledKeys):new Set))!==null&&t!==void 0?t:void 0}),{selectionManager:i,collection:o,selectedKey:s}=a,r=u.exports.useRef(s);return u.exports.useEffect(()=>{let n=s;l.selectedKey==null&&(i.isEmpty||n==null||!o.getItem(n))&&(n=L(o,a.disabledKeys),n!=null&&i.setSelectedKeys([n])),(n!=null&&i.focusedKey==null||!i.isFocused&&n!==r.current)&&i.setFocusedKey(n),r.current=n}),{...a,isDisabled:l.isDisabled||!1}}function L(l,e){let t=null;if(l){var a,i,o,s;for(t=l.getFirstKey();t!=null&&(e.has(t)||((i=l.getItem(t))===null||i===void 0||(a=i.props)===null||a===void 0?void 0:a.isDisabled))&&t!==l.getLastKey();)t=l.getKeyAfter(t);t!=null&&(e.has(t)||((s=l.getItem(t))===null||s===void 0||(o=s.props)===null||o===void 0?void 0:o.isDisabled))&&t===l.getLastKey()&&(t=l.getFirstKey())}return t}const M=u.exports.createContext(null),g=u.exports.createContext(null),he=u.exports.forwardRef(function(e,t){[e,t]=re(e,t,M);let{children:a,orientation:i="horizontal"}=e;return a=u.exports.useMemo(()=>typeof a=="function"?a({orientation:i,defaultChildren:null}):a,[a,i]),v.createElement(X,{content:a},o=>v.createElement(pe,{props:e,collection:o,tabsRef:t}))});function pe({props:l,tabsRef:e,collection:t}){let{orientation:a="horizontal"}=l,i=ve({...l,collection:t,children:void 0}),{focusProps:o,isFocused:s,isFocusVisible:r}=F({within:!0}),n=u.exports.useMemo(()=>({orientation:a,isFocusWithin:s,isFocusVisible:r}),[a,s,r]),d=C({...l,defaultClassName:"react-aria-Tabs",values:n});return v.createElement("div",{...D(l),...o,...d,ref:e,slot:l.slot||void 0,"data-focused":s||void 0,"data-orientation":a,"data-focus-visible":r||void 0,"data-disabled":i.isDisabled||void 0},v.createElement(R,{values:[[M,l],[g,i]]},d.children))}const Le=u.exports.forwardRef(function(e,t){return u.exports.useContext(g)?v.createElement(xe,{props:e,forwardedRef:t}):v.createElement(G,e)});function xe({props:l,forwardedRef:e}){let t=u.exports.useContext(g),{CollectionRoot:a}=u.exports.useContext(I),{orientation:i="horizontal",keyboardActivation:o="automatic"}=ae(M),s=w(e),{tabListProps:r}=fe({...l,orientation:i,keyboardActivation:o},t,s),n=C({...l,children:null,defaultClassName:"react-aria-TabList",values:{orientation:i,state:t}}),d=D(l);return delete d.id,v.createElement("div",{...d,...r,ref:s,...n,"data-orientation":i||void 0},v.createElement(a,{collection:t.collection,persistedKeys:q(t.selectionManager.focusedKey)}))}const Te=J("item",(l,e,t)=>{let a=u.exports.useContext(g),i=w(e),{tabProps:o,isSelected:s,isDisabled:r,isPressed:n}=de({key:t.key,...l},a,i),{focusProps:d,isFocused:c,isFocusVisible:f}=F(),{hoverProps:b,isHovered:x}=ie({isDisabled:r,onHoverStart:l.onHoverStart,onHoverEnd:l.onHoverEnd,onHoverChange:l.onHoverChange}),$=C({...l,id:void 0,children:t.rendered,defaultClassName:"react-aria-Tab",values:{isSelected:s,isDisabled:r,isFocused:c,isFocusVisible:f,isPressed:n,isHovered:x}}),y=t.props.href?"a":"div";return v.createElement(y,{...P(o,d,b,$),ref:i,"data-selected":s||void 0,"data-disabled":r||void 0,"data-focused":c||void 0,"data-focus-visible":f||void 0,"data-pressed":n||void 0,"data-hovered":x||void 0},$.children)}),Ie=se(function(e,t){const a=u.exports.useContext(g);let i=w(t),{tabPanelProps:o}=ce(e,a,i),{focusProps:s,isFocused:r,isFocusVisible:n}=F(),d=a.selectedKey===e.id,c=C({...e,defaultClassName:"react-aria-TabPanel",values:{isFocused:r,isFocusVisible:n,isInert:!d,state:a}});if(!d&&!e.shouldForceMount)return null;let f=D(e);delete f.id;let b=d?P(f,o,s,c):c;return v.createElement("div",{...b,ref:i,"data-focused":r||void 0,"data-focus-visible":n||void 0,inert:oe(!d),"data-inert":d?void 0:"true"},v.createElement(R,{values:[[M,null],[g,null]]},v.createElement(I.Provider,{value:Q},c.children)))}),ge=`
  overflow-x: auto;
  overscroll-behavior: contain;
  display: flex;
  flex-direction: row;
`,Ke=k`
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
`,me=`
  border: 0.1rem solid ${m.palette.pale};
  border-radius: 0.5rem;
`,Pe=k`
  padding: 0 1.6rem;
  min-height: ${({size:l})=>l==="small"?"2.8":l==="large"?"4.8":"4.0"}rem;
  background: #fff;
  border-right: 0.1rem solid ${m.palette.pale};

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
    background: ${m.palette.neutralLight};
  }
  &:hover:not([data-selected=true]) {
    background: ${m.palette.neutralLighter};
  }
`,Se=k`
  [role="tablist"] {
    ${me}
  }

  [role="tab"] {
    ${Pe}
  }
`,ke=k`
  &[data-orientation="horizontal"] [role="tablist"] {
    border-bottom: 0.1rem solid ${m.palette.pale};
  }

  [role="tab"] {
    padding: 0 1.6rem;
    height: ${({size:l})=>l==="small"?"2.9":"4.8"}rem;
    border-bottom: 0.4rem solid transparent;

    &[data-selected=true], &:hover {
      border-color: ${H.darkGreen};
    }
  }
`,De=N(he)`
  [role="tablist"] {
    ${ge}
  }

  [role="tab"] {
    ${Ke}
  }

  ${l=>l.variant==="button-bar"?Se:ke}
`,Re=({variant:l,size:e="medium",className:t,children:a,...i})=>B(De,{variant:l,size:e,className:t,...i,children:a});export{Le as $,Re as T,Ke as a,me as b,Pe as c,Te as d,Ie as e,ge as t};
