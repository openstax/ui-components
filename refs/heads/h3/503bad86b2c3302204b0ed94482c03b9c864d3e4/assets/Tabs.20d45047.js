import{c as v}from"./theme.7c4e67ce.js";import{r as c,R as y,C as M,s as N,a as R}from"./index.f5adb5b8.js";import{p as V}from"./palette.15e4d008.js";import{$ as B,a as L,b as A,c as O,d as z,e as W,f as j,g as H,h as U,i as G,j as q}from"./SelectionManager.module.6a03ae06.js";import{$ as S,a as J,b as K,c as Q,d as X,e as Y,f as C,g as F,h as Z,i as D,j as _,k as ee,l as T,m as te}from"./context.module.a9614b73.js";import{$ as ae}from"./FocusScope.module.f0396837.js";import{$ as se}from"./focusSafely.module.a39af407.js";function ie(t,e){let a=e==null?void 0:e.isDisabled,[s,l]=c.exports.useState(!1);return se(()=>{if((t==null?void 0:t.current)&&!a){let r=()=>{if(t.current){let o=ae(t.current,{tabbable:!0});l(!!o.nextNode())}};r();let i=new MutationObserver(r);return i.observe(t.current,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["tabIndex","disabled"]}),()=>{i.disconnect()}}}),a?!1:s}const E=new WeakMap;function P(t,e,a){return typeof e=="string"&&(e=e.replace(/\s+/g,"")),`${E.get(t)}-${a}-${e}`}function le(t,e,a){let{key:s,isDisabled:l,shouldSelectOnPressUp:r}=t,{selectionManager:i,selectedKey:o}=e,n=s===o,d=l||e.isDisabled||e.selectionManager.isDisabled(s),{itemProps:f,isPressed:u}=B({selectionManager:i,key:s,ref:a,isDisabled:d,shouldSelectOnPressUp:r,linkBehavior:"selection"}),h=P(e,s,"tab"),b=P(e,s,"tabpanel"),{tabIndex:x}=f,$=e.collection.getItem(s),p=S($==null?void 0:$.props,{labelable:!0});delete p.id;let g=J($==null?void 0:$.props);return{tabProps:K(p,g,f,{id:h,"aria-selected":n,"aria-disabled":d||void 0,"aria-controls":n?b:void 0,tabIndex:d?void 0:x,role:"tab"}),isSelected:n,isDisabled:d,isPressed:u}}function re(t,e,a){let s=ie(a)?void 0:0;var l;const r=P(e,(l=t.id)!==null&&l!==void 0?l:e==null?void 0:e.selectedKey,"tabpanel"),i=L({...t,id:r,"aria-labelledby":P(e,e==null?void 0:e.selectedKey,"tab")});return{tabPanelProps:K(i,{tabIndex:s,role:"tabpanel","aria-describedby":t["aria-describedby"],"aria-details":t["aria-details"]})}}class oe{getKeyLeftOf(e){return this.flipDirection?this.getNextKey(e):this.getPreviousKey(e)}getKeyRightOf(e){return this.flipDirection?this.getPreviousKey(e):this.getNextKey(e)}getKeyAbove(e){return this.getPreviousKey(e)}getKeyBelow(e){return this.getNextKey(e)}isDisabled(e){var a,s;return this.disabledKeys.has(e)||!!(!((s=this.collection.getItem(e))===null||s===void 0||(a=s.props)===null||a===void 0)&&a.isDisabled)}getFirstKey(){let e=this.collection.getFirstKey();return e!=null&&this.isDisabled(e)&&(e=this.getNextKey(e)),e}getLastKey(){let e=this.collection.getLastKey();return e!=null&&this.isDisabled(e)&&(e=this.getPreviousKey(e)),e}getNextKey(e){do e=this.collection.getKeyAfter(e),e==null&&(e=this.collection.getFirstKey());while(this.isDisabled(e));return e}getPreviousKey(e){do e=this.collection.getKeyBefore(e),e==null&&(e=this.collection.getLastKey());while(this.isDisabled(e));return e}constructor(e,a,s,l=new Set){this.collection=e,this.flipDirection=a==="rtl"&&s==="horizontal",this.disabledKeys=l}}function de(t,e,a){let{orientation:s="horizontal",keyboardActivation:l="automatic"}=t,{collection:r,selectionManager:i,disabledKeys:o}=e,{direction:n}=Q(),d=c.exports.useMemo(()=>new oe(r,n,s,o),[r,o,s,n]),{collectionProps:f}=A({ref:a,selectionManager:i,keyboardDelegate:d,selectOnFocus:l==="automatic",disallowEmptySelection:!0,scrollRef:a,linkBehavior:"selection"}),u=X();E.set(e,u);let h=L({...t,id:u});return{tabListProps:{...K(f,h),role:"tablist","aria-orientation":s,tabIndex:void 0}}}class k{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let a=this.keyMap.get(e);return a?a.prevKey:null}getKeyAfter(e){let a=this.keyMap.get(e);return a?a.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){const a=[...this.getKeys()];return this.getItem(a[e])}getChildren(e){let a=this.keyMap.get(e);return(a==null?void 0:a.childNodes)||[]}constructor(e){this.keyMap=new Map,this.iterable=e;let a=r=>{if(this.keyMap.set(r.key,r),r.childNodes&&r.type==="section")for(let i of r.childNodes)a(i)};for(let r of e)a(r);let s,l=0;for(let[r,i]of this.keyMap)s?(s.nextKey=r,i.prevKey=s.key):(this.firstKey=r,i.prevKey=void 0),i.type==="item"&&(i.index=l++),s=i,s.nextKey=void 0;this.lastKey=s==null?void 0:s.key}}function ne(t){let{filter:e}=t,a=O(t),s=c.exports.useMemo(()=>t.disabledKeys?new Set(t.disabledKeys):new Set,[t.disabledKeys]),l=c.exports.useCallback(d=>e?new k(e(d)):new k(d),[e]),r=c.exports.useMemo(()=>({suppressTextValueWarning:t.suppressTextValueWarning}),[t.suppressTextValueWarning]),i=z(t,l,r),o=c.exports.useMemo(()=>new W(i,a),[i,a]);const n=c.exports.useRef(null);return c.exports.useEffect(()=>{if(a.focusedKey!=null&&!i.getItem(a.focusedKey)){const d=n.current.getItem(a.focusedKey),f=[...n.current.getKeys()].map(p=>{const g=n.current.getItem(p);return g.type==="item"?g:null}).filter(p=>p!==null),u=[...i.getKeys()].map(p=>{const g=i.getItem(p);return g.type==="item"?g:null}).filter(p=>p!==null),h=f.length-u.length;let b=Math.min(h>1?Math.max(d.index-h+1,0):d.index,u.length-1),x,$=!1;for(;b>=0;){if(!o.isDisabled(u[b].key)){x=u[b];break}b<u.length-1&&!$?b++:($=!0,b>d.index&&(b=d.index),b--)}a.setFocusedKey(x?x.key:null)}n.current=i},[i,o,a,a.focusedKey]),{collection:i,disabledKeys:s,selectionManager:o}}function ce(t){var e;let[a,s]=Y(t.selectedKey,(e=t.defaultSelectedKey)!==null&&e!==void 0?e:null,t.onSelectionChange),l=c.exports.useMemo(()=>a!=null?[a]:[],[a]),{collection:r,disabledKeys:i,selectionManager:o}=ne({...t,selectionMode:"single",disallowEmptySelection:!0,allowDuplicateSelectionEvents:!0,selectedKeys:l,onSelectionChange:d=>{var f;let u=(f=d.values().next().value)!==null&&f!==void 0?f:null;u===a&&t.onSelectionChange&&t.onSelectionChange(u),s(u)}}),n=a!=null?r.getItem(a):null;return{collection:r,disabledKeys:i,selectionManager:o,selectedKey:a,setSelectedKey:s,selectedItem:n}}function ue(t){var e;let a=ce({...t,suppressTextValueWarning:!0,defaultSelectedKey:(e=t.defaultSelectedKey)!==null&&e!==void 0?e:I(t.collection,t.disabledKeys?new Set(t.disabledKeys):new Set)}),{selectionManager:s,collection:l,selectedKey:r}=a,i=c.exports.useRef(r);return c.exports.useEffect(()=>{let o=r;(s.isEmpty||!l.getItem(o))&&(o=I(l,a.disabledKeys),o!=null&&s.setSelectedKeys([o])),(o!=null&&s.focusedKey==null||!s.isFocused&&o!==i.current)&&s.setFocusedKey(o),i.current=o}),{...a,isDisabled:t.isDisabled||!1}}function I(t,e){let a=null;if(t){var s,l,r,i;for(a=t.getFirstKey();(e.has(a)||((l=t.getItem(a))===null||l===void 0||(s=l.props)===null||s===void 0?void 0:s.isDisabled))&&a!==t.getLastKey();)a=t.getKeyAfter(a);(e.has(a)||((i=t.getItem(a))===null||i===void 0||(r=i.props)===null||r===void 0?void 0:r.isDisabled))&&a===t.getLastKey()&&(a=t.getFirstKey())}return a}const w=c.exports.createContext(null),m=c.exports.createContext(null);function fe(t,e){[t,e]=te(t,e,w);let{children:a,orientation:s="horizontal"}=t;return a=c.exports.useMemo(()=>typeof a=="function"?a({orientation:s,defaultChildren:null}):a,[a,s]),y.createElement(q,{content:a},l=>y.createElement(be,{props:t,collection:l,tabsRef:e}))}function be({props:t,tabsRef:e,collection:a}){let{orientation:s="horizontal"}=t,l=ue({...t,collection:a,children:void 0}),{focusProps:r,isFocused:i,isFocusVisible:o}=F({within:!0}),n=c.exports.useMemo(()=>({orientation:s,isFocusWithin:i,isFocusVisible:o}),[s,i,o]),d=D({...t,defaultClassName:"react-aria-Tabs",values:n});return y.createElement("div",{...S(t),...r,...d,ref:e,slot:t.slot||void 0,"data-focused":i||void 0,"data-orientation":s,"data-focus-visible":o||void 0,"data-disabled":l.isDisabled||void 0},y.createElement(T,{values:[[w,t],[m,l]]},d.children))}const $e=c.exports.forwardRef(fe);function ye(t,e){return c.exports.useContext(m)?y.createElement(pe,{props:t,forwardedRef:e}):y.createElement(H,t)}function pe({props:t,forwardedRef:e}){let a=c.exports.useContext(m),{CollectionRoot:s}=c.exports.useContext(U),{orientation:l="horizontal",keyboardActivation:r="automatic"}=ee(w),i=C(e),{tabListProps:o}=de({...t,orientation:l,keyboardActivation:r},a,i),n=D({...t,children:null,defaultClassName:"react-aria-TabList",values:{orientation:l,state:a}}),d=S(t);return delete d.id,y.createElement("div",{...d,...o,ref:i,...n,"data-orientation":l||void 0},y.createElement(s,{collection:a.collection,persistedKeys:G(a.selectionManager.focusedKey)}))}const Le=c.exports.forwardRef(ye),Te=j("item",(t,e,a)=>{let s=c.exports.useContext(m),l=C(e),{tabProps:r,isSelected:i,isDisabled:o,isPressed:n}=le({key:a.key,...t},s,l),{focusProps:d,isFocused:f,isFocusVisible:u}=F(),{hoverProps:h,isHovered:b}=Z({isDisabled:o}),x=D({...t,id:void 0,defaultClassName:"react-aria-Tab",values:{isSelected:i,isDisabled:o,isFocused:f,isFocusVisible:u,isPressed:n,isHovered:b}}),$=a.props.href?"a":"div";return y.createElement($,{...K(r,d,h,x),ref:l,"data-selected":i||void 0,"data-disabled":o||void 0,"data-focused":f||void 0,"data-focus-visible":u||void 0,"data-pressed":n||void 0,"data-hovered":b||void 0})});function he(t,e){const a=c.exports.useContext(m);let s=C(e),{tabPanelProps:l}=re(t,a,s),{focusProps:r,isFocused:i,isFocusVisible:o}=F(),n=a.selectedKey===t.id,d=D({...t,defaultClassName:"react-aria-TabPanel",values:{isFocused:i,isFocusVisible:o,isInert:!n,state:a}});if(!n&&!t.shouldForceMount)return null;let f=S(t);delete f.id;let u=n?K(f,l,r,d):d;return y.createElement("div",{...u,ref:s,"data-focused":i||void 0,"data-focus-visible":o||void 0,inert:n?void 0:"true","data-inert":n?void 0:"true"},y.createElement(T,{values:[[w,null],[m,null]]},d.children))}const Ee=_(he),xe=`
  overflow-x: auto;
  overscroll-behavior: contain;
  display: flex;
  flex-direction: row;
`,ge=M`
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
`,me=`
  border: 0.1rem solid ${v.palette.pale};
  border-radius: 0.5rem;
`,ve=M`
  padding: 0 1.6rem;
  min-height: ${({size:t})=>t==="small"?"2.8":t==="large"?"4.8":"4.0"}rem;
  background: #fff;
  border-right: 0.1rem solid ${v.palette.pale};

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
    background: ${v.palette.neutralLight};
  }
  &:hover:not([data-selected=true]) {
    background: ${v.palette.neutralLighter};
  }
`,Ke=M`
  [role="tablist"] {
    ${me}
  }

  [role="tab"] {
    ${ve}
  }
`,Pe=M`
  &[data-orientation="horizontal"] [role="tablist"] {
    border-bottom: 0.1rem solid ${v.palette.pale};
  }

  [role="tab"] {
    padding: 0 1.6rem;
    height: ${({size:t})=>t==="small"?"2.9":"4.8"}rem;
    border-bottom: 0.4rem solid transparent;

    &[data-selected=true], &:hover {
      border-color: ${V.darkGreen};
    }
  }
`,Me=N($e)`
  [role="tablist"] {
    ${xe}
  }

  [role="tab"] {
    ${ge}
  }

  ${t=>t.variant==="button-bar"?Ke:Pe}
`,Ne=({variant:t,size:e="medium",className:a,children:s,...l})=>R(Me,{variant:t,size:e,className:a,...l,children:s});export{Le as $,Ne as T,ge as a,me as b,ve as c,Te as d,Ee as e,xe as t};
