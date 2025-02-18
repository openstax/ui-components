import{R as C,r as d}from"./index.698c06ff.js";const U=typeof document<"u"?C.useLayoutEffect:()=>{};function O(e){const t=d.exports.useRef(null);return U(()=>{t.current=e},[e]),d.exports.useCallback((...r)=>{const n=t.current;return n==null?void 0:n(...r)},[])}function Ze(e){let[t,r]=d.exports.useState(e),n=d.exports.useRef(null),a=O(()=>{if(!n.current)return;let i=n.current.next();if(i.done){n.current=null;return}t===i.value?a():r(i.value)});U(()=>{n.current&&a()});let l=O(i=>{n.current=i(t),a()});return[t,l]}const ne={prefix:String(Math.round(Math.random()*1e10)),current:0},He=C.createContext(ne),et=C.createContext(!1);let tt=Boolean(typeof window<"u"&&window.document&&window.document.createElement),se=new WeakMap;function rt(e=!1){let t=d.exports.useContext(He),r=d.exports.useRef(null);if(r.current===null&&!e){var n,a;let l=(a=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||a===void 0||(n=a.ReactCurrentOwner)===null||n===void 0?void 0:n.current;if(l){let i=se.get(l);i==null?se.set(l,{id:t.current,state:l.memoizedState}):l.memoizedState!==i.state&&(t.current=i.id,se.delete(l))}r.current=++t.current}return r.current}function nt(e){let t=d.exports.useContext(He);t===ne&&!tt&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let r=rt(!!e),n=`react-aria${t.prefix}`;return e||`${n}-${r}`}function ot(e){let t=C.useId(),[r]=d.exports.useState(Ae()),n=r?"react-aria":`react-aria${ne.prefix}`;return e||`${n}-${t}`}const at=typeof C.useId=="function"?ot:nt;function it(){return!1}function st(){return!0}function lt(e){return()=>{}}function Ae(){return typeof C.useSyncExternalStore=="function"?C.useSyncExternalStore(lt,it,st):d.exports.useContext(et)}let ut=Boolean(typeof window<"u"&&window.document&&window.document.createElement),A=new Map;function ct(e){let[t,r]=d.exports.useState(e),n=d.exports.useRef(null),a=at(t),l=d.exports.useCallback(i=>{n.current=i},[]);return ut&&(A.has(a)&&!A.get(a).includes(l)?A.set(a,[...A.get(a),l]):A.set(a,[l])),U(()=>{let i=a;return()=>{A.delete(i)}},[a]),d.exports.useEffect(()=>{let i=n.current;i&&(n.current=null,r(i))}),a}function ft(e,t){if(e===t)return e;let r=A.get(e);if(r)return r.forEach(a=>a(t)),t;let n=A.get(t);return n?(n.forEach(a=>a(e)),e):t}function lr(e=[]){let t=ct(),[r,n]=Ze(t),a=d.exports.useCallback(()=>{n(function*(){yield t,yield document.getElementById(t)?t:void 0})},[t,n]);return U(a,[t,a,...e]),r}function Oe(...e){return(...t)=>{for(let r of e)typeof r=="function"&&r(...t)}}const w=e=>{var t;return(t=e==null?void 0:e.ownerDocument)!==null&&t!==void 0?t:document},k=e=>e&&"window"in e&&e.window===e?e:w(e).defaultView||window;function De(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=De(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function dt(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=De(e))&&(n&&(n+=" "),n+=t);return n}function me(...e){let t={...e[0]};for(let r=1;r<e.length;r++){let n=e[r];for(let a in n){let l=t[a],i=n[a];typeof l=="function"&&typeof i=="function"&&a[0]==="o"&&a[1]==="n"&&a.charCodeAt(2)>=65&&a.charCodeAt(2)<=90?t[a]=Oe(l,i):(a==="className"||a==="UNSAFE_className")&&typeof l=="string"&&typeof i=="string"?t[a]=dt(l,i):a==="id"&&l&&i?t.id=ft(l,i):t[a]=i!==void 0?i:l}}return t}function pt(...e){return e.length===1&&e[0]?e[0]:t=>{for(let r of e)typeof r=="function"?r(t):r!=null&&(r.current=t)}}const vt=new Set(["id"]),$t=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),gt=new Set(["href","hrefLang","target","rel","download","ping","referrerPolicy"]),bt=/^(data-.*)$/;function ur(e,t={}){let{labelable:r,isLink:n,propNames:a}=t,l={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(vt.has(i)||r&&$t.has(i)||n&&gt.has(i)||(a==null?void 0:a.has(i))||bt.test(i))&&(l[i]=e[i]);return l}function V(e){if(yt())e.focus({preventScroll:!0});else{let t=ht(e);e.focus(),mt(t)}}let Q=null;function yt(){if(Q==null){Q=!1;try{document.createElement("div").focus({get preventScroll(){return Q=!0,!0}})}catch{}}return Q}function ht(e){let t=e.parentNode,r=[],n=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==n;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&r.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return n instanceof HTMLElement&&r.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft}),r}function mt(e){for(let{element:t,scrollTop:r,scrollLeft:n}of e)t.scrollTop=r,t.scrollLeft=n}function ie(e){var t;return typeof window>"u"||window.navigator==null?!1:((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.brands.some(r=>e.test(r.brand)))||e.test(window.navigator.userAgent)}function Te(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function I(e){let t=null;return()=>(t==null&&(t=e()),t)}const X=I(function(){return Te(/^Mac/i)}),Tt=I(function(){return Te(/^iPhone/i)}),We=I(function(){return Te(/^iPad/i)||X()&&navigator.maxTouchPoints>1}),Ee=I(function(){return Tt()||We()}),cr=I(function(){return X()||Ee()}),Et=I(function(){return ie(/AppleWebKit/i)&&!xt()}),xt=I(function(){return ie(/Chrome/i)}),Ve=I(function(){return ie(/Android/i)}),Pt=I(function(){return ie(/Firefox/i)}),wt=d.exports.createContext({isNative:!0,open:Ct,useHref:e=>e});function St(){return d.exports.useContext(wt)}function z(e,t,r=!0){var n,a;let{metaKey:l,ctrlKey:i,altKey:c,shiftKey:p}=t;Pt()&&((a=window.event)===null||a===void 0||(n=a.type)===null||n===void 0?void 0:n.startsWith("key"))&&e.target==="_blank"&&(X()?l=!0:i=!0);let v=Et()&&X()&&!We()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:l,ctrlKey:i,altKey:c,shiftKey:p}):new MouseEvent("click",{metaKey:l,ctrlKey:i,altKey:c,shiftKey:p,bubbles:!0,cancelable:!0});z.isOpening=r,V(e),e.dispatchEvent(v),z.isOpening=!1}z.isOpening=!1;function Lt(e,t){if(e instanceof HTMLAnchorElement)t(e);else if(e.hasAttribute("data-href")){let r=document.createElement("a");r.href=e.getAttribute("data-href"),e.hasAttribute("data-target")&&(r.target=e.getAttribute("data-target")),e.hasAttribute("data-rel")&&(r.rel=e.getAttribute("data-rel")),e.hasAttribute("data-download")&&(r.download=e.getAttribute("data-download")),e.hasAttribute("data-ping")&&(r.ping=e.getAttribute("data-ping")),e.hasAttribute("data-referrer-policy")&&(r.referrerPolicy=e.getAttribute("data-referrer-policy")),e.appendChild(r),t(r),e.removeChild(r)}}function Ct(e,t){Lt(e,r=>z(r,t))}function fr(e){let t=St();var r;const n=t.useHref((r=e==null?void 0:e.href)!==null&&r!==void 0?r:"");return{href:e!=null&&e.href?n:void 0,target:e==null?void 0:e.target,rel:e==null?void 0:e.rel,download:e==null?void 0:e.download,ping:e==null?void 0:e.ping,referrerPolicy:e==null?void 0:e.referrerPolicy}}let B=new Map,de=new Set;function we(){if(typeof window>"u")return;function e(n){return"propertyName"in n}let t=n=>{if(!e(n)||!n.target)return;let a=B.get(n.target);a||(a=new Set,B.set(n.target,a),n.target.addEventListener("transitioncancel",r,{once:!0})),a.add(n.propertyName)},r=n=>{if(!e(n)||!n.target)return;let a=B.get(n.target);if(!!a&&(a.delete(n.propertyName),a.size===0&&(n.target.removeEventListener("transitioncancel",r),B.delete(n.target)),B.size===0)){for(let l of de)l();de.clear()}};document.body.addEventListener("transitionrun",t),document.body.addEventListener("transitionend",r)}typeof document<"u"&&(document.readyState!=="loading"?we():document.addEventListener("DOMContentLoaded",we));function Re(e){requestAnimationFrame(()=>{B.size===0?e():de.add(e)})}function kt(){let e=d.exports.useRef(new Map),t=d.exports.useCallback((a,l,i,c)=>{let p=c!=null&&c.once?(...v)=>{e.current.delete(i),i(...v)}:i;e.current.set(i,{type:l,eventTarget:a,fn:p,options:c}),a.addEventListener(l,p,c)},[]),r=d.exports.useCallback((a,l,i,c)=>{var p;let v=((p=e.current.get(i))===null||p===void 0?void 0:p.fn)||i;a.removeEventListener(l,v,c),e.current.delete(i)},[]),n=d.exports.useCallback(()=>{e.current.forEach((a,l)=>{r(a.eventTarget,a.type,l,a.options)})},[r]);return d.exports.useEffect(()=>n,[n]),{addGlobalListener:t,removeGlobalListener:r,removeAllGlobalListeners:n}}function Mt(e){const t=d.exports.useRef(null);return d.exports.useMemo(()=>({get current(){return t.current},set current(r){t.current=r,typeof e=="function"?e(r):e&&(e.current=r)}}),[e])}function Kt(e,t){U(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}})}function pe(e){return e.mozInputSource===0&&e.isTrusted?!0:Ve()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function Ft(e){return!Ve()&&e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"}function dr(e,t,r){let[n,a]=d.exports.useState(e||t),l=d.exports.useRef(e!==void 0),i=e!==void 0;d.exports.useEffect(()=>{let v=l.current;v!==i&&console.warn(`WARN: A component changed from ${v?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}.`),l.current=i},[i]);let c=i?e:n,p=d.exports.useCallback((v,...b)=>{let m=(T,...g)=>{r&&(Object.is(c,T)||r(T,...g)),i||(c=T)};typeof v=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),a((g,...S)=>{let E=v(i?c:g,...S);return m(E,...b),i?g:E})):(i||a(v),m(v,...b))},[i,c,r]);return[c,p]}const Se=Symbol("default");function pr({values:e,children:t}){for(let[r,n]of e)t=C.createElement(r.Provider,{value:n},t);return t}function vr(e){let{className:t,style:r,children:n,defaultClassName:a,defaultChildren:l,defaultStyle:i,values:c}=e;return d.exports.useMemo(()=>{let p,v,b;return typeof t=="function"?p=t({...c,defaultClassName:a}):p=t,typeof r=="function"?v=r({...c,defaultStyle:i||{}}):v=r,typeof n=="function"?b=n({...c,defaultChildren:l}):n==null?b=l:b=n,{className:p!=null?p:a,style:v||i?{...i,...v}:void 0,children:b!=null?b:l,"data-rac":""}},[t,r,n,a,l,i,c])}function It(e,t){let r=d.exports.useContext(e);if(t===null)return null;if(r&&typeof r=="object"&&"slots"in r&&r.slots){let n=new Intl.ListFormat().format(Object.keys(r.slots).map(l=>`"${l}"`));if(!t&&!r.slots[Se])throw new Error(`A slot prop is required. Valid slot names are ${n}.`);let a=t||Se;if(!r.slots[a])throw new Error(`Invalid slot "${t}". Valid slot names are ${n}.`);return r.slots[a]}return r}function $r(e,t,r){let n=It(r,e.slot)||{},{ref:a,...l}=n,i=Mt(d.exports.useMemo(()=>pt(t,a),[t,a])),c=me(l,e);return"style"in l&&l.style&&"style"in e&&e.style&&(typeof l.style=="function"||typeof e.style=="function"?c.style=p=>{let v=typeof l.style=="function"?l.style(p):l.style,b={...p.defaultStyle,...v},m=typeof e.style=="function"?e.style({...p,defaultStyle:b}):e.style;return{...b,...m}}:c.style={...l.style,...e.style}),[c,i]}function gr(){let[e,t]=d.exports.useState(!0),r=d.exports.useRef(!1),n=d.exports.useCallback(a=>{r.current=!0,t(!!a)},[]);return U(()=>{r.current||t(!1)},[]),[n,e]}let j="default",ve="",re=new WeakMap;function Le(e){if(Ee()){if(j==="default"){const t=w(e);ve=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect="none"}j="disabled"}else(e instanceof HTMLElement||e instanceof SVGElement)&&(re.set(e,e.style.userSelect),e.style.userSelect="none")}function Z(e){if(Ee()){if(j!=="disabled")return;j="restoring",setTimeout(()=>{Re(()=>{if(j==="restoring"){const t=w(e);t.documentElement.style.webkitUserSelect==="none"&&(t.documentElement.style.webkitUserSelect=ve||""),ve="",j="default"}})},300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&re.has(e)){let t=re.get(e);e.style.userSelect==="none"&&(e.style.userSelect=t),e.getAttribute("style")===""&&e.removeAttribute("style"),re.delete(e)}}const Ue=C.createContext({register:()=>{}});Ue.displayName="PressResponderContext";function Ht(e,t){return t.get?t.get.call(e):t.value}function Ge(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function At(e,t){var r=Ge(e,t,"get");return Ht(e,r)}function Ot(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Dt(e,t,r){Ot(e,t),t.set(e,r)}function Wt(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}function Ce(e,t,r){var n=Ge(e,t,"set");return Wt(e,n,r),r}function Vt(e){let t=d.exports.useContext(Ue);if(t){let{register:r,...n}=t;e=me(n,e),r()}return Kt(t,e.ref),e}var ee=new WeakMap;class te{continuePropagation(){Ce(this,ee,!1)}get shouldStopPropagation(){return At(this,ee)}constructor(t,r,n,a){Dt(this,ee,{writable:!0,value:void 0}),Ce(this,ee,!0);var l;let i=(l=a==null?void 0:a.target)!==null&&l!==void 0?l:n.currentTarget;const c=i==null?void 0:i.getBoundingClientRect();let p,v=0,b,m=null;n.clientX!=null&&n.clientY!=null&&(b=n.clientX,m=n.clientY),c&&(b!=null&&m!=null?(p=b-c.left,v=m-c.top):(p=c.width/2,v=c.height/2)),this.type=t,this.pointerType=r,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.x=p,this.y=v}}const ke=Symbol("linkClicked");function br(e){let{onPress:t,onPressChange:r,onPressStart:n,onPressEnd:a,onPressUp:l,isDisabled:i,isPressed:c,preventFocusOnPress:p,shouldCancelOnPointerExit:v,allowTextSelectionOnPress:b,ref:m,...T}=Vt(e),[g,S]=d.exports.useState(!1),E=d.exports.useRef({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:D,removeAllGlobalListeners:G}=kt(),M=O((o,$)=>{let L=E.current;if(i||L.didFirePressStart)return!1;let f=!0;if(L.isTriggeringEvent=!0,n){let y=new te("pressstart",$,o);n(y),f=y.shouldStopPropagation}return r&&r(!0),L.isTriggeringEvent=!1,L.didFirePressStart=!0,S(!0),f}),x=O((o,$,L=!0)=>{let f=E.current;if(!f.didFirePressStart)return!1;f.ignoreClickAfterPress=!0,f.didFirePressStart=!1,f.isTriggeringEvent=!0;let y=!0;if(a){let s=new te("pressend",$,o);a(s),y=s.shouldStopPropagation}if(r&&r(!1),S(!1),t&&L&&!i){let s=new te("press",$,o);t(s),y&&(y=s.shouldStopPropagation)}return f.isTriggeringEvent=!1,y}),N=O((o,$)=>{let L=E.current;if(i)return!1;if(l){L.isTriggeringEvent=!0;let f=new te("pressup",$,o);return l(f),L.isTriggeringEvent=!1,f.shouldStopPropagation}return!0}),W=O(o=>{let $=E.current;$.isPressed&&$.target&&($.isOverTarget&&$.pointerType!=null&&x(F($.target,o),$.pointerType,!1),$.isPressed=!1,$.isOverTarget=!1,$.activePointerId=null,$.pointerType=null,G(),b||Z($.target))}),J=O(o=>{v&&W(o)}),Qe=d.exports.useMemo(()=>{let o=E.current,$={onKeyDown(f){if(le(f.nativeEvent,f.currentTarget)&&f.currentTarget.contains(f.target)){var y;Ke(f.target,f.key)&&f.preventDefault();let s=!0;if(!o.isPressed&&!f.repeat){o.target=f.currentTarget,o.isPressed=!0,s=M(f,"keyboard");let u=f.currentTarget,h=K=>{le(K,u)&&!K.repeat&&u.contains(K.target)&&o.target&&N(F(o.target,K),"keyboard")};D(w(f.currentTarget),"keyup",Oe(h,L),!0)}s&&f.stopPropagation(),f.metaKey&&X()&&((y=o.metaKeyEvents)===null||y===void 0||y.set(f.key,f.nativeEvent))}else f.key==="Meta"&&(o.metaKeyEvents=new Map)},onClick(f){if(!(f&&!f.currentTarget.contains(f.target))&&f&&f.button===0&&!o.isTriggeringEvent&&!z.isOpening){let y=!0;if(i&&f.preventDefault(),!o.ignoreClickAfterPress&&!o.ignoreEmulatedMouseEvents&&!o.isPressed&&(o.pointerType==="virtual"||pe(f.nativeEvent))){!i&&!p&&V(f.currentTarget);let s=M(f,"virtual"),u=N(f,"virtual"),h=x(f,"virtual");y=s&&u&&h}o.ignoreEmulatedMouseEvents=!1,o.ignoreClickAfterPress=!1,y&&f.stopPropagation()}}},L=f=>{var y;if(o.isPressed&&o.target&&le(f,o.target)){var s;Ke(f.target,f.key)&&f.preventDefault();let h=f.target;x(F(o.target,f),"keyboard",o.target.contains(h)),G(),f.key!=="Enter"&&xe(o.target)&&o.target.contains(h)&&!f[ke]&&(f[ke]=!0,z(o.target,f,!1)),o.isPressed=!1,(s=o.metaKeyEvents)===null||s===void 0||s.delete(f.key)}else if(f.key==="Meta"&&((y=o.metaKeyEvents)===null||y===void 0?void 0:y.size)){var u;let h=o.metaKeyEvents;o.metaKeyEvents=void 0;for(let K of h.values())(u=o.target)===null||u===void 0||u.dispatchEvent(new KeyboardEvent("keyup",K))}};if(typeof PointerEvent<"u"){$.onPointerDown=u=>{if(u.button!==0||!u.currentTarget.contains(u.target))return;if(Ft(u.nativeEvent)){o.pointerType="virtual";return}ce(u.currentTarget)&&u.preventDefault(),o.pointerType=u.pointerType;let h=!0;if(!o.isPressed){o.isPressed=!0,o.isOverTarget=!0,o.activePointerId=u.pointerId,o.target=u.currentTarget,!i&&!p&&V(u.currentTarget),b||Le(o.target),h=M(u,o.pointerType);let K=u.target;"releasePointerCapture"in K&&K.releasePointerCapture(u.pointerId),D(w(u.currentTarget),"pointerup",f,!1),D(w(u.currentTarget),"pointercancel",s,!1)}h&&u.stopPropagation()},$.onMouseDown=u=>{!u.currentTarget.contains(u.target)||u.button===0&&(ce(u.currentTarget)&&u.preventDefault(),u.stopPropagation())},$.onPointerUp=u=>{!u.currentTarget.contains(u.target)||o.pointerType==="virtual"||u.button===0&&N(u,o.pointerType||u.pointerType)},$.onPointerEnter=u=>{u.pointerId===o.activePointerId&&o.target&&!o.isOverTarget&&o.pointerType!=null&&(o.isOverTarget=!0,M(F(o.target,u),o.pointerType))},$.onPointerLeave=u=>{u.pointerId===o.activePointerId&&o.target&&o.isOverTarget&&o.pointerType!=null&&(o.isOverTarget=!1,x(F(o.target,u),o.pointerType,!1),J(u))};let f=u=>{u.pointerId===o.activePointerId&&o.isPressed&&u.button===0&&o.target&&(o.target.contains(u.target)&&o.pointerType!=null?x(F(o.target,u),o.pointerType):o.isOverTarget&&o.pointerType!=null&&x(F(o.target,u),o.pointerType,!1),o.isPressed=!1,o.isOverTarget=!1,o.activePointerId=null,o.pointerType=null,G(),b||Z(o.target),"ontouchend"in o.target&&u.pointerType!=="mouse"&&D(o.target,"touchend",y,{once:!0}))},y=u=>{Ne(u.currentTarget)&&u.preventDefault()},s=u=>{W(u)};$.onDragStart=u=>{!u.currentTarget.contains(u.target)||W(u)}}else{$.onMouseDown=s=>{if(s.button!==0||!s.currentTarget.contains(s.target))return;if(ce(s.currentTarget)&&s.preventDefault(),o.ignoreEmulatedMouseEvents){s.stopPropagation();return}o.isPressed=!0,o.isOverTarget=!0,o.target=s.currentTarget,o.pointerType=pe(s.nativeEvent)?"virtual":"mouse",!i&&!p&&V(s.currentTarget),M(s,o.pointerType)&&s.stopPropagation(),D(w(s.currentTarget),"mouseup",f,!1)},$.onMouseEnter=s=>{if(!s.currentTarget.contains(s.target))return;let u=!0;o.isPressed&&!o.ignoreEmulatedMouseEvents&&o.pointerType!=null&&(o.isOverTarget=!0,u=M(s,o.pointerType)),u&&s.stopPropagation()},$.onMouseLeave=s=>{if(!s.currentTarget.contains(s.target))return;let u=!0;o.isPressed&&!o.ignoreEmulatedMouseEvents&&o.pointerType!=null&&(o.isOverTarget=!1,u=x(s,o.pointerType,!1),J(s)),u&&s.stopPropagation()},$.onMouseUp=s=>{!s.currentTarget.contains(s.target)||!o.ignoreEmulatedMouseEvents&&s.button===0&&N(s,o.pointerType||"mouse")};let f=s=>{if(s.button===0){if(o.isPressed=!1,G(),o.ignoreEmulatedMouseEvents){o.ignoreEmulatedMouseEvents=!1;return}o.target&&ue(s,o.target)&&o.pointerType!=null?x(F(o.target,s),o.pointerType):o.target&&o.isOverTarget&&o.pointerType!=null&&x(F(o.target,s),o.pointerType,!1),o.isOverTarget=!1}};$.onTouchStart=s=>{if(!s.currentTarget.contains(s.target))return;let u=Rt(s.nativeEvent);if(!u)return;o.activePointerId=u.identifier,o.ignoreEmulatedMouseEvents=!0,o.isOverTarget=!0,o.isPressed=!0,o.target=s.currentTarget,o.pointerType="touch",!i&&!p&&V(s.currentTarget),b||Le(o.target),M(H(o.target,s),o.pointerType)&&s.stopPropagation(),D(k(s.currentTarget),"scroll",y,!0)},$.onTouchMove=s=>{if(!s.currentTarget.contains(s.target))return;if(!o.isPressed){s.stopPropagation();return}let u=Me(s.nativeEvent,o.activePointerId),h=!0;u&&ue(u,s.currentTarget)?!o.isOverTarget&&o.pointerType!=null&&(o.isOverTarget=!0,h=M(H(o.target,s),o.pointerType)):o.isOverTarget&&o.pointerType!=null&&(o.isOverTarget=!1,h=x(H(o.target,s),o.pointerType,!1),J(H(o.target,s))),h&&s.stopPropagation()},$.onTouchEnd=s=>{if(!s.currentTarget.contains(s.target))return;if(!o.isPressed){s.stopPropagation();return}let u=Me(s.nativeEvent,o.activePointerId),h=!0;u&&ue(u,s.currentTarget)&&o.pointerType!=null?(N(H(o.target,s),o.pointerType),h=x(H(o.target,s),o.pointerType)):o.isOverTarget&&o.pointerType!=null&&(h=x(H(o.target,s),o.pointerType,!1)),h&&s.stopPropagation(),o.isPressed=!1,o.activePointerId=null,o.isOverTarget=!1,o.ignoreEmulatedMouseEvents=!0,o.target&&!b&&Z(o.target),G()},$.onTouchCancel=s=>{!s.currentTarget.contains(s.target)||(s.stopPropagation(),o.isPressed&&W(H(o.target,s)))};let y=s=>{o.isPressed&&s.target.contains(o.target)&&W({currentTarget:o.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};$.onDragStart=s=>{!s.currentTarget.contains(s.target)||W(s)}}return $},[D,i,p,G,b,W,J,x,M,N]);return d.exports.useEffect(()=>()=>{var o;b||Z((o=E.current.target)!==null&&o!==void 0?o:void 0)},[b]),{isPressed:c||g,pressProps:me(T,Qe)}}function xe(e){return e.tagName==="A"&&e.hasAttribute("href")}function le(e,t){const{key:r,code:n}=e,a=t,l=a.getAttribute("role");return(r==="Enter"||r===" "||r==="Spacebar"||n==="Space")&&!(a instanceof k(a).HTMLInputElement&&!Be(a,r)||a instanceof k(a).HTMLTextAreaElement||a.isContentEditable)&&!((l==="link"||!l&&xe(a))&&r!=="Enter")}function Rt(e){const{targetTouches:t}=e;return t.length>0?t[0]:null}function Me(e,t){const r=e.changedTouches;for(let n=0;n<r.length;n++){const a=r[n];if(a.identifier===t)return a}return null}function H(e,t){let r=0,n=0;return t.targetTouches&&t.targetTouches.length===1&&(r=t.targetTouches[0].clientX,n=t.targetTouches[0].clientY),{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:r,clientY:n}}function F(e,t){let r=t.clientX,n=t.clientY;return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:r,clientY:n}}function Ut(e){let t=0,r=0;return e.width!==void 0?t=e.width/2:e.radiusX!==void 0&&(t=e.radiusX),e.height!==void 0?r=e.height/2:e.radiusY!==void 0&&(r=e.radiusY),{top:e.clientY-r,right:e.clientX+t,bottom:e.clientY+r,left:e.clientX-t}}function Gt(e,t){return!(e.left>t.right||t.left>e.right||e.top>t.bottom||t.top>e.bottom)}function ue(e,t){let r=t.getBoundingClientRect(),n=Ut(e);return Gt(r,n)}function ce(e){return!(e instanceof HTMLElement)||!e.hasAttribute("draggable")}function Ne(e){return e instanceof HTMLInputElement?!1:e instanceof HTMLButtonElement?e.type!=="submit"&&e.type!=="reset":!xe(e)}function Ke(e,t){return e instanceof HTMLInputElement?!Be(e,t):Ne(e)}const Nt=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Be(e,t){return e.type==="checkbox"||e.type==="radio"?t===" ":Nt.has(e.type)}class Bt{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(t,r){this.nativeEvent=r,this.target=r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget,this.bubbles=r.bubbles,this.cancelable=r.cancelable,this.defaultPrevented=r.defaultPrevented,this.eventPhase=r.eventPhase,this.isTrusted=r.isTrusted,this.timeStamp=r.timeStamp,this.type=t}}function je(e){let t=d.exports.useRef({isFocused:!1,observer:null});U(()=>{const n=t.current;return()=>{n.observer&&(n.observer.disconnect(),n.observer=null)}},[]);let r=O(n=>{e==null||e(n)});return d.exports.useCallback(n=>{if(n.target instanceof HTMLButtonElement||n.target instanceof HTMLInputElement||n.target instanceof HTMLTextAreaElement||n.target instanceof HTMLSelectElement){t.current.isFocused=!0;let a=n.target,l=i=>{t.current.isFocused=!1,a.disabled&&r(new Bt("blur",i)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};a.addEventListener("focusout",l,{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&a.disabled){var i;(i=t.current.observer)===null||i===void 0||i.disconnect();let c=a===document.activeElement?null:document.activeElement;a.dispatchEvent(new FocusEvent("blur",{relatedTarget:c})),a.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:c}))}}),t.current.observer.observe(a,{attributes:!0,attributeFilter:["disabled"]})}},[r])}function jt(e){let{isDisabled:t,onFocus:r,onBlur:n,onFocusChange:a}=e;const l=d.exports.useCallback(p=>{if(p.target===p.currentTarget)return n&&n(p),a&&a(!1),!0},[n,a]),i=je(l),c=d.exports.useCallback(p=>{const v=w(p.target);p.target===p.currentTarget&&v.activeElement===p.target&&(r&&r(p),a&&a(!0),i(p))},[a,r,i]);return{focusProps:{onFocus:!t&&(r||a||n)?c:void 0,onBlur:!t&&(n||a)?l:void 0}}}let Y=null,$e=new Set,_=new Map,R=!1,ge=!1;const Xt={Tab:!0,Escape:!0};function Pe(e,t){for(let r of $e)r(e,t)}function zt(e){return!(e.metaKey||!X()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function oe(e){R=!0,zt(e)&&(Y="keyboard",Pe("keyboard",e))}function P(e){Y="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(R=!0,Pe("pointer",e))}function Xe(e){pe(e)&&(R=!0,Y="virtual")}function ze(e){e.target===window||e.target===document||(!R&&!ge&&(Y="virtual",Pe("virtual",e)),R=!1,ge=!1)}function Ye(){R=!1,ge=!0}function be(e){if(typeof window>"u"||_.get(k(e)))return;const t=k(e),r=w(e);let n=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){R=!0,n.apply(this,arguments)},r.addEventListener("keydown",oe,!0),r.addEventListener("keyup",oe,!0),r.addEventListener("click",Xe,!0),t.addEventListener("focus",ze,!0),t.addEventListener("blur",Ye,!1),typeof PointerEvent<"u"?(r.addEventListener("pointerdown",P,!0),r.addEventListener("pointermove",P,!0),r.addEventListener("pointerup",P,!0)):(r.addEventListener("mousedown",P,!0),r.addEventListener("mousemove",P,!0),r.addEventListener("mouseup",P,!0)),t.addEventListener("beforeunload",()=>{qe(e)},{once:!0}),_.set(t,{focus:n})}const qe=(e,t)=>{const r=k(e),n=w(e);t&&n.removeEventListener("DOMContentLoaded",t),_.has(r)&&(r.HTMLElement.prototype.focus=_.get(r).focus,n.removeEventListener("keydown",oe,!0),n.removeEventListener("keyup",oe,!0),n.removeEventListener("click",Xe,!0),r.removeEventListener("focus",ze,!0),r.removeEventListener("blur",Ye,!1),typeof PointerEvent<"u"?(n.removeEventListener("pointerdown",P,!0),n.removeEventListener("pointermove",P,!0),n.removeEventListener("pointerup",P,!0)):(n.removeEventListener("mousedown",P,!0),n.removeEventListener("mousemove",P,!0),n.removeEventListener("mouseup",P,!0)),_.delete(r))};function Yt(e){const t=w(e);let r;return t.readyState!=="loading"?be(e):(r=()=>{be(e)},t.addEventListener("DOMContentLoaded",r)),()=>qe(e,r)}typeof document<"u"&&Yt();function _e(){return Y!=="pointer"}function qt(){return Y}const _t=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Jt(e,t,r){var n;const a=typeof window<"u"?k(r==null?void 0:r.target).HTMLInputElement:HTMLInputElement,l=typeof window<"u"?k(r==null?void 0:r.target).HTMLTextAreaElement:HTMLTextAreaElement,i=typeof window<"u"?k(r==null?void 0:r.target).HTMLElement:HTMLElement,c=typeof window<"u"?k(r==null?void 0:r.target).KeyboardEvent:KeyboardEvent;return e=e||(r==null?void 0:r.target)instanceof a&&!_t.has(r==null||(n=r.target)===null||n===void 0?void 0:n.type)||(r==null?void 0:r.target)instanceof l||(r==null?void 0:r.target)instanceof i&&(r==null?void 0:r.target.isContentEditable),!(e&&t==="keyboard"&&r instanceof c&&!Xt[r.key])}function Qt(e,t,r){be(),d.exports.useEffect(()=>{let n=(a,l)=>{!Jt(!!(r!=null&&r.isTextInput),a,l)||e(_e())};return $e.add(n),()=>{$e.delete(n)}},t)}function Zt(e){let{isDisabled:t,onBlurWithin:r,onFocusWithin:n,onFocusWithinChange:a}=e,l=d.exports.useRef({isFocusWithin:!1}),i=d.exports.useCallback(v=>{l.current.isFocusWithin&&!v.currentTarget.contains(v.relatedTarget)&&(l.current.isFocusWithin=!1,r&&r(v),a&&a(!1))},[r,a,l]),c=je(i),p=d.exports.useCallback(v=>{!l.current.isFocusWithin&&document.activeElement===v.target&&(n&&n(v),a&&a(!0),l.current.isFocusWithin=!0,c(v))},[n,a,c]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:p,onBlur:i}}}let ae=!1,fe=0;function ye(){ae=!0,setTimeout(()=>{ae=!1},50)}function Fe(e){e.pointerType==="touch"&&ye()}function er(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",Fe):document.addEventListener("touchend",ye),fe++,()=>{fe--,!(fe>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",Fe):document.removeEventListener("touchend",ye))}}function yr(e){let{onHoverStart:t,onHoverChange:r,onHoverEnd:n,isDisabled:a}=e,[l,i]=d.exports.useState(!1),c=d.exports.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;d.exports.useEffect(er,[]);let{hoverProps:p,triggerHoverEnd:v}=d.exports.useMemo(()=>{let b=(g,S)=>{if(c.pointerType=S,a||S==="touch"||c.isHovered||!g.currentTarget.contains(g.target))return;c.isHovered=!0;let E=g.currentTarget;c.target=E,t&&t({type:"hoverstart",target:E,pointerType:S}),r&&r(!0),i(!0)},m=(g,S)=>{if(c.pointerType="",c.target=null,S==="touch"||!c.isHovered)return;c.isHovered=!1;let E=g.currentTarget;n&&n({type:"hoverend",target:E,pointerType:S}),r&&r(!1),i(!1)},T={};return typeof PointerEvent<"u"?(T.onPointerEnter=g=>{ae&&g.pointerType==="mouse"||b(g,g.pointerType)},T.onPointerLeave=g=>{!a&&g.currentTarget.contains(g.target)&&m(g,g.pointerType)}):(T.onTouchStart=()=>{c.ignoreEmulatedMouseEvents=!0},T.onMouseEnter=g=>{!c.ignoreEmulatedMouseEvents&&!ae&&b(g,"mouse"),c.ignoreEmulatedMouseEvents=!1},T.onMouseLeave=g=>{!a&&g.currentTarget.contains(g.target)&&m(g,"mouse")}),{hoverProps:T,triggerHoverEnd:m}},[t,r,n,a,c]);return d.exports.useEffect(()=>{a&&v({currentTarget:c.target},c.pointerType)},[a]),{hoverProps:p,isHovered:l}}function hr(e){const t=w(e);if(qt()==="virtual"){let r=t.activeElement;Re(()=>{t.activeElement===r&&e.isConnected&&V(e)})}else V(e)}function mr(e={}){let{autoFocus:t=!1,isTextInput:r,within:n}=e,a=d.exports.useRef({isFocused:!1,isFocusVisible:t||_e()}),[l,i]=d.exports.useState(!1),[c,p]=d.exports.useState(()=>a.current.isFocused&&a.current.isFocusVisible),v=d.exports.useCallback(()=>p(a.current.isFocused&&a.current.isFocusVisible),[]),b=d.exports.useCallback(g=>{a.current.isFocused=g,i(g),v()},[v]);Qt(g=>{a.current.isFocusVisible=g,v()},[],{isTextInput:r});let{focusProps:m}=jt({isDisabled:n,onFocusChange:b}),{focusWithinProps:T}=Zt({isDisabled:!n,onFocusWithinChange:b});return{isFocused:l,isFocusVisible:c,focusProps:n?T:m}}const tr=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),rr=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function nr(e){if(Intl.Locale){let r=new Intl.Locale(e).maximize(),n=typeof r.getTextInfo=="function"?r.getTextInfo():r.textInfo;if(n)return n.direction==="rtl";if(r.script)return tr.has(r.script)}let t=e.split("-")[0];return rr.has(t)}const or=Symbol.for("react-aria.i18n.locale");function Je(){let e=typeof window<"u"&&window[or]||typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch{e="en-US"}return{locale:e,direction:nr(e)?"rtl":"ltr"}}let he=Je(),q=new Set;function Ie(){he=Je();for(let e of q)e(he)}function ar(){let e=Ae(),[t,r]=d.exports.useState(he);return d.exports.useEffect(()=>(q.size===0&&window.addEventListener("languagechange",Ie),q.add(r),()=>{q.delete(r),q.size===0&&window.removeEventListener("languagechange",Ie)}),[]),e?{locale:"en-US",direction:"ltr"}:t}const ir=C.createContext(null);function Tr(){let e=ar();return d.exports.useContext(ir)||e}export{U as $,Ve as A,xt as B,Ue as C,Kt as D,Zt as E,Ee as F,Oe as G,lr as H,_e as I,jt as J,pt as K,gr as L,Se as M,Et as N,ur as a,fr as b,me as c,Tr as d,ct as e,dr as f,It as g,Mt as h,vr as i,mr as j,yr as k,pr as l,$r as m,O as n,X as o,Ae as p,kt as q,br as r,cr as s,St as t,hr as u,qt as v,V as w,z as x,k as y,w as z};
