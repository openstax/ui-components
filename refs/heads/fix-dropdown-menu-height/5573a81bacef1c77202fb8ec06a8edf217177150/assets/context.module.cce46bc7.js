import{R as P,r as c,b as Fe,$ as Ke}from"./index.d02ef7ff.js";import{$ as L,f as Le,b as re,g as He,h as Ie,e as N,i as he,j as F,k as Ae,l as Oe,m as ce,n as ne,o as De,p as Re}from"./focusSafely.module.b47f43ce.js";const z={prefix:String(Math.round(Math.random()*1e10)),current:0},me=P.createContext(z),Ve=P.createContext(!1);let We=Boolean(typeof window<"u"&&window.document&&window.document.createElement),Z=new WeakMap;function Ne(e=!1){let t=c.exports.useContext(me),r=c.exports.useRef(null);if(r.current===null&&!e){var a,o;let l=(o=P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||o===void 0||(a=o.ReactCurrentOwner)===null||a===void 0?void 0:a.current;if(l){let i=Z.get(l);i==null?Z.set(l,{id:t.current,state:l.memoizedState}):l.memoizedState!==i.state&&(t.current=i.id,Z.delete(l))}r.current=++t.current}return r.current}function Ge(e){let t=c.exports.useContext(me);t===z&&!We&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let r=Ne(!!e),a=`react-aria${t.prefix}`;return e||`${a}-${r}`}function Ue(e){let t=P.useId(),[r]=c.exports.useState(se()),a=r?"react-aria":`react-aria${z.prefix}`;return e||`${a}-${t}`}const Xe=typeof P.useId=="function"?Ue:Ge;function je(){return!1}function Be(){return!0}function Ye(e){return()=>{}}function se(){return typeof P.useSyncExternalStore=="function"?P.useSyncExternalStore(Ye,je,Be):c.exports.useContext(Ve)}if(typeof HTMLTemplateElement<"u"){const e=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild").get;Object.defineProperty(HTMLTemplateElement.prototype,"firstChild",{configurable:!0,enumerable:!0,get:function(){return this.dataset.reactAriaHidden?this.content.firstChild:e.call(this)}})}const q=c.exports.createContext(!1),ze=typeof DocumentFragment<"u"?new DocumentFragment:null;function At(e){let t=c.exports.useContext(q),r=se();if(t)return P.createElement(P.Fragment,null,e.children);let a=P.createElement(q.Provider,{value:!0},e.children);return r?P.createElement("template",{"data-react-aria-hidden":!0},a):Fe.exports.createPortal(a,ze)}function Ot(e){let t=(r,a)=>c.exports.useContext(q)?null:e(r,a);return t.displayName=e.displayName||e.name,c.exports.forwardRef(t)}function Dt(){return c.exports.useContext(q)}function K(e){const t=c.exports.useRef(null);return L(()=>{t.current=e},[e]),c.exports.useCallback((...r)=>{const a=t.current;return a==null?void 0:a(...r)},[])}function qe(e){let[t,r]=c.exports.useState(e),a=c.exports.useRef(null),o=K(()=>{if(!a.current)return;let i=a.current.next();if(i.done){a.current=null;return}t===i.value?o():r(i.value)});L(()=>{a.current&&o()});let l=K(i=>{a.current=i(t),o()});return[t,l]}let Je=Boolean(typeof window<"u"&&window.document&&window.document.createElement),J=new Map;function Qe(e){let[t,r]=c.exports.useState(e),a=c.exports.useRef(null),o=Xe(t),l=c.exports.useCallback(i=>{a.current=i},[]);return Je&&J.set(o,l),L(()=>{let i=o;return()=>{J.delete(i)}},[o]),c.exports.useEffect(()=>{let i=a.current;i&&(a.current=null,r(i))}),o}function Ze(e,t){if(e===t)return e;let r=J.get(e);if(r)return r(t),t;let a=J.get(t);return a?(a(e),e):t}function Rt(e=[]){let t=Qe(),[r,a]=qe(t),o=c.exports.useCallback(()=>{a(function*(){yield t,yield document.getElementById(t)?t:void 0})},[t,a]);return L(o,[t,o,...e]),r}function xe(...e){return(...t)=>{for(let r of e)typeof r=="function"&&r(...t)}}function Te(e){var t,r,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(r=Te(e[t]))&&(a&&(a+=" "),a+=r)}else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function _e(){for(var e,t,r=0,a="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=Te(e))&&(a&&(a+=" "),a+=t);return a}function le(...e){let t={...e[0]};for(let r=1;r<e.length;r++){let a=e[r];for(let o in a){let l=t[o],i=a[o];typeof l=="function"&&typeof i=="function"&&o[0]==="o"&&o[1]==="n"&&o.charCodeAt(2)>=65&&o.charCodeAt(2)<=90?t[o]=xe(l,i):(o==="className"||o==="UNSAFE_className")&&typeof l=="string"&&typeof i=="string"?t[o]=_e(l,i):o==="id"&&l&&i?t.id=Ze(l,i):t[o]=i!==void 0?i:l}}return t}function et(...e){return e.length===1&&e[0]?e[0]:t=>{for(let r of e)typeof r=="function"?r(t):r!=null&&(r.current=t)}}const tt=new Set(["id"]),rt=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),nt=new Set(["href","hrefLang","target","rel","download","ping","referrerPolicy"]),at=/^(data-.*)$/;function Vt(e,t={}){let{labelable:r,isLink:a,propNames:o}=t,l={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(tt.has(i)||r&&rt.has(i)||a&&nt.has(i)||(o==null?void 0:o.has(i))||at.test(i))&&(l[i]=e[i]);return l}const ot=c.exports.createContext({isNative:!0,open:lt,useHref:e=>e});function it(){return c.exports.useContext(ot)}function W(e,t,r=!0){var a,o;let{metaKey:l,ctrlKey:i,altKey:f,shiftKey:p}=t;Le()&&((o=window.event)===null||o===void 0||(a=o.type)===null||a===void 0?void 0:a.startsWith("key"))&&e.target==="_blank"&&(re()?l=!0:i=!0);let g=He()&&re()&&!Ie()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:l,ctrlKey:i,altKey:f,shiftKey:p}):new MouseEvent("click",{metaKey:l,ctrlKey:i,altKey:f,shiftKey:p,bubbles:!0,cancelable:!0});W.isOpening=r,N(e),e.dispatchEvent(g),W.isOpening=!1}W.isOpening=!1;function st(e,t){if(e instanceof HTMLAnchorElement)t(e);else if(e.hasAttribute("data-href")){let r=document.createElement("a");r.href=e.getAttribute("data-href"),e.hasAttribute("data-target")&&(r.target=e.getAttribute("data-target")),e.hasAttribute("data-rel")&&(r.rel=e.getAttribute("data-rel")),e.hasAttribute("data-download")&&(r.download=e.getAttribute("data-download")),e.hasAttribute("data-ping")&&(r.ping=e.getAttribute("data-ping")),e.hasAttribute("data-referrer-policy")&&(r.referrerPolicy=e.getAttribute("data-referrer-policy")),e.appendChild(r),t(r),e.removeChild(r)}}function lt(e,t){st(e,r=>W(r,t))}function Wt(e){let t=it();return{href:e!=null&&e.href?t.useHref(e==null?void 0:e.href):void 0,target:e==null?void 0:e.target,rel:e==null?void 0:e.rel,download:e==null?void 0:e.download,ping:e==null?void 0:e.ping,referrerPolicy:e==null?void 0:e.referrerPolicy}}function ut(){let e=c.exports.useRef(new Map),t=c.exports.useCallback((o,l,i,f)=>{let p=f!=null&&f.once?(...g)=>{e.current.delete(i),i(...g)}:i;e.current.set(i,{type:l,eventTarget:o,fn:p,options:f}),o.addEventListener(l,i,f)},[]),r=c.exports.useCallback((o,l,i,f)=>{var p;let g=((p=e.current.get(i))===null||p===void 0?void 0:p.fn)||i;o.removeEventListener(l,g,f),e.current.delete(i)},[]),a=c.exports.useCallback(()=>{e.current.forEach((o,l)=>{r(o.eventTarget,o.type,l,o.options)})},[r]);return c.exports.useEffect(()=>a,[a]),{addGlobalListener:t,removeGlobalListener:r,removeAllGlobalListeners:a}}function ct(e){const t=c.exports.useRef(null);return c.exports.useMemo(()=>({get current(){return t.current},set current(r){t.current=r,typeof e=="function"?e(r):e&&(e.current=r)}}),[e])}function ft(e,t){L(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}})}function Nt(e,t,r){let[a,o]=c.exports.useState(e||t),l=c.exports.useRef(e!==void 0),i=e!==void 0;c.exports.useEffect(()=>{let g=l.current;g!==i&&console.warn(`WARN: A component changed from ${g?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}.`),l.current=i},[i]);let f=i?e:a,p=c.exports.useCallback((g,...v)=>{let m=(x,...b)=>{r&&(Object.is(f,x)||r(x,...b)),i||(f=x)};typeof g=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),o((b,...E)=>{let T=g(i?f:b,...E);return m(T,...v),i?b:T})):(i||o(g),m(g,...v))},[i,f,r]);return[f,p]}const fe=Symbol("default");function Gt({values:e,children:t}){for(let[r,a]of e)t=P.createElement(r.Provider,{value:a},t);return t}function Ut(e){let{className:t,style:r,children:a,defaultClassName:o,defaultChildren:l,defaultStyle:i,values:f}=e;return c.exports.useMemo(()=>{let p,g,v;return typeof t=="function"?p=t({...f,defaultClassName:o}):p=t,typeof r=="function"?g=r({...f,defaultStyle:i||{}}):g=r,typeof a=="function"?v=a({...f,defaultChildren:l}):a==null?v=l:v=a,{className:p!=null?p:o,style:g||i?{...i,...g}:void 0,children:v!=null?v:l,"data-rac":""}},[t,r,a,o,l,i,f])}function dt(e,t){let r=c.exports.useContext(e);if(t===null)return null;if(r&&typeof r=="object"&&"slots"in r&&r.slots){let a=new Intl.ListFormat().format(Object.keys(r.slots).map(l=>`"${l}"`));if(!t&&!r.slots[fe])throw new Error(`A slot prop is required. Valid slot names are ${a}.`);let o=t||fe;if(!r.slots[o])throw new Error(`Invalid slot "${t}". Valid slot names are ${a}.`);return r.slots[o]}return r}function Xt(e,t,r){let a=dt(r,e.slot)||{},{ref:o,...l}=a,i=ct(c.exports.useMemo(()=>et(t,o),[t,o])),f=le(l,e);return"style"in l&&l.style&&"style"in e&&e.style&&(typeof l.style=="function"||typeof e.style=="function"?f.style=p=>{let g=typeof l.style=="function"?l.style(p):l.style,v={...p.defaultStyle,...g},m=typeof e.style=="function"?e.style({...p,defaultStyle:v}):e.style;return{...v,...m}}:f.style={...l.style,...e.style}),[f,i]}function jt(){let[e,t]=c.exports.useState(!0),r=c.exports.useRef(!1),a=c.exports.useCallback(o=>{r.current=!0,t(!!o)},[]);return L(()=>{r.current||t(!1)},[]),[a,e]}function Bt(e,t=!0){let[r,a]=c.exports.useState(!0);return Pe(e,r&&t,c.exports.useCallback(()=>a(!1),[])),r&&t}function Yt(e,t){let[r,a]=c.exports.useState(!1),[o,l]=c.exports.useState("idle");return!t&&e.current&&o==="idle"&&(r=!0,a(!0),l("exiting")),!e.current&&o==="exited"&&l("idle"),Pe(e,r,c.exports.useCallback(()=>{l("exited"),a(!1)},[])),r}function Pe(e,t,r){let a=c.exports.useRef(null);t&&e.current&&(a.current=window.getComputedStyle(e.current).animation),L(()=>{if(t&&e.current){let o=window.getComputedStyle(e.current);if(o.animationName&&o.animationName!=="none"&&o.animation!==a.current){let l=f=>{f.target===e.current&&(i.removeEventListener("animationend",l),Ke.flushSync(()=>{r()}))},i=e.current;return i.addEventListener("animationend",l),()=>{i.removeEventListener("animationend",l)}}else r()}},[e,t,r])}let V="default",ae="",Y=new WeakMap;function de(e){if(he()){if(V==="default"){const t=F(e);ae=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect="none"}V="disabled"}else(e instanceof HTMLElement||e instanceof SVGElement)&&(Y.set(e,e.style.userSelect),e.style.userSelect="none")}function X(e){if(he()){if(V!=="disabled")return;V="restoring",setTimeout(()=>{Ae(()=>{if(V==="restoring"){const t=F(e);t.documentElement.style.webkitUserSelect==="none"&&(t.documentElement.style.webkitUserSelect=ae||""),ae="",V="default"}})},300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&Y.has(e)){let t=Y.get(e);e.style.userSelect==="none"&&(e.style.userSelect=t),e.getAttribute("style")===""&&e.removeAttribute("style"),Y.delete(e)}}const Se=P.createContext({register:()=>{}});Se.displayName="PressResponderContext";function pt(e,t){return t.get?t.get.call(e):t.value}function Ee(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function gt(e,t){var r=Ee(e,t,"get");return pt(e,r)}function $t(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function bt(e,t,r){$t(e,t),t.set(e,r)}function vt(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}function pe(e,t,r){var a=Ee(e,t,"set");return vt(e,a,r),r}function yt(e){let t=c.exports.useContext(Se);if(t){let{register:r,...a}=t;e=le(a,e),r()}return ft(t,e.ref),e}var j=new WeakMap;class B{continuePropagation(){pe(this,j,!1)}get shouldStopPropagation(){return gt(this,j)}constructor(t,r,a,o){bt(this,j,{writable:!0,value:void 0}),pe(this,j,!0);var l;let i=(l=o==null?void 0:o.target)!==null&&l!==void 0?l:a.currentTarget;const f=i==null?void 0:i.getBoundingClientRect();let p,g=0,v,m=null;a.clientX!=null&&a.clientY!=null&&(v=a.clientX,m=a.clientY),f&&(v!=null&&m!=null?(p=v-f.left,g=m-f.top):(p=f.width/2,g=f.height/2)),this.type=t,this.pointerType=r,this.target=a.currentTarget,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.x=p,this.y=g}}const ge=Symbol("linkClicked");function zt(e){let{onPress:t,onPressChange:r,onPressStart:a,onPressEnd:o,onPressUp:l,isDisabled:i,isPressed:f,preventFocusOnPress:p,shouldCancelOnPointerExit:g,allowTextSelectionOnPress:v,ref:m,...x}=yt(e),[b,E]=c.exports.useState(!1),T=c.exports.useRef({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:H,removeAllGlobalListeners:A}=ut(),C=K((n,$)=>{let w=T.current;if(i||w.didFirePressStart)return!1;let d=!0;if(w.isTriggeringEvent=!0,a){let y=new B("pressstart",$,n);a(y),d=y.shouldStopPropagation}return r&&r(!0),w.isTriggeringEvent=!1,w.didFirePressStart=!0,E(!0),d}),S=K((n,$,w=!0)=>{let d=T.current;if(!d.didFirePressStart)return!1;d.ignoreClickAfterPress=!0,d.didFirePressStart=!1,d.isTriggeringEvent=!0;let y=!0;if(o){let s=new B("pressend",$,n);o(s),y=s.shouldStopPropagation}if(r&&r(!1),E(!1),t&&w&&!i){let s=new B("press",$,n);t(s),y&&(y=s.shouldStopPropagation)}return d.isTriggeringEvent=!1,y}),O=K((n,$)=>{let w=T.current;if(i)return!1;if(l){w.isTriggeringEvent=!0;let d=new B("pressup",$,n);return l(d),w.isTriggeringEvent=!1,d.shouldStopPropagation}return!0}),I=K(n=>{let $=T.current;$.isPressed&&$.target&&($.isOverTarget&&$.pointerType!=null&&S(k($.target,n),$.pointerType,!1),$.isPressed=!1,$.isOverTarget=!1,$.activePointerId=null,$.pointerType=null,A(),v||X($.target))}),U=K(n=>{g&&I(n)}),Me=c.exports.useMemo(()=>{let n=T.current,$={onKeyDown(d){if(_(d.nativeEvent,d.currentTarget)&&d.currentTarget.contains(d.target)){var y;be(d.target,d.key)&&d.preventDefault();let s=!0;if(!n.isPressed&&!d.repeat){n.target=d.currentTarget,n.isPressed=!0,s=C(d,"keyboard");let u=d.currentTarget,h=D=>{_(D,u)&&!D.repeat&&u.contains(D.target)&&n.target&&O(k(n.target,D),"keyboard")};H(F(d.currentTarget),"keyup",xe(h,w),!0)}s&&d.stopPropagation(),d.metaKey&&re()&&((y=n.metaKeyEvents)===null||y===void 0||y.set(d.key,d.nativeEvent))}else d.key==="Meta"&&(n.metaKeyEvents=new Map)},onClick(d){if(!(d&&!d.currentTarget.contains(d.target))&&d&&d.button===0&&!n.isTriggeringEvent&&!W.isOpening){let y=!0;if(i&&d.preventDefault(),!n.ignoreClickAfterPress&&!n.ignoreEmulatedMouseEvents&&!n.isPressed&&(n.pointerType==="virtual"||ce(d.nativeEvent))){!i&&!p&&N(d.currentTarget);let s=C(d,"virtual"),u=O(d,"virtual"),h=S(d,"virtual");y=s&&u&&h}n.ignoreEmulatedMouseEvents=!1,n.ignoreClickAfterPress=!1,y&&d.stopPropagation()}}},w=d=>{var y;if(n.isPressed&&n.target&&_(d,n.target)){var s;be(d.target,d.key)&&d.preventDefault();let h=d.target;S(k(n.target,d),"keyboard",n.target.contains(h)),A(),d.key!=="Enter"&&ue(n.target)&&n.target.contains(h)&&!d[ge]&&(d[ge]=!0,W(n.target,d,!1)),n.isPressed=!1,(s=n.metaKeyEvents)===null||s===void 0||s.delete(d.key)}else if(d.key==="Meta"&&((y=n.metaKeyEvents)===null||y===void 0?void 0:y.size)){var u;let h=n.metaKeyEvents;n.metaKeyEvents=void 0;for(let D of h.values())(u=n.target)===null||u===void 0||u.dispatchEvent(new KeyboardEvent("keyup",D))}};if(typeof PointerEvent<"u"){$.onPointerDown=u=>{if(u.button!==0||!u.currentTarget.contains(u.target))return;if(Oe(u.nativeEvent)){n.pointerType="virtual";return}ee(u.currentTarget)&&u.preventDefault(),n.pointerType=u.pointerType;let h=!0;n.isPressed||(n.isPressed=!0,n.isOverTarget=!0,n.activePointerId=u.pointerId,n.target=u.currentTarget,!i&&!p&&N(u.currentTarget),v||de(n.target),h=C(u,n.pointerType),H(F(u.currentTarget),"pointermove",d,!1),H(F(u.currentTarget),"pointerup",y,!1),H(F(u.currentTarget),"pointercancel",s,!1)),h&&u.stopPropagation()},$.onMouseDown=u=>{!u.currentTarget.contains(u.target)||u.button===0&&(ee(u.currentTarget)&&u.preventDefault(),u.stopPropagation())},$.onPointerUp=u=>{!u.currentTarget.contains(u.target)||n.pointerType==="virtual"||u.button===0&&R(u,u.currentTarget)&&O(u,n.pointerType||u.pointerType)};let d=u=>{u.pointerId===n.activePointerId&&(n.target&&R(u,n.target)?!n.isOverTarget&&n.pointerType!=null&&(n.isOverTarget=!0,C(k(n.target,u),n.pointerType)):n.target&&n.isOverTarget&&n.pointerType!=null&&(n.isOverTarget=!1,S(k(n.target,u),n.pointerType,!1),U(u)))},y=u=>{u.pointerId===n.activePointerId&&n.isPressed&&u.button===0&&n.target&&(R(u,n.target)&&n.pointerType!=null?S(k(n.target,u),n.pointerType):n.isOverTarget&&n.pointerType!=null&&S(k(n.target,u),n.pointerType,!1),n.isPressed=!1,n.isOverTarget=!1,n.activePointerId=null,n.pointerType=null,A(),v||X(n.target))},s=u=>{I(u)};$.onDragStart=u=>{!u.currentTarget.contains(u.target)||I(u)}}else{$.onMouseDown=s=>{if(s.button!==0||!s.currentTarget.contains(s.target))return;if(ee(s.currentTarget)&&s.preventDefault(),n.ignoreEmulatedMouseEvents){s.stopPropagation();return}n.isPressed=!0,n.isOverTarget=!0,n.target=s.currentTarget,n.pointerType=ce(s.nativeEvent)?"virtual":"mouse",!i&&!p&&N(s.currentTarget),C(s,n.pointerType)&&s.stopPropagation(),H(F(s.currentTarget),"mouseup",d,!1)},$.onMouseEnter=s=>{if(!s.currentTarget.contains(s.target))return;let u=!0;n.isPressed&&!n.ignoreEmulatedMouseEvents&&n.pointerType!=null&&(n.isOverTarget=!0,u=C(s,n.pointerType)),u&&s.stopPropagation()},$.onMouseLeave=s=>{if(!s.currentTarget.contains(s.target))return;let u=!0;n.isPressed&&!n.ignoreEmulatedMouseEvents&&n.pointerType!=null&&(n.isOverTarget=!1,u=S(s,n.pointerType,!1),U(s)),u&&s.stopPropagation()},$.onMouseUp=s=>{!s.currentTarget.contains(s.target)||!n.ignoreEmulatedMouseEvents&&s.button===0&&O(s,n.pointerType||"mouse")};let d=s=>{if(s.button===0){if(n.isPressed=!1,A(),n.ignoreEmulatedMouseEvents){n.ignoreEmulatedMouseEvents=!1;return}n.target&&R(s,n.target)&&n.pointerType!=null?S(k(n.target,s),n.pointerType):n.target&&n.isOverTarget&&n.pointerType!=null&&S(k(n.target,s),n.pointerType,!1),n.isOverTarget=!1}};$.onTouchStart=s=>{if(!s.currentTarget.contains(s.target))return;let u=ht(s.nativeEvent);if(!u)return;n.activePointerId=u.identifier,n.ignoreEmulatedMouseEvents=!0,n.isOverTarget=!0,n.isPressed=!0,n.target=s.currentTarget,n.pointerType="touch",!i&&!p&&N(s.currentTarget),v||de(n.target),C(M(n.target,s),n.pointerType)&&s.stopPropagation(),H(ne(s.currentTarget),"scroll",y,!0)},$.onTouchMove=s=>{if(!s.currentTarget.contains(s.target))return;if(!n.isPressed){s.stopPropagation();return}let u=$e(s.nativeEvent,n.activePointerId),h=!0;u&&R(u,s.currentTarget)?!n.isOverTarget&&n.pointerType!=null&&(n.isOverTarget=!0,h=C(M(n.target,s),n.pointerType)):n.isOverTarget&&n.pointerType!=null&&(n.isOverTarget=!1,h=S(M(n.target,s),n.pointerType,!1),U(M(n.target,s))),h&&s.stopPropagation()},$.onTouchEnd=s=>{if(!s.currentTarget.contains(s.target))return;if(!n.isPressed){s.stopPropagation();return}let u=$e(s.nativeEvent,n.activePointerId),h=!0;u&&R(u,s.currentTarget)&&n.pointerType!=null?(O(M(n.target,s),n.pointerType),h=S(M(n.target,s),n.pointerType)):n.isOverTarget&&n.pointerType!=null&&(h=S(M(n.target,s),n.pointerType,!1)),h&&s.stopPropagation(),n.isPressed=!1,n.activePointerId=null,n.isOverTarget=!1,n.ignoreEmulatedMouseEvents=!0,n.target&&!v&&X(n.target),A()},$.onTouchCancel=s=>{!s.currentTarget.contains(s.target)||(s.stopPropagation(),n.isPressed&&I(M(n.target,s)))};let y=s=>{n.isPressed&&s.target.contains(n.target)&&I({currentTarget:n.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};$.onDragStart=s=>{!s.currentTarget.contains(s.target)||I(s)}}return $},[H,i,p,A,v,I,U,S,C,O]);return c.exports.useEffect(()=>()=>{var n;v||X((n=T.current.target)!==null&&n!==void 0?n:void 0)},[v]),{isPressed:f||b,pressProps:le(x,Me)}}function ue(e){return e.tagName==="A"&&e.hasAttribute("href")}function _(e,t){const{key:r,code:a}=e,o=t,l=o.getAttribute("role");return(r==="Enter"||r===" "||r==="Spacebar"||a==="Space")&&!(o instanceof ne(o).HTMLInputElement&&!we(o,r)||o instanceof ne(o).HTMLTextAreaElement||o.isContentEditable)&&!((l==="link"||!l&&ue(o))&&r!=="Enter")}function ht(e){const{targetTouches:t}=e;return t.length>0?t[0]:null}function $e(e,t){const r=e.changedTouches;for(let a=0;a<r.length;a++){const o=r[a];if(o.identifier===t)return o}return null}function M(e,t){let r=0,a=0;return t.targetTouches&&t.targetTouches.length===1&&(r=t.targetTouches[0].clientX,a=t.targetTouches[0].clientY),{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:r,clientY:a}}function k(e,t){let r=t.clientX,a=t.clientY;return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:r,clientY:a}}function mt(e){let t=0,r=0;return e.width!==void 0?t=e.width/2:e.radiusX!==void 0&&(t=e.radiusX),e.height!==void 0?r=e.height/2:e.radiusY!==void 0&&(r=e.radiusY),{top:e.clientY-r,right:e.clientX+t,bottom:e.clientY+r,left:e.clientX-t}}function xt(e,t){return!(e.left>t.right||t.left>e.right||e.top>t.bottom||t.top>e.bottom)}function R(e,t){let r=t.getBoundingClientRect(),a=mt(e);return xt(r,a)}function ee(e){return!(e instanceof HTMLElement)||!e.hasAttribute("draggable")}function be(e,t){return e instanceof HTMLInputElement?!we(e,t):e instanceof HTMLButtonElement?e.type!=="submit"&&e.type!=="reset":!ue(e)}const Tt=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function we(e,t){return e.type==="checkbox"||e.type==="radio"?t===" ":Tt.has(e.type)}class Pt{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(t,r){this.nativeEvent=r,this.target=r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget,this.bubbles=r.bubbles,this.cancelable=r.cancelable,this.defaultPrevented=r.defaultPrevented,this.eventPhase=r.eventPhase,this.isTrusted=r.isTrusted,this.timeStamp=r.timeStamp,this.type=t}}function Ce(e){let t=c.exports.useRef({isFocused:!1,observer:null});L(()=>{const a=t.current;return()=>{a.observer&&(a.observer.disconnect(),a.observer=null)}},[]);let r=K(a=>{e==null||e(a)});return c.exports.useCallback(a=>{if(a.target instanceof HTMLButtonElement||a.target instanceof HTMLInputElement||a.target instanceof HTMLTextAreaElement||a.target instanceof HTMLSelectElement){t.current.isFocused=!0;let o=a.target,l=i=>{t.current.isFocused=!1,o.disabled&&r(new Pt("blur",i)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};o.addEventListener("focusout",l,{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&o.disabled){var i;(i=t.current.observer)===null||i===void 0||i.disconnect();let f=o===document.activeElement?null:document.activeElement;o.dispatchEvent(new FocusEvent("blur",{relatedTarget:f})),o.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:f}))}}),t.current.observer.observe(o,{attributes:!0,attributeFilter:["disabled"]})}},[r])}function St(e){let{isDisabled:t,onFocus:r,onBlur:a,onFocusChange:o}=e;const l=c.exports.useCallback(p=>{if(p.target===p.currentTarget)return a&&a(p),o&&o(!1),!0},[a,o]),i=Ce(l),f=c.exports.useCallback(p=>{const g=F(p.target);p.target===p.currentTarget&&g.activeElement===p.target&&(r&&r(p),o&&o(!0),i(p))},[o,r,i]);return{focusProps:{onFocus:!t&&(r||o||a)?f:void 0,onBlur:!t&&(a||o)?l:void 0}}}function Et(e){let{isDisabled:t,onBlurWithin:r,onFocusWithin:a,onFocusWithinChange:o}=e,l=c.exports.useRef({isFocusWithin:!1}),i=c.exports.useCallback(g=>{l.current.isFocusWithin&&!g.currentTarget.contains(g.relatedTarget)&&(l.current.isFocusWithin=!1,r&&r(g),o&&o(!1))},[r,o,l]),f=Ce(i),p=c.exports.useCallback(g=>{!l.current.isFocusWithin&&document.activeElement===g.target&&(a&&a(g),o&&o(!0),l.current.isFocusWithin=!0,f(g))},[a,o,f]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:p,onBlur:i}}}let Q=!1,te=0;function oe(){Q=!0,setTimeout(()=>{Q=!1},50)}function ve(e){e.pointerType==="touch"&&oe()}function wt(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",ve):document.addEventListener("touchend",oe),te++,()=>{te--,!(te>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",ve):document.removeEventListener("touchend",oe))}}function qt(e){let{onHoverStart:t,onHoverChange:r,onHoverEnd:a,isDisabled:o}=e,[l,i]=c.exports.useState(!1),f=c.exports.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;c.exports.useEffect(wt,[]);let{hoverProps:p,triggerHoverEnd:g}=c.exports.useMemo(()=>{let v=(b,E)=>{if(f.pointerType=E,o||E==="touch"||f.isHovered||!b.currentTarget.contains(b.target))return;f.isHovered=!0;let T=b.currentTarget;f.target=T,t&&t({type:"hoverstart",target:T,pointerType:E}),r&&r(!0),i(!0)},m=(b,E)=>{if(f.pointerType="",f.target=null,E==="touch"||!f.isHovered)return;f.isHovered=!1;let T=b.currentTarget;a&&a({type:"hoverend",target:T,pointerType:E}),r&&r(!1),i(!1)},x={};return typeof PointerEvent<"u"?(x.onPointerEnter=b=>{Q&&b.pointerType==="mouse"||v(b,b.pointerType)},x.onPointerLeave=b=>{!o&&b.currentTarget.contains(b.target)&&m(b,b.pointerType)}):(x.onTouchStart=()=>{f.ignoreEmulatedMouseEvents=!0},x.onMouseEnter=b=>{!f.ignoreEmulatedMouseEvents&&!Q&&v(b,"mouse"),f.ignoreEmulatedMouseEvents=!1},x.onMouseLeave=b=>{!o&&b.currentTarget.contains(b.target)&&m(b,"mouse")}),{hoverProps:x,triggerHoverEnd:m}},[t,r,a,o,f]);return c.exports.useEffect(()=>{o&&g({currentTarget:f.target},f.pointerType)},[o]),{hoverProps:p,isHovered:l}}function Jt(e={}){let{autoFocus:t=!1,isTextInput:r,within:a}=e,o=c.exports.useRef({isFocused:!1,isFocusVisible:t||De()}),[l,i]=c.exports.useState(!1),[f,p]=c.exports.useState(()=>o.current.isFocused&&o.current.isFocusVisible),g=c.exports.useCallback(()=>p(o.current.isFocused&&o.current.isFocusVisible),[]),v=c.exports.useCallback(b=>{o.current.isFocused=b,i(b),g()},[g]);Re(b=>{o.current.isFocusVisible=b,g()},[],{isTextInput:r});let{focusProps:m}=St({isDisabled:a,onFocusChange:v}),{focusWithinProps:x}=Et({isDisabled:!a,onFocusWithinChange:v});return{isFocused:l,isFocusVisible:f,focusProps:a?x:m}}const Ct=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),kt=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function Mt(e){if(Intl.Locale){let r=new Intl.Locale(e).maximize(),a=typeof r.getTextInfo=="function"?r.getTextInfo():r.textInfo;if(a)return a.direction==="rtl";if(r.script)return Ct.has(r.script)}let t=e.split("-")[0];return kt.has(t)}const Ft=Symbol.for("react-aria.i18n.locale");function ke(){let e=typeof window<"u"&&window[Ft]||typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch{e="en-US"}return{locale:e,direction:Mt(e)?"rtl":"ltr"}}let ie=ke(),G=new Set;function ye(){ie=ke();for(let e of G)e(ie)}function Kt(){let e=se(),[t,r]=c.exports.useState(ie);return c.exports.useEffect(()=>(G.size===0&&window.addEventListener("languagechange",ye),G.add(r),()=>{G.delete(r),G.size===0&&window.removeEventListener("languagechange",ye)}),[]),e?{locale:"en-US",direction:"ltr"}:t}const Lt=P.createContext(null);function Qt(){let e=Kt();return c.exports.useContext(Lt)||e}export{Vt as $,Yt as A,Dt as B,Bt as C,fe as D,jt as E,Wt as a,le as b,Qt as c,Qe as d,Nt as e,ct as f,Jt as g,qt as h,Ut as i,Ot as j,dt as k,Gt as l,Xt as m,K as n,At as o,se as p,ut as q,zt as r,it as s,W as t,Se as u,ft as v,Et as w,xe as x,Rt as y,St as z};
