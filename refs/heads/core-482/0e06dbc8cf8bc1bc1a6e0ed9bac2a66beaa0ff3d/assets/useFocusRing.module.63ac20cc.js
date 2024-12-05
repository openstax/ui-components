import{f as de,b as z,g as pe,h as ge,e as U,i as se,j as M,k as ve,l as be,m as ee,n as q,o as $e,p as Te}from"./focusSafely.module.5bd20537.js";import{k as D,a as le,n as ye,o as he,p as Pe,q as Ee,r as me}from"./context.module.118ddca0.js";import{r as v}from"./index.9b9905cd.js";const xe=v.exports.createContext({isNative:!0,open:ke,useHref:t=>t});function Se(){return v.exports.useContext(xe)}function I(t,r,a=!0){var l,s;let{metaKey:p,ctrlKey:c,altKey:u,shiftKey:f}=r;de()&&((s=window.event)===null||s===void 0||(l=s.type)===null||l===void 0?void 0:l.startsWith("key"))&&t.target==="_blank"&&(z()?p=!0:c=!0);let T=pe()&&z()&&!ge()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:p,ctrlKey:c,altKey:u,shiftKey:f}):new MouseEvent("click",{metaKey:p,ctrlKey:c,altKey:u,shiftKey:f,bubbles:!0,cancelable:!0});I.isOpening=a,U(t),t.dispatchEvent(T),I.isOpening=!1}I.isOpening=!1;function Ke(t,r){if(t instanceof HTMLAnchorElement)r(t);else if(t.hasAttribute("data-href")){let a=document.createElement("a");a.href=t.getAttribute("data-href"),t.hasAttribute("data-target")&&(a.target=t.getAttribute("data-target")),t.hasAttribute("data-rel")&&(a.rel=t.getAttribute("data-rel")),t.hasAttribute("data-download")&&(a.download=t.getAttribute("data-download")),t.hasAttribute("data-ping")&&(a.ping=t.getAttribute("data-ping")),t.hasAttribute("data-referrer-policy")&&(a.referrerPolicy=t.getAttribute("data-referrer-policy")),t.appendChild(a),r(a),t.removeChild(a)}}function ke(t,r){Ke(t,a=>I(a,r))}function Ve(t){let r=Se();return{href:t!=null&&t.href?r.useHref(t==null?void 0:t.href):void 0,target:t==null?void 0:t.target,rel:t==null?void 0:t.rel,download:t==null?void 0:t.download,ping:t==null?void 0:t.ping,referrerPolicy:t==null?void 0:t.referrerPolicy}}function we(){let t=v.exports.useRef(new Map),r=v.exports.useCallback((s,p,c,u)=>{let f=u!=null&&u.once?(...T)=>{t.current.delete(c),c(...T)}:c;t.current.set(c,{type:p,eventTarget:s,fn:f,options:u}),s.addEventListener(p,c,u)},[]),a=v.exports.useCallback((s,p,c,u)=>{var f;let T=((f=t.current.get(c))===null||f===void 0?void 0:f.fn)||c;s.removeEventListener(p,T,u),t.current.delete(c)},[]),l=v.exports.useCallback(()=>{t.current.forEach((s,p)=>{a(s.eventTarget,s.type,p,s.options)})},[a]);return v.exports.useEffect(()=>l,[l]),{addGlobalListener:r,removeGlobalListener:a,removeAllGlobalListeners:l}}let A="default",J="",V=new WeakMap;function te(t){if(se()){if(A==="default"){const r=M(t);J=r.documentElement.style.webkitUserSelect,r.documentElement.style.webkitUserSelect="none"}A="disabled"}else(t instanceof HTMLElement||t instanceof SVGElement)&&(V.set(t,t.style.userSelect),t.style.userSelect="none")}function X(t){if(se()){if(A!=="disabled")return;A="restoring",setTimeout(()=>{ve(()=>{if(A==="restoring"){const r=M(t);r.documentElement.style.webkitUserSelect==="none"&&(r.documentElement.style.webkitUserSelect=J||""),J="",A="default"}})},300)}else if((t instanceof HTMLElement||t instanceof SVGElement)&&t&&V.has(t)){let r=V.get(t);t.style.userSelect==="none"&&(t.style.userSelect=r),t.getAttribute("style")===""&&t.removeAttribute("style"),V.delete(t)}}function Me(t,r){return r.get?r.get.call(t):r.value}function ue(t,r,a){if(!r.has(t))throw new TypeError("attempted to "+a+" private field on non-instance");return r.get(t)}function Ce(t,r){var a=ue(t,r,"get");return Me(t,a)}function Oe(t,r){if(r.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Le(t,r,a){Oe(t,r),r.set(t,a)}function _e(t,r,a){if(r.set)r.set.call(t,a);else{if(!r.writable)throw new TypeError("attempted to set read only private field");r.value=a}}function re(t,r,a){var l=ue(t,r,"set");return _e(t,l,a),a}function Fe(t){let r=v.exports.useContext(ye);if(r){let{register:a,...l}=r;t=le(l,t),a()}return he(r,t.ref),t}var Y=new WeakMap;class R{continuePropagation(){re(this,Y,!1)}get shouldStopPropagation(){return Ce(this,Y)}constructor(r,a,l,s){Le(this,Y,{writable:!0,value:void 0}),re(this,Y,!0);var p;let c=(p=s==null?void 0:s.target)!==null&&p!==void 0?p:l.currentTarget;const u=c==null?void 0:c.getBoundingClientRect();let f,T=0,y,m=null;l.clientX!=null&&l.clientY!=null&&(y=l.clientX,m=l.clientY),u&&(y!=null&&m!=null?(f=y-u.left,T=m-u.top):(f=u.width/2,T=u.height/2)),this.type=r,this.pointerType=a,this.target=l.currentTarget,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.x=f,this.y=T}}const ne=Symbol("linkClicked");function Be(t){let{onPress:r,onPressChange:a,onPressStart:l,onPressEnd:s,onPressUp:p,isDisabled:c,isPressed:u,preventFocusOnPress:f,shouldCancelOnPointerExit:T,allowTextSelectionOnPress:y,ref:m,...x}=Fe(t),[g,S]=v.exports.useState(!1),P=v.exports.useRef({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:C,removeAllGlobalListeners:L}=we(),K=D((e,d)=>{let E=P.current;if(c||E.didFirePressStart)return!1;let o=!0;if(E.isTriggeringEvent=!0,l){let b=new R("pressstart",d,e);l(b),o=b.shouldStopPropagation}return a&&a(!0),E.isTriggeringEvent=!1,E.didFirePressStart=!0,S(!0),o}),h=D((e,d,E=!0)=>{let o=P.current;if(!o.didFirePressStart)return!1;o.ignoreClickAfterPress=!0,o.didFirePressStart=!1,o.isTriggeringEvent=!0;let b=!0;if(s){let n=new R("pressend",d,e);s(n),b=n.shouldStopPropagation}if(a&&a(!1),S(!1),r&&E&&!c){let n=new R("press",d,e);r(n),b&&(b=n.shouldStopPropagation)}return o.isTriggeringEvent=!1,b}),_=D((e,d)=>{let E=P.current;if(c)return!1;if(p){E.isTriggeringEvent=!0;let o=new R("pressup",d,e);return p(o),E.isTriggeringEvent=!1,o.shouldStopPropagation}return!0}),O=D(e=>{let d=P.current;d.isPressed&&d.target&&(d.isOverTarget&&d.pointerType!=null&&h(k(d.target,e),d.pointerType,!1),d.isPressed=!1,d.isOverTarget=!1,d.activePointerId=null,d.pointerType=null,L(),y||X(d.target))}),G=D(e=>{T&&O(e)}),fe=v.exports.useMemo(()=>{let e=P.current,d={onKeyDown(o){if(W(o.nativeEvent,o.currentTarget)&&o.currentTarget.contains(o.target)){var b;ae(o.target,o.key)&&o.preventDefault();let n=!0;if(!e.isPressed&&!o.repeat){e.target=o.currentTarget,e.isPressed=!0,n=K(o,"keyboard");let i=o.currentTarget,$=F=>{W(F,i)&&!F.repeat&&i.contains(F.target)&&e.target&&_(k(e.target,F),"keyboard")};C(M(o.currentTarget),"keyup",Pe($,E),!0)}n&&o.stopPropagation(),o.metaKey&&z()&&((b=e.metaKeyEvents)===null||b===void 0||b.set(o.key,o.nativeEvent))}else o.key==="Meta"&&(e.metaKeyEvents=new Map)},onClick(o){if(!(o&&!o.currentTarget.contains(o.target))&&o&&o.button===0&&!e.isTriggeringEvent&&!I.isOpening){let b=!0;if(c&&o.preventDefault(),!e.ignoreClickAfterPress&&!e.ignoreEmulatedMouseEvents&&!e.isPressed&&(e.pointerType==="virtual"||ee(o.nativeEvent))){!c&&!f&&U(o.currentTarget);let n=K(o,"virtual"),i=_(o,"virtual"),$=h(o,"virtual");b=n&&i&&$}e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1,b&&o.stopPropagation()}}},E=o=>{var b;if(e.isPressed&&e.target&&W(o,e.target)){var n;ae(o.target,o.key)&&o.preventDefault();let $=o.target;h(k(e.target,o),"keyboard",e.target.contains($)),L(),o.key!=="Enter"&&Z(e.target)&&e.target.contains($)&&!o[ne]&&(o[ne]=!0,I(e.target,o,!1)),e.isPressed=!1,(n=e.metaKeyEvents)===null||n===void 0||n.delete(o.key)}else if(o.key==="Meta"&&((b=e.metaKeyEvents)===null||b===void 0?void 0:b.size)){var i;let $=e.metaKeyEvents;e.metaKeyEvents=void 0;for(let F of $.values())(i=e.target)===null||i===void 0||i.dispatchEvent(new KeyboardEvent("keyup",F))}};if(typeof PointerEvent<"u"){d.onPointerDown=i=>{if(i.button!==0||!i.currentTarget.contains(i.target))return;if(be(i.nativeEvent)){e.pointerType="virtual";return}j(i.currentTarget)&&i.preventDefault(),e.pointerType=i.pointerType;let $=!0;e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=i.pointerId,e.target=i.currentTarget,!c&&!f&&U(i.currentTarget),y||te(e.target),$=K(i,e.pointerType),C(M(i.currentTarget),"pointermove",o,!1),C(M(i.currentTarget),"pointerup",b,!1),C(M(i.currentTarget),"pointercancel",n,!1)),$&&i.stopPropagation()},d.onMouseDown=i=>{!i.currentTarget.contains(i.target)||i.button===0&&(j(i.currentTarget)&&i.preventDefault(),i.stopPropagation())},d.onPointerUp=i=>{!i.currentTarget.contains(i.target)||e.pointerType==="virtual"||i.button===0&&H(i,i.currentTarget)&&_(i,e.pointerType||i.pointerType)};let o=i=>{i.pointerId===e.activePointerId&&(e.target&&H(i,e.target)?!e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!0,K(k(e.target,i),e.pointerType)):e.target&&e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!1,h(k(e.target,i),e.pointerType,!1),G(i)))},b=i=>{i.pointerId===e.activePointerId&&e.isPressed&&i.button===0&&e.target&&(H(i,e.target)&&e.pointerType!=null?h(k(e.target,i),e.pointerType):e.isOverTarget&&e.pointerType!=null&&h(k(e.target,i),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,L(),y||X(e.target))},n=i=>{O(i)};d.onDragStart=i=>{!i.currentTarget.contains(i.target)||O(i)}}else{d.onMouseDown=n=>{if(n.button!==0||!n.currentTarget.contains(n.target))return;if(j(n.currentTarget)&&n.preventDefault(),e.ignoreEmulatedMouseEvents){n.stopPropagation();return}e.isPressed=!0,e.isOverTarget=!0,e.target=n.currentTarget,e.pointerType=ee(n.nativeEvent)?"virtual":"mouse",!c&&!f&&U(n.currentTarget),K(n,e.pointerType)&&n.stopPropagation(),C(M(n.currentTarget),"mouseup",o,!1)},d.onMouseEnter=n=>{if(!n.currentTarget.contains(n.target))return;let i=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&e.pointerType!=null&&(e.isOverTarget=!0,i=K(n,e.pointerType)),i&&n.stopPropagation()},d.onMouseLeave=n=>{if(!n.currentTarget.contains(n.target))return;let i=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&e.pointerType!=null&&(e.isOverTarget=!1,i=h(n,e.pointerType,!1),G(n)),i&&n.stopPropagation()},d.onMouseUp=n=>{!n.currentTarget.contains(n.target)||!e.ignoreEmulatedMouseEvents&&n.button===0&&_(n,e.pointerType||"mouse")};let o=n=>{if(n.button===0){if(e.isPressed=!1,L(),e.ignoreEmulatedMouseEvents){e.ignoreEmulatedMouseEvents=!1;return}e.target&&H(n,e.target)&&e.pointerType!=null?h(k(e.target,n),e.pointerType):e.target&&e.isOverTarget&&e.pointerType!=null&&h(k(e.target,n),e.pointerType,!1),e.isOverTarget=!1}};d.onTouchStart=n=>{if(!n.currentTarget.contains(n.target))return;let i=He(n.nativeEvent);if(!i)return;e.activePointerId=i.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=n.currentTarget,e.pointerType="touch",!c&&!f&&U(n.currentTarget),y||te(e.target),K(w(e.target,n),e.pointerType)&&n.stopPropagation(),C(q(n.currentTarget),"scroll",b,!0)},d.onTouchMove=n=>{if(!n.currentTarget.contains(n.target))return;if(!e.isPressed){n.stopPropagation();return}let i=ie(n.nativeEvent,e.activePointerId),$=!0;i&&H(i,n.currentTarget)?!e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!0,$=K(w(e.target,n),e.pointerType)):e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!1,$=h(w(e.target,n),e.pointerType,!1),G(w(e.target,n))),$&&n.stopPropagation()},d.onTouchEnd=n=>{if(!n.currentTarget.contains(n.target))return;if(!e.isPressed){n.stopPropagation();return}let i=ie(n.nativeEvent,e.activePointerId),$=!0;i&&H(i,n.currentTarget)&&e.pointerType!=null?(_(w(e.target,n),e.pointerType),$=h(w(e.target,n),e.pointerType)):e.isOverTarget&&e.pointerType!=null&&($=h(w(e.target,n),e.pointerType,!1)),$&&n.stopPropagation(),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,e.target&&!y&&X(e.target),L()},d.onTouchCancel=n=>{!n.currentTarget.contains(n.target)||(n.stopPropagation(),e.isPressed&&O(w(e.target,n)))};let b=n=>{e.isPressed&&n.target.contains(e.target)&&O({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};d.onDragStart=n=>{!n.currentTarget.contains(n.target)||O(n)}}return d},[C,c,f,L,y,O,G,h,K,_]);return v.exports.useEffect(()=>()=>{var e;y||X((e=P.current.target)!==null&&e!==void 0?e:void 0)},[y]),{isPressed:u||g,pressProps:le(x,fe)}}function Z(t){return t.tagName==="A"&&t.hasAttribute("href")}function W(t,r){const{key:a,code:l}=t,s=r,p=s.getAttribute("role");return(a==="Enter"||a===" "||a==="Spacebar"||l==="Space")&&!(s instanceof q(s).HTMLInputElement&&!ce(s,a)||s instanceof q(s).HTMLTextAreaElement||s.isContentEditable)&&!((p==="link"||!p&&Z(s))&&a!=="Enter")}function He(t){const{targetTouches:r}=t;return r.length>0?r[0]:null}function ie(t,r){const a=t.changedTouches;for(let l=0;l<a.length;l++){const s=a[l];if(s.identifier===r)return s}return null}function w(t,r){let a=0,l=0;return r.targetTouches&&r.targetTouches.length===1&&(a=r.targetTouches[0].clientX,l=r.targetTouches[0].clientY),{currentTarget:t,shiftKey:r.shiftKey,ctrlKey:r.ctrlKey,metaKey:r.metaKey,altKey:r.altKey,clientX:a,clientY:l}}function k(t,r){let a=r.clientX,l=r.clientY;return{currentTarget:t,shiftKey:r.shiftKey,ctrlKey:r.ctrlKey,metaKey:r.metaKey,altKey:r.altKey,clientX:a,clientY:l}}function Ae(t){let r=0,a=0;return t.width!==void 0?r=t.width/2:t.radiusX!==void 0&&(r=t.radiusX),t.height!==void 0?a=t.height/2:t.radiusY!==void 0&&(a=t.radiusY),{top:t.clientY-a,right:t.clientX+r,bottom:t.clientY+a,left:t.clientX-r}}function Ie(t,r){return!(t.left>r.right||r.left>t.right||t.top>r.bottom||r.top>t.bottom)}function H(t,r){let a=r.getBoundingClientRect(),l=Ae(t);return Ie(a,l)}function j(t){return!(t instanceof HTMLElement)||!t.hasAttribute("draggable")}function ae(t,r){return t instanceof HTMLInputElement?!ce(t,r):t instanceof HTMLButtonElement?t.type!=="submit"&&t.type!=="reset":!Z(t)}const De=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function ce(t,r){return t.type==="checkbox"||t.type==="radio"?r===" ":De.has(t.type)}function Ue(t){let{isDisabled:r,onFocus:a,onBlur:l,onFocusChange:s}=t;const p=v.exports.useCallback(f=>{if(f.target===f.currentTarget)return l&&l(f),s&&s(!1),!0},[l,s]),c=Ee(p),u=v.exports.useCallback(f=>{const T=M(f.target);f.target===f.currentTarget&&T.activeElement===f.target&&(a&&a(f),s&&s(!0),c(f))},[s,a,c]);return{focusProps:{onFocus:!r&&(a||s||l)?u:void 0,onBlur:!r&&(l||s)?p:void 0}}}let B=!1,N=0;function Q(){B=!0,setTimeout(()=>{B=!1},50)}function oe(t){t.pointerType==="touch"&&Q()}function Ge(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",oe):document.addEventListener("touchend",Q),N++,()=>{N--,!(N>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",oe):document.removeEventListener("touchend",Q))}}function We(t){let{onHoverStart:r,onHoverChange:a,onHoverEnd:l,isDisabled:s}=t,[p,c]=v.exports.useState(!1),u=v.exports.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;v.exports.useEffect(Ge,[]);let{hoverProps:f,triggerHoverEnd:T}=v.exports.useMemo(()=>{let y=(g,S)=>{if(u.pointerType=S,s||S==="touch"||u.isHovered||!g.currentTarget.contains(g.target))return;u.isHovered=!0;let P=g.currentTarget;u.target=P,r&&r({type:"hoverstart",target:P,pointerType:S}),a&&a(!0),c(!0)},m=(g,S)=>{if(u.pointerType="",u.target=null,S==="touch"||!u.isHovered)return;u.isHovered=!1;let P=g.currentTarget;l&&l({type:"hoverend",target:P,pointerType:S}),a&&a(!1),c(!1)},x={};return typeof PointerEvent<"u"?(x.onPointerEnter=g=>{B&&g.pointerType==="mouse"||y(g,g.pointerType)},x.onPointerLeave=g=>{!s&&g.currentTarget.contains(g.target)&&m(g,g.pointerType)}):(x.onTouchStart=()=>{u.ignoreEmulatedMouseEvents=!0},x.onMouseEnter=g=>{!u.ignoreEmulatedMouseEvents&&!B&&y(g,"mouse"),u.ignoreEmulatedMouseEvents=!1},x.onMouseLeave=g=>{!s&&g.currentTarget.contains(g.target)&&m(g,"mouse")}),{hoverProps:x,triggerHoverEnd:m}},[r,a,l,s,u]);return v.exports.useEffect(()=>{s&&T({currentTarget:u.target},u.pointerType)},[s]),{hoverProps:f,isHovered:p}}function je(t={}){let{autoFocus:r=!1,isTextInput:a,within:l}=t,s=v.exports.useRef({isFocused:!1,isFocusVisible:r||$e()}),[p,c]=v.exports.useState(!1),[u,f]=v.exports.useState(()=>s.current.isFocused&&s.current.isFocusVisible),T=v.exports.useCallback(()=>f(s.current.isFocused&&s.current.isFocusVisible),[]),y=v.exports.useCallback(g=>{s.current.isFocused=g,c(g),T()},[T]);Te(g=>{s.current.isFocusVisible=g,T()},[],{isTextInput:a});let{focusProps:m}=Ue({isDisabled:l,onFocusChange:y}),{focusWithinProps:x}=me({isDisabled:!l,onFocusWithinChange:y});return{isFocused:p,isFocusVisible:u,focusProps:l?x:m}}export{Ve as $,je as a,We as b,we as c,Be as d,Se as e,I as f,Ue as g};
