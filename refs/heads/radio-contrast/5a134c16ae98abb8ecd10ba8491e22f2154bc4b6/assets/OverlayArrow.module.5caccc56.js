import{c as ce,g as de,$ as K}from"./focusSafely.module.db157cdf.js";import{r as E,R as N}from"./index.8b8509b6.js";import{f as fe,z as ue,b as A,v as pe,r as $e,$ as te,c as be,j as me,m as oe,g as ge,h as he,i as re,e as ve}from"./context.module.e7b96665.js";function xe(){return typeof window.ResizeObserver<"u"}function Z(e){const{ref:t,box:o,onResize:r}=e;E.exports.useEffect(()=>{let n=t==null?void 0:t.current;if(!!n)if(xe()){const l=new window.ResizeObserver(s=>{!s.length||r()});return l.observe(n,{box:o}),()=>{n&&l.unobserve(n)}}else return window.addEventListener("resize",r,!1),()=>{window.removeEventListener("resize",r,!1)}},[r,t,o])}function V(e,t=-1/0,o=1/0){return Math.min(Math.max(e,t),o)}function W(e){if(!e)return;let t=!0;return o=>{let r={...o,preventDefault(){o.preventDefault()},isDefaultPrevented(){return o.isDefaultPrevented()},stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}};e(r),t&&o.stopPropagation()}}function Pe(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:W(e.onKeyDown),onKeyUp:W(e.onKeyUp)}}}let ne=N.createContext(null);function we(e){let t=E.exports.useContext(ne)||{};pe(t,e);let{ref:o,...r}=t;return r}function Ee(e,t){let{children:o,...r}=e,n=fe(t),l={...r,ref:n};return N.createElement(ne.Provider,{value:l},o)}let Xe=N.forwardRef(Ee);function Ce(e,t){let{focusProps:o}=ue(e),{keyboardProps:r}=Pe(e),n=A(o,r),l=we(t),s=e.isDisabled?{}:l,a=E.exports.useRef(e.autoFocus);return E.exports.useEffect(()=>{a.current&&t.current&&ce(t.current),a.current=!1},[t]),{focusableProps:A({...n,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},s)}}function Te(e,t){let{elementType:o="button",isDisabled:r,onPress:n,onPressStart:l,onPressEnd:s,onPressUp:a,onPressChange:u,preventFocusOnPress:i,allowFocusWhenDisabled:f,onClick:p,href:h,target:d,rel:v,type:b="button"}=e,c;o==="button"?c={type:b,disabled:r}:c={role:"button",tabIndex:r?void 0:0,href:o==="a"&&r?void 0:h,target:o==="a"?d:void 0,type:o==="input"?b:void 0,disabled:o==="input"?r:void 0,"aria-disabled":!r||o==="input"?void 0:r,rel:o==="a"?v:void 0};let{pressProps:C,isPressed:$}=$e({onPressStart:l,onPressEnd:s,onPressChange:u,onPress:n,onPressUp:a,isDisabled:r,preventFocusOnPress:i,ref:t}),{focusableProps:x}=Ce(e,t);f&&(x.tabIndex=r?-1:x.tabIndex);let H=A(x,C,te(e,{labelable:!0}));return{isPressed:$,buttonProps:A(c,H,{"aria-haspopup":e["aria-haspopup"],"aria-expanded":e["aria-expanded"],"aria-controls":e["aria-controls"],"aria-pressed":e["aria-pressed"],onClick:L=>{p&&(p(L),console.warn("onClick is deprecated, please use onPress"))}})}}const O={top:"top",bottom:"top",left:"left",right:"left"},D={top:"bottom",bottom:"top",left:"right",right:"left"},Le={top:"left",left:"top"},X={top:"height",left:"width"},le={width:"totalWidth",height:"totalHeight"},B={};let T=typeof document<"u"&&window.visualViewport;function G(e){let t=0,o=0,r=0,n=0,l=0,s=0,a={},u=(T==null?void 0:T.scale)>1;if(e.tagName==="BODY"){let p=document.documentElement;r=p.clientWidth,n=p.clientHeight;var i;t=(i=T==null?void 0:T.width)!==null&&i!==void 0?i:r;var f;o=(f=T==null?void 0:T.height)!==null&&f!==void 0?f:n,a.top=p.scrollTop||e.scrollTop,a.left=p.scrollLeft||e.scrollLeft,T&&(l=T.offsetTop,s=T.offsetLeft)}else({width:t,height:o,top:l,left:s}=k(e)),a.top=e.scrollTop,a.left=e.scrollLeft,r=t,n=o;return de()&&(e.tagName==="BODY"||e.tagName==="HTML")&&u&&(a.top=0,a.left=0,l=T.pageTop,s=T.pageLeft),{width:t,height:o,totalWidth:r,totalHeight:n,scroll:a,top:l,left:s}}function Re(e){return{top:e.scrollTop,left:e.scrollLeft,width:e.scrollWidth,height:e.scrollHeight}}function q(e,t,o,r,n,l,s){let a=n.scroll[e],u=r[X[e]],i=r.scroll[O[e]]+l,f=u+r.scroll[O[e]]-l,p=t-a+s[e]-r[O[e]],h=t-a+o+s[e]-r[O[e]];return p<i?i-p:h>f?Math.max(f-h,i-p):0}function ye(e){let t=window.getComputedStyle(e);return{top:parseInt(t.marginTop,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0,right:parseInt(t.marginRight,10)||0}}function J(e){if(B[e])return B[e];let[t,o]=e.split(" "),r=O[t]||"right",n=Le[r];O[o]||(o="center");let l=X[r],s=X[n];return B[e]={placement:t,crossPlacement:o,axis:r,crossAxis:n,size:l,crossSize:s},B[e]}function j(e,t,o,r,n,l,s,a,u,i){let{placement:f,crossPlacement:p,axis:h,crossAxis:d,size:v,crossSize:b}=r,c={};c[d]=e[d],p==="center"?c[d]+=(e[b]-o[b])/2:p!==d&&(c[d]+=e[b]-o[b]),c[d]+=l;const C=e[d]-o[b]+u+i,$=e[d]+e[b]-u-i;if(c[d]=V(c[d],C,$),f===h){const x=a?s[v]:t[le[v]];c[D[h]]=Math.floor(x-e[h]+n)}else c[h]=Math.floor(e[h]+e[v]+n);return c}function He(e,t,o,r,n,l,s,a){const u=r?o.height:t[le.height];let i=e.top!=null?o.top+e.top:o.top+(u-e.bottom-s),f=a!=="top"?Math.max(0,t.height+t.top+t.scroll.top-i-(n.top+n.bottom+l)):Math.max(0,i+s-(t.top+t.scroll.top)-(n.top+n.bottom+l));return Math.min(t.height-l*2,f)}function Q(e,t,o,r,n,l){let{placement:s,axis:a,size:u}=l;return s===a?Math.max(0,o[a]-e[a]-e.scroll[a]+t[a]-r[a]-r[D[a]]-n):Math.max(0,e[u]+e[a]+e.scroll[a]-t[a]-o[a]-o[u]-r[a]-r[D[a]]-n)}function Ie(e,t,o,r,n,l,s,a,u,i,f,p,h,d,v,b){let c=J(e),{size:C,crossAxis:$,crossSize:x,placement:H,crossPlacement:L}=c,m=j(t,a,o,c,f,p,i,h,v,b),z=f,I=Q(a,i,t,n,l+f,c);if(s&&r[C]>I){let Y=J(`${D[H]} ${L}`),ie=j(t,a,o,Y,f,p,i,h,v,b);Q(a,i,t,n,l+f,Y)>I&&(c=Y,m=ie,z=f)}let P="bottom";c.axis==="top"?c.placement==="top"?P="top":c.placement==="bottom"&&(P="bottom"):c.crossAxis==="top"&&(c.crossPlacement==="top"?P="bottom":c.crossPlacement==="bottom"&&(P="top"));let w=q($,m[$],o[x],a,u,l,i);m[$]+=w;let R=He(m,a,i,h,n,l,o.height,P);d&&d<R&&(R=d),o.height=Math.min(o.height,R),m=j(t,a,o,c,z,p,i,h,v,b),w=q($,m[$],o[x],a,u,l,i),m[$]+=w;let S={},F=t[$]+.5*t[x]-m[$];const y=v/2+b,M=o[x]-v/2-b,U=t[$]-m[$]+v/2,ae=t[$]+t[x]-m[$]-v/2,se=V(F,U,ae);return S[$]=V(se,y,M),{position:m,maxHeight:R,arrowOffsetLeft:S.left,arrowOffsetTop:S.top,placement:c.placement}}function Se(e){let{placement:t,targetNode:o,overlayNode:r,scrollNode:n,padding:l,shouldFlip:s,boundaryElement:a,offset:u,crossOffset:i,maxHeight:f,arrowSize:p=0,arrowBoundaryOffset:h=0}=e,d=r instanceof HTMLElement?Fe(r):document.documentElement,v=d===document.documentElement;const b=window.getComputedStyle(d).position;let c=!!b&&b!=="static",C=v?k(o):_(o,d);if(!v){let{marginTop:I,marginLeft:P}=window.getComputedStyle(o);C.top+=parseInt(I,10)||0,C.left+=parseInt(P,10)||0}let $=k(r),x=ye(r);$.width+=x.left+x.right,$.height+=x.top+x.bottom;let H=Re(n),L=G(a),m=G(d),z=a.tagName==="BODY"?k(d):_(d,a);return d.tagName==="HTML"&&a.tagName==="BODY"&&(m.scroll.top=0,m.scroll.left=0),Ie(t,C,$,H,x,l,s,L,m,z,u,i,c,f,p,h)}function k(e){let{top:t,left:o,width:r,height:n}=e.getBoundingClientRect(),{scrollTop:l,scrollLeft:s,clientTop:a,clientLeft:u}=document.documentElement;return{top:t+l-a,left:o+s-u,width:r,height:n}}function _(e,t){let o=window.getComputedStyle(e),r;if(o.position==="fixed"){let{top:n,left:l,width:s,height:a}=e.getBoundingClientRect();r={top:n,left:l,width:s,height:a}}else{r=k(e);let n=k(t),l=window.getComputedStyle(t);n.top+=(parseInt(l.borderTopWidth,10)||0)-t.scrollTop,n.left+=(parseInt(l.borderLeftWidth,10)||0)-t.scrollLeft,r.top-=n.top,r.left-=n.left}return r.top-=parseInt(o.marginTop,10)||0,r.left-=parseInt(o.marginLeft,10)||0,r}function Fe(e){let t=e.offsetParent;if(t&&t===document.body&&window.getComputedStyle(t).position==="static"&&!ee(t)&&(t=document.documentElement),t==null)for(t=e.parentElement;t&&!ee(t);)t=t.parentElement;return t||document.documentElement}function ee(e){let t=window.getComputedStyle(e);return t.transform!=="none"||/transform|perspective/.test(t.willChange)||t.filter!=="none"||t.contain==="paint"||"backdropFilter"in t&&t.backdropFilter!=="none"||"WebkitBackdropFilter"in t&&t.WebkitBackdropFilter!=="none"}const Me=new WeakMap;function ze(e){let{triggerRef:t,isOpen:o,onClose:r}=e;E.exports.useEffect(()=>{if(!o||r===null)return;let n=l=>{let s=l.target;if(!t.current||s instanceof Node&&!s.contains(t.current)||l.target instanceof HTMLInputElement||l.target instanceof HTMLTextAreaElement)return;let a=r||Me.get(t.current);a&&a()};return window.addEventListener("scroll",n,!0),()=>{window.removeEventListener("scroll",n,!0)}},[o,r,t])}let g=typeof document<"u"&&window.visualViewport;function Ze(e){let{direction:t}=be(),{arrowSize:o=0,targetRef:r,overlayRef:n,scrollRef:l=n,placement:s="bottom",containerPadding:a=12,shouldFlip:u=!0,boundaryElement:i=typeof document<"u"?document.body:null,offset:f=0,crossOffset:p=0,shouldUpdatePosition:h=!0,isOpen:d=!0,onClose:v,maxHeight:b,arrowBoundaryOffset:c=0}=e,[C,$]=E.exports.useState({position:{},arrowOffsetLeft:void 0,arrowOffsetTop:void 0,maxHeight:void 0,placement:void 0}),x=[h,s,n.current,r.current,l.current,a,u,i,f,p,d,t,b,c,o],H=E.exports.useRef(g==null?void 0:g.scale);E.exports.useEffect(()=>{d&&(H.current=g==null?void 0:g.scale)},[d]);let L=E.exports.useCallback(()=>{if(h===!1||!d||!n.current||!r.current||!i||(g==null?void 0:g.scale)!==H.current)return;let P=null;if(l.current&&l.current.contains(document.activeElement)){let y=document.activeElement.getBoundingClientRect(),M=l.current.getBoundingClientRect();P={type:"top",offset:y.top-M.top},P.offset>M.height/2&&(P.type="bottom",P.offset=y.bottom-M.bottom)}let w=n.current;if(!b&&n.current){var R;w.style.top="0px",w.style.bottom="";var S;w.style.maxHeight=((S=(R=window.visualViewport)===null||R===void 0?void 0:R.height)!==null&&S!==void 0?S:window.innerHeight)+"px"}let F=Se({placement:ke(s,t),overlayNode:n.current,targetNode:r.current,scrollNode:l.current||n.current,padding:a,shouldFlip:u,boundaryElement:i,offset:f,crossOffset:p,maxHeight:b,arrowSize:o,arrowBoundaryOffset:c});if(w.style.top="",w.style.bottom="",w.style.left="",w.style.right="",Object.keys(F.position).forEach(y=>w.style[y]=F.position[y]+"px"),w.style.maxHeight=F.maxHeight!=null?F.maxHeight+"px":void 0,P){let y=document.activeElement.getBoundingClientRect(),M=l.current.getBoundingClientRect(),U=y[P.type]-M[P.type];l.current.scrollTop+=U-P.offset}$(F)},x);K(L,x),Oe(L),Z({ref:n,onResize:L}),Z({ref:r,onResize:L});let m=E.exports.useRef(!1);K(()=>{let P,w=()=>{m.current=!0,clearTimeout(P),P=setTimeout(()=>{m.current=!1},500),L()},R=()=>{m.current&&w()};return g==null||g.addEventListener("resize",w),g==null||g.addEventListener("scroll",R),()=>{g==null||g.removeEventListener("resize",w),g==null||g.removeEventListener("scroll",R)}},[L]);let z=E.exports.useCallback(()=>{m.current||v()},[v,m]);ze({triggerRef:r,isOpen:d,onClose:v&&z});var I;return{overlayProps:{style:{position:"absolute",zIndex:1e5,...C.position,maxHeight:(I=C.maxHeight)!==null&&I!==void 0?I:"100vh"}},placement:C.placement,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:C.arrowOffsetLeft,top:C.arrowOffsetTop}},updatePosition:L}}function Oe(e){K(()=>(window.addEventListener("resize",e,!1),()=>{window.removeEventListener("resize",e,!1)}),[e])}function ke(e,t){return t==="rtl"?e.replace("start","right").replace("end","left"):e.replace("start","left").replace("end","right")}const Ae=new Set(["form","formAction","formEncType","formMethod","formNoValidate","formTarget","name","value"]),Ne=E.exports.createContext({});function Be(e,t){[e,t]=oe(e,t,Ne);let o=e,{buttonProps:r,isPressed:n}=Te(e,t),{focusProps:l,isFocused:s,isFocusVisible:a}=ge(e),{hoverProps:u,isHovered:i}=he(e),f=re({...e,values:{isHovered:i,isPressed:n,isFocused:s,isFocusVisible:a,isDisabled:e.isDisabled||!1},defaultClassName:"react-aria-Button"});return N.createElement("button",{...te(e,{propNames:Ae}),...A(r,l,u),...f,ref:t,slot:e.slot||void 0,"data-disabled":e.isDisabled||void 0,"data-pressed":o.isPressed||n||void 0,"data-hovered":i||void 0,"data-focused":s||void 0,"data-focus-visible":a||void 0})}const We=me(Be);function Ge(e){let[t,o]=ve(e.isOpen,e.defaultOpen||!1,e.onOpenChange);const r=E.exports.useCallback(()=>{o(!0)},[o]),n=E.exports.useCallback(()=>{o(!1)},[o]),l=E.exports.useCallback(()=>{o(!t)},[o,t]);return{isOpen:t,setOpen:o,open:r,close:n,toggle:l}}const De=E.exports.createContext({placement:"bottom"});function Ue(e,t){[e,t]=oe(e,t,De);let o=e.placement,r={position:"absolute",[o]:"100%",transform:o==="top"||o==="bottom"?"translateX(-50%)":"translateY(-50%)"},n=re({...e,defaultClassName:"react-aria-OverlayArrow",values:{placement:o}});return n.style&&Object.keys(n.style).forEach(l=>n.style[l]===void 0&&delete n.style[l]),N.createElement("div",{...e,...n,style:{...r,...n.style},ref:t,"data-placement":o})}const qe=E.exports.forwardRef(Ue);export{We as $,Me as a,Ze as b,Pe as c,Ge as d,De as e,Z as f,Ce as g,Xe as h,qe as i};
