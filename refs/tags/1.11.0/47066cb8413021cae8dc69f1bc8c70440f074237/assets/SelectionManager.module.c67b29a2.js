import{k as we,l as ke,m as pe,a as _,b as De,d as Pe}from"./context.module.ef1c7555.js";import{r as d,R as S,b as ye}from"./index.a37a2337.js";import{$ as ve,a as Me,b as Ee,c as Z,d as ie,e as le}from"./focusSafely.module.0b5632f2.js";import{$ as Te}from"./FocusScope.module.6d3a7e75.js";import{c as Fe,d as ge,e as be,f as Ae}from"./useFocusRing.module.9e5cfe7a.js";import{a as Ie}from"./isScrollable.module.c2c3b59a.js";class ee{get childNodes(){throw new Error("childNodes is not supported")}clone(){let e=new ee(this.type,this.key);return e.value=this.value,e.level=this.level,e.hasChildNodes=this.hasChildNodes,e.rendered=this.rendered,e.textValue=this.textValue,e["aria-label"]=this["aria-label"],e.index=this.index,e.parentKey=this.parentKey,e.prevKey=this.prevKey,e.nextKey=this.nextKey,e.firstChildKey=this.firstChildKey,e.lastChildKey=this.lastChildKey,e.props=this.props,e.render=this.render,e}constructor(e,t){this.value=null,this.level=0,this.hasChildNodes=!1,this.rendered=null,this.textValue="",this["aria-label"]=void 0,this.index=0,this.parentKey=null,this.prevKey=null,this.nextKey=null,this.firstChildKey=null,this.lastChildKey=null,this.props={},this.type=e,this.key=t}}class Re{get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}*[Symbol.iterator](){let e=this.firstKey!=null?this.keyMap.get(this.firstKey):void 0;for(;e;)yield e,e=e.nextKey!=null?this.keyMap.get(e.nextKey):void 0}getChildren(e){let t=this.keyMap;return{*[Symbol.iterator](){let i=t.get(e),n=(i==null?void 0:i.firstChildKey)!=null?t.get(i.firstChildKey):null;for(;n;)yield n,n=n.nextKey!=null?t.get(n.nextKey):void 0}}}getKeyBefore(e){let t=this.keyMap.get(e);if(!t)return null;if(t.prevKey!=null){for(t=this.keyMap.get(t.prevKey);t&&t.type!=="item"&&t.lastChildKey!=null;)t=this.keyMap.get(t.lastChildKey);var i;return(i=t==null?void 0:t.key)!==null&&i!==void 0?i:null}return t.parentKey}getKeyAfter(e){let t=this.keyMap.get(e);if(!t)return null;if(t.type!=="item"&&t.firstChildKey!=null)return t.firstChildKey;for(;t;){if(t.nextKey!=null)return t.nextKey;if(t.parentKey!=null)t=this.keyMap.get(t.parentKey);else return null}return null}getFirstKey(){return this.firstKey}getLastKey(){let e=this.lastKey!=null?this.keyMap.get(this.lastKey):null;for(;(e==null?void 0:e.lastChildKey)!=null;)e=this.keyMap.get(e.lastChildKey);var t;return(t=e==null?void 0:e.key)!==null&&t!==void 0?t:null}getItem(e){var t;return(t=this.keyMap.get(e))!==null&&t!==void 0?t:null}at(){throw new Error("Not implemented")}clone(){let e=this.constructor,t=new e;return t.keyMap=new Map(this.keyMap),t.firstKey=this.firstKey,t.lastKey=this.lastKey,t}addNode(e){if(this.frozen)throw new Error("Cannot add a node to a frozen collection");this.keyMap.set(e.key,e)}removeNode(e){if(this.frozen)throw new Error("Cannot remove a node to a frozen collection");this.keyMap.delete(e)}commit(e,t,i=!1){if(this.frozen)throw new Error("Cannot commit a frozen collection");this.firstKey=e,this.lastKey=t,this.frozen=!i}constructor(){this.keyMap=new Map,this.firstKey=null,this.lastKey=null,this.frozen=!1}}class me{*[Symbol.iterator](){let e=this.firstChild;for(;e;)yield e,e=e.nextSibling}get firstChild(){return this._firstChild}set firstChild(e){this._firstChild=e,this.ownerDocument.markDirty(this)}get lastChild(){return this._lastChild}set lastChild(e){this._lastChild=e,this.ownerDocument.markDirty(this)}get previousSibling(){return this._previousSibling}set previousSibling(e){this._previousSibling=e,this.ownerDocument.markDirty(this)}get nextSibling(){return this._nextSibling}set nextSibling(e){this._nextSibling=e,this.ownerDocument.markDirty(this)}get parentNode(){return this._parentNode}set parentNode(e){this._parentNode=e,this.ownerDocument.markDirty(this)}get isConnected(){var e;return((e=this.parentNode)===null||e===void 0?void 0:e.isConnected)||!1}appendChild(e){this.ownerDocument.startTransaction(),e.parentNode&&e.parentNode.removeChild(e),this.firstChild==null&&(this.firstChild=e),this.lastChild?(this.lastChild.nextSibling=e,e.index=this.lastChild.index+1,e.previousSibling=this.lastChild):(e.previousSibling=null,e.index=0),e.parentNode=this,e.nextSibling=null,this.lastChild=e,this.ownerDocument.markDirty(this),e.hasSetProps&&this.ownerDocument.addNode(e),this.ownerDocument.endTransaction(),this.ownerDocument.queueUpdate()}insertBefore(e,t){if(t==null)return this.appendChild(e);this.ownerDocument.startTransaction(),e.parentNode&&e.parentNode.removeChild(e),e.nextSibling=t,e.previousSibling=t.previousSibling,e.index=t.index,this.firstChild===t?this.firstChild=e:t.previousSibling&&(t.previousSibling.nextSibling=e),t.previousSibling=e,e.parentNode=t.parentNode;let i=t;for(;i;)i.index++,i=i.nextSibling;e.hasSetProps&&this.ownerDocument.addNode(e),this.ownerDocument.endTransaction(),this.ownerDocument.queueUpdate()}removeChild(e){if(e.parentNode!==this||!this.ownerDocument.isMounted)return;this.ownerDocument.startTransaction();let t=e.nextSibling;for(;t;)t.index--,t=t.nextSibling;e.nextSibling&&(e.nextSibling.previousSibling=e.previousSibling),e.previousSibling&&(e.previousSibling.nextSibling=e.nextSibling),this.firstChild===e&&(this.firstChild=e.nextSibling),this.lastChild===e&&(this.lastChild=e.previousSibling),e.parentNode=null,e.nextSibling=null,e.previousSibling=null,e.index=0,this.ownerDocument.removeNode(e),this.ownerDocument.endTransaction(),this.ownerDocument.queueUpdate()}addEventListener(){}removeEventListener(){}constructor(e){this._firstChild=null,this._lastChild=null,this._previousSibling=null,this._nextSibling=null,this._parentNode=null,this.ownerDocument=e}}class W extends me{get index(){return this._index}set index(e){this._index=e,this.ownerDocument.markDirty(this)}get level(){return this.parentNode instanceof W?this.parentNode.level+(this.node.type==="item"?1:0):0}updateNode(){var e,t,i,n;let s=this.ownerDocument.getMutableNode(this);s.index=this.index,s.level=this.level,s.parentKey=this.parentNode instanceof W?this.parentNode.node.key:null;var r;s.prevKey=(r=(e=this.previousSibling)===null||e===void 0?void 0:e.node.key)!==null&&r!==void 0?r:null;var a;s.nextKey=(a=(t=this.nextSibling)===null||t===void 0?void 0:t.node.key)!==null&&a!==void 0?a:null,s.hasChildNodes=!!this.firstChild;var o;s.firstChildKey=(o=(i=this.firstChild)===null||i===void 0?void 0:i.node.key)!==null&&o!==void 0?o:null;var p;s.lastChildKey=(p=(n=this.lastChild)===null||n===void 0?void 0:n.node.key)!==null&&p!==void 0?p:null}setProps(e,t,i,n){let s=this.ownerDocument.getMutableNode(this),{value:r,textValue:a,id:o,...p}=e;if(p.ref=t,s.props=p,s.rendered=i,s.render=n,s.value=r,s.textValue=a||(typeof p.children=="string"?p.children:"")||e["aria-label"]||"",o!=null&&o!==s.key){if(this.hasSetProps)throw new Error("Cannot change the id of an item");s.key=o}this.hasSetProps||(this.ownerDocument.addNode(this),this.ownerDocument.endTransaction(),this.hasSetProps=!0),this.ownerDocument.queueUpdate()}get style(){return{}}hasAttribute(){}setAttribute(){}setAttributeNS(){}removeAttribute(){}constructor(e,t){super(t),this.nodeType=8,this._index=0,this.hasSetProps=!1,this.node=new ee(e,`react-aria-${++t.nodeId}`),this.ownerDocument.startTransaction()}}class Le extends me{get isConnected(){return this.isMounted}createElement(e){return new W(e,this)}getMutableNode(e){let t=e.node;return this.mutatedNodes.has(e)||(t=e.node.clone(),this.mutatedNodes.add(e),e.node=t),this.markDirty(e),t}getMutableCollection(){return!this.isSSR&&!this.collectionMutated&&(this.collection=this.collection.clone(),this.collectionMutated=!0),this.collection}markDirty(e){this.dirtyNodes.add(e)}startTransaction(){this.transactionCount++}endTransaction(){this.transactionCount--}addNode(e){let t=this.getMutableCollection();if(!t.getItem(e.node.key)){t.addNode(e.node);for(let i of e)this.addNode(i)}this.markDirty(e)}removeNode(e){for(let i of e)this.removeNode(i);this.getMutableCollection().removeNode(e.node.key),this.markDirty(e)}getCollection(){return this.transactionCount>0?this.collection:(this.updateCollection(),this.collection)}updateCollection(){for(let s of this.dirtyNodes)s instanceof W&&s.isConnected&&s.updateNode();if(this.dirtyNodes.clear(),this.mutatedNodes.size||this.collectionMutated){var e,t;let s=this.getMutableCollection();for(let r of this.mutatedNodes)r.isConnected&&s.addNode(r.node);var i,n;s.commit((i=(e=this.firstChild)===null||e===void 0?void 0:e.node.key)!==null&&i!==void 0?i:null,(n=(t=this.lastChild)===null||t===void 0?void 0:t.node.key)!==null&&n!==void 0?n:null,this.isSSR),this.mutatedNodes.clear()}this.collectionMutated=!1}queueUpdate(){if(!(this.dirtyNodes.size===0||this.transactionCount>0))for(let e of this.subscriptions)e()}subscribe(e){return this.subscriptions.add(e),()=>this.subscriptions.delete(e)}resetAfterSSR(){this.isSSR&&(this.isSSR=!1,this.firstChild=null,this.lastChild=null,this.nodeId=0)}constructor(e){super(null),this.nodeType=11,this.ownerDocument=this,this.dirtyNodes=new Set,this.isSSR=!1,this.nodeId=0,this.nodesByProps=new WeakMap,this.isMounted=!0,this.mutatedNodes=new Set,this.subscriptions=new Set,this.transactionCount=0,this.collection=e,this.collectionMutated=!0}}function Se(l){let{children:e,items:t,idScope:i,addIdAndValue:n,dependencies:s=[]}=l,r=d.exports.useMemo(()=>new WeakMap,s);return d.exports.useMemo(()=>{if(t&&typeof e=="function"){let p=[];for(let v of t){let g=r.get(v);if(!g){g=e(v);var a,o;let f=(o=(a=g.props.id)!==null&&a!==void 0?a:v.key)!==null&&o!==void 0?o:v.id;if(f==null)throw new Error("Could not determine key for item");i&&(f=i+":"+f),g=d.exports.cloneElement(g,n?{key:f,id:f,value:v}:{key:f}),r.set(v,g)}p.push(g)}return p}else if(typeof e!="function")return e},[e,t,r,i,n])}function Be(l,e){const t=[];for(;l&&l!==document.documentElement;)Ie(l,e)&&t.push(l),l=l.parentElement;return t}let Oe=0;const j=new Map;function Ne(l){let[e,t]=d.exports.useState();return ve(()=>{if(!l)return;let i=j.get(l);if(i)t(i.element.id);else{let n=`react-aria-description-${Oe++}`;t(n);let s=document.createElement("div");s.id=n,s.style.display="none",s.textContent=l,document.body.appendChild(s),i={refCount:0,element:s},j.set(l,i)}return i.refCount++,()=>{i&&--i.refCount===0&&(i.element.remove(),j.delete(l))}},[l]),{"aria-describedby":l?e:void 0}}function ne(l,e,t,i){let n=we(t),s=t==null;d.exports.useEffect(()=>{if(s||!l.current)return;let r=l.current;return r.addEventListener(e,n,i),()=>{r.removeEventListener(e,n,i)}},[l,e,i,s,n])}function $e(l,e){let t=se(l,e,"left"),i=se(l,e,"top"),n=e.offsetWidth,s=e.offsetHeight,r=l.scrollLeft,a=l.scrollTop,{borderTopWidth:o,borderLeftWidth:p}=getComputedStyle(l),v=l.scrollLeft+parseInt(p,10),g=l.scrollTop+parseInt(o,10),f=v+l.clientWidth,y=g+l.clientHeight;t<=r?r=t-parseInt(p,10):t+n>f&&(r+=t+n-f),i<=g?a=i-parseInt(o,10):i+s>y&&(a+=i+s-y),l.scrollLeft=r,l.scrollTop=a}function se(l,e,t){const i=t==="left"?"offsetLeft":"offsetTop";let n=0;for(;e.offsetParent&&(n+=e[i],e.offsetParent!==l);){if(e.offsetParent.contains(l)){n-=l[i];break}e=e.offsetParent}return n}function re(l,e){if(document.contains(l)){let r=document.scrollingElement||document.documentElement;if(window.getComputedStyle(r).overflow==="hidden"){let o=Be(l);for(let p of o)$e(p,l)}else{var t;let{left:o,top:p}=l.getBoundingClientRect();l==null||(t=l.scrollIntoView)===null||t===void 0||t.call(l,{block:"nearest"});let{left:v,top:g}=l.getBoundingClientRect();if(Math.abs(o-v)>1||Math.abs(p-g)>1){var i,n,s;e==null||(n=e.containingElement)===null||n===void 0||(i=n.scrollIntoView)===null||i===void 0||i.call(n,{block:"center",inline:"center"}),(s=l.scrollIntoView)===null||s===void 0||s.call(l,{block:"nearest"})}}}}var xe={exports:{}},Ke={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z=d.exports;function ze(l,e){return l===e&&(l!==0||1/l===1/e)||l!==l&&e!==e}var Ue=typeof Object.is=="function"?Object.is:ze,We=z.useState,qe=z.useEffect,He=z.useLayoutEffect,Ve=z.useDebugValue;function je(l,e){var t=e(),i=We({inst:{value:t,getSnapshot:e}}),n=i[0].inst,s=i[1];return He(function(){n.value=t,n.getSnapshot=e,G(n)&&s({inst:n})},[l,t,e]),qe(function(){return G(n)&&s({inst:n}),l(function(){G(n)&&s({inst:n})})},[l]),Ve(t),t}function G(l){var e=l.getSnapshot;l=l.value;try{var t=e();return!Ue(l,t)}catch{return!0}}function Ge(l,e){return e()}var Ye=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Ge:je;Ke.useSyncExternalStore=z.useSyncExternalStore!==void 0?z.useSyncExternalStore:Ye;(function(l){l.exports=Ke})(xe);const Ce=d.exports.createContext(!1),q=d.exports.createContext(null);function St(l){if(d.exports.useContext(q))return l.content;let{collection:t,document:i}=Qe(l.createCollection);return S.createElement(S.Fragment,null,S.createElement(ke,null,S.createElement(q.Provider,{value:i},l.content)),S.createElement(Xe,{render:l.children,collection:t}))}function Xe({collection:l,render:e}){return e(l)}function Ze(l,e,t){let i=pe(),n=d.exports.useRef(i);n.current=i;let s=d.exports.useCallback(()=>n.current?t():e(),[e,t]);return xe.exports.useSyncExternalStore(l,s)}const Je=typeof S.useSyncExternalStore=="function"?S.useSyncExternalStore:Ze;function Qe(l){let[e]=d.exports.useState(()=>new Le((l==null?void 0:l())||new Re)),t=d.exports.useCallback(r=>e.subscribe(r),[e]),i=d.exports.useCallback(()=>{let r=e.getCollection();return e.isSSR&&e.resetAfterSSR(),r},[e]),n=d.exports.useCallback(()=>(e.isSSR=!0,e.getCollection()),[e]),s=Je(t,i,n);return ve(()=>(e.isMounted=!0,()=>{e.isMounted=!1}),[e]),{collection:s,document:e}}const J=d.exports.createContext(null);function _e(l,e,t,i,n,s){let r=d.exports.useCallback(o=>{o==null||o.setProps(e,t,i,s)},[e,t,i,s]),a=d.exports.useContext(J);if(a){let o=a.ownerDocument.nodesByProps.get(e);return o||(o=a.ownerDocument.createElement(l),o.setProps(e,t,i,s),a.appendChild(o),a.ownerDocument.updateCollection(),a.ownerDocument.nodesByProps.set(e,o)),n?S.createElement(J.Provider,{value:o},n):null}return S.createElement(l,{ref:r},n)}function $t(l,e){let t=({node:n})=>e(n.props,n.props.ref,n),i=d.exports.forwardRef((n,s)=>{if(!d.exports.useContext(Ce)){if(e.length>=3)throw new Error(e.name+" cannot be rendered outside a collection.");return e(n,s)}return _e(l,n,s,"children"in n?n.children:null,null,a=>S.createElement(t,{node:a}))});return i.displayName=e.name,i}function et(l){return Se({...l,addIdAndValue:!0})}const oe=d.exports.createContext(null);function xt(l){let e=d.exports.useContext(oe),t=((e==null?void 0:e.dependencies)||[]).concat(l.dependencies),i=l.idScope||(e==null?void 0:e.idScope),n=et({...l,idScope:i,dependencies:t});return d.exports.useContext(q)&&(n=S.createElement(tt,null,n)),e=d.exports.useMemo(()=>({dependencies:t,idScope:i}),[i,...t]),S.createElement(oe.Provider,{value:e},n)}function tt({children:l}){let e=d.exports.useContext(q),t=d.exports.useMemo(()=>S.createElement(q.Provider,{value:null},S.createElement(Ce.Provider,{value:!0},l)),[l]);return pe()?S.createElement(J.Provider,{value:e},t):ye.exports.createPortal(t,e)}const Kt=d.exports.createContext(null),it={CollectionRoot({collection:l,renderDropIndicator:e}){return ce(l,null,e)},CollectionBranch({collection:l,parent:e,renderDropIndicator:t}){return ce(l,e,t)}};function ce(l,e,t){return Se({items:e?l.getChildren(e.key):l,dependencies:[t],children(i){var n;let s=i.render(i);if(!t||i.type!=="item")return s;let r=i.key,a=l.getKeyAfter(r);return S.createElement(S.Fragment,null,t({type:"item",key:r,dropPosition:"before"}),s,(a==null||((n=l.getItem(a))===null||n===void 0?void 0:n.type)!=="item")&&t({type:"item",key:r,dropPosition:"after"}))}})}const Ct=d.exports.createContext(it);function wt(l){return d.exports.useMemo(()=>l!=null?new Set([l]):null,[l])}const lt=500;function nt(l){let{isDisabled:e,onLongPressStart:t,onLongPressEnd:i,onLongPress:n,threshold:s=lt,accessibilityDescription:r}=l;const a=d.exports.useRef(void 0);let{addGlobalListener:o,removeGlobalListener:p}=Fe(),{pressProps:v}=ge({isDisabled:e,onPressStart(f){if(f.continuePropagation(),(f.pointerType==="mouse"||f.pointerType==="touch")&&(t&&t({...f,type:"longpressstart"}),a.current=setTimeout(()=>{f.target.dispatchEvent(new PointerEvent("pointercancel",{bubbles:!0})),n&&n({...f,type:"longpress"}),a.current=void 0},s),f.pointerType==="touch")){let y=D=>{D.preventDefault()};o(f.target,"contextmenu",y,{once:!0}),o(window,"pointerup",()=>{setTimeout(()=>{p(f.target,"contextmenu",y)},30)},{once:!0})}},onPressEnd(f){a.current&&clearTimeout(a.current),i&&(f.pointerType==="mouse"||f.pointerType==="touch")&&i({...f,type:"longpressend"})}}),g=Ne(n&&!e?r:void 0);return{longPressProps:_(v,g)}}function Q(l){return Me()?l.altKey:l.ctrlKey}function N(l){return Ee()?l.metaKey:l.ctrlKey}const st=1e3;function rt(l){let{keyboardDelegate:e,selectionManager:t,onTypeSelect:i}=l,n=d.exports.useRef({search:"",timeout:null}).current,s=r=>{let a=ot(r.key);if(!a||r.ctrlKey||r.metaKey||!r.currentTarget.contains(r.target))return;a===" "&&n.search.trim().length>0&&(r.preventDefault(),"continuePropagation"in r||r.stopPropagation()),n.search+=a;let o=e.getKeyForSearch(n.search,t.focusedKey);o==null&&(o=e.getKeyForSearch(n.search)),o!=null&&(t.setFocusedKey(o),i&&i(o)),clearTimeout(n.timeout),n.timeout=setTimeout(()=>{n.search=""},st)};return{typeSelectProps:{onKeyDownCapture:e.getKeyForSearch?s:null}}}function ot(l){return l.length===1||!/^[A-Z]/i.test(l)?l:""}function kt(l){let{selectionManager:e,keyboardDelegate:t,ref:i,autoFocus:n=!1,shouldFocusWrap:s=!1,disallowEmptySelection:r=!1,disallowSelectAll:a=!1,selectOnFocus:o=e.selectionBehavior==="replace",disallowTypeAhead:p=!1,shouldUseVirtualFocus:v,allowsTabNavigation:g=!1,isVirtualized:f,scrollRef:y=i,linkBehavior:D="action"}=l,{direction:C}=De(),b=be(),P=c=>{if(c.altKey&&c.key==="Tab"&&c.preventDefault(),!i.current.contains(c.target))return;const m=(h,B)=>{if(h!=null){if(e.isLink(h)&&D==="selection"&&o&&!Q(c)){ye.exports.flushSync(()=>{e.setFocusedKey(h,B)});let O=y.current.querySelector(`[data-key="${CSS.escape(h.toString())}"]`),te=e.getItemProps(h);b.open(O,c,te.href,te.routerOptions);return}if(e.setFocusedKey(h,B),e.isLink(h)&&D==="override")return;c.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(h):o&&!Q(c)&&e.replaceSelection(h)}};switch(c.key){case"ArrowDown":if(t.getKeyBelow){var w,K;c.preventDefault();let h=e.focusedKey!=null?t.getKeyBelow(e.focusedKey):(w=t.getFirstKey)===null||w===void 0?void 0:w.call(t);h==null&&s&&(h=(K=t.getFirstKey)===null||K===void 0?void 0:K.call(t,e.focusedKey)),m(h)}break;case"ArrowUp":if(t.getKeyAbove){var T,F;c.preventDefault();let h=e.focusedKey!=null?t.getKeyAbove(e.focusedKey):(T=t.getLastKey)===null||T===void 0?void 0:T.call(t);h==null&&s&&(h=(F=t.getLastKey)===null||F===void 0?void 0:F.call(t,e.focusedKey)),m(h)}break;case"ArrowLeft":if(t.getKeyLeftOf){var U,u;c.preventDefault();let h=t.getKeyLeftOf(e.focusedKey);h==null&&s&&(h=C==="rtl"?(U=t.getFirstKey)===null||U===void 0?void 0:U.call(t,e.focusedKey):(u=t.getLastKey)===null||u===void 0?void 0:u.call(t,e.focusedKey)),m(h,C==="rtl"?"first":"last")}break;case"ArrowRight":if(t.getKeyRightOf){var A,V;c.preventDefault();let h=t.getKeyRightOf(e.focusedKey);h==null&&s&&(h=C==="rtl"?(A=t.getLastKey)===null||A===void 0?void 0:A.call(t,e.focusedKey):(V=t.getFirstKey)===null||V===void 0?void 0:V.call(t,e.focusedKey)),m(h,C==="rtl"?"last":"first")}break;case"Home":if(t.getFirstKey){c.preventDefault();let h=t.getFirstKey(e.focusedKey,N(c));e.setFocusedKey(h),N(c)&&c.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(h):o&&e.replaceSelection(h)}break;case"End":if(t.getLastKey){c.preventDefault();let h=t.getLastKey(e.focusedKey,N(c));e.setFocusedKey(h),N(c)&&c.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(h):o&&e.replaceSelection(h)}break;case"PageDown":if(t.getKeyPageBelow){c.preventDefault();let h=t.getKeyPageBelow(e.focusedKey);m(h)}break;case"PageUp":if(t.getKeyPageAbove){c.preventDefault();let h=t.getKeyPageAbove(e.focusedKey);m(h)}break;case"a":N(c)&&e.selectionMode==="multiple"&&a!==!0&&(c.preventDefault(),e.selectAll());break;case"Escape":!r&&e.selectedKeys.size!==0&&(c.stopPropagation(),c.preventDefault(),e.clearSelection());break;case"Tab":if(!g){if(c.shiftKey)i.current.focus();else{let h=Te(i.current,{tabbable:!0}),B,O;do O=h.lastChild(),O&&(B=O);while(O);B&&!B.contains(document.activeElement)&&le(B)}break}}},$=d.exports.useRef({top:0,left:0});ne(y,"scroll",f?null:()=>{$.current={top:y.current.scrollTop,left:y.current.scrollLeft}});let x=c=>{if(e.isFocused){c.currentTarget.contains(c.target)||e.setFocused(!1);return}if(!!c.currentTarget.contains(c.target)){if(e.setFocused(!0),e.focusedKey==null){let K=F=>{F!=null&&(e.setFocusedKey(F),o&&e.replaceSelection(F))},T=c.relatedTarget;var m,w;T&&c.currentTarget.compareDocumentPosition(T)&Node.DOCUMENT_POSITION_FOLLOWING?K((m=e.lastSelectedKey)!==null&&m!==void 0?m:t.getLastKey()):K((w=e.firstSelectedKey)!==null&&w!==void 0?w:t.getFirstKey())}else f||(y.current.scrollTop=$.current.top,y.current.scrollLeft=$.current.left);if(e.focusedKey!=null){let K=y.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);K&&(K.contains(document.activeElement)||le(K),ie()==="keyboard"&&re(K,{containingElement:i.current}))}}},M=c=>{c.currentTarget.contains(c.relatedTarget)||e.setFocused(!1)};const E=d.exports.useRef(n);d.exports.useEffect(()=>{if(E.current){let c=null;n==="first"&&(c=t.getFirstKey()),n==="last"&&(c=t.getLastKey());let m=e.selectedKeys;if(m.size){for(let w of m)if(e.canSelectItem(w)){c=w;break}}e.setFocused(!0),e.setFocusedKey(c),c==null&&!v&&Z(i.current)}},[]);let I=d.exports.useRef(e.focusedKey);d.exports.useEffect(()=>{if(e.isFocused&&e.focusedKey!=null&&(e.focusedKey!==I.current||E.current)&&(y==null?void 0:y.current)){let c=ie(),m=i.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);if(!m)return;(c==="keyboard"||E.current)&&($e(y.current,m),c!=="virtual"&&re(m,{containingElement:i.current}))}e.isFocused&&e.focusedKey==null&&I.current!=null&&Z(i.current),I.current=e.focusedKey,E.current=!1}),ne(i,"react-aria-focus-scope-restore",c=>{c.preventDefault(),e.setFocused(!0)});let R={onKeyDown:P,onFocus:x,onBlur:M,onMouseDown(c){y.current===c.target&&c.preventDefault()}},{typeSelectProps:H}=rt({keyboardDelegate:t,selectionManager:e});p||(R=_(H,R));let L;return v||(L=e.focusedKey==null?0:-1),{collectionProps:{...R,tabIndex:L}}}function Dt(l){let{selectionManager:e,key:t,ref:i,shouldSelectOnPressUp:n,shouldUseVirtualFocus:s,focus:r,isDisabled:a,onAction:o,allowsDifferentPressOrigin:p,linkBehavior:v="action"}=l,g=be(),f=u=>{if(u.pointerType==="keyboard"&&Q(u))e.toggleSelection(t);else{if(e.selectionMode==="none")return;if(e.isLink(t)){if(v==="selection"){let A=e.getItemProps(t);g.open(i.current,u,A.href,A.routerOptions),e.setSelectedKeys(e.selectedKeys);return}else if(v==="override"||v==="none")return}e.selectionMode==="single"?e.isSelected(t)&&!e.disallowEmptySelection?e.toggleSelection(t):e.replaceSelection(t):u&&u.shiftKey?e.extendSelection(t):e.selectionBehavior==="toggle"||u&&(N(u)||u.pointerType==="touch"||u.pointerType==="virtual")?e.toggleSelection(t):e.replaceSelection(t)}};d.exports.useEffect(()=>{t===e.focusedKey&&e.isFocused&&!s&&(r?r():document.activeElement!==i.current&&Z(i.current))},[i,t,e.focusedKey,e.childFocusStrategy,e.isFocused,s]),a=a||e.isDisabled(t);let y={};!s&&!a?y={tabIndex:t===e.focusedKey?0:-1,onFocus(u){u.target===i.current&&e.setFocusedKey(t)}}:a&&(y.onMouseDown=u=>{u.preventDefault()});let D=e.isLink(t)&&v==="override",C=e.isLink(t)&&v!=="selection"&&v!=="none",b=!a&&e.canSelectItem(t)&&!D,P=(o||C)&&!a,$=P&&(e.selectionBehavior==="replace"?!b:!b||e.isEmpty),x=P&&b&&e.selectionBehavior==="replace",M=$||x,E=d.exports.useRef(null),I=M&&b,R=d.exports.useRef(!1),H=d.exports.useRef(!1),L=u=>{if(o&&o(),C){let A=e.getItemProps(t);g.open(i.current,u,A.href,A.routerOptions)}},c={};n?(c.onPressStart=u=>{E.current=u.pointerType,R.current=I,u.pointerType==="keyboard"&&(!M||ue())&&f(u)},p?(c.onPressUp=$?null:u=>{u.pointerType!=="keyboard"&&b&&f(u)},c.onPress=$?L:null):c.onPress=u=>{if($||x&&u.pointerType!=="mouse"){if(u.pointerType==="keyboard"&&!ae())return;L(u)}else u.pointerType!=="keyboard"&&b&&f(u)}):(c.onPressStart=u=>{E.current=u.pointerType,R.current=I,H.current=$,b&&(u.pointerType==="mouse"&&!$||u.pointerType==="keyboard"&&(!P||ue()))&&f(u)},c.onPress=u=>{(u.pointerType==="touch"||u.pointerType==="pen"||u.pointerType==="virtual"||u.pointerType==="keyboard"&&M&&ae()||u.pointerType==="mouse"&&H.current)&&(M?L(u):b&&f(u))}),y["data-key"]=t,c.preventFocusOnPress=s;let{pressProps:m,isPressed:w}=ge(c),K=x?u=>{E.current==="mouse"&&(u.stopPropagation(),u.preventDefault(),L(u))}:void 0,{longPressProps:T}=nt({isDisabled:!I,onLongPress(u){u.pointerType==="touch"&&(f(u),e.setSelectionBehavior("toggle"))}}),F=u=>{E.current==="touch"&&R.current&&u.preventDefault()},U=e.isLink(t)?u=>{Ae.isOpening||u.preventDefault()}:void 0;return{itemProps:_(y,b||$?m:{},I?T:{},{onDoubleClick:K,onDragStartCapture:F,onClick:U}),isPressed:w,isSelected:e.isSelected(t),isFocused:e.isFocused&&e.focusedKey===t,isDisabled:a,allowsSelection:b,hasAction:M}}function ae(){let l=window.event;return(l==null?void 0:l.key)==="Enter"}function ue(){let l=window.event;return(l==null?void 0:l.key)===" "||(l==null?void 0:l.code)==="Space"}class ct{build(e,t){return this.context=t,de(()=>this.iterateCollection(e))}*iterateCollection(e){let{children:t,items:i}=e;if(typeof t=="function"){if(!i)throw new Error("props.children was a function but props.items is missing");for(let n of e.items)yield*this.getFullNode({value:n},{renderer:t})}else{let n=[];S.Children.forEach(t,r=>{n.push(r)});let s=0;for(let r of n){let a=this.getFullNode({element:r,index:s},{});for(let o of a)s++,yield o}}}getKey(e,t,i,n){if(e.key!=null)return e.key;if(t.type==="cell"&&t.key!=null)return`${n}${t.key}`;let s=t.value;if(s!=null){var r;let a=(r=s.key)!==null&&r!==void 0?r:s.id;if(a==null)throw new Error("No key found for item");return a}return n?`${n}.${t.index}`:`$.${t.index}`}getChildState(e,t){return{renderer:t.renderer||e.renderer}}*getFullNode(e,t,i,n){let s=e.element;if(!s&&e.value&&t&&t.renderer){let o=this.cache.get(e.value);if(o&&(!o.shouldInvalidate||!o.shouldInvalidate(this.context))){o.index=e.index,o.parentKey=n?n.key:null,yield o;return}s=t.renderer(e.value)}if(S.isValidElement(s)){let o=s.type;if(typeof o!="function"&&typeof o.getCollectionNode!="function"){let f=typeof s.type=="function"?s.type.name:s.type;throw new Error(`Unknown element <${f}> in collection.`)}let p=o.getCollectionNode(s.props,this.context),v=e.index,g=p.next();for(;!g.done&&g.value;){let f=g.value;e.index=v;let y=f.key;y||(y=f.element?null:this.getKey(s,e,t,i));let C=[...this.getFullNode({...f,key:y,index:v,wrapper:at(e.wrapper,f.wrapper)},this.getChildState(t,f),i?`${i}${s.key}`:s.key,n)];for(let b of C){if(b.value=f.value||e.value,b.value&&this.cache.set(b.value,b),e.type&&b.type!==e.type)throw new Error(`Unsupported type <${Y(b.type)}> in <${Y(n.type)}>. Only <${Y(e.type)}> is supported.`);v++,yield b}g=p.next(C)}return}if(e.key==null)return;let r=this,a={type:e.type,props:e.props,key:e.key,parentKey:n?n.key:null,value:e.value,level:n?n.level+1:0,index:e.index,rendered:e.rendered,textValue:e.textValue,"aria-label":e["aria-label"],wrapper:e.wrapper,shouldInvalidate:e.shouldInvalidate,hasChildNodes:e.hasChildNodes,childNodes:de(function*(){if(!e.hasChildNodes)return;let o=0;for(let p of e.childNodes()){p.key!=null&&(p.key=`${a.key}${p.key}`),p.index=o;let v=r.getFullNode(p,r.getChildState(t,p),a.key,a);for(let g of v)o++,yield g}})};yield a}constructor(){this.cache=new WeakMap}}function de(l){let e=[],t=null;return{*[Symbol.iterator](){for(let i of e)yield i;t||(t=l());for(let i of t)e.push(i),yield i}}}function at(l,e){if(l&&e)return t=>l(e(t));if(l)return l;if(e)return e}function Y(l){return l[0].toUpperCase()+l.slice(1)}function Pt(l,e,t){let i=d.exports.useMemo(()=>new ct,[]),{children:n,items:s,collection:r}=l;return d.exports.useMemo(()=>{if(r)return r;let o=i.build({children:n,items:s},t);return e(o)},[i,n,s,r,t,e])}function ut(l,e){return typeof e.getChildren=="function"?e.getChildren(l.key):l.childNodes}function dt(l){return ft(l,0)}function ft(l,e){if(e<0)return;let t=0;for(let i of l){if(t===e)return i;t++}}function X(l,e,t){if(e.parentKey===t.parentKey)return e.index-t.index;let i=[...fe(l,e),e],n=[...fe(l,t),t],s=i.slice(0,n.length).findIndex((r,a)=>r!==n[a]);return s!==-1?(e=i[s],t=n[s],e.index-t.index):i.findIndex(r=>r===t)>=0?1:(n.findIndex(r=>r===e)>=0,-1)}function fe(l,e){let t=[];for(;(e==null?void 0:e.parentKey)!=null;)e=l.getItem(e.parentKey),t.unshift(e);return t}class k extends Set{constructor(e,t,i){super(e),e instanceof k?(this.anchorKey=t||e.anchorKey,this.currentKey=i||e.currentKey):(this.anchorKey=t,this.currentKey=i)}}function ht(l,e){if(l.size!==e.size)return!1;for(let t of l)if(!e.has(t))return!1;return!0}function Mt(l){let{selectionMode:e="none",disallowEmptySelection:t,allowDuplicateSelectionEvents:i,selectionBehavior:n="toggle",disabledBehavior:s="all"}=l,r=d.exports.useRef(!1),[,a]=d.exports.useState(!1),o=d.exports.useRef(null),p=d.exports.useRef(null),[,v]=d.exports.useState(null),g=d.exports.useMemo(()=>he(l.selectedKeys),[l.selectedKeys]),f=d.exports.useMemo(()=>he(l.defaultSelectedKeys,new k),[l.defaultSelectedKeys]),[y,D]=Pe(g,f,l.onSelectionChange),C=d.exports.useMemo(()=>l.disabledKeys?new Set(l.disabledKeys):new Set,[l.disabledKeys]),[b,P]=d.exports.useState(n);n==="replace"&&b==="toggle"&&typeof y=="object"&&y.size===0&&P("replace");let $=d.exports.useRef(n);return d.exports.useEffect(()=>{n!==$.current&&(P(n),$.current=n)},[n]),{selectionMode:e,disallowEmptySelection:t,selectionBehavior:b,setSelectionBehavior:P,get isFocused(){return r.current},setFocused(x){r.current=x,a(x)},get focusedKey(){return o.current},get childFocusStrategy(){return p.current},setFocusedKey(x,M="first"){o.current=x,p.current=M,v(x)},selectedKeys:y,setSelectedKeys(x){(i||!ht(x,y))&&D(x)},disabledKeys:C,disabledBehavior:s}}function he(l,e){return l?l==="all"?"all":new k(l):e}class Et{get selectionMode(){return this.state.selectionMode}get disallowEmptySelection(){return this.state.disallowEmptySelection}get selectionBehavior(){return this.state.selectionBehavior}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}get isFocused(){return this.state.isFocused}setFocused(e){this.state.setFocused(e)}get focusedKey(){return this.state.focusedKey}get childFocusStrategy(){return this.state.childFocusStrategy}setFocusedKey(e,t){(e==null||this.collection.getItem(e))&&this.state.setFocusedKey(e,t)}get selectedKeys(){return this.state.selectedKeys==="all"?new Set(this.getSelectAllKeys()):this.state.selectedKeys}get rawSelection(){return this.state.selectedKeys}isSelected(e){return this.state.selectionMode==="none"?!1:(e=this.getKey(e),this.state.selectedKeys==="all"?this.canSelectItem(e):this.state.selectedKeys.has(e))}get isEmpty(){return this.state.selectedKeys!=="all"&&this.state.selectedKeys.size===0}get isSelectAll(){if(this.isEmpty)return!1;if(this.state.selectedKeys==="all")return!0;if(this._isSelectAll!=null)return this._isSelectAll;let e=this.getSelectAllKeys(),t=this.state.selectedKeys;return this._isSelectAll=e.every(i=>t.has(i)),this._isSelectAll}get firstSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let i=this.collection.getItem(t);(!e||i&&X(this.collection,i,e)<0)&&(e=i)}return e==null?void 0:e.key}get lastSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let i=this.collection.getItem(t);(!e||i&&X(this.collection,i,e)>0)&&(e=i)}return e==null?void 0:e.key}get disabledKeys(){return this.state.disabledKeys}get disabledBehavior(){return this.state.disabledBehavior}extendSelection(e){if(this.selectionMode==="none")return;if(this.selectionMode==="single"){this.replaceSelection(e);return}e=this.getKey(e);let t;if(this.state.selectedKeys==="all")t=new k([e],e,e);else{let i=this.state.selectedKeys,n=i.anchorKey||e;t=new k(i,n,e);for(let s of this.getKeyRange(n,i.currentKey||e))t.delete(s);for(let s of this.getKeyRange(e,n))this.canSelectItem(s)&&t.add(s)}this.state.setSelectedKeys(t)}getKeyRange(e,t){let i=this.collection.getItem(e),n=this.collection.getItem(t);return i&&n?X(this.collection,i,n)<=0?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){let i=[],n=e;for(;n;){let s=this.collection.getItem(n);if((s&&s.type==="item"||s.type==="cell"&&this.allowsCellSelection)&&i.push(n),n===t)return i;n=this.collection.getKeyAfter(n)}return[]}getKey(e){let t=this.collection.getItem(e);if(!t||t.type==="cell"&&this.allowsCellSelection)return e;for(;t.type!=="item"&&t.parentKey!=null;)t=this.collection.getItem(t.parentKey);return!t||t.type!=="item"?null:t.key}toggleSelection(e){if(this.selectionMode==="none")return;if(this.selectionMode==="single"&&!this.isSelected(e)){this.replaceSelection(e);return}if(e=this.getKey(e),e==null)return;let t=new k(this.state.selectedKeys==="all"?this.getSelectAllKeys():this.state.selectedKeys);t.has(e)?t.delete(e):this.canSelectItem(e)&&(t.add(e),t.anchorKey=e,t.currentKey=e),!(this.disallowEmptySelection&&t.size===0)&&this.state.setSelectedKeys(t)}replaceSelection(e){if(this.selectionMode==="none"||(e=this.getKey(e),e==null))return;let t=this.canSelectItem(e)?new k([e],e,e):new k;this.state.setSelectedKeys(t)}setSelectedKeys(e){if(this.selectionMode==="none")return;let t=new k;for(let i of e)if(i=this.getKey(i),i!=null&&(t.add(i),this.selectionMode==="single"))break;this.state.setSelectedKeys(t)}getSelectAllKeys(){let e=[],t=i=>{for(;i!=null;){if(this.canSelectItem(i)){let n=this.collection.getItem(i);n.type==="item"&&e.push(i),n.hasChildNodes&&(this.allowsCellSelection||n.type!=="item")&&t(dt(ut(n,this.collection)).key)}i=this.collection.getKeyAfter(i)}};return t(this.collection.getFirstKey()),e}selectAll(){!this.isSelectAll&&this.selectionMode==="multiple"&&this.state.setSelectedKeys("all")}clearSelection(){!this.disallowEmptySelection&&(this.state.selectedKeys==="all"||this.state.selectedKeys.size>0)&&this.state.setSelectedKeys(new k)}toggleSelectAll(){this.isSelectAll?this.clearSelection():this.selectAll()}select(e,t){this.selectionMode!=="none"&&(this.selectionMode==="single"?this.isSelected(e)&&!this.disallowEmptySelection?this.toggleSelection(e):this.replaceSelection(e):this.selectionBehavior==="toggle"||t&&(t.pointerType==="touch"||t.pointerType==="virtual")?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys)return!0;let t=this.selectedKeys;if(e.size!==t.size)return!1;for(let i of e)if(!t.has(i))return!1;for(let i of t)if(!e.has(i))return!1;return!0}canSelectItem(e){var t;if(this.state.selectionMode==="none"||this.state.disabledKeys.has(e))return!1;let i=this.collection.getItem(e);return!(!i||(i==null||(t=i.props)===null||t===void 0?void 0:t.isDisabled)||i.type==="cell"&&!this.allowsCellSelection)}isDisabled(e){var t,i;return this.state.disabledBehavior==="all"&&(this.state.disabledKeys.has(e)||!!(!((i=this.collection.getItem(e))===null||i===void 0||(t=i.props)===null||t===void 0)&&t.isDisabled))}isLink(e){var t,i;return!!(!((i=this.collection.getItem(e))===null||i===void 0||(t=i.props)===null||t===void 0)&&t.href)}getItemProps(e){var t;return(t=this.collection.getItem(e))===null||t===void 0?void 0:t.props}constructor(e,t,i){this.collection=e,this.state=t;var n;this.allowsCellSelection=(n=i==null?void 0:i.allowsCellSelection)!==null&&n!==void 0?n:!1,this._isSelectAll=null}}export{Dt as $,kt as a,Mt as b,Pt as c,Et as d,$t as e,xt as f,Ct as g,wt as h,St as i,ut as j,nt as k,Kt as l};
