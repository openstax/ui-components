import{R as E,r as c,b as et}from"./index.748f356b.js";const N=typeof document<"u"?E.useLayoutEffect:()=>{};function O(e){const t=c.exports.useRef(null);return N(()=>{t.current=e},[e]),c.exports.useCallback((...r)=>{const n=t.current;return n==null?void 0:n(...r)},[])}function tt(e){let[t,r]=c.exports.useState(e),n=c.exports.useRef(null),a=O(()=>{if(!n.current)return;let i=n.current.next();if(i.done){n.current=null;return}t===i.value?a():r(i.value)});N(()=>{n.current&&a()});let l=O(i=>{n.current=i(t),a()});return[t,l]}const ne={prefix:String(Math.round(Math.random()*1e10)),current:0},Oe=E.createContext(ne),rt=E.createContext(!1);let nt=Boolean(typeof window<"u"&&window.document&&window.document.createElement),le=new WeakMap;function ot(e=!1){let t=c.exports.useContext(Oe),r=c.exports.useRef(null);if(r.current===null&&!e){var n,a;let l=(a=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||a===void 0||(n=a.ReactCurrentOwner)===null||n===void 0?void 0:n.current;if(l){let i=le.get(l);i==null?le.set(l,{id:t.current,state:l.memoizedState}):l.memoizedState!==i.state&&(t.current=i.id,le.delete(l))}r.current=++t.current}return r.current}function at(e){let t=c.exports.useContext(Oe);t===ne&&!nt&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let r=ot(!!e),n=`react-aria${t.prefix}`;return e||`${n}-${r}`}function it(e){let t=E.useId(),[r]=c.exports.useState(Te()),n=r?"react-aria":`react-aria${ne.prefix}`;return e||`${n}-${t}`}const st=typeof E.useId=="function"?it:at;function lt(){return!1}function ut(){return!0}function ct(e){return()=>{}}function Te(){return typeof E.useSyncExternalStore=="function"?E.useSyncExternalStore(ct,lt,ut):c.exports.useContext(rt)}let ft=Boolean(typeof window<"u"&&window.document&&window.document.createElement),A=new Map;function dt(e){let[t,r]=c.exports.useState(e),n=c.exports.useRef(null),a=st(t),l=c.exports.useCallback(i=>{n.current=i},[]);return ft&&(A.has(a)&&!A.get(a).includes(l)?A.set(a,[...A.get(a),l]):A.set(a,[l])),N(()=>{let i=a;return()=>{A.delete(i)}},[a]),c.exports.useEffect(()=>{let i=n.current;i&&(n.current=null,r(i))}),a}function pt(e,t){if(e===t)return e;let r=A.get(e);if(r)return r.forEach(a=>a(t)),t;let n=A.get(t);return n?(n.forEach(a=>a(e)),e):t}function fr(e=[]){let t=dt(),[r,n]=tt(t),a=c.exports.useCallback(()=>{n(function*(){yield t,yield document.getElementById(t)?t:void 0})},[t,n]);return N(a,[t,a,...e]),r}function De(...e){return(...t)=>{for(let r of e)typeof r=="function"&&r(...t)}}const S=e=>{var t;return(t=e==null?void 0:e.ownerDocument)!==null&&t!==void 0?t:document},M=e=>e&&"window"in e&&e.window===e?e:S(e).defaultView||window;function We(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=We(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function vt(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=We(e))&&(n&&(n+=" "),n+=t);return n}function Ee(...e){let t={...e[0]};for(let r=1;r<e.length;r++){let n=e[r];for(let a in n){let l=t[a],i=n[a];typeof l=="function"&&typeof i=="function"&&a[0]==="o"&&a[1]==="n"&&a.charCodeAt(2)>=65&&a.charCodeAt(2)<=90?t[a]=De(l,i):(a==="className"||a==="UNSAFE_className")&&typeof l=="string"&&typeof i=="string"?t[a]=vt(l,i):a==="id"&&l&&i?t.id=pt(l,i):t[a]=i!==void 0?i:l}}return t}function $t(...e){return e.length===1&&e[0]?e[0]:t=>{for(let r of e)typeof r=="function"?r(t):r!=null&&(r.current=t)}}const gt=new Set(["id"]),bt=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),yt=new Set(["href","hrefLang","target","rel","download","ping","referrerPolicy"]),ht=/^(data-.*)$/;function dr(e,t={}){let{labelable:r,isLink:n,propNames:a}=t,l={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(gt.has(i)||r&&bt.has(i)||n&&yt.has(i)||(a==null?void 0:a.has(i))||ht.test(i))&&(l[i]=e[i]);return l}function V(e){if(mt())e.focus({preventScroll:!0});else{let t=Tt(e);e.focus(),Et(t)}}let Q=null;function mt(){if(Q==null){Q=!1;try{document.createElement("div").focus({get preventScroll(){return Q=!0,!0}})}catch{}}return Q}function Tt(e){let t=e.parentNode,r=[],n=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==n;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&r.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return n instanceof HTMLElement&&r.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft}),r}function Et(e){for(let{element:t,scrollTop:r,scrollLeft:n}of e)t.scrollTop=r,t.scrollLeft=n}function se(e){var t;return typeof window>"u"||window.navigator==null?!1:((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.brands.some(r=>e.test(r.brand)))||e.test(window.navigator.userAgent)}function xe(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function H(e){let t=null;return()=>(t==null&&(t=e()),t)}const X=H(function(){return xe(/^Mac/i)}),xt=H(function(){return xe(/^iPhone/i)}),Ve=H(function(){return xe(/^iPad/i)||X()&&navigator.maxTouchPoints>1}),Pe=H(function(){return xt()||Ve()}),pr=H(function(){return X()||Pe()}),Pt=H(function(){return se(/AppleWebKit/i)&&!wt()}),wt=H(function(){return se(/Chrome/i)}),Re=H(function(){return se(/Android/i)}),St=H(function(){return se(/Firefox/i)}),Lt=c.exports.createContext({isNative:!0,open:kt,useHref:e=>e});function Ct(){return c.exports.useContext(Lt)}function z(e,t,r=!0){var n,a;let{metaKey:l,ctrlKey:i,altKey:f,shiftKey:p}=t;St()&&((a=window.event)===null||a===void 0||(n=a.type)===null||n===void 0?void 0:n.startsWith("key"))&&e.target==="_blank"&&(X()?l=!0:i=!0);let v=Pt()&&X()&&!Ve()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:l,ctrlKey:i,altKey:f,shiftKey:p}):new MouseEvent("click",{metaKey:l,ctrlKey:i,altKey:f,shiftKey:p,bubbles:!0,cancelable:!0});z.isOpening=r,V(e),e.dispatchEvent(v),z.isOpening=!1}z.isOpening=!1;function Mt(e,t){if(e instanceof HTMLAnchorElement)t(e);else if(e.hasAttribute("data-href")){let r=document.createElement("a");r.href=e.getAttribute("data-href"),e.hasAttribute("data-target")&&(r.target=e.getAttribute("data-target")),e.hasAttribute("data-rel")&&(r.rel=e.getAttribute("data-rel")),e.hasAttribute("data-download")&&(r.download=e.getAttribute("data-download")),e.hasAttribute("data-ping")&&(r.ping=e.getAttribute("data-ping")),e.hasAttribute("data-referrer-policy")&&(r.referrerPolicy=e.getAttribute("data-referrer-policy")),e.appendChild(r),t(r),e.removeChild(r)}}function kt(e,t){Mt(e,r=>z(r,t))}function vr(e){let t=Ct();var r;const n=t.useHref((r=e==null?void 0:e.href)!==null&&r!==void 0?r:"");return{href:e!=null&&e.href?n:void 0,target:e==null?void 0:e.target,rel:e==null?void 0:e.rel,download:e==null?void 0:e.download,ping:e==null?void 0:e.ping,referrerPolicy:e==null?void 0:e.referrerPolicy}}let B=new Map,pe=new Set;function Le(){if(typeof window>"u")return;function e(n){return"propertyName"in n}let t=n=>{if(!e(n)||!n.target)return;let a=B.get(n.target);a||(a=new Set,B.set(n.target,a),n.target.addEventListener("transitioncancel",r,{once:!0})),a.add(n.propertyName)},r=n=>{if(!e(n)||!n.target)return;let a=B.get(n.target);if(!!a&&(a.delete(n.propertyName),a.size===0&&(n.target.removeEventListener("transitioncancel",r),B.delete(n.target)),B.size===0)){for(let l of pe)l();pe.clear()}};document.body.addEventListener("transitionrun",t),document.body.addEventListener("transitionend",r)}typeof document<"u"&&(document.readyState!=="loading"?Le():document.addEventListener("DOMContentLoaded",Le));function Ne(e){requestAnimationFrame(()=>{B.size===0?e():pe.add(e)})}function Ft(){let e=c.exports.useRef(new Map),t=c.exports.useCallback((a,l,i,f)=>{let p=f!=null&&f.once?(...v)=>{e.current.delete(i),i(...v)}:i;e.current.set(i,{type:l,eventTarget:a,fn:p,options:f}),a.addEventListener(l,p,f)},[]),r=c.exports.useCallback((a,l,i,f)=>{var p;let v=((p=e.current.get(i))===null||p===void 0?void 0:p.fn)||i;a.removeEventListener(l,v,f),e.current.delete(i)},[]),n=c.exports.useCallback(()=>{e.current.forEach((a,l)=>{r(a.eventTarget,a.type,l,a.options)})},[r]);return c.exports.useEffect(()=>n,[n]),{addGlobalListener:t,removeGlobalListener:r,removeAllGlobalListeners:n}}function Kt(e){const t=c.exports.useRef(null);return c.exports.useMemo(()=>({get current(){return t.current},set current(r){t.current=r,typeof e=="function"?e(r):e&&(e.current=r)}}),[e])}function Ht(e,t){N(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}})}function ve(e){return e.mozInputSource===0&&e.isTrusted?!0:Re()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function It(e){return!Re()&&e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"}function $r(e,t,r){let[n,a]=c.exports.useState(e||t),l=c.exports.useRef(e!==void 0),i=e!==void 0;c.exports.useEffect(()=>{let v=l.current;v!==i&&console.warn(`WARN: A component changed from ${v?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}.`),l.current=i},[i]);let f=i?e:n,p=c.exports.useCallback((v,...b)=>{let m=(T,...g)=>{r&&(Object.is(f,T)||r(T,...g)),i||(f=T)};typeof v=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),a((g,...L)=>{let x=v(i?f:g,...L);return m(x,...b),i?g:x})):(i||a(v),m(v,...b))},[i,f,r]);return[f,p]}const Ce=Symbol("default");function gr({values:e,children:t}){for(let[r,n]of e)t=E.createElement(r.Provider,{value:n},t);return t}function br(e){let{className:t,style:r,children:n,defaultClassName:a,defaultChildren:l,defaultStyle:i,values:f}=e;return c.exports.useMemo(()=>{let p,v,b;return typeof t=="function"?p=t({...f,defaultClassName:a}):p=t,typeof r=="function"?v=r({...f,defaultStyle:i||{}}):v=r,typeof n=="function"?b=n({...f,defaultChildren:l}):n==null?b=l:b=n,{className:p!=null?p:a,style:v||i?{...i,...v}:void 0,children:b!=null?b:l,"data-rac":""}},[t,r,n,a,l,i,f])}function At(e,t){let r=c.exports.useContext(e);if(t===null)return null;if(r&&typeof r=="object"&&"slots"in r&&r.slots){let n=new Intl.ListFormat().format(Object.keys(r.slots).map(l=>`"${l}"`));if(!t&&!r.slots[Ce])throw new Error(`A slot prop is required. Valid slot names are ${n}.`);let a=t||Ce;if(!r.slots[a])throw new Error(`Invalid slot "${t}". Valid slot names are ${n}.`);return r.slots[a]}return r}function yr(e,t,r){let n=At(r,e.slot)||{},{ref:a,...l}=n,i=Kt(c.exports.useMemo(()=>$t(t,a),[t,a])),f=Ee(l,e);return"style"in l&&l.style&&"style"in e&&e.style&&(typeof l.style=="function"||typeof e.style=="function"?f.style=p=>{let v=typeof l.style=="function"?l.style(p):l.style,b={...p.defaultStyle,...v},m=typeof e.style=="function"?e.style({...p,defaultStyle:b}):e.style;return{...b,...m}}:f.style={...l.style,...e.style}),[f,i]}function hr(){let[e,t]=c.exports.useState(!0),r=c.exports.useRef(!1),n=c.exports.useCallback(a=>{r.current=!0,t(!!a)},[]);return N(()=>{r.current||t(!1)},[]),[n,e]}if(typeof HTMLTemplateElement<"u"){const e=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild").get;Object.defineProperty(HTMLTemplateElement.prototype,"firstChild",{configurable:!0,enumerable:!0,get:function(){return this.dataset.reactAriaHidden?this.content.firstChild:e.call(this)}})}const oe=c.exports.createContext(!1),Ot=typeof DocumentFragment<"u"?new DocumentFragment:null;function mr(e){let t=c.exports.useContext(oe),r=Te();if(t)return E.createElement(E.Fragment,null,e.children);let n=E.createElement(oe.Provider,{value:!0},e.children);return r?E.createElement("template",{"data-react-aria-hidden":!0},n):et.exports.createPortal(n,Ot)}function Tr(e){let t=(r,n)=>c.exports.useContext(oe)?null:e(r,n);return t.displayName=e.displayName||e.name,c.exports.forwardRef(t)}function Er(){return c.exports.useContext(oe)}let j="default",$e="",re=new WeakMap;function Me(e){if(Pe()){if(j==="default"){const t=S(e);$e=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect="none"}j="disabled"}else(e instanceof HTMLElement||e instanceof SVGElement)&&(re.set(e,e.style.userSelect),e.style.userSelect="none")}function Z(e){if(Pe()){if(j!=="disabled")return;j="restoring",setTimeout(()=>{Ne(()=>{if(j==="restoring"){const t=S(e);t.documentElement.style.webkitUserSelect==="none"&&(t.documentElement.style.webkitUserSelect=$e||""),$e="",j="default"}})},300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&re.has(e)){let t=re.get(e);e.style.userSelect==="none"&&(e.style.userSelect=t),e.getAttribute("style")===""&&e.removeAttribute("style"),re.delete(e)}}const Ue=E.createContext({register:()=>{}});Ue.displayName="PressResponderContext";function Dt(e,t){return t.get?t.get.call(e):t.value}function Ge(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function Wt(e,t){var r=Ge(e,t,"get");return Dt(e,r)}function Vt(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Rt(e,t,r){Vt(e,t),t.set(e,r)}function Nt(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}function ke(e,t,r){var n=Ge(e,t,"set");return Nt(e,n,r),r}function Ut(e){let t=c.exports.useContext(Ue);if(t){let{register:r,...n}=t;e=Ee(n,e),r()}return Ht(t,e.ref),e}var ee=new WeakMap;class te{continuePropagation(){ke(this,ee,!1)}get shouldStopPropagation(){return Wt(this,ee)}constructor(t,r,n,a){Rt(this,ee,{writable:!0,value:void 0}),ke(this,ee,!0);var l;let i=(l=a==null?void 0:a.target)!==null&&l!==void 0?l:n.currentTarget;const f=i==null?void 0:i.getBoundingClientRect();let p,v=0,b,m=null;n.clientX!=null&&n.clientY!=null&&(b=n.clientX,m=n.clientY),f&&(b!=null&&m!=null?(p=b-f.left,v=m-f.top):(p=f.width/2,v=f.height/2)),this.type=t,this.pointerType=r,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.x=p,this.y=v}}const Fe=Symbol("linkClicked");function xr(e){let{onPress:t,onPressChange:r,onPressStart:n,onPressEnd:a,onPressUp:l,isDisabled:i,isPressed:f,preventFocusOnPress:p,shouldCancelOnPointerExit:v,allowTextSelectionOnPress:b,ref:m,...T}=Ut(e),[g,L]=c.exports.useState(!1),x=c.exports.useRef({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:D,removeAllGlobalListeners:U}=Ft(),k=O((o,$)=>{let C=x.current;if(i||C.didFirePressStart)return!1;let d=!0;if(C.isTriggeringEvent=!0,n){let y=new te("pressstart",$,o);n(y),d=y.shouldStopPropagation}return r&&r(!0),C.isTriggeringEvent=!1,C.didFirePressStart=!0,L(!0),d}),P=O((o,$,C=!0)=>{let d=x.current;if(!d.didFirePressStart)return!1;d.ignoreClickAfterPress=!0,d.didFirePressStart=!1,d.isTriggeringEvent=!0;let y=!0;if(a){let s=new te("pressend",$,o);a(s),y=s.shouldStopPropagation}if(r&&r(!1),L(!1),t&&C&&!i){let s=new te("press",$,o);t(s),y&&(y=s.shouldStopPropagation)}return d.isTriggeringEvent=!1,y}),G=O((o,$)=>{let C=x.current;if(i)return!1;if(l){C.isTriggeringEvent=!0;let d=new te("pressup",$,o);return l(d),C.isTriggeringEvent=!1,d.shouldStopPropagation}return!0}),W=O(o=>{let $=x.current;$.isPressed&&$.target&&($.isOverTarget&&$.pointerType!=null&&P(K($.target,o),$.pointerType,!1),$.isPressed=!1,$.isOverTarget=!1,$.activePointerId=null,$.pointerType=null,U(),b||Z($.target))}),J=O(o=>{v&&W(o)}),Ze=c.exports.useMemo(()=>{let o=x.current,$={onKeyDown(d){if(ue(d.nativeEvent,d.currentTarget)&&d.currentTarget.contains(d.target)){var y;He(d.target,d.key)&&d.preventDefault();let s=!0;if(!o.isPressed&&!d.repeat){o.target=d.currentTarget,o.isPressed=!0,s=k(d,"keyboard");let u=d.currentTarget,h=F=>{ue(F,u)&&!F.repeat&&u.contains(F.target)&&o.target&&G(K(o.target,F),"keyboard")};D(S(d.currentTarget),"keyup",De(h,C),!0)}s&&d.stopPropagation(),d.metaKey&&X()&&((y=o.metaKeyEvents)===null||y===void 0||y.set(d.key,d.nativeEvent))}else d.key==="Meta"&&(o.metaKeyEvents=new Map)},onClick(d){if(!(d&&!d.currentTarget.contains(d.target))&&d&&d.button===0&&!o.isTriggeringEvent&&!z.isOpening){let y=!0;if(i&&d.preventDefault(),!o.ignoreClickAfterPress&&!o.ignoreEmulatedMouseEvents&&!o.isPressed&&(o.pointerType==="virtual"||ve(d.nativeEvent))){!i&&!p&&V(d.currentTarget);let s=k(d,"virtual"),u=G(d,"virtual"),h=P(d,"virtual");y=s&&u&&h}o.ignoreEmulatedMouseEvents=!1,o.ignoreClickAfterPress=!1,y&&d.stopPropagation()}}},C=d=>{var y;if(o.isPressed&&o.target&&ue(d,o.target)){var s;He(d.target,d.key)&&d.preventDefault();let h=d.target;P(K(o.target,d),"keyboard",o.target.contains(h)),U(),d.key!=="Enter"&&we(o.target)&&o.target.contains(h)&&!d[Fe]&&(d[Fe]=!0,z(o.target,d,!1)),o.isPressed=!1,(s=o.metaKeyEvents)===null||s===void 0||s.delete(d.key)}else if(d.key==="Meta"&&((y=o.metaKeyEvents)===null||y===void 0?void 0:y.size)){var u;let h=o.metaKeyEvents;o.metaKeyEvents=void 0;for(let F of h.values())(u=o.target)===null||u===void 0||u.dispatchEvent(new KeyboardEvent("keyup",F))}};if(typeof PointerEvent<"u"){$.onPointerDown=u=>{if(u.button!==0||!u.currentTarget.contains(u.target))return;if(It(u.nativeEvent)){o.pointerType="virtual";return}fe(u.currentTarget)&&u.preventDefault(),o.pointerType=u.pointerType;let h=!0;if(!o.isPressed){o.isPressed=!0,o.isOverTarget=!0,o.activePointerId=u.pointerId,o.target=u.currentTarget,!i&&!p&&V(u.currentTarget),b||Me(o.target),h=k(u,o.pointerType);let F=u.target;"releasePointerCapture"in F&&F.releasePointerCapture(u.pointerId),D(S(u.currentTarget),"pointerup",d,!1),D(S(u.currentTarget),"pointercancel",s,!1)}h&&u.stopPropagation()},$.onMouseDown=u=>{!u.currentTarget.contains(u.target)||u.button===0&&(fe(u.currentTarget)&&u.preventDefault(),u.stopPropagation())},$.onPointerUp=u=>{!u.currentTarget.contains(u.target)||o.pointerType==="virtual"||u.button===0&&G(u,o.pointerType||u.pointerType)},$.onPointerEnter=u=>{u.pointerId===o.activePointerId&&o.target&&!o.isOverTarget&&o.pointerType!=null&&(o.isOverTarget=!0,k(K(o.target,u),o.pointerType))},$.onPointerLeave=u=>{u.pointerId===o.activePointerId&&o.target&&o.isOverTarget&&o.pointerType!=null&&(o.isOverTarget=!1,P(K(o.target,u),o.pointerType,!1),J(u))};let d=u=>{u.pointerId===o.activePointerId&&o.isPressed&&u.button===0&&o.target&&(o.target.contains(u.target)&&o.pointerType!=null?P(K(o.target,u),o.pointerType):o.isOverTarget&&o.pointerType!=null&&P(K(o.target,u),o.pointerType,!1),o.isPressed=!1,o.isOverTarget=!1,o.activePointerId=null,o.pointerType=null,U(),b||Z(o.target),"ontouchend"in o.target&&u.pointerType!=="mouse"&&D(o.target,"touchend",y,{once:!0}))},y=u=>{Be(u.currentTarget)&&u.preventDefault()},s=u=>{W(u)};$.onDragStart=u=>{!u.currentTarget.contains(u.target)||W(u)}}else{$.onMouseDown=s=>{if(s.button!==0||!s.currentTarget.contains(s.target))return;if(fe(s.currentTarget)&&s.preventDefault(),o.ignoreEmulatedMouseEvents){s.stopPropagation();return}o.isPressed=!0,o.isOverTarget=!0,o.target=s.currentTarget,o.pointerType=ve(s.nativeEvent)?"virtual":"mouse",!i&&!p&&V(s.currentTarget),k(s,o.pointerType)&&s.stopPropagation(),D(S(s.currentTarget),"mouseup",d,!1)},$.onMouseEnter=s=>{if(!s.currentTarget.contains(s.target))return;let u=!0;o.isPressed&&!o.ignoreEmulatedMouseEvents&&o.pointerType!=null&&(o.isOverTarget=!0,u=k(s,o.pointerType)),u&&s.stopPropagation()},$.onMouseLeave=s=>{if(!s.currentTarget.contains(s.target))return;let u=!0;o.isPressed&&!o.ignoreEmulatedMouseEvents&&o.pointerType!=null&&(o.isOverTarget=!1,u=P(s,o.pointerType,!1),J(s)),u&&s.stopPropagation()},$.onMouseUp=s=>{!s.currentTarget.contains(s.target)||!o.ignoreEmulatedMouseEvents&&s.button===0&&G(s,o.pointerType||"mouse")};let d=s=>{if(s.button===0){if(o.isPressed=!1,U(),o.ignoreEmulatedMouseEvents){o.ignoreEmulatedMouseEvents=!1;return}o.target&&ce(s,o.target)&&o.pointerType!=null?P(K(o.target,s),o.pointerType):o.target&&o.isOverTarget&&o.pointerType!=null&&P(K(o.target,s),o.pointerType,!1),o.isOverTarget=!1}};$.onTouchStart=s=>{if(!s.currentTarget.contains(s.target))return;let u=Gt(s.nativeEvent);if(!u)return;o.activePointerId=u.identifier,o.ignoreEmulatedMouseEvents=!0,o.isOverTarget=!0,o.isPressed=!0,o.target=s.currentTarget,o.pointerType="touch",!i&&!p&&V(s.currentTarget),b||Me(o.target),k(I(o.target,s),o.pointerType)&&s.stopPropagation(),D(M(s.currentTarget),"scroll",y,!0)},$.onTouchMove=s=>{if(!s.currentTarget.contains(s.target))return;if(!o.isPressed){s.stopPropagation();return}let u=Ke(s.nativeEvent,o.activePointerId),h=!0;u&&ce(u,s.currentTarget)?!o.isOverTarget&&o.pointerType!=null&&(o.isOverTarget=!0,h=k(I(o.target,s),o.pointerType)):o.isOverTarget&&o.pointerType!=null&&(o.isOverTarget=!1,h=P(I(o.target,s),o.pointerType,!1),J(I(o.target,s))),h&&s.stopPropagation()},$.onTouchEnd=s=>{if(!s.currentTarget.contains(s.target))return;if(!o.isPressed){s.stopPropagation();return}let u=Ke(s.nativeEvent,o.activePointerId),h=!0;u&&ce(u,s.currentTarget)&&o.pointerType!=null?(G(I(o.target,s),o.pointerType),h=P(I(o.target,s),o.pointerType)):o.isOverTarget&&o.pointerType!=null&&(h=P(I(o.target,s),o.pointerType,!1)),h&&s.stopPropagation(),o.isPressed=!1,o.activePointerId=null,o.isOverTarget=!1,o.ignoreEmulatedMouseEvents=!0,o.target&&!b&&Z(o.target),U()},$.onTouchCancel=s=>{!s.currentTarget.contains(s.target)||(s.stopPropagation(),o.isPressed&&W(I(o.target,s)))};let y=s=>{o.isPressed&&s.target.contains(o.target)&&W({currentTarget:o.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};$.onDragStart=s=>{!s.currentTarget.contains(s.target)||W(s)}}return $},[D,i,p,U,b,W,J,P,k,G]);return c.exports.useEffect(()=>()=>{var o;b||Z((o=x.current.target)!==null&&o!==void 0?o:void 0)},[b]),{isPressed:f||g,pressProps:Ee(T,Ze)}}function we(e){return e.tagName==="A"&&e.hasAttribute("href")}function ue(e,t){const{key:r,code:n}=e,a=t,l=a.getAttribute("role");return(r==="Enter"||r===" "||r==="Spacebar"||n==="Space")&&!(a instanceof M(a).HTMLInputElement&&!je(a,r)||a instanceof M(a).HTMLTextAreaElement||a.isContentEditable)&&!((l==="link"||!l&&we(a))&&r!=="Enter")}function Gt(e){const{targetTouches:t}=e;return t.length>0?t[0]:null}function Ke(e,t){const r=e.changedTouches;for(let n=0;n<r.length;n++){const a=r[n];if(a.identifier===t)return a}return null}function I(e,t){let r=0,n=0;return t.targetTouches&&t.targetTouches.length===1&&(r=t.targetTouches[0].clientX,n=t.targetTouches[0].clientY),{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:r,clientY:n}}function K(e,t){let r=t.clientX,n=t.clientY;return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:r,clientY:n}}function Bt(e){let t=0,r=0;return e.width!==void 0?t=e.width/2:e.radiusX!==void 0&&(t=e.radiusX),e.height!==void 0?r=e.height/2:e.radiusY!==void 0&&(r=e.radiusY),{top:e.clientY-r,right:e.clientX+t,bottom:e.clientY+r,left:e.clientX-t}}function jt(e,t){return!(e.left>t.right||t.left>e.right||e.top>t.bottom||t.top>e.bottom)}function ce(e,t){let r=t.getBoundingClientRect(),n=Bt(e);return jt(r,n)}function fe(e){return!(e instanceof HTMLElement)||!e.hasAttribute("draggable")}function Be(e){return e instanceof HTMLInputElement?!1:e instanceof HTMLButtonElement?e.type!=="submit"&&e.type!=="reset":!we(e)}function He(e,t){return e instanceof HTMLInputElement?!je(e,t):Be(e)}const Xt=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function je(e,t){return e.type==="checkbox"||e.type==="radio"?t===" ":Xt.has(e.type)}class zt{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(t,r){this.nativeEvent=r,this.target=r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget,this.bubbles=r.bubbles,this.cancelable=r.cancelable,this.defaultPrevented=r.defaultPrevented,this.eventPhase=r.eventPhase,this.isTrusted=r.isTrusted,this.timeStamp=r.timeStamp,this.type=t}}function Xe(e){let t=c.exports.useRef({isFocused:!1,observer:null});N(()=>{const n=t.current;return()=>{n.observer&&(n.observer.disconnect(),n.observer=null)}},[]);let r=O(n=>{e==null||e(n)});return c.exports.useCallback(n=>{if(n.target instanceof HTMLButtonElement||n.target instanceof HTMLInputElement||n.target instanceof HTMLTextAreaElement||n.target instanceof HTMLSelectElement){t.current.isFocused=!0;let a=n.target,l=i=>{t.current.isFocused=!1,a.disabled&&r(new zt("blur",i)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};a.addEventListener("focusout",l,{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&a.disabled){var i;(i=t.current.observer)===null||i===void 0||i.disconnect();let f=a===document.activeElement?null:document.activeElement;a.dispatchEvent(new FocusEvent("blur",{relatedTarget:f})),a.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:f}))}}),t.current.observer.observe(a,{attributes:!0,attributeFilter:["disabled"]})}},[r])}function Yt(e){let{isDisabled:t,onFocus:r,onBlur:n,onFocusChange:a}=e;const l=c.exports.useCallback(p=>{if(p.target===p.currentTarget)return n&&n(p),a&&a(!1),!0},[n,a]),i=Xe(l),f=c.exports.useCallback(p=>{const v=S(p.target);p.target===p.currentTarget&&v.activeElement===p.target&&(r&&r(p),a&&a(!0),i(p))},[a,r,i]);return{focusProps:{onFocus:!t&&(r||a||n)?f:void 0,onBlur:!t&&(n||a)?l:void 0}}}let Y=null,ge=new Set,_=new Map,R=!1,be=!1;const qt={Tab:!0,Escape:!0};function Se(e,t){for(let r of ge)r(e,t)}function _t(e){return!(e.metaKey||!X()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function ae(e){R=!0,_t(e)&&(Y="keyboard",Se("keyboard",e))}function w(e){Y="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(R=!0,Se("pointer",e))}function ze(e){ve(e)&&(R=!0,Y="virtual")}function Ye(e){e.target===window||e.target===document||(!R&&!be&&(Y="virtual",Se("virtual",e)),R=!1,be=!1)}function qe(){R=!1,be=!0}function ye(e){if(typeof window>"u"||_.get(M(e)))return;const t=M(e),r=S(e);let n=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){R=!0,n.apply(this,arguments)},r.addEventListener("keydown",ae,!0),r.addEventListener("keyup",ae,!0),r.addEventListener("click",ze,!0),t.addEventListener("focus",Ye,!0),t.addEventListener("blur",qe,!1),typeof PointerEvent<"u"?(r.addEventListener("pointerdown",w,!0),r.addEventListener("pointermove",w,!0),r.addEventListener("pointerup",w,!0)):(r.addEventListener("mousedown",w,!0),r.addEventListener("mousemove",w,!0),r.addEventListener("mouseup",w,!0)),t.addEventListener("beforeunload",()=>{_e(e)},{once:!0}),_.set(t,{focus:n})}const _e=(e,t)=>{const r=M(e),n=S(e);t&&n.removeEventListener("DOMContentLoaded",t),_.has(r)&&(r.HTMLElement.prototype.focus=_.get(r).focus,n.removeEventListener("keydown",ae,!0),n.removeEventListener("keyup",ae,!0),n.removeEventListener("click",ze,!0),r.removeEventListener("focus",Ye,!0),r.removeEventListener("blur",qe,!1),typeof PointerEvent<"u"?(n.removeEventListener("pointerdown",w,!0),n.removeEventListener("pointermove",w,!0),n.removeEventListener("pointerup",w,!0)):(n.removeEventListener("mousedown",w,!0),n.removeEventListener("mousemove",w,!0),n.removeEventListener("mouseup",w,!0)),_.delete(r))};function Jt(e){const t=S(e);let r;return t.readyState!=="loading"?ye(e):(r=()=>{ye(e)},t.addEventListener("DOMContentLoaded",r)),()=>_e(e,r)}typeof document<"u"&&Jt();function Je(){return Y!=="pointer"}function Qt(){return Y}const Zt=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function er(e,t,r){var n;const a=typeof window<"u"?M(r==null?void 0:r.target).HTMLInputElement:HTMLInputElement,l=typeof window<"u"?M(r==null?void 0:r.target).HTMLTextAreaElement:HTMLTextAreaElement,i=typeof window<"u"?M(r==null?void 0:r.target).HTMLElement:HTMLElement,f=typeof window<"u"?M(r==null?void 0:r.target).KeyboardEvent:KeyboardEvent;return e=e||(r==null?void 0:r.target)instanceof a&&!Zt.has(r==null||(n=r.target)===null||n===void 0?void 0:n.type)||(r==null?void 0:r.target)instanceof l||(r==null?void 0:r.target)instanceof i&&(r==null?void 0:r.target.isContentEditable),!(e&&t==="keyboard"&&r instanceof f&&!qt[r.key])}function tr(e,t,r){ye(),c.exports.useEffect(()=>{let n=(a,l)=>{!er(!!(r!=null&&r.isTextInput),a,l)||e(Je())};return ge.add(n),()=>{ge.delete(n)}},t)}function rr(e){let{isDisabled:t,onBlurWithin:r,onFocusWithin:n,onFocusWithinChange:a}=e,l=c.exports.useRef({isFocusWithin:!1}),i=c.exports.useCallback(v=>{l.current.isFocusWithin&&!v.currentTarget.contains(v.relatedTarget)&&(l.current.isFocusWithin=!1,r&&r(v),a&&a(!1))},[r,a,l]),f=Xe(i),p=c.exports.useCallback(v=>{!l.current.isFocusWithin&&document.activeElement===v.target&&(n&&n(v),a&&a(!0),l.current.isFocusWithin=!0,f(v))},[n,a,f]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:p,onBlur:i}}}let ie=!1,de=0;function he(){ie=!0,setTimeout(()=>{ie=!1},50)}function Ie(e){e.pointerType==="touch"&&he()}function nr(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",Ie):document.addEventListener("touchend",he),de++,()=>{de--,!(de>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",Ie):document.removeEventListener("touchend",he))}}function Pr(e){let{onHoverStart:t,onHoverChange:r,onHoverEnd:n,isDisabled:a}=e,[l,i]=c.exports.useState(!1),f=c.exports.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;c.exports.useEffect(nr,[]);let{hoverProps:p,triggerHoverEnd:v}=c.exports.useMemo(()=>{let b=(g,L)=>{if(f.pointerType=L,a||L==="touch"||f.isHovered||!g.currentTarget.contains(g.target))return;f.isHovered=!0;let x=g.currentTarget;f.target=x,t&&t({type:"hoverstart",target:x,pointerType:L}),r&&r(!0),i(!0)},m=(g,L)=>{if(f.pointerType="",f.target=null,L==="touch"||!f.isHovered)return;f.isHovered=!1;let x=g.currentTarget;n&&n({type:"hoverend",target:x,pointerType:L}),r&&r(!1),i(!1)},T={};return typeof PointerEvent<"u"?(T.onPointerEnter=g=>{ie&&g.pointerType==="mouse"||b(g,g.pointerType)},T.onPointerLeave=g=>{!a&&g.currentTarget.contains(g.target)&&m(g,g.pointerType)}):(T.onTouchStart=()=>{f.ignoreEmulatedMouseEvents=!0},T.onMouseEnter=g=>{!f.ignoreEmulatedMouseEvents&&!ie&&b(g,"mouse"),f.ignoreEmulatedMouseEvents=!1},T.onMouseLeave=g=>{!a&&g.currentTarget.contains(g.target)&&m(g,"mouse")}),{hoverProps:T,triggerHoverEnd:m}},[t,r,n,a,f]);return c.exports.useEffect(()=>{a&&v({currentTarget:f.target},f.pointerType)},[a]),{hoverProps:p,isHovered:l}}function wr(e){const t=S(e);if(Qt()==="virtual"){let r=t.activeElement;Ne(()=>{t.activeElement===r&&e.isConnected&&V(e)})}else V(e)}function Sr(e={}){let{autoFocus:t=!1,isTextInput:r,within:n}=e,a=c.exports.useRef({isFocused:!1,isFocusVisible:t||Je()}),[l,i]=c.exports.useState(!1),[f,p]=c.exports.useState(()=>a.current.isFocused&&a.current.isFocusVisible),v=c.exports.useCallback(()=>p(a.current.isFocused&&a.current.isFocusVisible),[]),b=c.exports.useCallback(g=>{a.current.isFocused=g,i(g),v()},[v]);tr(g=>{a.current.isFocusVisible=g,v()},[],{isTextInput:r});let{focusProps:m}=Yt({isDisabled:n,onFocusChange:b}),{focusWithinProps:T}=rr({isDisabled:!n,onFocusWithinChange:b});return{isFocused:l,isFocusVisible:f,focusProps:n?T:m}}const or=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),ar=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function ir(e){if(Intl.Locale){let r=new Intl.Locale(e).maximize(),n=typeof r.getTextInfo=="function"?r.getTextInfo():r.textInfo;if(n)return n.direction==="rtl";if(r.script)return or.has(r.script)}let t=e.split("-")[0];return ar.has(t)}const sr=Symbol.for("react-aria.i18n.locale");function Qe(){let e=typeof window<"u"&&window[sr]||typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch{e="en-US"}return{locale:e,direction:ir(e)?"rtl":"ltr"}}let me=Qe(),q=new Set;function Ae(){me=Qe();for(let e of q)e(me)}function lr(){let e=Te(),[t,r]=c.exports.useState(me);return c.exports.useEffect(()=>(q.size===0&&window.addEventListener("languagechange",Ae),q.add(r),()=>{q.delete(r),q.size===0&&window.removeEventListener("languagechange",Ae)}),[]),e?{locale:"en-US",direction:"ltr"}:t}const ur=E.createContext(null);function Lr(){let e=lr();return c.exports.useContext(ur)||e}export{N as $,pr as A,Ct as B,V as C,z as D,Ue as E,Ht as F,rr as G,Pe as H,De as I,fr as J,Je as K,Yt as L,Er as M,$t as N,hr as O,Ce as P,Pt as Q,dr as a,vr as b,Ee as c,Lr as d,dt as e,$r as f,At as g,Kt as h,br as i,Sr as j,Pr as k,Tr as l,gr as m,yr as n,O as o,X as p,mr as q,Te as r,Ft as s,xr as t,M as u,S as v,wr as w,Re as x,wt as y,Qt as z};
