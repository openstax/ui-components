import{$ as Y,N as me,d as $e,m as re,j as ge,k as be,i as ae,e as J,a as he,c as xe,f as Ee}from"./context.module.9a4939e0.js";import{r as E,b as we,R as G}from"./index.cf96068e.js";import{$ as Pe}from"./Hidden.module.83cf58fd.js";import{$ as Le}from"./useButton.module.26af66a5.js";function Ce(){return typeof window.ResizeObserver<"u"}function Q(t){const{ref:e,box:l,onResize:n}=t;E.exports.useEffect(()=>{let o=e==null?void 0:e.current;if(!!o)if(Ce()){const i=new window.ResizeObserver(a=>{!a.length||n()});return i.observe(o,{box:l}),()=>{o&&i.unobserve(o)}}else return window.addEventListener("resize",n,!1),()=>{window.removeEventListener("resize",n,!1)}},[n,e,l])}function Ge(t,e=!0){let[l,n]=E.exports.useState(!0),o=l&&e;return Y(()=>{if(o&&t.current&&"getAnimations"in t.current)for(let i of t.current.getAnimations())i instanceof CSSTransition&&i.cancel()},[t,o]),se(t,o,E.exports.useCallback(()=>n(!1),[])),o}function Ke(t,e){let[l,n]=E.exports.useState(e?"open":"closed");switch(l){case"open":e||n("exiting");break;case"closed":case"exiting":e&&n("open");break}let o=l==="exiting";return se(t,o,E.exports.useCallback(()=>{n(i=>i==="exiting"?"closed":i)},[])),o}function se(t,e,l){Y(()=>{if(e&&t.current){if(!("getAnimations"in t.current)){l();return}let n=t.current.getAnimations();if(n.length===0){l();return}let o=!1;return Promise.all(n.map(i=>i.finished)).then(()=>{o||we.exports.flushSync(()=>{l()})}).catch(()=>{}),()=>{o=!0}}},[t,e,l])}function K(t,e=-1/0,l=1/0){return Math.min(Math.max(t,e),l)}const ce=7e3;let z=null;function W(t,e="assertive",l=ce){z?z.announce(t,e,l):(z=new ye,(typeof IS_REACT_ACT_ENVIRONMENT=="boolean"?IS_REACT_ACT_ENVIRONMENT:typeof jest<"u")?z.announce(t,e,l):setTimeout(()=>{z!=null&&z.isAttached()&&(z==null||z.announce(t,e,l))},100))}class ye{isAttached(){var e;return(e=this.node)===null||e===void 0?void 0:e.isConnected}createLog(e){let l=document.createElement("div");return l.setAttribute("role","log"),l.setAttribute("aria-live",e),l.setAttribute("aria-relevant","additions"),l}destroy(){!this.node||(document.body.removeChild(this.node),this.node=null)}announce(e,l="assertive",n=ce){var o,i;if(!this.node)return;let a=document.createElement("div");typeof e=="object"?(a.setAttribute("role","img"),a.setAttribute("aria-labelledby",e["aria-labelledby"])):a.textContent=e,l==="assertive"?(o=this.assertiveLog)===null||o===void 0||o.appendChild(a):(i=this.politeLog)===null||i===void 0||i.appendChild(a),e!==""&&setTimeout(()=>{a.remove()},n)}clear(e){!this.node||((!e||e==="assertive")&&this.assertiveLog&&(this.assertiveLog.innerHTML=""),(!e||e==="polite")&&this.politeLog&&(this.politeLog.innerHTML=""))}constructor(){this.node=null,this.assertiveLog=null,this.politeLog=null,typeof document<"u"&&(this.node=document.createElement("div"),this.node.dataset.liveAnnouncer="true",Object.assign(this.node.style,{border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"}),this.assertiveLog=this.createLog("assertive"),this.node.appendChild(this.assertiveLog),this.politeLog=this.createLog("polite"),this.node.appendChild(this.politeLog),document.body.prepend(this.node))}}const N={top:"top",bottom:"top",left:"left",right:"left"},V={top:"bottom",bottom:"top",left:"right",right:"left"},Te={top:"left",left:"top"},q={top:"height",left:"width"},de={width:"totalWidth",height:"totalHeight"},U={};let L=typeof document<"u"?window.visualViewport:null;function ee(t){let e=0,l=0,n=0,o=0,i=0,a=0,r={};var p;let f=((p=L==null?void 0:L.scale)!==null&&p!==void 0?p:1)>1;if(t.tagName==="BODY"){let d=document.documentElement;n=d.clientWidth,o=d.clientHeight;var v;e=(v=L==null?void 0:L.width)!==null&&v!==void 0?v:n;var g;l=(g=L==null?void 0:L.height)!==null&&g!==void 0?g:o,r.top=d.scrollTop||t.scrollTop,r.left=d.scrollLeft||t.scrollLeft,L&&(i=L.offsetTop,a=L.offsetLeft)}else({width:e,height:l,top:i,left:a}=j(t)),r.top=t.scrollTop,r.left=t.scrollLeft,n=e,o=l;if(me()&&(t.tagName==="BODY"||t.tagName==="HTML")&&f){r.top=0,r.left=0;var m;i=(m=L==null?void 0:L.pageTop)!==null&&m!==void 0?m:0;var s;a=(s=L==null?void 0:L.pageLeft)!==null&&s!==void 0?s:0}return{width:e,height:l,totalWidth:n,totalHeight:o,scroll:r,top:i,left:a}}function Ae(t){return{top:t.scrollTop,left:t.scrollLeft,width:t.scrollWidth,height:t.scrollHeight}}function te(t,e,l,n,o,i,a){var r;let p=(r=o.scroll[t])!==null&&r!==void 0?r:0,f=n[q[t]],v=n.scroll[N[t]]+i,g=f+n.scroll[N[t]]-i,m=e-p+a[t]-n[N[t]],s=e-p+l+a[t]-n[N[t]];return m<v?v-m:s>g?Math.max(g-s,v-m):0}function Re(t){let e=window.getComputedStyle(t);return{top:parseInt(e.marginTop,10)||0,bottom:parseInt(e.marginBottom,10)||0,left:parseInt(e.marginLeft,10)||0,right:parseInt(e.marginRight,10)||0}}function oe(t){if(U[t])return U[t];let[e,l]=t.split(" "),n=N[e]||"right",o=Te[n];N[l]||(l="center");let i=q[n],a=q[o];return U[t]={placement:e,crossPlacement:l,axis:n,crossAxis:o,size:i,crossSize:a},U[t]}function D(t,e,l,n,o,i,a,r,p,f){let{placement:v,crossPlacement:g,axis:m,crossAxis:s,size:d,crossSize:b}=n,c={};var u;c[s]=(u=t[s])!==null&&u!==void 0?u:0;var $,P,A,C;g==="center"?c[s]+=((($=t[b])!==null&&$!==void 0?$:0)-((P=l[b])!==null&&P!==void 0?P:0))/2:g!==s&&(c[s]+=((A=t[b])!==null&&A!==void 0?A:0)-((C=l[b])!==null&&C!==void 0?C:0)),c[s]+=i;const h=t[s]-l[b]+p+f,I=t[s]+t[b]-p-f;if(c[s]=K(c[s],h,I),v===m){const H=r?a[d]:e[de[d]];c[V[m]]=Math.floor(H-t[m]+o)}else c[m]=Math.floor(t[m]+t[d]+o);return c}function Se(t,e,l,n,o,i,a,r){const p=n?l.height:e[de.height];var f;let v=t.top!=null?l.top+t.top:l.top+(p-((f=t.bottom)!==null&&f!==void 0?f:0)-a);var g,m,s,d,b,c;let u=r!=="top"?Math.max(0,e.height+e.top+((g=e.scroll.top)!==null&&g!==void 0?g:0)-v-(((m=o.top)!==null&&m!==void 0?m:0)+((s=o.bottom)!==null&&s!==void 0?s:0)+i)):Math.max(0,v+a-(e.top+((d=e.scroll.top)!==null&&d!==void 0?d:0))-(((b=o.top)!==null&&b!==void 0?b:0)+((c=o.bottom)!==null&&c!==void 0?c:0)+i));return Math.min(e.height-i*2,u)}function le(t,e,l,n,o,i){let{placement:a,axis:r,size:p}=i;var f,v;if(a===r)return Math.max(0,l[r]-t[r]-((f=t.scroll[r])!==null&&f!==void 0?f:0)+e[r]-((v=n[r])!==null&&v!==void 0?v:0)-n[V[r]]-o);var g;return Math.max(0,t[p]+t[r]+t.scroll[r]-e[r]-l[r]-l[p]-((g=n[r])!==null&&g!==void 0?g:0)-n[V[r]]-o)}function _e(t,e,l,n,o,i,a,r,p,f,v,g,m,s,d,b){let c=oe(t),{size:u,crossAxis:$,crossSize:P,placement:A,crossPlacement:C}=c,h=D(e,r,l,c,v,g,f,m,d,b),I=v,H=le(r,f,e,o,i+v,c);if(a&&n[u]>H){let Z=oe(`${V[A]} ${C}`),ve=D(e,r,l,Z,v,g,f,m,d,b);le(r,f,e,o,i+v,Z)>H&&(c=Z,h=ve,I=v)}let S="bottom";c.axis==="top"?c.placement==="top"?S="top":c.placement==="bottom"&&(S="bottom"):c.crossAxis==="top"&&(c.crossPlacement==="top"?S="bottom":c.crossPlacement==="bottom"&&(S="top"));let w=te($,h[$],l[P],r,p,i,f);h[$]+=w;let T=Se(h,r,f,m,o,i,l.height,S);s&&s<T&&(T=s),l.height=Math.min(l.height,T),h=D(e,r,l,c,I,g,f,m,d,b),w=te($,h[$],l[P],r,p,i,f),h[$]+=w;let R={},O=e[$]+.5*e[P]-h[$]-o[N[$]];const _=d/2+b;var k,F,M,y;const B=N[$]==="left"?((k=o.left)!==null&&k!==void 0?k:0)+((F=o.right)!==null&&F!==void 0?F:0):((M=o.top)!==null&&M!==void 0?M:0)+((y=o.bottom)!==null&&y!==void 0?y:0),X=l[P]-B-d/2-b,fe=e[$]+d/2-(h[$]+o[N[$]]),ue=e[$]+e[P]-d/2-(h[$]+o[N[$]]),pe=K(O,fe,ue);return R[$]=K(pe,_,X),{position:h,maxHeight:T,arrowOffsetLeft:R.left,arrowOffsetTop:R.top,placement:c.placement}}function Ie(t){let{placement:e,targetNode:l,overlayNode:n,scrollNode:o,padding:i,shouldFlip:a,boundaryElement:r,offset:p,crossOffset:f,maxHeight:v,arrowSize:g=0,arrowBoundaryOffset:m=0}=t,s=n instanceof HTMLElement?He(n):document.documentElement,d=s===document.documentElement;const b=window.getComputedStyle(s).position;let c=!!b&&b!=="static",u=d?j(l):ne(l,s);if(!d){let{marginTop:R,marginLeft:O}=window.getComputedStyle(l);u.top+=parseInt(R,10)||0,u.left+=parseInt(O,10)||0}let $=j(n),P=Re(n);var A,C;$.width+=((A=P.left)!==null&&A!==void 0?A:0)+((C=P.right)!==null&&C!==void 0?C:0);var h,I;$.height+=((h=P.top)!==null&&h!==void 0?h:0)+((I=P.bottom)!==null&&I!==void 0?I:0);let H=Ae(o),S=ee(r),w=ee(s),T=r.tagName==="BODY"?j(s):ne(s,r);return s.tagName==="HTML"&&r.tagName==="BODY"&&(w.scroll.top=0,w.scroll.left=0),_e(e,u,$,H,P,i,a,S,w,T,p,f,c,v,g,m)}function j(t){let{top:e,left:l,width:n,height:o}=t.getBoundingClientRect(),{scrollTop:i,scrollLeft:a,clientTop:r,clientLeft:p}=document.documentElement;return{top:e+i-r,left:l+a-p,width:n,height:o}}function ne(t,e){let l=window.getComputedStyle(t),n;if(l.position==="fixed"){let{top:o,left:i,width:a,height:r}=t.getBoundingClientRect();n={top:o,left:i,width:a,height:r}}else{n=j(t);let o=j(e),i=window.getComputedStyle(e);o.top+=(parseInt(i.borderTopWidth,10)||0)-e.scrollTop,o.left+=(parseInt(i.borderLeftWidth,10)||0)-e.scrollLeft,n.top-=o.top,n.left-=o.left}return n.top-=parseInt(l.marginTop,10)||0,n.left-=parseInt(l.marginLeft,10)||0,n}function He(t){let e=t.offsetParent;if(e&&e===document.body&&window.getComputedStyle(e).position==="static"&&!ie(e)&&(e=document.documentElement),e==null)for(e=t.parentElement;e&&!ie(e);)e=e.parentElement;return e||document.documentElement}function ie(t){let e=window.getComputedStyle(t);return e.transform!=="none"||/transform|perspective/.test(e.willChange)||e.filter!=="none"||e.contain==="paint"||"backdropFilter"in e&&e.backdropFilter!=="none"||"WebkitBackdropFilter"in e&&e.WebkitBackdropFilter!=="none"}const Me=new WeakMap;function ze(t){let{triggerRef:e,isOpen:l,onClose:n}=t;E.exports.useEffect(()=>{if(!l||n===null)return;let o=i=>{let a=i.target;if(!e.current||a instanceof Node&&!a.contains(e.current)||i.target instanceof HTMLInputElement||i.target instanceof HTMLTextAreaElement)return;let r=n||Me.get(e.current);r&&r()};return window.addEventListener("scroll",o,!0),()=>{window.removeEventListener("scroll",o,!0)}},[l,n,e])}let x=typeof document<"u"?window.visualViewport:null;function qe(t){let{direction:e}=$e(),{arrowSize:l=0,targetRef:n,overlayRef:o,scrollRef:i=o,placement:a="bottom",containerPadding:r=12,shouldFlip:p=!0,boundaryElement:f=typeof document<"u"?document.body:null,offset:v=0,crossOffset:g=0,shouldUpdatePosition:m=!0,isOpen:s=!0,onClose:d,maxHeight:b,arrowBoundaryOffset:c=0}=t,[u,$]=E.exports.useState(null),P=[m,a,o.current,n.current,i.current,r,p,f,v,g,s,e,b,c,l],A=E.exports.useRef(x==null?void 0:x.scale);E.exports.useEffect(()=>{s&&(A.current=x==null?void 0:x.scale)},[s]);let C=E.exports.useCallback(()=>{if(m===!1||!s||!o.current||!n.current||!f||(x==null?void 0:x.scale)!==A.current)return;let w=null;if(i.current&&i.current.contains(document.activeElement)){var T;let y=(T=document.activeElement)===null||T===void 0?void 0:T.getBoundingClientRect(),B=i.current.getBoundingClientRect();var R;if(w={type:"top",offset:((R=y==null?void 0:y.top)!==null&&R!==void 0?R:0)-B.top},w.offset>B.height/2){w.type="bottom";var O;w.offset=((O=y==null?void 0:y.bottom)!==null&&O!==void 0?O:0)-B.bottom}}let _=o.current;if(!b&&o.current){var k;_.style.top="0px",_.style.bottom="";var F;_.style.maxHeight=((F=(k=window.visualViewport)===null||k===void 0?void 0:k.height)!==null&&F!==void 0?F:window.innerHeight)+"px"}let M=Ie({placement:Oe(a,e),overlayNode:o.current,targetNode:n.current,scrollNode:i.current||o.current,padding:r,shouldFlip:p,boundaryElement:f,offset:v,crossOffset:g,maxHeight:b,arrowSize:l,arrowBoundaryOffset:c});if(!!M.position){if(_.style.top="",_.style.bottom="",_.style.left="",_.style.right="",Object.keys(M.position).forEach(y=>_.style[y]=M.position[y]+"px"),_.style.maxHeight=M.maxHeight!=null?M.maxHeight+"px":"",w&&document.activeElement&&i.current){let y=document.activeElement.getBoundingClientRect(),B=i.current.getBoundingClientRect(),X=y[w.type]-B[w.type];i.current.scrollTop+=X-w.offset}$(M)}},P);Y(C,P),Ne(C),Q({ref:o,onResize:C}),Q({ref:n,onResize:C});let h=E.exports.useRef(!1);Y(()=>{let w,T=()=>{h.current=!0,clearTimeout(w),w=setTimeout(()=>{h.current=!1},500),C()},R=()=>{h.current&&T()};return x==null||x.addEventListener("resize",T),x==null||x.addEventListener("scroll",R),()=>{x==null||x.removeEventListener("resize",T),x==null||x.removeEventListener("scroll",R)}},[C]);let I=E.exports.useCallback(()=>{h.current||d==null||d()},[d,h]);ze({triggerRef:n,isOpen:s,onClose:d&&I});var H,S;return{overlayProps:{style:{position:"absolute",zIndex:1e5,...u==null?void 0:u.position,maxHeight:(H=u==null?void 0:u.maxHeight)!==null&&H!==void 0?H:"100vh"}},placement:(S=u==null?void 0:u.placement)!==null&&S!==void 0?S:null,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:u==null?void 0:u.arrowOffsetLeft,top:u==null?void 0:u.arrowOffsetTop}},updatePosition:C}}function Ne(t){Y(()=>(window.addEventListener("resize",t,!1),()=>{window.removeEventListener("resize",t,!1)}),[t])}function Oe(t,e){return e==="rtl"?t.replace("start","right").replace("end","left"):t.replace("start","left").replace("end","right")}const ke=E.exports.createContext(null),Fe=new Set(["form","formAction","formEncType","formMethod","formNoValidate","formTarget","name","value"]),Be=E.exports.createContext({}),Je=Pe(function(e,l){[e,l]=re(e,l,Be),e=je(e);let n=e,{isPending:o}=n,{buttonProps:i,isPressed:a}=Le(e,l),{focusProps:r,isFocused:p,isFocusVisible:f}=ge(e),{hoverProps:v,isHovered:g}=be({...e,isDisabled:e.isDisabled||o}),m={isHovered:g,isPressed:(n.isPressed||a)&&!o,isFocused:p,isFocusVisible:f,isDisabled:e.isDisabled||!1,isPending:o!=null?o:!1},s=ae({...e,values:m,defaultClassName:"react-aria-Button"}),d=J(i.id),b=J(),c=i["aria-labelledby"];o&&(c?c=`${c} ${b}`:i["aria-label"]&&(c=`${d} ${b}`));let u=E.exports.useRef(o);return E.exports.useEffect(()=>{let $={"aria-labelledby":c||d};(!u.current&&p&&o||u.current&&p&&!o)&&W($,"assertive"),u.current=o},[o,p,c,d]),G.createElement("button",{...he(e,{propNames:Fe}),...xe(i,r,v),...s,type:i.type==="submit"&&o?"button":i.type,id:d,ref:l,"aria-labelledby":c,slot:e.slot||void 0,"aria-disabled":o?"true":i["aria-disabled"],"data-disabled":e.isDisabled||void 0,"data-pressed":m.isPressed||void 0,"data-hovered":g||void 0,"data-focused":p||void 0,"data-pending":o||void 0,"data-focus-visible":f||void 0},G.createElement(ke.Provider,{value:{id:b}},s.children))});function je(t){return t.isPending&&(t.onPress=void 0,t.onPressStart=void 0,t.onPressEnd=void 0,t.onPressChange=void 0,t.onPressUp=void 0,t.onKeyDown=void 0,t.onKeyUp=void 0,t.onClick=void 0,t.href=void 0),t}function Qe(t){let[e,l]=Ee(t.isOpen,t.defaultOpen||!1,t.onOpenChange);const n=E.exports.useCallback(()=>{l(!0)},[l]),o=E.exports.useCallback(()=>{l(!1)},[l]),i=E.exports.useCallback(()=>{l(!e)},[l,e]);return{isOpen:e,setOpen:l,open:n,close:o,toggle:i}}const Ye=E.exports.createContext({placement:"bottom"}),We=E.exports.forwardRef(function(e,l){[e,l]=re(e,l,Ye);let n=e.placement,o={position:"absolute",transform:n==="top"||n==="bottom"?"translateX(-50%)":"translateY(-50%)"};n!=null&&(o[n]="100%");let i=ae({...e,defaultClassName:"react-aria-OverlayArrow",values:{placement:n}});return i.style&&Object.keys(i.style).forEach(a=>i.style[a]===void 0&&delete i.style[a]),G.createElement("div",{...e,...i,style:{...o,...i.style},ref:l,"data-placement":n})});export{Je as $,Me as a,qe as b,Qe as c,Ke as d,Ge as e,Ye as f,Q as g,Be as h,We as i};
