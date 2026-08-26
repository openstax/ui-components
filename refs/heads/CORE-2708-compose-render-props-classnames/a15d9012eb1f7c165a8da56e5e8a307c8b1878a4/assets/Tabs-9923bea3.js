import{r as u,R as v,C as k,s as N,j as B}from"./index-bae51aee.js";import{c as K}from"./theme-e8c258fa.js";import{p as z}from"./palette-f868513b.js";import{e as A,b as R,o as j,k as O,p as W,m as U,g as G,h as I,j as q,l as J,q as Q,f as X}from"./Collection-b4ef2ddd.js";import{e as D,z as Y,G as Z,a as P,n as _,E as ee,C as te,c as w,d as C,F,v as le,f as V,b as ae}from"./useFocusRing-a4fca5a3.js";import{a as ie,b as se}from"./context-0ad5bf8e.js";import{$ as oe}from"./useHasTabbableChild-163971d8.js";function E(l){const e=u.version.split(".");return parseInt(e[0],10)>=19?l:l?"true":void 0}const H=new WeakMap;function S(l,e,t){return l?(typeof e=="string"&&(e=e.replace(/\s+/g,"")),`${H.get(l)}-${t}-${e}`):""}function ne(l,e,t){let{key:a,isDisabled:i,shouldSelectOnPressUp:r}=l,{selectionManager:s,selectedKey:o}=e,n=a===o,d=i||e.isDisabled||e.selectionManager.isDisabled(a),{itemProps:c,isPressed:f}=A({selectionManager:s,key:a,ref:t,isDisabled:d,shouldSelectOnPressUp:r,linkBehavior:"selection"}),b=S(e,a,"tab"),p=S(e,a,"tabpanel"),{tabIndex:$}=c,y=e.collection.getItem(a),x=D(y==null?void 0:y.props,{labelable:!0});delete x.id;let g=Y(y==null?void 0:y.props),{focusableProps:h}=Z({isDisabled:d},t);return{tabProps:P(x,h,g,c,{id:b,"aria-selected":n,"aria-disabled":d||void 0,"aria-controls":n?p:void 0,tabIndex:d?void 0:$,role:"tab"}),isSelected:n,isDisabled:d,isPressed:f}}function re(l,e,t){let a=oe(t)?void 0:0;var i;const r=S(e,(i=l.id)!==null&&i!==void 0?i:e==null?void 0:e.selectedKey,"tabpanel"),s=R({...l,id:r,"aria-labelledby":S(e,e==null?void 0:e.selectedKey,"tab")});return{tabPanelProps:P(s,{tabIndex:a,role:"tabpanel","aria-describedby":l["aria-describedby"],"aria-details":l["aria-details"]})}}class de{getKeyLeftOf(e){return this.flipDirection?this.getNextKey(e):this.getPreviousKey(e)}getKeyRightOf(e){return this.flipDirection?this.getPreviousKey(e):this.getNextKey(e)}isDisabled(e){var t,a;return this.disabledKeys.has(e)||!!(!((a=this.collection.getItem(e))===null||a===void 0||(t=a.props)===null||t===void 0)&&t.isDisabled)}getFirstKey(){let e=this.collection.getFirstKey();return e!=null&&this.isDisabled(e)&&(e=this.getNextKey(e)),e}getLastKey(){let e=this.collection.getLastKey();return e!=null&&this.isDisabled(e)&&(e=this.getPreviousKey(e)),e}getKeyAbove(e){return this.tabDirection?null:this.getPreviousKey(e)}getKeyBelow(e){return this.tabDirection?null:this.getNextKey(e)}getNextKey(e){let t=e;do t=this.collection.getKeyAfter(t),t==null&&(t=this.collection.getFirstKey());while(t!=null&&this.isDisabled(t));return t}getPreviousKey(e){let t=e;do t=this.collection.getKeyBefore(t),t==null&&(t=this.collection.getLastKey());while(t!=null&&this.isDisabled(t));return t}constructor(e,t,a,i=new Set){this.collection=e,this.flipDirection=t==="rtl"&&a==="horizontal",this.disabledKeys=i,this.tabDirection=a==="horizontal"}}function ce(l,e,t){let{orientation:a="horizontal",keyboardActivation:i="automatic"}=l,{collection:r,selectionManager:s,disabledKeys:o}=e,{direction:n}=ie(),d=u.useMemo(()=>new de(r,n,a,o),[r,o,a,n]),{collectionProps:c}=j({ref:t,selectionManager:s,keyboardDelegate:d,selectOnFocus:i==="automatic",disallowEmptySelection:!0,scrollRef:t,linkBehavior:"selection"}),f=_();H.set(e,f);let b=R({...l,id:f});return{tabListProps:{...P(c,b),role:"tablist","aria-orientation":a,tabIndex:void 0}}}class L{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);var a;return t&&(a=t.prevKey)!==null&&a!==void 0?a:null}getKeyAfter(e){let t=this.keyMap.get(e);var a;return t&&(a=t.nextKey)!==null&&a!==void 0?a:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){var t;return(t=this.keyMap.get(e))!==null&&t!==void 0?t:null}at(e){const t=[...this.getKeys()];return this.getItem(t[e])}getChildren(e){let t=this.keyMap.get(e);return(t==null?void 0:t.childNodes)||[]}constructor(e){this.keyMap=new Map,this.firstKey=null,this.lastKey=null,this.iterable=e;let t=s=>{if(this.keyMap.set(s.key,s),s.childNodes&&s.type==="section")for(let o of s.childNodes)t(o)};for(let s of e)t(s);let a=null,i=0;for(let[s,o]of this.keyMap)a?(a.nextKey=s,o.prevKey=a.key):(this.firstKey=s,o.prevKey=void 0),o.type==="item"&&(o.index=i++),a=o,a.nextKey=void 0;var r;this.lastKey=(r=a==null?void 0:a.key)!==null&&r!==void 0?r:null}}function ue(l){let{filter:e,layoutDelegate:t}=l,a=O(l),i=u.useMemo(()=>l.disabledKeys?new Set(l.disabledKeys):new Set,[l.disabledKeys]),r=u.useCallback(d=>e?new L(e(d)):new L(d),[e]),s=u.useMemo(()=>({suppressTextValueWarning:l.suppressTextValueWarning}),[l.suppressTextValueWarning]),o=W(l,r,s),n=u.useMemo(()=>new U(o,a,{layoutDelegate:t}),[o,a,t]);return fe(o,n),{collection:o,disabledKeys:i,selectionManager:n}}function fe(l,e){const t=u.useRef(null);u.useEffect(()=>{if(e.focusedKey!=null&&!l.getItem(e.focusedKey)&&t.current){const c=t.current.getItem(e.focusedKey),f=[...t.current.getKeys()].map(g=>{const h=t.current.getItem(g);return(h==null?void 0:h.type)==="item"?h:null}).filter(g=>g!==null),b=[...l.getKeys()].map(g=>{const h=l.getItem(g);return(h==null?void 0:h.type)==="item"?h:null}).filter(g=>g!==null);var a,i;const p=((a=f==null?void 0:f.length)!==null&&a!==void 0?a:0)-((i=b==null?void 0:b.length)!==null&&i!==void 0?i:0);var r,s,o;let $=Math.min(p>1?Math.max(((r=c==null?void 0:c.index)!==null&&r!==void 0?r:0)-p+1,0):(s=c==null?void 0:c.index)!==null&&s!==void 0?s:0,((o=b==null?void 0:b.length)!==null&&o!==void 0?o:0)-1),y=null,x=!1;for(;$>=0;){if(!e.isDisabled(b[$].key)){y=b[$];break}if($<b.length-1&&!x)$++;else{x=!0;var n,d;$>((n=c==null?void 0:c.index)!==null&&n!==void 0?n:0)&&($=(d=c==null?void 0:c.index)!==null&&d!==void 0?d:0),$--}}e.setFocusedKey(y?y.key:null)}t.current=l},[l,e])}function be(l){var e;let[t,a]=ee(l.selectedKey,(e=l.defaultSelectedKey)!==null&&e!==void 0?e:null,l.onSelectionChange),i=u.useMemo(()=>t!=null?[t]:[],[t]),{collection:r,disabledKeys:s,selectionManager:o}=ue({...l,selectionMode:"single",disallowEmptySelection:!0,allowDuplicateSelectionEvents:!0,selectedKeys:i,onSelectionChange:d=>{if(d==="all")return;var c;let f=(c=d.values().next().value)!==null&&c!==void 0?c:null;f===t&&l.onSelectionChange&&l.onSelectionChange(f),a(f)}}),n=t!=null?r.getItem(t):null;return{collection:r,disabledKeys:s,selectionManager:o,selectedKey:t,setSelectedKey:a,selectedItem:n}}function $e(l){var e,t;let a=be({...l,onSelectionChange:l.onSelectionChange?n=>{var d;n!=null&&((d=l.onSelectionChange)===null||d===void 0||d.call(l,n))}:void 0,suppressTextValueWarning:!0,defaultSelectedKey:(t=(e=l.defaultSelectedKey)!==null&&e!==void 0?e:T(l.collection,l.disabledKeys?new Set(l.disabledKeys):new Set))!==null&&t!==void 0?t:void 0}),{selectionManager:i,collection:r,selectedKey:s}=a,o=u.useRef(s);return u.useEffect(()=>{let n=s;l.selectedKey==null&&(i.isEmpty||n==null||!r.getItem(n))&&(n=T(r,a.disabledKeys),n!=null&&i.setSelectedKeys([n])),(n!=null&&i.focusedKey==null||!i.isFocused&&n!==o.current)&&i.setFocusedKey(n),o.current=n}),{...a,isDisabled:l.isDisabled||!1}}function T(l,e){let t=null;if(l){var a,i,r,s;for(t=l.getFirstKey();t!=null&&(e.has(t)||!((i=l.getItem(t))===null||i===void 0||(a=i.props)===null||a===void 0)&&a.isDisabled)&&t!==l.getLastKey();)t=l.getKeyAfter(t);t!=null&&(e.has(t)||!((s=l.getItem(t))===null||s===void 0||(r=s.props)===null||r===void 0)&&r.isDisabled)&&t===l.getLastKey()&&(t=l.getFirstKey())}return t}const M=u.createContext(null),m=u.createContext(null),ye=u.forwardRef(function(e,t){[e,t]=ae(e,t,M);let{children:a,orientation:i="horizontal"}=e;return a=u.useMemo(()=>typeof a=="function"?a({orientation:i,defaultChildren:null}):a,[a,i]),v.createElement(X,{content:a},r=>v.createElement(ve,{props:e,collection:r,tabsRef:t}))});function ve({props:l,tabsRef:e,collection:t}){let{orientation:a="horizontal"}=l,i=$e({...l,collection:t,children:void 0}),{focusProps:r,isFocused:s,isFocusVisible:o}=F({within:!0}),n=u.useMemo(()=>({orientation:a,isFocusWithin:s,isFocusVisible:o}),[a,s,o]),d=C({...l,defaultClassName:"react-aria-Tabs",values:n});return v.createElement("div",{...D(l),...r,...d,ref:e,slot:l.slot||void 0,"data-focused":s||void 0,"data-orientation":a,"data-focus-visible":o||void 0,"data-disabled":i.isDisabled||void 0},v.createElement(V,{values:[[M,l],[m,i]]},d.children))}const Le=u.forwardRef(function(e,t){return u.useContext(m)?v.createElement(he,{props:e,forwardedRef:t}):v.createElement(G,e)});function he({props:l,forwardedRef:e}){let t=u.useContext(m),{CollectionRoot:a}=u.useContext(I),{orientation:i="horizontal",keyboardActivation:r="automatic"}=te(M),s=w(e),{tabListProps:o}=ce({...l,orientation:i,keyboardActivation:r},t,s),n=C({...l,children:null,defaultClassName:"react-aria-TabList",values:{orientation:i,state:t}}),d=D(l);return delete d.id,v.createElement("div",{...d,...o,ref:s,...n,"data-orientation":i||void 0},v.createElement(a,{collection:t.collection,persistedKeys:q(t.selectionManager.focusedKey)}))}const Te=J("item",(l,e,t)=>{let a=u.useContext(m),i=w(e),{tabProps:r,isSelected:s,isDisabled:o,isPressed:n}=ne({key:t.key,...l},a,i),{focusProps:d,isFocused:c,isFocusVisible:f}=F(),{hoverProps:b,isHovered:p}=le({isDisabled:o,onHoverStart:l.onHoverStart,onHoverEnd:l.onHoverEnd,onHoverChange:l.onHoverChange}),$=C({...l,id:void 0,children:t.rendered,defaultClassName:"react-aria-Tab",values:{isSelected:s,isDisabled:o,isFocused:c,isFocusVisible:f,isPressed:n,isHovered:p}}),y=t.props.href?"a":"div";return v.createElement(y,{...P(r,d,b,$),ref:i,"data-selected":s||void 0,"data-disabled":o||void 0,"data-focused":c||void 0,"data-focus-visible":f||void 0,"data-pressed":n||void 0,"data-hovered":p||void 0},$.children)}),Re=se(function(e,t){const a=u.useContext(m);let i=w(t),{tabPanelProps:r}=re(e,a,i),{focusProps:s,isFocused:o,isFocusVisible:n}=F(),d=a.selectedKey===e.id,c=C({...e,defaultClassName:"react-aria-TabPanel",values:{isFocused:o,isFocusVisible:n,isInert:E(!d),state:a}});if(!d&&!e.shouldForceMount)return null;let f=D(e);delete f.id;let b=d?P(f,r,s,c):c;return v.createElement("div",{...b,ref:i,"data-focused":o||void 0,"data-focus-visible":n||void 0,inert:E(!d),"data-inert":d?void 0:"true"},v.createElement(V,{values:[[M,null],[m,null]]},v.createElement(I.Provider,{value:Q},c.children)))}),ge=`
  overflow-x: auto;
  overscroll-behavior: contain;
  display: flex;
  flex-direction: row;
`,pe=k`
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
`,Ke=`
  border: 0.1rem solid ${K.palette.pale};
  border-radius: 0.5rem;
`,me=k`
  padding: 0 1.6rem;
  min-height: ${({size:l})=>l==="small"?"2.8":l==="large"?"4.8":"4.0"}rem;
  background: #fff;
  border-right: 0.1rem solid ${K.palette.pale};

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
    background: ${K.palette.neutralLight};
    box-shadow: inset 0 0 0 0.1rem ${K.palette.pale};
  }
  &:hover:not([data-selected=true]) {
    background: ${K.palette.neutralLighter};
  }

  @media (forced-colors: active) {
    &[data-selected=true] {
      background: Highlight;
      color: HighlightText;
      forced-color-adjust: none;
    }
  }
`,xe=k`
  [role="tablist"] {
    ${Ke}
  }

  [role="tab"] {
    ${me}
  }
`,Pe=k`
  &[data-orientation="horizontal"] [role="tablist"] {
    border-bottom: 0.1rem solid ${K.palette.pale};
  }

  [role="tab"] {
    padding: 0 1.6rem;
    height: ${({size:l})=>l==="small"?"2.9":"4.8"}rem;
    border-bottom: 0.4rem solid transparent;

    &[data-selected=true], &:hover {
      border-color: ${z.darkGreen};
    }

    @media (forced-colors: active) {
      &[data-selected=true] {
        border-color: Highlight;
      }
    }
  }
`,Se=N(ye)`
  [role="tablist"] {
    ${ge}
  }

  [role="tab"] {
    ${pe}
  }

  ${l=>l.variant==="button-bar"?xe:Pe}
`,Ie=({variant:l,size:e="medium",className:t,children:a,...i})=>B(Se,{variant:l,size:e,className:t,...i,children:a});export{Le as $,Ie as T,pe as a,Ke as b,me as c,Te as d,Re as e,ge as t};
