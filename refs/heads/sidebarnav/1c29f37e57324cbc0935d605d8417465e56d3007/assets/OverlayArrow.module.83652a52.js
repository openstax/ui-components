import{u as oe,c as le,$ as Z,e as re,k as ne,g as ae}from"./context.module.18b5dce2.js";import{r as R,R as ie}from"./index.9ead4d17.js";function ce(){return typeof window.ResizeObserver<"u"}function G(t){const{ref:e,box:o,onResize:r}=t;R.exports.useEffect(()=>{let l=e==null?void 0:e.current;if(!!l)if(ce()){const n=new window.ResizeObserver(i=>{!i.length||r()});return n.observe(l,{box:o}),()=>{l&&n.unobserve(l)}}else return window.addEventListener("resize",r,!1),()=>{window.removeEventListener("resize",r,!1)}},[r,e,o])}function j(t,e=-1/0,o=1/0){return Math.min(Math.max(t,e),o)}const O={top:"top",bottom:"top",left:"left",right:"left"},F={top:"bottom",bottom:"top",left:"right",right:"left"},se={top:"left",left:"top"},U={top:"height",left:"width"},D={width:"totalWidth",height:"totalHeight"},N={};let C=typeof document<"u"&&window.visualViewport;function q(t){let e=0,o=0,r=0,l=0,n=0,i=0,a={},d=(C==null?void 0:C.scale)>1;if(t.tagName==="BODY"){let $=document.documentElement;r=$.clientWidth,l=$.clientHeight;var c;e=(c=C==null?void 0:C.width)!==null&&c!==void 0?c:r;var p;o=(p=C==null?void 0:C.height)!==null&&p!==void 0?p:l,a.top=$.scrollTop||t.scrollTop,a.left=$.scrollLeft||t.scrollLeft,C&&(n=C.offsetTop,i=C.offsetLeft)}else({width:e,height:o,top:n,left:i}=k(t)),a.top=t.scrollTop,a.left=t.scrollLeft,r=e,l=o;return oe()&&(t.tagName==="BODY"||t.tagName==="HTML")&&d&&(a.top=0,a.left=0,n=C.pageTop,i=C.pageLeft),{width:e,height:o,totalWidth:r,totalHeight:l,scroll:a,top:n,left:i}}function fe(t){return{top:t.scrollTop,left:t.scrollLeft,width:t.scrollWidth,height:t.scrollHeight}}function J(t,e,o,r,l,n,i){let a=l.scroll[t],d=r[U[t]],c=r.scroll[O[t]]+n,p=d+r.scroll[O[t]]-n,$=e-a+i[t]-r[O[t]],x=e-a+o+i[t]-r[O[t]];return $<c?c-$:x>p?Math.max(p-x,c-$):0}function pe(t){let e=window.getComputedStyle(t);return{top:parseInt(e.marginTop,10)||0,bottom:parseInt(e.marginBottom,10)||0,left:parseInt(e.marginLeft,10)||0,right:parseInt(e.marginRight,10)||0}}function K(t){if(N[t])return N[t];let[e,o]=t.split(" "),r=O[e]||"right",l=se[r];O[o]||(o="center");let n=U[r],i=U[l];return N[t]={placement:e,crossPlacement:o,axis:r,crossAxis:l,size:n,crossSize:i},N[t]}function X(t,e,o,r,l,n,i,a,d,c){let{placement:p,crossPlacement:$,axis:x,crossAxis:s,size:b,crossSize:h}=r,f={};f[s]=t[s],$==="center"?f[s]+=(t[h]-o[h])/2:$!==s&&(f[s]+=t[h]-o[h]),f[s]+=n;const L=t[s]-o[h]+d+c,u=t[s]+t[h]-d-c;if(f[s]=j(f[s],L,u),p===x){const E=a?i[b]:e[D[b]];f[F[x]]=Math.floor(E-t[x]+l)}else f[x]=Math.floor(t[x]+t[b]+l);return f}function de(t,e,o,r,l,n,i,a){const d=r?o.height:e[D.height];let c=t.top!=null?o.top+t.top:o.top+(d-t.bottom-i),p=a!=="top"?Math.max(0,e.height+e.top+e.scroll.top-c-(l.top+l.bottom+n)):Math.max(0,c+i-(e.top+e.scroll.top)-(l.top+l.bottom+n));return Math.min(e.height-n*2,p)}function Q(t,e,o,r,l,n){let{placement:i,axis:a,size:d}=n;return i===a?Math.max(0,o[a]-t[a]-t.scroll[a]+e[a]-r[a]-r[F[a]]-l):Math.max(0,t[d]+t[a]+t.scroll[a]-e[a]-o[a]-o[d]-r[a]-r[F[a]]-l)}function ue(t,e,o,r,l,n,i,a,d,c,p,$,x,s,b,h){let f=K(t),{size:L,crossAxis:u,crossSize:E,placement:y,crossPlacement:P}=f,m=X(e,a,o,f,p,$,c,x,b,h),A=p,I=Q(a,c,e,l,n+p,f);if(i&&r[L]>I){let Y=K(`${F[y]} ${P}`),te=X(e,a,o,Y,p,$,c,x,b,h);Q(a,c,e,l,n+p,Y)>I&&(f=Y,m=te,A=p)}let v="bottom";f.axis==="top"?f.placement==="top"?v="top":f.placement==="bottom"&&(v="bottom"):f.crossAxis==="top"&&(f.crossPlacement==="top"?v="bottom":f.crossPlacement==="bottom"&&(v="top"));let w=J(u,m[u],o[E],a,d,n,c);m[u]+=w;let T=de(m,a,c,x,l,n,o.height,v);s&&s<T&&(T=s),o.height=Math.min(o.height,T),m=X(e,a,o,f,A,$,c,x,b,h),w=J(u,m[u],o[E],a,d,n,c),m[u]+=w;let z={},M=e[u]+.5*e[E]-m[u];const H=b/2+h,S=o[E]-b/2-h,B=e[u]-m[u]+b/2,_=e[u]+e[E]-m[u]-b/2,ee=j(M,B,_);return z[u]=j(ee,H,S),{position:m,maxHeight:T,arrowOffsetLeft:z.left,arrowOffsetTop:z.top,placement:f.placement}}function me(t){let{placement:e,targetNode:o,overlayNode:r,scrollNode:l,padding:n,shouldFlip:i,boundaryElement:a,offset:d,crossOffset:c,maxHeight:p,arrowSize:$=0,arrowBoundaryOffset:x=0}=t,s=r instanceof HTMLElement?ge(r):document.documentElement,b=s===document.documentElement;const h=window.getComputedStyle(s).position;let f=!!h&&h!=="static",L=b?k(o):V(o,s);if(!b){let{marginTop:I,marginLeft:v}=window.getComputedStyle(o);L.top+=parseInt(I,10)||0,L.left+=parseInt(v,10)||0}let u=k(r),E=pe(r);u.width+=E.left+E.right,u.height+=E.top+E.bottom;let y=fe(l),P=q(a),m=q(s),A=a.tagName==="BODY"?k(s):V(s,a);return s.tagName==="HTML"&&a.tagName==="BODY"&&(m.scroll.top=0,m.scroll.left=0),ue(e,L,u,y,E,n,i,P,m,A,d,c,f,p,$,x)}function k(t){let{top:e,left:o,width:r,height:l}=t.getBoundingClientRect(),{scrollTop:n,scrollLeft:i,clientTop:a,clientLeft:d}=document.documentElement;return{top:e+n-a,left:o+i-d,width:r,height:l}}function V(t,e){let o=window.getComputedStyle(t),r;if(o.position==="fixed"){let{top:l,left:n,width:i,height:a}=t.getBoundingClientRect();r={top:l,left:n,width:i,height:a}}else{r=k(t);let l=k(e),n=window.getComputedStyle(e);l.top+=(parseInt(n.borderTopWidth,10)||0)-e.scrollTop,l.left+=(parseInt(n.borderLeftWidth,10)||0)-e.scrollLeft,r.top-=l.top,r.left-=l.left}return r.top-=parseInt(o.marginTop,10)||0,r.left-=parseInt(o.marginLeft,10)||0,r}function ge(t){let e=t.offsetParent;if(e&&e===document.body&&window.getComputedStyle(e).position==="static"&&!W(e)&&(e=document.documentElement),e==null)for(e=t.parentElement;e&&!W(e);)e=e.parentElement;return e||document.documentElement}function W(t){let e=window.getComputedStyle(t);return e.transform!=="none"||/transform|perspective/.test(e.willChange)||e.filter!=="none"||e.contain==="paint"||"backdropFilter"in e&&e.backdropFilter!=="none"||"WebkitBackdropFilter"in e&&e.WebkitBackdropFilter!=="none"}const $e=new WeakMap;function he(t){let{triggerRef:e,isOpen:o,onClose:r}=t;R.exports.useEffect(()=>{if(!o||r===null)return;let l=n=>{let i=n.target;if(!e.current||i instanceof Node&&!i.contains(e.current)||n.target instanceof HTMLInputElement||n.target instanceof HTMLTextAreaElement)return;let a=r||$e.get(e.current);a&&a()};return window.addEventListener("scroll",l,!0),()=>{window.removeEventListener("scroll",l,!0)}},[o,r,e])}let g=typeof document<"u"&&window.visualViewport;function Re(t){let{direction:e}=le(),{arrowSize:o=0,targetRef:r,overlayRef:l,scrollRef:n=l,placement:i="bottom",containerPadding:a=12,shouldFlip:d=!0,boundaryElement:c=typeof document<"u"?document.body:null,offset:p=0,crossOffset:$=0,shouldUpdatePosition:x=!0,isOpen:s=!0,onClose:b,maxHeight:h,arrowBoundaryOffset:f=0}=t,[L,u]=R.exports.useState({position:{},arrowOffsetLeft:void 0,arrowOffsetTop:void 0,maxHeight:void 0,placement:void 0}),E=[x,i,l.current,r.current,n.current,a,d,c,p,$,s,e,h,f,o],y=R.exports.useRef(g==null?void 0:g.scale);R.exports.useEffect(()=>{s&&(y.current=g==null?void 0:g.scale)},[s]);let P=R.exports.useCallback(()=>{if(x===!1||!s||!l.current||!r.current||!c||(g==null?void 0:g.scale)!==y.current)return;let v=null;if(n.current&&n.current.contains(document.activeElement)){let H=document.activeElement.getBoundingClientRect(),S=n.current.getBoundingClientRect();v={type:"top",offset:H.top-S.top},v.offset>S.height/2&&(v.type="bottom",v.offset=H.bottom-S.bottom)}let w=l.current;if(!h&&l.current){var T;w.style.top="0px",w.style.bottom="";var z;w.style.maxHeight=((z=(T=window.visualViewport)===null||T===void 0?void 0:T.height)!==null&&z!==void 0?z:window.innerHeight)+"px"}let M=me({placement:xe(i,e),overlayNode:l.current,targetNode:r.current,scrollNode:n.current||l.current,padding:a,shouldFlip:d,boundaryElement:c,offset:p,crossOffset:$,maxHeight:h,arrowSize:o,arrowBoundaryOffset:f});if(w.style.top="",w.style.bottom="",w.style.left="",w.style.right="",Object.keys(M.position).forEach(H=>w.style[H]=M.position[H]+"px"),w.style.maxHeight=M.maxHeight!=null?M.maxHeight+"px":void 0,v){let H=document.activeElement.getBoundingClientRect(),S=n.current.getBoundingClientRect(),B=H[v.type]-S[v.type];n.current.scrollTop+=B-v.offset}u(M)},E);Z(P,E),ve(P),G({ref:l,onResize:P}),G({ref:r,onResize:P});let m=R.exports.useRef(!1);Z(()=>{let v,w=()=>{m.current=!0,clearTimeout(v),v=setTimeout(()=>{m.current=!1},500),P()},T=()=>{m.current&&w()};return g==null||g.addEventListener("resize",w),g==null||g.addEventListener("scroll",T),()=>{g==null||g.removeEventListener("resize",w),g==null||g.removeEventListener("scroll",T)}},[P]);let A=R.exports.useCallback(()=>{m.current||b()},[b,m]);he({triggerRef:r,isOpen:s,onClose:b&&A});var I;return{overlayProps:{style:{position:"absolute",zIndex:1e5,...L.position,maxHeight:(I=L.maxHeight)!==null&&I!==void 0?I:"100vh"}},placement:L.placement,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:L.arrowOffsetLeft,top:L.arrowOffsetTop}},updatePosition:P}}function ve(t){Z(()=>(window.addEventListener("resize",t,!1),()=>{window.removeEventListener("resize",t,!1)}),[t])}function xe(t,e){return e==="rtl"?t.replace("start","right").replace("end","left"):t.replace("start","left").replace("end","right")}function Pe(t){let[e,o]=re(t.isOpen,t.defaultOpen||!1,t.onOpenChange);const r=R.exports.useCallback(()=>{o(!0)},[o]),l=R.exports.useCallback(()=>{o(!1)},[o]),n=R.exports.useCallback(()=>{o(!e)},[o,e]);return{isOpen:e,setOpen:o,open:r,close:l,toggle:n}}const be=R.exports.createContext({placement:"bottom"});function we(t,e){[t,e]=ne(t,e,be);let o=t.placement,r={position:"absolute",[o]:"100%",transform:o==="top"||o==="bottom"?"translateX(-50%)":"translateY(-50%)"},l=ae({...t,defaultClassName:"react-aria-OverlayArrow",values:{placement:o}});return l.style&&Object.keys(l.style).forEach(n=>l.style[n]===void 0&&delete l.style[n]),ie.createElement("div",{...t,...l,style:{...r,...l.style},ref:e,"data-placement":o})}const Te=R.exports.forwardRef(we);export{Pe as $,G as a,$e as b,Re as c,be as d,Te as e};
