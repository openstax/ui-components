import{R as d,$ as q,r as c,s as I,j as L,a as b}from"./index.7885c401.js";import{c as T}from"./theme.925a20ce.js";import{$ as J}from"./Button.module.0e32f998.js";import{b as Q,c as Y,d as Z,a as _,e as ee,f as te,h as V}from"./OverlayArrow.module.f281b7d6.js";import{w as re,a as oe,k as j,d as R,e as ne,c as ae,E as le,P as ie,m as ce,$ as se,i as de,l as fe,X as ue,W as z}from"./useFocusRing.module.6302375c.js";import{I as $e}from"./Info.7e36612d.js";const O=d.createContext(null);function pe(t){let{children:e}=t,r=c.exports.useContext(O),[a,o]=c.exports.useState(0),l=c.exports.useMemo(()=>({parent:r,modalCount:a,addModal(){o(n=>n+1),r&&r.addModal()},removeModal(){o(n=>n-1),r&&r.removeModal()}}),[r,a]);return d.createElement(O.Provider,{value:l},e)}function be(){let t=c.exports.useContext(O);return{modalProviderProps:{"aria-hidden":t&&t.modalCount>0?!0:void 0}}}function ve(t){let{modalProviderProps:e}=be();return d.createElement("div",{"data-overlay-container":!0,...t,...e})}function me(t){return d.createElement(pe,null,d.createElement(ve,t))}function xe(t){let e=re(),{portalContainer:r=e?null:document.body,...a}=t,{getContainer:o}=Q();if(!t.portalContainer&&o&&(r=o()),d.useEffect(()=>{if(r!=null&&r.closest("[data-overlay-container]"))throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")},[r]),!r)return null;let l=d.createElement(me,a);return q.createPortal(l,r)}function ge(t,e){let r=oe(t,{labelable:!0}),{hoverProps:a}=j({onHoverStart:()=>e==null?void 0:e.open(!0),onHoverEnd:()=>e==null?void 0:e.close()});return{tooltipProps:R(r,a,{role:"tooltip"})}}function he(t,e,r){let{isDisabled:a,trigger:o}=t,l=ne(),n=c.exports.useRef(!1),i=c.exports.useRef(!1),p=()=>{(n.current||i.current)&&e.open(i.current)},u=P=>{!n.current&&!i.current&&e.close(P)};c.exports.useEffect(()=>{let P=W=>{r&&r.current&&W.key==="Escape"&&(W.stopPropagation(),e.close(!0))};if(e.isOpen)return document.addEventListener("keydown",P,!0),()=>{document.removeEventListener("keydown",P,!0)}},[r,e]);let v=()=>{o!=="focus"&&(le()==="pointer"?n.current=!0:n.current=!1,p())},m=()=>{o!=="focus"&&(i.current=!1,n.current=!1,u())},$=()=>{i.current=!1,n.current=!1,u(!0)},s=()=>{ie()&&(i.current=!0,p())},f=()=>{i.current=!1,n.current=!1,u(!0)},{hoverProps:E}=j({isDisabled:a,onHoverStart:v,onHoverEnd:m}),{focusableProps:B}=ae({isDisabled:a,onFocus:s,onBlur:f},r);return{triggerProps:{"aria-describedby":e.isOpen?l:void 0,...R(B,E,{onPointerDown:$,onKeyDown:$,tabIndex:void 0})},tooltipProps:{id:l}}}const ye=1500,F=500;let h={},Ee=0,w=!1,x=null,y=null;function G(t={}){let{delay:e=ye,closeDelay:r=F}=t,{isOpen:a,open:o,close:l}=Y(t),n=c.exports.useMemo(()=>`${++Ee}`,[]),i=c.exports.useRef(null),p=c.exports.useRef(l),u=()=>{h[n]=$},v=()=>{for(let f in h)f!==n&&(h[f](!0),delete h[f])},m=()=>{i.current&&clearTimeout(i.current),i.current=null,v(),u(),w=!0,o(),x&&(clearTimeout(x),x=null),y&&(clearTimeout(y),y=null)},$=f=>{f||r<=0?(i.current&&clearTimeout(i.current),i.current=null,p.current()):i.current||(i.current=setTimeout(()=>{i.current=null,p.current()},r)),x&&(clearTimeout(x),x=null),w&&(y&&clearTimeout(y),y=setTimeout(()=>{delete h[n],y=null,w=!1},Math.max(F,r)))},s=()=>{v(),u(),!a&&!x&&!w?x=setTimeout(()=>{x=null,w=!0,m()},e):a||m()};return c.exports.useEffect(()=>{p.current=l},[l]),c.exports.useEffect(()=>()=>{i.current&&clearTimeout(i.current),h[n]&&delete h[n]},[n]),{isOpen:a,open:f=>{!f&&e>0&&!i.current?s():m()},close:$}}const D=c.exports.createContext(null),U=c.exports.createContext(null);function Pe(t){let e=G(t),r=c.exports.useRef(null),{triggerProps:a,tooltipProps:o}=he(t,e,r);return d.createElement(fe,{values:[[D,e],[U,{...o,triggerRef:r}]]},d.createElement(ue,{...a,ref:r},t.children))}const we=c.exports.forwardRef(function({UNSTABLE_portalContainer:e,...r},a){[r,a]=ce(r,a,U);let o=c.exports.useContext(D),l=G(r),n=r.isOpen!=null||r.defaultOpen!=null||!o?l:o,i=Z(a,n.isOpen)||r.isExiting||!1;return!n.isOpen&&!i?null:d.createElement(xe,{portalContainer:e},d.createElement(Ce,{...r,tooltipRef:a,isExiting:i}))});function Ce(t){let e=c.exports.useContext(D),r=c.exports.useRef(null),[a,o]=c.exports.useState(0);se(()=>{r.current&&e.isOpen&&o(r.current.getBoundingClientRect().width)},[e.isOpen,r]);let{overlayProps:l,arrowProps:n,placement:i}=_({placement:t.placement||"top",targetRef:t.triggerRef,overlayRef:t.tooltipRef,offset:t.offset,crossOffset:t.crossOffset,isOpen:e.isOpen,arrowSize:a,arrowBoundaryOffset:t.arrowBoundaryOffset,shouldFlip:t.shouldFlip,onClose:()=>e.close(!0)}),p=ee(t.tooltipRef,!!i)||t.isEntering||!1,u=de({...t,defaultClassName:"react-aria-Tooltip",values:{placement:i,isEntering:p,isExiting:t.isExiting,state:e}});t=R(t,l);let{tooltipProps:v}=ge(t,e);return d.createElement("div",{...v,ref:t.tooltipRef,...u,style:{...l.style,...u.style},"data-placement":i!=null?i:void 0,"data-entering":p||void 0,"data-exiting":t.isExiting||void 0},d.createElement(te.Provider,{value:{...n,placement:i,ref:r}},u.children))}let A=new Map;function Se(t,e){if(t===e)return t;let r=A.get(t);if(r)return r.forEach(o=>o(e)),e;let a=A.get(e);return a?(a.forEach(o=>o(t)),t):e}function Te(...t){return(...e)=>{for(let r of t)typeof r=="function"&&r(...e)}}function Me(...t){let e={...t[0]};for(let r=1;r<t.length;r++){let a=t[r];for(let o in a){let l=e[o],n=a[o];typeof l=="function"&&typeof n=="function"&&o[0]==="o"&&o[1]==="n"&&o.charCodeAt(2)>=65&&o.charCodeAt(2)<=90?e[o]=Te(l,n):(o==="className"||o==="UNSAFE_className")&&typeof l=="string"&&typeof n=="string"?e[o]=z(l,n):o==="id"&&l&&n?e.id=Se(l,n):e[o]=n!==void 0?n:l}}return e}const He=typeof document<"u"?d.useLayoutEffect:()=>{},C={prefix:String(Math.round(Math.random()*1e10)),current:0},X=d.createContext(C),Oe=d.createContext(!1);let ke=Boolean(typeof window<"u"&&window.document&&window.document.createElement),M=new WeakMap;function Ie(t=!1){let e=c.exports.useContext(X),r=c.exports.useRef(null);if(r.current===null&&!t){var a,o;let l=(o=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||o===void 0||(a=o.ReactCurrentOwner)===null||a===void 0?void 0:a.current;if(l){let n=M.get(l);n==null?M.set(l,{id:e.current,state:l.memoizedState}):l.memoizedState!==n.state&&(e.current=n.id,M.delete(l))}r.current=++e.current}return r.current}function Le(t){let e=c.exports.useContext(X);e===C&&!ke&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let r=Ie(!!t),a=`react-aria${e.prefix}`;return t||`${a}-${r}`}function Re(t){let e=d.useId(),[r]=c.exports.useState(Ne()),a=r?"react-aria":`react-aria${C.prefix}`;return t||`${a}-${e}`}const De=typeof d.useId=="function"?Re:Le;function We(){return!1}function Fe(){return!0}function Ae(t){return()=>{}}function Ne(){return typeof d.useSyncExternalStore=="function"?d.useSyncExternalStore(Ae,We,Fe):c.exports.useContext(Oe)}let Ve=Boolean(typeof window<"u"&&window.document&&window.document.createElement),g=new Map;function ct(t){let[e,r]=c.exports.useState(t),a=c.exports.useRef(null),o=De(e),l=c.exports.useCallback(n=>{a.current=n},[]);return Ve&&(g.has(o)&&!g.get(o).includes(l)?g.set(o,[...g.get(o),l]):g.set(o,[l])),He(()=>{let n=o;return()=>{g.delete(n)}},[o]),c.exports.useEffect(()=>{let n=a.current;n&&(a.current=null,r(n))}),o}function je(t,e){if(t===e)return t;let r=g.get(t);if(r)return r.forEach(o=>o(e)),e;let a=g.get(e);return a?(a.forEach(o=>o(t)),t):e}function ze(...t){return(...e)=>{for(let r of t)typeof r=="function"&&r(...e)}}function Ge(...t){let e={...t[0]};for(let r=1;r<t.length;r++){let a=t[r];for(let o in a){let l=e[o],n=a[o];typeof l=="function"&&typeof n=="function"&&o[0]==="o"&&o[1]==="n"&&o.charCodeAt(2)>=65&&o.charCodeAt(2)<=90?e[o]=ze(l,n):(o==="className"||o==="UNSAFE_className")&&typeof l=="string"&&typeof n=="string"?e[o]=z(l,n):o==="id"&&l&&n?e.id=je(l,n):e[o]=n!==void 0?n:l}}return e}const Ue=new Set(["id"]),Xe=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),Ke=new Set(["href","hrefLang","target","rel","download","ping","referrerPolicy"]),Be=/^(data-.*)$/;function qe(t,e={}){let{labelable:r,isLink:a,propNames:o}=e,l={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(Ue.has(n)||r&&Xe.has(n)||a&&Ke.has(n)||(o==null?void 0:o.has(n))||Be.test(n))&&(l[n]=t[n]);return l}let S=!1,H=0;function k(){S=!0,setTimeout(()=>{S=!1},50)}function N(t){t.pointerType==="touch"&&k()}function Je(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",N):document.addEventListener("touchend",k),H++,()=>{H--,!(H>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",N):document.removeEventListener("touchend",k))}}function Qe(t){let{onHoverStart:e,onHoverChange:r,onHoverEnd:a,isDisabled:o}=t,[l,n]=c.exports.useState(!1),i=c.exports.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;c.exports.useEffect(Je,[]);let{hoverProps:p,triggerHoverEnd:u}=c.exports.useMemo(()=>{let v=(s,f)=>{if(i.pointerType=f,o||f==="touch"||i.isHovered||!s.currentTarget.contains(s.target))return;i.isHovered=!0;let E=s.currentTarget;i.target=E,e&&e({type:"hoverstart",target:E,pointerType:f}),r&&r(!0),n(!0)},m=(s,f)=>{if(i.pointerType="",i.target=null,f==="touch"||!i.isHovered)return;i.isHovered=!1;let E=s.currentTarget;a&&a({type:"hoverend",target:E,pointerType:f}),r&&r(!1),n(!1)},$={};return typeof PointerEvent<"u"?($.onPointerEnter=s=>{S&&s.pointerType==="mouse"||v(s,s.pointerType)},$.onPointerLeave=s=>{!o&&s.currentTarget.contains(s.target)&&m(s,s.pointerType)}):($.onTouchStart=()=>{i.ignoreEmulatedMouseEvents=!0},$.onMouseEnter=s=>{!i.ignoreEmulatedMouseEvents&&!S&&v(s,"mouse"),i.ignoreEmulatedMouseEvents=!1},$.onMouseLeave=s=>{!o&&s.currentTarget.contains(s.target)&&m(s,"mouse")}),{hoverProps:$,triggerHoverEnd:m}},[e,r,a,o,i]);return c.exports.useEffect(()=>{o&&u({currentTarget:i.target},i.pointerType)},[o]),{hoverProps:p,isHovered:l}}function Ye(t,e){let r=qe(t,{labelable:!0}),{hoverProps:a}=Qe({onHoverStart:()=>e==null?void 0:e.open(!0),onHoverEnd:()=>e==null?void 0:e.close()});return{tooltipProps:Ge(r,a,{role:"tooltip"})}}const K=`
  box-shadow: 0 0.8rem 2rem rgba(0 0 0 / 0.1);
  border-radius: 0.3rem;
  border: 1px solid #ccc;
  background: ${T.palette.white};
  color: ${T.palette.neutralThin};
  outline: none;
  padding: 1rem;
  /* fixes FF gap */
  transform: translate3d(0, 0, 0);
  position: absolute;
  min-width: 24rem;
  z-index: 1000;

  &[data-placement=top] {
    margin-bottom: 0.8rem;
    --origin: translateY(0.4rem);
  }

  &[data-placement=bottom] {
    margin-top: 0.8rem;
    top: 50%;
    --origin: translateY(-0.4rem);
    & .react-aria-OverlayArrow svg {
      transform: rotate(180deg);
    }
  }

  &[data-placement=right] {
    left: 100%;
    margin-left: 0.8rem;
    --origin: translateX(-0.4rem);
    & .react-aria-OverlayArrow {
      top: 50%;
      svg {
        transform: rotate(90deg);
      }
    }
  }

  &[data-placement=left] {
    margin-right: 0.8rem;
    --origin: translateX(0.4rem);
    & .react-aria-OverlayArrow svg {
      transform: rotate(-90deg);
    }
  }

  & .react-aria-OverlayArrow svg {
    display: block;
    fill: ${T.palette.white};
  }
`,Ze=I(we)`${K}`,_e=I.div`
  ${K}  
`,et=I(J)`
  border: none;
  padding: 0;
  margin-left: 0.4rem;
  display: flex;
  background-color: inherit;
`,tt=({children:t,placement:e,icon:r,...a})=>L(Ze,{...a,placement:e,children:[b(V,{children:b("svg",{width:8,height:8,viewBox:"0 0 8 8",children:b("path",{d:"M0 0 L4 4 L8 0",stroke:"#ccc",strokeWidth:"1"})})}),t]}),st=({icon:t,ariaLabel:e,...r})=>L(Pe,{delay:0,children:[b(et,{"aria-label":e||"More information",children:t?b("img",{src:t,"aria-hidden":!0,alt:""}):b($e,{"aria-hidden":!0})}),b(tt,{...r})]}),dt=({state:t,...e})=>{const{tooltipProps:r}=Ye(e,t);return L(_e,{"data-placement":e.placement,...Me(e,r),children:[e.children,b(V,{...e,children:b("svg",{width:8,height:8,viewBox:"0 0 8 8",children:b("path",{d:"M0 0 L4 4 L8 0",stroke:"#ccc",strokeWidth:"1"})})})]})};export{ct as $,dt as C,st as T,Qe as a,Ge as b,G as c};
