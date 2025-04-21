import{c as M}from"./theme.19c845c6.js";import{r as u,R as v,C as w,s as j,a as U}from"./index.37207b3f.js";import{p as G}from"./palette.15e4d008.js";import{$ as q,a as J,b as A,c as Q,d as X,e as Y,f as Z,g as _,h as O,i as ee,j as te,k as le,l as ae}from"./Collection.module.8c04ef02.js";import{$ as ie,a as k,b as se,c as S,d as re,e as oe,f as ne,g as de,h as I,i as F,j as R,k as ce,l as ue,m as z,n as fe}from"./context.module.c13434dd.js";function be(t,e){let l=e==null?void 0:e.isDisabled,[a,i]=u.exports.useState(!1);return ie(()=>{if((t==null?void 0:t.current)&&!l){let o=()=>{if(t.current){let r=q(t.current,{tabbable:!0});i(!!r.nextNode())}};o();let s=new MutationObserver(o);return s.observe(t.current,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["tabIndex","disabled"]}),()=>{s.disconnect()}}}),l?!1:a}const W=new WeakMap;function C(t,e,l){return t?(typeof e=="string"&&(e=e.replace(/\s+/g,"")),`${W.get(t)}-${l}-${e}`):""}function $e(t,e,l){let{key:a,isDisabled:i,shouldSelectOnPressUp:o}=t,{selectionManager:s,selectedKey:r}=e,n=a===r,d=i||e.isDisabled||e.selectionManager.isDisabled(a),{itemProps:c,isPressed:f}=J({selectionManager:s,key:a,ref:l,isDisabled:d,shouldSelectOnPressUp:o,linkBehavior:"selection"}),y=C(e,a,"tab"),x=C(e,a,"tabpanel"),{tabIndex:K}=c,$=e.collection.getItem(a),P=k($==null?void 0:$.props,{labelable:!0});delete P.id;let b=se($==null?void 0:$.props);return{tabProps:S(P,b,c,{id:y,"aria-selected":n,"aria-disabled":d||void 0,"aria-controls":n?x:void 0,tabIndex:d?void 0:K,role:"tab"}),isSelected:n,isDisabled:d,isPressed:f}}function ve(t,e,l){let a=be(l)?void 0:0;var i;const o=C(e,(i=t.id)!==null&&i!==void 0?i:e==null?void 0:e.selectedKey,"tabpanel"),s=A({...t,id:o,"aria-labelledby":C(e,e==null?void 0:e.selectedKey,"tab")});return{tabPanelProps:S(s,{tabIndex:a,role:"tabpanel","aria-describedby":t["aria-describedby"],"aria-details":t["aria-details"]})}}class ye{getKeyLeftOf(e){return this.flipDirection?this.getNextKey(e):this.getPreviousKey(e)}getKeyRightOf(e){return this.flipDirection?this.getPreviousKey(e):this.getNextKey(e)}isDisabled(e){var l,a;return this.disabledKeys.has(e)||!!(!((a=this.collection.getItem(e))===null||a===void 0||(l=a.props)===null||l===void 0)&&l.isDisabled)}getFirstKey(){let e=this.collection.getFirstKey();return e!=null&&this.isDisabled(e)&&(e=this.getNextKey(e)),e}getLastKey(){let e=this.collection.getLastKey();return e!=null&&this.isDisabled(e)&&(e=this.getPreviousKey(e)),e}getKeyAbove(e){return this.tabDirection?null:this.getPreviousKey(e)}getKeyBelow(e){return this.tabDirection?null:this.getNextKey(e)}getNextKey(e){do e=this.collection.getKeyAfter(e),e==null&&(e=this.collection.getFirstKey());while(this.isDisabled(e));return e}getPreviousKey(e){do e=this.collection.getKeyBefore(e),e==null&&(e=this.collection.getLastKey());while(this.isDisabled(e));return e}constructor(e,l,a,i=new Set){this.collection=e,this.flipDirection=l==="rtl"&&a==="horizontal",this.disabledKeys=i,this.tabDirection=a==="horizontal"}}function he(t,e,l){let{orientation:a="horizontal",keyboardActivation:i="automatic"}=t,{collection:o,selectionManager:s,disabledKeys:r}=e,{direction:n}=re(),d=u.exports.useMemo(()=>new ye(o,n,a,r),[o,r,a,n]),{collectionProps:c}=Q({ref:l,selectionManager:s,keyboardDelegate:d,selectOnFocus:i==="automatic",disallowEmptySelection:!0,scrollRef:l,linkBehavior:"selection"}),f=oe();W.set(e,f);let y=A({...t,id:f});return{tabListProps:{...S(c,y),role:"tablist","aria-orientation":a,tabIndex:void 0}}}class B{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let l=this.keyMap.get(e);var a;return l&&(a=l.prevKey)!==null&&a!==void 0?a:null}getKeyAfter(e){let l=this.keyMap.get(e);var a;return l&&(a=l.nextKey)!==null&&a!==void 0?a:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){var l;return(l=this.keyMap.get(e))!==null&&l!==void 0?l:null}at(e){const l=[...this.getKeys()];return this.getItem(l[e])}getChildren(e){let l=this.keyMap.get(e);return(l==null?void 0:l.childNodes)||[]}constructor(e){this.keyMap=new Map,this.firstKey=null,this.lastKey=null,this.iterable=e;let l=s=>{if(this.keyMap.set(s.key,s),s.childNodes&&s.type==="section")for(let r of s.childNodes)l(r)};for(let s of e)l(s);let a=null,i=0;for(let[s,r]of this.keyMap)a?(a.nextKey=s,r.prevKey=a.key):(this.firstKey=s,r.prevKey=void 0),r.type==="item"&&(r.index=i++),a=r,a.nextKey=void 0;var o;this.lastKey=(o=a==null?void 0:a.key)!==null&&o!==void 0?o:null}}function pe(t){let{filter:e,layoutDelegate:l}=t,a=X(t),i=u.exports.useMemo(()=>t.disabledKeys?new Set(t.disabledKeys):new Set,[t.disabledKeys]),o=u.exports.useCallback(c=>e?new B(e(c)):new B(c),[e]),s=u.exports.useMemo(()=>({suppressTextValueWarning:t.suppressTextValueWarning}),[t.suppressTextValueWarning]),r=Y(t,o,s),n=u.exports.useMemo(()=>new Z(r,a,{layoutDelegate:l}),[r,a,l]);const d=u.exports.useRef(null);return u.exports.useEffect(()=>{if(a.focusedKey!=null&&!r.getItem(a.focusedKey)&&d.current){const b=d.current.getItem(a.focusedKey),L=[...d.current.getKeys()].map(m=>{const p=d.current.getItem(m);return(p==null?void 0:p.type)==="item"?p:null}).filter(m=>m!==null),h=[...r.getKeys()].map(m=>{const p=r.getItem(m);return(p==null?void 0:p.type)==="item"?p:null}).filter(m=>m!==null);var c,f;const V=((c=L==null?void 0:L.length)!==null&&c!==void 0?c:0)-((f=h==null?void 0:h.length)!==null&&f!==void 0?f:0);var y,x,K;let g=Math.min(V>1?Math.max(((y=b==null?void 0:b.index)!==null&&y!==void 0?y:0)-V+1,0):(x=b==null?void 0:b.index)!==null&&x!==void 0?x:0,((K=h==null?void 0:h.length)!==null&&K!==void 0?K:0)-1),T=null,N=!1;for(;g>=0;){if(!n.isDisabled(h[g].key)){T=h[g];break}if(g<h.length-1&&!N)g++;else{N=!0;var $,P;g>(($=b==null?void 0:b.index)!==null&&$!==void 0?$:0)&&(g=(P=b==null?void 0:b.index)!==null&&P!==void 0?P:0),g--}}a.setFocusedKey(T?T.key:null)}d.current=r},[r,n,a,a.focusedKey]),{collection:r,disabledKeys:i,selectionManager:n}}function xe(t){var e;let[l,a]=ne(t.selectedKey,(e=t.defaultSelectedKey)!==null&&e!==void 0?e:null,t.onSelectionChange),i=u.exports.useMemo(()=>l!=null?[l]:[],[l]),{collection:o,disabledKeys:s,selectionManager:r}=pe({...t,selectionMode:"single",disallowEmptySelection:!0,allowDuplicateSelectionEvents:!0,selectedKeys:i,onSelectionChange:d=>{if(d==="all")return;var c;let f=(c=d.values().next().value)!==null&&c!==void 0?c:null;f===l&&t.onSelectionChange&&t.onSelectionChange(f),a(f)}}),n=l!=null?o.getItem(l):null;return{collection:o,disabledKeys:s,selectionManager:r,selectedKey:l,setSelectedKey:a,selectedItem:n}}function ge(t){var e,l;let a=xe({...t,suppressTextValueWarning:!0,defaultSelectedKey:(l=(e=t.defaultSelectedKey)!==null&&e!==void 0?e:H(t.collection,t.disabledKeys?new Set(t.disabledKeys):new Set))!==null&&l!==void 0?l:void 0}),{selectionManager:i,collection:o,selectedKey:s}=a,r=u.exports.useRef(s);return u.exports.useEffect(()=>{let n=s;(i.isEmpty||n==null||!o.getItem(n))&&(n=H(o,a.disabledKeys),n!=null&&i.setSelectedKeys([n])),(n!=null&&i.focusedKey==null||!i.isFocused&&n!==r.current)&&i.setFocusedKey(n),r.current=n}),{...a,isDisabled:t.isDisabled||!1}}function H(t,e){let l=null;if(t){var a,i,o,s;for(l=t.getFirstKey();l!=null&&(e.has(l)||((i=t.getItem(l))===null||i===void 0||(a=i.props)===null||a===void 0?void 0:a.isDisabled))&&l!==t.getLastKey();)l=t.getKeyAfter(l);l!=null&&(e.has(l)||((s=t.getItem(l))===null||s===void 0||(o=s.props)===null||o===void 0?void 0:o.isDisabled))&&l===t.getLastKey()&&(l=t.getFirstKey())}return l}const E=u.exports.createContext(null),D=u.exports.createContext(null),Ke=u.exports.forwardRef(function(e,l){[e,l]=fe(e,l,E);let{children:a,orientation:i="horizontal"}=e;return a=u.exports.useMemo(()=>typeof a=="function"?a({orientation:i,defaultChildren:null}):a,[a,i]),v.createElement(ae,{content:a},o=>v.createElement(me,{props:e,collection:o,tabsRef:l}))});function me({props:t,tabsRef:e,collection:l}){let{orientation:a="horizontal"}=t,i=ge({...t,collection:l,children:void 0}),{focusProps:o,isFocused:s,isFocusVisible:r}=R({within:!0}),n=u.exports.useMemo(()=>({orientation:a,isFocusWithin:s,isFocusVisible:r}),[a,s,r]),d=F({...t,defaultClassName:"react-aria-Tabs",values:n});return v.createElement("div",{...k(t),...o,...d,ref:e,slot:t.slot||void 0,"data-focused":s||void 0,"data-orientation":a,"data-focus-visible":r||void 0,"data-disabled":i.isDisabled||void 0},v.createElement(z,{values:[[E,t],[D,i]]},d.children))}const Ve=u.exports.forwardRef(function(e,l){return u.exports.useContext(D)?v.createElement(Pe,{props:e,forwardedRef:l}):v.createElement(_,e)});function Pe({props:t,forwardedRef:e}){let l=u.exports.useContext(D),{CollectionRoot:a}=u.exports.useContext(O),{orientation:i="horizontal",keyboardActivation:o="automatic"}=de(E),s=I(e),{tabListProps:r}=he({...t,orientation:i,keyboardActivation:o},l,s),n=F({...t,children:null,defaultClassName:"react-aria-TabList",values:{orientation:i,state:l}}),d=k(t);return delete d.id,v.createElement("div",{...d,...r,ref:s,...n,"data-orientation":i||void 0},v.createElement(a,{collection:l.collection,persistedKeys:ee(l.selectionManager.focusedKey)}))}const Ne=te("item",(t,e,l)=>{let a=u.exports.useContext(D),i=I(e),{tabProps:o,isSelected:s,isDisabled:r,isPressed:n}=$e({key:l.key,...t},a,i),{focusProps:d,isFocused:c,isFocusVisible:f}=R(),{hoverProps:y,isHovered:x}=ce({isDisabled:r,onHoverStart:t.onHoverStart,onHoverEnd:t.onHoverEnd,onHoverChange:t.onHoverChange}),K=F({...t,id:void 0,defaultClassName:"react-aria-Tab",values:{isSelected:s,isDisabled:r,isFocused:c,isFocusVisible:f,isPressed:n,isHovered:x}}),$=l.props.href?"a":"div";return v.createElement($,{...S(o,d,y,K),ref:i,"data-selected":s||void 0,"data-disabled":r||void 0,"data-focused":c||void 0,"data-focus-visible":f||void 0,"data-pressed":n||void 0,"data-hovered":x||void 0})}),Be=ue(function(e,l){const a=u.exports.useContext(D);let i=I(l),{tabPanelProps:o}=ve(e,a,i),{focusProps:s,isFocused:r,isFocusVisible:n}=R(),d=a.selectedKey===e.id,c=F({...e,defaultClassName:"react-aria-TabPanel",values:{isFocused:r,isFocusVisible:n,isInert:!d,state:a}});if(!d&&!e.shouldForceMount)return null;let f=k(e);delete f.id;let y=d?S(f,o,s,c):c;return v.createElement("div",{...y,ref:i,"data-focused":r||void 0,"data-focus-visible":n||void 0,inert:d?void 0:"true","data-inert":d?void 0:"true"},v.createElement(z,{values:[[E,null],[D,null]]},v.createElement(O.Provider,{value:le},c.children)))}),De=`
  overflow-x: auto;
  overscroll-behavior: contain;
  display: flex;
  flex-direction: row;
`,Me=w`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  outline-offset: -0.1rem; // Prevent overflow scroll from clipping outline
  white-space: nowrap;
  font-size: ${({size:t})=>t==="small"?"1.6":t==="large"?"2.4":"1.8"}rem;

  &:hover {
    cursor: pointer;
  }
`,Se=`
  border: 0.1rem solid ${M.palette.pale};
  border-radius: 0.5rem;
`,Ce=w`
  padding: 0 1.6rem;
  min-height: ${({size:t})=>t==="small"?"2.8":t==="large"?"4.8":"4.0"}rem;
  background: #fff;
  border-right: 0.1rem solid ${M.palette.pale};

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
    background: ${M.palette.neutralLight};
  }
  &:hover:not([data-selected=true]) {
    background: ${M.palette.neutralLighter};
  }
`,we=w`
  [role="tablist"] {
    ${Se}
  }

  [role="tab"] {
    ${Ce}
  }
`,ke=w`
  &[data-orientation="horizontal"] [role="tablist"] {
    border-bottom: 0.1rem solid ${M.palette.pale};
  }

  [role="tab"] {
    padding: 0 1.6rem;
    height: ${({size:t})=>t==="small"?"2.9":"4.8"}rem;
    border-bottom: 0.4rem solid transparent;

    &[data-selected=true], &:hover {
      border-color: ${G.darkGreen};
    }
  }
`,Fe=j(Ke)`
  [role="tablist"] {
    ${De}
  }

  [role="tab"] {
    ${Me}
  }

  ${t=>t.variant==="button-bar"?we:ke}
`,He=({variant:t,size:e="medium",className:l,children:a,...i})=>U(Fe,{variant:t,size:e,className:l,...i,children:a});export{Ve as $,He as T,Me as a,Se as b,Ce as c,Ne as d,Be as e,De as t};
