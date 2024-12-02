import{d as Ce,n as ke,o as De,p as pe,q as Pe,r as ye,b as _,c as Me,s as ve,t as Ee,e as Te}from"./context.module.a426bb27.js";import{r as d,R as m,b as be}from"./index.7db02d4b.js";import{$ as ge,a as Fe,b as Ae,c as Z,d as ie,e as le}from"./focusSafely.module.e2426ede.js";import{$ as Ie}from"./FocusScope.module.c23ba656.js";class ee{get childNodes(){throw new Error("childNodes is not supported")}clone(){let e=new ee(this.type,this.key);return e.value=this.value,e.level=this.level,e.hasChildNodes=this.hasChildNodes,e.rendered=this.rendered,e.textValue=this.textValue,e["aria-label"]=this["aria-label"],e.index=this.index,e.parentKey=this.parentKey,e.prevKey=this.prevKey,e.nextKey=this.nextKey,e.firstChildKey=this.firstChildKey,e.lastChildKey=this.lastChildKey,e.props=this.props,e.render=this.render,e}constructor(e,t){this.value=null,this.level=0,this.hasChildNodes=!1,this.rendered=null,this.textValue="",this["aria-label"]=void 0,this.index=0,this.parentKey=null,this.prevKey=null,this.nextKey=null,this.firstChildKey=null,this.lastChildKey=null,this.props={},this.type=e,this.key=t}}class Re{get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}*[Symbol.iterator](){let e=this.firstKey!=null?this.keyMap.get(this.firstKey):void 0;for(;e;)yield e,e=e.nextKey!=null?this.keyMap.get(e.nextKey):void 0}getChildren(e){let t=this.keyMap;return{*[Symbol.iterator](){let i=t.get(e),n=(i==null?void 0:i.firstChildKey)!=null?t.get(i.firstChildKey):null;for(;n;)yield n,n=n.nextKey!=null?t.get(n.nextKey):void 0}}}getKeyBefore(e){let t=this.keyMap.get(e);if(!t)return null;if(t.prevKey!=null){for(t=this.keyMap.get(t.prevKey);t&&t.type!=="item"&&t.lastChildKey!=null;)t=this.keyMap.get(t.lastChildKey);var i;return(i=t==null?void 0:t.key)!==null&&i!==void 0?i:null}return t.parentKey}getKeyAfter(e){let t=this.keyMap.get(e);if(!t)return null;if(t.type!=="item"&&t.firstChildKey!=null)return t.firstChildKey;for(;t;){if(t.nextKey!=null)return t.nextKey;if(t.parentKey!=null)t=this.keyMap.get(t.parentKey);else return null}return null}getFirstKey(){return this.firstKey}getLastKey(){let e=this.lastKey!=null?this.keyMap.get(this.lastKey):null;for(;(e==null?void 0:e.lastChildKey)!=null;)e=this.keyMap.get(e.lastChildKey);var t;return(t=e==null?void 0:e.key)!==null&&t!==void 0?t:null}getItem(e){var t;return(t=this.keyMap.get(e))!==null&&t!==void 0?t:null}at(){throw new Error("Not implemented")}clone(){let e=this.constructor,t=new e;return t.keyMap=new Map(this.keyMap),t.firstKey=this.firstKey,t.lastKey=this.lastKey,t}addNode(e){if(this.frozen)throw new Error("Cannot add a node to a frozen collection");this.keyMap.set(e.key,e)}removeNode(e){if(this.frozen)throw new Error("Cannot remove a node to a frozen collection");this.keyMap.delete(e)}commit(e,t,i=!1){if(this.frozen)throw new Error("Cannot commit a frozen collection");this.firstKey=e,this.lastKey=t,this.frozen=!i}constructor(){this.keyMap=new Map,this.firstKey=null,this.lastKey=null,this.frozen=!1}}class Se{*[Symbol.iterator](){let e=this.firstChild;for(;e;)yield e,e=e.nextSibling}get firstChild(){return this._firstChild}set firstChild(e){this._firstChild=e,this.ownerDocument.markDirty(this)}get lastChild(){return this._lastChild}set lastChild(e){this._lastChild=e,this.ownerDocument.markDirty(this)}get previousSibling(){return this._previousSibling}set previousSibling(e){this._previousSibling=e,this.ownerDocument.markDirty(this)}get nextSibling(){return this._nextSibling}set nextSibling(e){this._nextSibling=e,this.ownerDocument.markDirty(this)}get parentNode(){return this._parentNode}set parentNode(e){this._parentNode=e,this.ownerDocument.markDirty(this)}get isConnected(){var e;return((e=this.parentNode)===null||e===void 0?void 0:e.isConnected)||!1}appendChild(e){this.ownerDocument.startTransaction(),e.parentNode&&e.parentNode.removeChild(e),this.firstChild==null&&(this.firstChild=e),this.lastChild?(this.lastChild.nextSibling=e,e.index=this.lastChild.index+1,e.previousSibling=this.lastChild):(e.previousSibling=null,e.index=0),e.parentNode=this,e.nextSibling=null,this.lastChild=e,this.ownerDocument.markDirty(this),e.hasSetProps&&this.ownerDocument.addNode(e),this.ownerDocument.endTransaction(),this.ownerDocument.queueUpdate()}insertBefore(e,t){if(t==null)return this.appendChild(e);this.ownerDocument.startTransaction(),e.parentNode&&e.parentNode.removeChild(e),e.nextSibling=t,e.previousSibling=t.previousSibling,e.index=t.index,this.firstChild===t?this.firstChild=e:t.previousSibling&&(t.previousSibling.nextSibling=e),t.previousSibling=e,e.parentNode=t.parentNode;let i=t;for(;i;)i.index++,i=i.nextSibling;e.hasSetProps&&this.ownerDocument.addNode(e),this.ownerDocument.endTransaction(),this.ownerDocument.queueUpdate()}removeChild(e){if(e.parentNode!==this||!this.ownerDocument.isMounted)return;this.ownerDocument.startTransaction();let t=e.nextSibling;for(;t;)t.index--,t=t.nextSibling;e.nextSibling&&(e.nextSibling.previousSibling=e.previousSibling),e.previousSibling&&(e.previousSibling.nextSibling=e.nextSibling),this.firstChild===e&&(this.firstChild=e.nextSibling),this.lastChild===e&&(this.lastChild=e.previousSibling),e.parentNode=null,e.nextSibling=null,e.previousSibling=null,e.index=0,this.ownerDocument.removeNode(e),this.ownerDocument.endTransaction(),this.ownerDocument.queueUpdate()}addEventListener(){}removeEventListener(){}constructor(e){this._firstChild=null,this._lastChild=null,this._previousSibling=null,this._nextSibling=null,this._parentNode=null,this.ownerDocument=e}}class W extends Se{get index(){return this._index}set index(e){this._index=e,this.ownerDocument.markDirty(this)}get level(){return this.parentNode instanceof W?this.parentNode.level+(this.node.type==="item"?1:0):0}updateNode(){var e,t,i,n;let s=this.ownerDocument.getMutableNode(this);s.index=this.index,s.level=this.level,s.parentKey=this.parentNode instanceof W?this.parentNode.node.key:null;var r;s.prevKey=(r=(e=this.previousSibling)===null||e===void 0?void 0:e.node.key)!==null&&r!==void 0?r:null;var a;s.nextKey=(a=(t=this.nextSibling)===null||t===void 0?void 0:t.node.key)!==null&&a!==void 0?a:null,s.hasChildNodes=!!this.firstChild;var o;s.firstChildKey=(o=(i=this.firstChild)===null||i===void 0?void 0:i.node.key)!==null&&o!==void 0?o:null;var p;s.lastChildKey=(p=(n=this.lastChild)===null||n===void 0?void 0:n.node.key)!==null&&p!==void 0?p:null}setProps(e,t,i,n){let s=this.ownerDocument.getMutableNode(this),{value:r,textValue:a,id:o,...p}=e;if(p.ref=t,s.props=p,s.rendered=i,s.render=n,s.value=r,s.textValue=a||(typeof p.children=="string"?p.children:"")||e["aria-label"]||"",o!=null&&o!==s.key){if(this.hasSetProps)throw new Error("Cannot change the id of an item");s.key=o}this.hasSetProps||(this.ownerDocument.addNode(this),this.ownerDocument.endTransaction(),this.hasSetProps=!0),this.ownerDocument.queueUpdate()}get style(){return{}}hasAttribute(){}setAttribute(){}setAttributeNS(){}removeAttribute(){}constructor(e,t){super(t),this.nodeType=8,this._index=0,this.hasSetProps=!1,this.node=new ee(e,`react-aria-${++t.nodeId}`),this.ownerDocument.startTransaction()}}class Be extends Se{get isConnected(){return this.isMounted}createElement(e){return new W(e,this)}getMutableNode(e){let t=e.node;return this.mutatedNodes.has(e)||(t=e.node.clone(),this.mutatedNodes.add(e),e.node=t),this.markDirty(e),t}getMutableCollection(){return!this.isSSR&&!this.collectionMutated&&(this.collection=this.collection.clone(),this.collectionMutated=!0),this.collection}markDirty(e){this.dirtyNodes.add(e)}startTransaction(){this.transactionCount++}endTransaction(){this.transactionCount--}addNode(e){let t=this.getMutableCollection();if(!t.getItem(e.node.key)){t.addNode(e.node);for(let i of e)this.addNode(i)}this.markDirty(e)}removeNode(e){for(let i of e)this.removeNode(i);this.getMutableCollection().removeNode(e.node.key),this.markDirty(e)}getCollection(){return this.transactionCount>0?this.collection:(this.updateCollection(),this.collection)}updateCollection(){for(let s of this.dirtyNodes)s instanceof W&&s.isConnected&&s.updateNode();if(this.dirtyNodes.clear(),this.mutatedNodes.size||this.collectionMutated){var e,t;let s=this.getMutableCollection();for(let r of this.mutatedNodes)r.isConnected&&s.addNode(r.node);var i,n;s.commit((i=(e=this.firstChild)===null||e===void 0?void 0:e.node.key)!==null&&i!==void 0?i:null,(n=(t=this.lastChild)===null||t===void 0?void 0:t.node.key)!==null&&n!==void 0?n:null,this.isSSR),this.mutatedNodes.clear()}this.collectionMutated=!1}queueUpdate(){if(!(this.dirtyNodes.size===0||this.transactionCount>0))for(let e of this.subscriptions)e()}subscribe(e){return this.subscriptions.add(e),()=>this.subscriptions.delete(e)}resetAfterSSR(){this.isSSR&&(this.isSSR=!1,this.firstChild=null,this.lastChild=null,this.nodeId=0)}constructor(e){super(null),this.nodeType=11,this.ownerDocument=this,this.dirtyNodes=new Set,this.isSSR=!1,this.nodeId=0,this.nodesByProps=new WeakMap,this.isMounted=!0,this.mutatedNodes=new Set,this.subscriptions=new Set,this.transactionCount=0,this.collection=e,this.collectionMutated=!0}}function me(l){let{children:e,items:t,idScope:i,addIdAndValue:n,dependencies:s=[]}=l,r=d.exports.useMemo(()=>new WeakMap,s);return d.exports.useMemo(()=>{if(t&&typeof e=="function"){let p=[];for(let v of t){let b=r.get(v);if(!b){b=e(v);var a,o;let f=(o=(a=b.props.id)!==null&&a!==void 0?a:v.key)!==null&&o!==void 0?o:v.id;if(f==null)throw new Error("Could not determine key for item");i&&(f=i+":"+f),b=d.exports.cloneElement(b,n?{key:f,id:f,value:v}:{key:f}),r.set(v,b)}p.push(b)}return p}else if(typeof e!="function")return e},[e,t,r,i,n])}function St(l,e){let{id:t,"aria-label":i,"aria-labelledby":n}=l;return t=Ce(t),n&&i?n=[...new Set([t,...n.trim().split(/\s+/)])].join(" "):n&&(n=n.trim().split(/\s+/).join(" ")),!i&&!n&&e&&(i=e),{id:t,"aria-label":i,"aria-labelledby":n}}function Le(l,e){let t=window.getComputedStyle(l),i=/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY);return i&&e&&(i=l.scrollHeight!==l.clientHeight||l.scrollWidth!==l.clientWidth),i}function Oe(l,e){const t=[];for(;l&&l!==document.documentElement;)Le(l,e)&&t.push(l),l=l.parentElement;return t}let Ne=0;const V=new Map;function ze(l){let[e,t]=d.exports.useState();return ge(()=>{if(!l)return;let i=V.get(l);if(i)t(i.element.id);else{let n=`react-aria-description-${Ne++}`;t(n);let s=document.createElement("div");s.id=n,s.style.display="none",s.textContent=l,document.body.appendChild(s),i={refCount:0,element:s},V.set(l,i)}return i.refCount++,()=>{i&&--i.refCount===0&&(i.element.remove(),V.delete(l))}},[l]),{"aria-describedby":l?e:void 0}}function ne(l,e,t,i){let n=ke(t),s=t==null;d.exports.useEffect(()=>{if(s||!l.current)return;let r=l.current;return r.addEventListener(e,n,i),()=>{r.removeEventListener(e,n,i)}},[l,e,i,s,n])}function $e(l,e){let t=se(l,e,"left"),i=se(l,e,"top"),n=e.offsetWidth,s=e.offsetHeight,r=l.scrollLeft,a=l.scrollTop,{borderTopWidth:o,borderLeftWidth:p}=getComputedStyle(l),v=l.scrollLeft+parseInt(p,10),b=l.scrollTop+parseInt(o,10),f=v+l.clientWidth,y=b+l.clientHeight;t<=r?r=t-parseInt(p,10):t+n>f&&(r+=t+n-f),i<=b?a=i-parseInt(o,10):i+s>y&&(a+=i+s-y),l.scrollLeft=r,l.scrollTop=a}function se(l,e,t){const i=t==="left"?"offsetLeft":"offsetTop";let n=0;for(;e.offsetParent&&(n+=e[i],e.offsetParent!==l);){if(e.offsetParent.contains(l)){n-=l[i];break}e=e.offsetParent}return n}function re(l,e){if(document.contains(l)){let r=document.scrollingElement||document.documentElement;if(window.getComputedStyle(r).overflow==="hidden"){let o=Oe(l);for(let p of o)$e(p,l)}else{var t;let{left:o,top:p}=l.getBoundingClientRect();l==null||(t=l.scrollIntoView)===null||t===void 0||t.call(l,{block:"nearest"});let{left:v,top:b}=l.getBoundingClientRect();if(Math.abs(o-v)>1||Math.abs(p-b)>1){var i,n,s;e==null||(n=e.containingElement)===null||n===void 0||(i=n.scrollIntoView)===null||i===void 0||i.call(n,{block:"center",inline:"center"}),(s=l.scrollIntoView)===null||s===void 0||s.call(l,{block:"nearest"})}}}}var xe={exports:{}},Ke={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z=d.exports;function Ue(l,e){return l===e&&(l!==0||1/l===1/e)||l!==l&&e!==e}var We=typeof Object.is=="function"?Object.is:Ue,qe=z.useState,He=z.useEffect,je=z.useLayoutEffect,Ve=z.useDebugValue;function Ge(l,e){var t=e(),i=qe({inst:{value:t,getSnapshot:e}}),n=i[0].inst,s=i[1];return je(function(){n.value=t,n.getSnapshot=e,G(n)&&s({inst:n})},[l,t,e]),He(function(){return G(n)&&s({inst:n}),l(function(){G(n)&&s({inst:n})})},[l]),Ve(t),t}function G(l){var e=l.getSnapshot;l=l.value;try{var t=e();return!We(l,t)}catch{return!0}}function Ye(l,e){return e()}var Xe=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Ye:Ge;Ke.useSyncExternalStore=z.useSyncExternalStore!==void 0?z.useSyncExternalStore:Xe;(function(l){l.exports=Ke})(xe);const we=d.exports.createContext(!1),q=d.exports.createContext(null);function mt(l){if(d.exports.useContext(q))return l.content;let{collection:t,document:i}=_e(l.createCollection);return m.createElement(m.Fragment,null,m.createElement(De,null,m.createElement(q.Provider,{value:i},l.content)),m.createElement(Ze,{render:l.children,collection:t}))}function Ze({collection:l,render:e}){return e(l)}function Je(l,e,t){let i=pe(),n=d.exports.useRef(i);n.current=i;let s=d.exports.useCallback(()=>n.current?t():e(),[e,t]);return xe.exports.useSyncExternalStore(l,s)}const Qe=typeof m.useSyncExternalStore=="function"?m.useSyncExternalStore:Je;function _e(l){let[e]=d.exports.useState(()=>new Be((l==null?void 0:l())||new Re)),t=d.exports.useCallback(r=>e.subscribe(r),[e]),i=d.exports.useCallback(()=>{let r=e.getCollection();return e.isSSR&&e.resetAfterSSR(),r},[e]),n=d.exports.useCallback(()=>(e.isSSR=!0,e.getCollection()),[e]),s=Qe(t,i,n);return ge(()=>(e.isMounted=!0,()=>{e.isMounted=!1}),[e]),{collection:s,document:e}}const J=d.exports.createContext(null);function et(l,e,t,i,n,s){let r=d.exports.useCallback(o=>{o==null||o.setProps(e,t,i,s)},[e,t,i,s]),a=d.exports.useContext(J);if(a){let o=a.ownerDocument.nodesByProps.get(e);return o||(o=a.ownerDocument.createElement(l),o.setProps(e,t,i,s),a.appendChild(o),a.ownerDocument.updateCollection(),a.ownerDocument.nodesByProps.set(e,o)),n?m.createElement(J.Provider,{value:o},n):null}return m.createElement(l,{ref:r},n)}function $t(l,e){let t=({node:n})=>e(n.props,n.props.ref,n),i=d.exports.forwardRef((n,s)=>{if(!d.exports.useContext(we)){if(e.length>=3)throw new Error(e.name+" cannot be rendered outside a collection.");return e(n,s)}return et(l,n,s,"children"in n?n.children:null,null,a=>m.createElement(t,{node:a}))});return i.displayName=e.name,i}function tt(l){return me({...l,addIdAndValue:!0})}const oe=d.exports.createContext(null);function xt(l){let e=d.exports.useContext(oe),t=((e==null?void 0:e.dependencies)||[]).concat(l.dependencies),i=l.idScope||(e==null?void 0:e.idScope),n=tt({...l,idScope:i,dependencies:t});return d.exports.useContext(q)&&(n=m.createElement(it,null,n)),e=d.exports.useMemo(()=>({dependencies:t,idScope:i}),[i,...t]),m.createElement(oe.Provider,{value:e},n)}function it({children:l}){let e=d.exports.useContext(q),t=d.exports.useMemo(()=>m.createElement(q.Provider,{value:null},m.createElement(we.Provider,{value:!0},l)),[l]);return pe()?m.createElement(J.Provider,{value:e},t):be.exports.createPortal(t,e)}const Kt=d.exports.createContext(null),lt={CollectionRoot({collection:l,renderDropIndicator:e}){return ce(l,null,e)},CollectionBranch({collection:l,parent:e,renderDropIndicator:t}){return ce(l,e,t)}};function ce(l,e,t){return me({items:e?l.getChildren(e.key):l,dependencies:[t],children(i){var n;let s=i.render(i);if(!t||i.type!=="item")return s;let r=i.key,a=l.getKeyAfter(r);return m.createElement(m.Fragment,null,t({type:"item",key:r,dropPosition:"before"}),s,(a==null||((n=l.getItem(a))===null||n===void 0?void 0:n.type)!=="item")&&t({type:"item",key:r,dropPosition:"after"}))}})}const wt=d.exports.createContext(lt);function Ct(l){return d.exports.useMemo(()=>l!=null?new Set([l]):null,[l])}const nt=500;function st(l){let{isDisabled:e,onLongPressStart:t,onLongPressEnd:i,onLongPress:n,threshold:s=nt,accessibilityDescription:r}=l;const a=d.exports.useRef(void 0);let{addGlobalListener:o,removeGlobalListener:p}=Pe(),{pressProps:v}=ye({isDisabled:e,onPressStart(f){if(f.continuePropagation(),(f.pointerType==="mouse"||f.pointerType==="touch")&&(t&&t({...f,type:"longpressstart"}),a.current=setTimeout(()=>{f.target.dispatchEvent(new PointerEvent("pointercancel",{bubbles:!0})),n&&n({...f,type:"longpress"}),a.current=void 0},s),f.pointerType==="touch")){let y=D=>{D.preventDefault()};o(f.target,"contextmenu",y,{once:!0}),o(window,"pointerup",()=>{setTimeout(()=>{p(f.target,"contextmenu",y)},30)},{once:!0})}},onPressEnd(f){a.current&&clearTimeout(a.current),i&&(f.pointerType==="mouse"||f.pointerType==="touch")&&i({...f,type:"longpressend"})}}),b=ze(n&&!e?r:void 0);return{longPressProps:_(v,b)}}function Q(l){return Fe()?l.altKey:l.ctrlKey}function N(l){return Ae()?l.metaKey:l.ctrlKey}const rt=1e3;function ot(l){let{keyboardDelegate:e,selectionManager:t,onTypeSelect:i}=l,n=d.exports.useRef({search:"",timeout:null}).current,s=r=>{let a=ct(r.key);if(!a||r.ctrlKey||r.metaKey||!r.currentTarget.contains(r.target))return;a===" "&&n.search.trim().length>0&&(r.preventDefault(),"continuePropagation"in r||r.stopPropagation()),n.search+=a;let o=e.getKeyForSearch(n.search,t.focusedKey);o==null&&(o=e.getKeyForSearch(n.search)),o!=null&&(t.setFocusedKey(o),i&&i(o)),clearTimeout(n.timeout),n.timeout=setTimeout(()=>{n.search=""},rt)};return{typeSelectProps:{onKeyDownCapture:e.getKeyForSearch?s:null}}}function ct(l){return l.length===1||!/^[A-Z]/i.test(l)?l:""}function kt(l){let{selectionManager:e,keyboardDelegate:t,ref:i,autoFocus:n=!1,shouldFocusWrap:s=!1,disallowEmptySelection:r=!1,disallowSelectAll:a=!1,selectOnFocus:o=e.selectionBehavior==="replace",disallowTypeAhead:p=!1,shouldUseVirtualFocus:v,allowsTabNavigation:b=!1,isVirtualized:f,scrollRef:y=i,linkBehavior:D="action"}=l,{direction:w}=Me(),g=ve(),P=c=>{if(c.altKey&&c.key==="Tab"&&c.preventDefault(),!i.current.contains(c.target))return;const S=(h,L)=>{if(h!=null){if(e.isLink(h)&&D==="selection"&&o&&!Q(c)){be.exports.flushSync(()=>{e.setFocusedKey(h,L)});let O=y.current.querySelector(`[data-key="${CSS.escape(h.toString())}"]`),te=e.getItemProps(h);g.open(O,c,te.href,te.routerOptions);return}if(e.setFocusedKey(h,L),e.isLink(h)&&D==="override")return;c.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(h):o&&!Q(c)&&e.replaceSelection(h)}};switch(c.key){case"ArrowDown":if(t.getKeyBelow){var C,K;c.preventDefault();let h=e.focusedKey!=null?t.getKeyBelow(e.focusedKey):(C=t.getFirstKey)===null||C===void 0?void 0:C.call(t);h==null&&s&&(h=(K=t.getFirstKey)===null||K===void 0?void 0:K.call(t,e.focusedKey)),S(h)}break;case"ArrowUp":if(t.getKeyAbove){var T,F;c.preventDefault();let h=e.focusedKey!=null?t.getKeyAbove(e.focusedKey):(T=t.getLastKey)===null||T===void 0?void 0:T.call(t);h==null&&s&&(h=(F=t.getLastKey)===null||F===void 0?void 0:F.call(t,e.focusedKey)),S(h)}break;case"ArrowLeft":if(t.getKeyLeftOf){var U,u;c.preventDefault();let h=t.getKeyLeftOf(e.focusedKey);h==null&&s&&(h=w==="rtl"?(U=t.getFirstKey)===null||U===void 0?void 0:U.call(t,e.focusedKey):(u=t.getLastKey)===null||u===void 0?void 0:u.call(t,e.focusedKey)),S(h,w==="rtl"?"first":"last")}break;case"ArrowRight":if(t.getKeyRightOf){var A,j;c.preventDefault();let h=t.getKeyRightOf(e.focusedKey);h==null&&s&&(h=w==="rtl"?(A=t.getLastKey)===null||A===void 0?void 0:A.call(t,e.focusedKey):(j=t.getFirstKey)===null||j===void 0?void 0:j.call(t,e.focusedKey)),S(h,w==="rtl"?"last":"first")}break;case"Home":if(t.getFirstKey){c.preventDefault();let h=t.getFirstKey(e.focusedKey,N(c));e.setFocusedKey(h),N(c)&&c.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(h):o&&e.replaceSelection(h)}break;case"End":if(t.getLastKey){c.preventDefault();let h=t.getLastKey(e.focusedKey,N(c));e.setFocusedKey(h),N(c)&&c.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(h):o&&e.replaceSelection(h)}break;case"PageDown":if(t.getKeyPageBelow){c.preventDefault();let h=t.getKeyPageBelow(e.focusedKey);S(h)}break;case"PageUp":if(t.getKeyPageAbove){c.preventDefault();let h=t.getKeyPageAbove(e.focusedKey);S(h)}break;case"a":N(c)&&e.selectionMode==="multiple"&&a!==!0&&(c.preventDefault(),e.selectAll());break;case"Escape":!r&&e.selectedKeys.size!==0&&(c.stopPropagation(),c.preventDefault(),e.clearSelection());break;case"Tab":if(!b){if(c.shiftKey)i.current.focus();else{let h=Ie(i.current,{tabbable:!0}),L,O;do O=h.lastChild(),O&&(L=O);while(O);L&&!L.contains(document.activeElement)&&le(L)}break}}},$=d.exports.useRef({top:0,left:0});ne(y,"scroll",f?null:()=>{$.current={top:y.current.scrollTop,left:y.current.scrollLeft}});let x=c=>{if(e.isFocused){c.currentTarget.contains(c.target)||e.setFocused(!1);return}if(!!c.currentTarget.contains(c.target)){if(e.setFocused(!0),e.focusedKey==null){let K=F=>{F!=null&&(e.setFocusedKey(F),o&&e.replaceSelection(F))},T=c.relatedTarget;var S,C;T&&c.currentTarget.compareDocumentPosition(T)&Node.DOCUMENT_POSITION_FOLLOWING?K((S=e.lastSelectedKey)!==null&&S!==void 0?S:t.getLastKey()):K((C=e.firstSelectedKey)!==null&&C!==void 0?C:t.getFirstKey())}else f||(y.current.scrollTop=$.current.top,y.current.scrollLeft=$.current.left);if(e.focusedKey!=null){let K=y.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);K&&(K.contains(document.activeElement)||le(K),ie()==="keyboard"&&re(K,{containingElement:i.current}))}}},M=c=>{c.currentTarget.contains(c.relatedTarget)||e.setFocused(!1)};const E=d.exports.useRef(n);d.exports.useEffect(()=>{if(E.current){let c=null;n==="first"&&(c=t.getFirstKey()),n==="last"&&(c=t.getLastKey());let S=e.selectedKeys;if(S.size){for(let C of S)if(e.canSelectItem(C)){c=C;break}}e.setFocused(!0),e.setFocusedKey(c),c==null&&!v&&Z(i.current)}},[]);let I=d.exports.useRef(e.focusedKey);d.exports.useEffect(()=>{if(e.isFocused&&e.focusedKey!=null&&(e.focusedKey!==I.current||E.current)&&(y==null?void 0:y.current)){let c=ie(),S=i.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);if(!S)return;(c==="keyboard"||E.current)&&($e(y.current,S),c!=="virtual"&&re(S,{containingElement:i.current}))}e.isFocused&&e.focusedKey==null&&I.current!=null&&Z(i.current),I.current=e.focusedKey,E.current=!1}),ne(i,"react-aria-focus-scope-restore",c=>{c.preventDefault(),e.setFocused(!0)});let R={onKeyDown:P,onFocus:x,onBlur:M,onMouseDown(c){y.current===c.target&&c.preventDefault()}},{typeSelectProps:H}=ot({keyboardDelegate:t,selectionManager:e});p||(R=_(H,R));let B;return v||(B=e.focusedKey==null?0:-1),{collectionProps:{...R,tabIndex:B}}}function Dt(l){let{selectionManager:e,key:t,ref:i,shouldSelectOnPressUp:n,shouldUseVirtualFocus:s,focus:r,isDisabled:a,onAction:o,allowsDifferentPressOrigin:p,linkBehavior:v="action"}=l,b=ve(),f=u=>{if(u.pointerType==="keyboard"&&Q(u))e.toggleSelection(t);else{if(e.selectionMode==="none")return;if(e.isLink(t)){if(v==="selection"){let A=e.getItemProps(t);b.open(i.current,u,A.href,A.routerOptions),e.setSelectedKeys(e.selectedKeys);return}else if(v==="override"||v==="none")return}e.selectionMode==="single"?e.isSelected(t)&&!e.disallowEmptySelection?e.toggleSelection(t):e.replaceSelection(t):u&&u.shiftKey?e.extendSelection(t):e.selectionBehavior==="toggle"||u&&(N(u)||u.pointerType==="touch"||u.pointerType==="virtual")?e.toggleSelection(t):e.replaceSelection(t)}};d.exports.useEffect(()=>{t===e.focusedKey&&e.isFocused&&!s&&(r?r():document.activeElement!==i.current&&Z(i.current))},[i,t,e.focusedKey,e.childFocusStrategy,e.isFocused,s]),a=a||e.isDisabled(t);let y={};!s&&!a?y={tabIndex:t===e.focusedKey?0:-1,onFocus(u){u.target===i.current&&e.setFocusedKey(t)}}:a&&(y.onMouseDown=u=>{u.preventDefault()});let D=e.isLink(t)&&v==="override",w=e.isLink(t)&&v!=="selection"&&v!=="none",g=!a&&e.canSelectItem(t)&&!D,P=(o||w)&&!a,$=P&&(e.selectionBehavior==="replace"?!g:!g||e.isEmpty),x=P&&g&&e.selectionBehavior==="replace",M=$||x,E=d.exports.useRef(null),I=M&&g,R=d.exports.useRef(!1),H=d.exports.useRef(!1),B=u=>{if(o&&o(),w){let A=e.getItemProps(t);b.open(i.current,u,A.href,A.routerOptions)}},c={};n?(c.onPressStart=u=>{E.current=u.pointerType,R.current=I,u.pointerType==="keyboard"&&(!M||ue())&&f(u)},p?(c.onPressUp=$?null:u=>{u.pointerType!=="keyboard"&&g&&f(u)},c.onPress=$?B:null):c.onPress=u=>{if($||x&&u.pointerType!=="mouse"){if(u.pointerType==="keyboard"&&!ae())return;B(u)}else u.pointerType!=="keyboard"&&g&&f(u)}):(c.onPressStart=u=>{E.current=u.pointerType,R.current=I,H.current=$,g&&(u.pointerType==="mouse"&&!$||u.pointerType==="keyboard"&&(!P||ue()))&&f(u)},c.onPress=u=>{(u.pointerType==="touch"||u.pointerType==="pen"||u.pointerType==="virtual"||u.pointerType==="keyboard"&&M&&ae()||u.pointerType==="mouse"&&H.current)&&(M?B(u):g&&f(u))}),y["data-key"]=t,c.preventFocusOnPress=s;let{pressProps:S,isPressed:C}=ye(c),K=x?u=>{E.current==="mouse"&&(u.stopPropagation(),u.preventDefault(),B(u))}:void 0,{longPressProps:T}=st({isDisabled:!I,onLongPress(u){u.pointerType==="touch"&&(f(u),e.setSelectionBehavior("toggle"))}}),F=u=>{E.current==="touch"&&R.current&&u.preventDefault()},U=e.isLink(t)?u=>{Ee.isOpening||u.preventDefault()}:void 0;return{itemProps:_(y,g||$?S:{},I?T:{},{onDoubleClick:K,onDragStartCapture:F,onClick:U}),isPressed:C,isSelected:e.isSelected(t),isFocused:e.isFocused&&e.focusedKey===t,isDisabled:a,allowsSelection:g,hasAction:M}}function ae(){let l=window.event;return(l==null?void 0:l.key)==="Enter"}function ue(){let l=window.event;return(l==null?void 0:l.key)===" "||(l==null?void 0:l.code)==="Space"}class at{build(e,t){return this.context=t,de(()=>this.iterateCollection(e))}*iterateCollection(e){let{children:t,items:i}=e;if(typeof t=="function"){if(!i)throw new Error("props.children was a function but props.items is missing");for(let n of e.items)yield*this.getFullNode({value:n},{renderer:t})}else{let n=[];m.Children.forEach(t,r=>{n.push(r)});let s=0;for(let r of n){let a=this.getFullNode({element:r,index:s},{});for(let o of a)s++,yield o}}}getKey(e,t,i,n){if(e.key!=null)return e.key;if(t.type==="cell"&&t.key!=null)return`${n}${t.key}`;let s=t.value;if(s!=null){var r;let a=(r=s.key)!==null&&r!==void 0?r:s.id;if(a==null)throw new Error("No key found for item");return a}return n?`${n}.${t.index}`:`$.${t.index}`}getChildState(e,t){return{renderer:t.renderer||e.renderer}}*getFullNode(e,t,i,n){let s=e.element;if(!s&&e.value&&t&&t.renderer){let o=this.cache.get(e.value);if(o&&(!o.shouldInvalidate||!o.shouldInvalidate(this.context))){o.index=e.index,o.parentKey=n?n.key:null,yield o;return}s=t.renderer(e.value)}if(m.isValidElement(s)){let o=s.type;if(typeof o!="function"&&typeof o.getCollectionNode!="function"){let f=typeof s.type=="function"?s.type.name:s.type;throw new Error(`Unknown element <${f}> in collection.`)}let p=o.getCollectionNode(s.props,this.context),v=e.index,b=p.next();for(;!b.done&&b.value;){let f=b.value;e.index=v;let y=f.key;y||(y=f.element?null:this.getKey(s,e,t,i));let w=[...this.getFullNode({...f,key:y,index:v,wrapper:ut(e.wrapper,f.wrapper)},this.getChildState(t,f),i?`${i}${s.key}`:s.key,n)];for(let g of w){if(g.value=f.value||e.value,g.value&&this.cache.set(g.value,g),e.type&&g.type!==e.type)throw new Error(`Unsupported type <${Y(g.type)}> in <${Y(n.type)}>. Only <${Y(e.type)}> is supported.`);v++,yield g}b=p.next(w)}return}if(e.key==null)return;let r=this,a={type:e.type,props:e.props,key:e.key,parentKey:n?n.key:null,value:e.value,level:n?n.level+1:0,index:e.index,rendered:e.rendered,textValue:e.textValue,"aria-label":e["aria-label"],wrapper:e.wrapper,shouldInvalidate:e.shouldInvalidate,hasChildNodes:e.hasChildNodes,childNodes:de(function*(){if(!e.hasChildNodes)return;let o=0;for(let p of e.childNodes()){p.key!=null&&(p.key=`${a.key}${p.key}`),p.index=o;let v=r.getFullNode(p,r.getChildState(t,p),a.key,a);for(let b of v)o++,yield b}})};yield a}constructor(){this.cache=new WeakMap}}function de(l){let e=[],t=null;return{*[Symbol.iterator](){for(let i of e)yield i;t||(t=l());for(let i of t)e.push(i),yield i}}}function ut(l,e){if(l&&e)return t=>l(e(t));if(l)return l;if(e)return e}function Y(l){return l[0].toUpperCase()+l.slice(1)}function Pt(l,e,t){let i=d.exports.useMemo(()=>new at,[]),{children:n,items:s,collection:r}=l;return d.exports.useMemo(()=>{if(r)return r;let o=i.build({children:n,items:s},t);return e(o)},[i,n,s,r,t,e])}function dt(l,e){return typeof e.getChildren=="function"?e.getChildren(l.key):l.childNodes}function ft(l){return ht(l,0)}function ht(l,e){if(e<0)return;let t=0;for(let i of l){if(t===e)return i;t++}}function X(l,e,t){if(e.parentKey===t.parentKey)return e.index-t.index;let i=[...fe(l,e),e],n=[...fe(l,t),t],s=i.slice(0,n.length).findIndex((r,a)=>r!==n[a]);return s!==-1?(e=i[s],t=n[s],e.index-t.index):i.findIndex(r=>r===t)>=0?1:(n.findIndex(r=>r===e)>=0,-1)}function fe(l,e){let t=[];for(;(e==null?void 0:e.parentKey)!=null;)e=l.getItem(e.parentKey),t.unshift(e);return t}class k extends Set{constructor(e,t,i){super(e),e instanceof k?(this.anchorKey=t||e.anchorKey,this.currentKey=i||e.currentKey):(this.anchorKey=t,this.currentKey=i)}}function pt(l,e){if(l.size!==e.size)return!1;for(let t of l)if(!e.has(t))return!1;return!0}function Mt(l){let{selectionMode:e="none",disallowEmptySelection:t,allowDuplicateSelectionEvents:i,selectionBehavior:n="toggle",disabledBehavior:s="all"}=l,r=d.exports.useRef(!1),[,a]=d.exports.useState(!1),o=d.exports.useRef(null),p=d.exports.useRef(null),[,v]=d.exports.useState(null),b=d.exports.useMemo(()=>he(l.selectedKeys),[l.selectedKeys]),f=d.exports.useMemo(()=>he(l.defaultSelectedKeys,new k),[l.defaultSelectedKeys]),[y,D]=Te(b,f,l.onSelectionChange),w=d.exports.useMemo(()=>l.disabledKeys?new Set(l.disabledKeys):new Set,[l.disabledKeys]),[g,P]=d.exports.useState(n);n==="replace"&&g==="toggle"&&typeof y=="object"&&y.size===0&&P("replace");let $=d.exports.useRef(n);return d.exports.useEffect(()=>{n!==$.current&&(P(n),$.current=n)},[n]),{selectionMode:e,disallowEmptySelection:t,selectionBehavior:g,setSelectionBehavior:P,get isFocused(){return r.current},setFocused(x){r.current=x,a(x)},get focusedKey(){return o.current},get childFocusStrategy(){return p.current},setFocusedKey(x,M="first"){o.current=x,p.current=M,v(x)},selectedKeys:y,setSelectedKeys(x){(i||!pt(x,y))&&D(x)},disabledKeys:w,disabledBehavior:s}}function he(l,e){return l?l==="all"?"all":new k(l):e}class Et{get selectionMode(){return this.state.selectionMode}get disallowEmptySelection(){return this.state.disallowEmptySelection}get selectionBehavior(){return this.state.selectionBehavior}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}get isFocused(){return this.state.isFocused}setFocused(e){this.state.setFocused(e)}get focusedKey(){return this.state.focusedKey}get childFocusStrategy(){return this.state.childFocusStrategy}setFocusedKey(e,t){(e==null||this.collection.getItem(e))&&this.state.setFocusedKey(e,t)}get selectedKeys(){return this.state.selectedKeys==="all"?new Set(this.getSelectAllKeys()):this.state.selectedKeys}get rawSelection(){return this.state.selectedKeys}isSelected(e){return this.state.selectionMode==="none"?!1:(e=this.getKey(e),this.state.selectedKeys==="all"?this.canSelectItem(e):this.state.selectedKeys.has(e))}get isEmpty(){return this.state.selectedKeys!=="all"&&this.state.selectedKeys.size===0}get isSelectAll(){if(this.isEmpty)return!1;if(this.state.selectedKeys==="all")return!0;if(this._isSelectAll!=null)return this._isSelectAll;let e=this.getSelectAllKeys(),t=this.state.selectedKeys;return this._isSelectAll=e.every(i=>t.has(i)),this._isSelectAll}get firstSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let i=this.collection.getItem(t);(!e||i&&X(this.collection,i,e)<0)&&(e=i)}return e==null?void 0:e.key}get lastSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let i=this.collection.getItem(t);(!e||i&&X(this.collection,i,e)>0)&&(e=i)}return e==null?void 0:e.key}get disabledKeys(){return this.state.disabledKeys}get disabledBehavior(){return this.state.disabledBehavior}extendSelection(e){if(this.selectionMode==="none")return;if(this.selectionMode==="single"){this.replaceSelection(e);return}e=this.getKey(e);let t;if(this.state.selectedKeys==="all")t=new k([e],e,e);else{let i=this.state.selectedKeys,n=i.anchorKey||e;t=new k(i,n,e);for(let s of this.getKeyRange(n,i.currentKey||e))t.delete(s);for(let s of this.getKeyRange(e,n))this.canSelectItem(s)&&t.add(s)}this.state.setSelectedKeys(t)}getKeyRange(e,t){let i=this.collection.getItem(e),n=this.collection.getItem(t);return i&&n?X(this.collection,i,n)<=0?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){let i=[],n=e;for(;n;){let s=this.collection.getItem(n);if((s&&s.type==="item"||s.type==="cell"&&this.allowsCellSelection)&&i.push(n),n===t)return i;n=this.collection.getKeyAfter(n)}return[]}getKey(e){let t=this.collection.getItem(e);if(!t||t.type==="cell"&&this.allowsCellSelection)return e;for(;t.type!=="item"&&t.parentKey!=null;)t=this.collection.getItem(t.parentKey);return!t||t.type!=="item"?null:t.key}toggleSelection(e){if(this.selectionMode==="none")return;if(this.selectionMode==="single"&&!this.isSelected(e)){this.replaceSelection(e);return}if(e=this.getKey(e),e==null)return;let t=new k(this.state.selectedKeys==="all"?this.getSelectAllKeys():this.state.selectedKeys);t.has(e)?t.delete(e):this.canSelectItem(e)&&(t.add(e),t.anchorKey=e,t.currentKey=e),!(this.disallowEmptySelection&&t.size===0)&&this.state.setSelectedKeys(t)}replaceSelection(e){if(this.selectionMode==="none"||(e=this.getKey(e),e==null))return;let t=this.canSelectItem(e)?new k([e],e,e):new k;this.state.setSelectedKeys(t)}setSelectedKeys(e){if(this.selectionMode==="none")return;let t=new k;for(let i of e)if(i=this.getKey(i),i!=null&&(t.add(i),this.selectionMode==="single"))break;this.state.setSelectedKeys(t)}getSelectAllKeys(){let e=[],t=i=>{for(;i!=null;){if(this.canSelectItem(i)){let n=this.collection.getItem(i);n.type==="item"&&e.push(i),n.hasChildNodes&&(this.allowsCellSelection||n.type!=="item")&&t(ft(dt(n,this.collection)).key)}i=this.collection.getKeyAfter(i)}};return t(this.collection.getFirstKey()),e}selectAll(){!this.isSelectAll&&this.selectionMode==="multiple"&&this.state.setSelectedKeys("all")}clearSelection(){!this.disallowEmptySelection&&(this.state.selectedKeys==="all"||this.state.selectedKeys.size>0)&&this.state.setSelectedKeys(new k)}toggleSelectAll(){this.isSelectAll?this.clearSelection():this.selectAll()}select(e,t){this.selectionMode!=="none"&&(this.selectionMode==="single"?this.isSelected(e)&&!this.disallowEmptySelection?this.toggleSelection(e):this.replaceSelection(e):this.selectionBehavior==="toggle"||t&&(t.pointerType==="touch"||t.pointerType==="virtual")?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys)return!0;let t=this.selectedKeys;if(e.size!==t.size)return!1;for(let i of e)if(!t.has(i))return!1;for(let i of t)if(!e.has(i))return!1;return!0}canSelectItem(e){var t;if(this.state.selectionMode==="none"||this.state.disabledKeys.has(e))return!1;let i=this.collection.getItem(e);return!(!i||(i==null||(t=i.props)===null||t===void 0?void 0:t.isDisabled)||i.type==="cell"&&!this.allowsCellSelection)}isDisabled(e){var t,i;return this.state.disabledBehavior==="all"&&(this.state.disabledKeys.has(e)||!!(!((i=this.collection.getItem(e))===null||i===void 0||(t=i.props)===null||t===void 0)&&t.isDisabled))}isLink(e){var t,i;return!!(!((i=this.collection.getItem(e))===null||i===void 0||(t=i.props)===null||t===void 0)&&t.href)}getItemProps(e){var t;return(t=this.collection.getItem(e))===null||t===void 0?void 0:t.props}constructor(e,t,i){this.collection=e,this.state=t;var n;this.allowsCellSelection=(n=i==null?void 0:i.allowsCellSelection)!==null&&n!==void 0?n:!1,this._isSelectAll=null}}export{Dt as $,St as a,kt as b,Mt as c,Pt as d,Et as e,$t as f,xt as g,wt as h,Ct as i,mt as j,Le as k,dt as l,st as m,Kt as n};
