import{R as s,$ as F,r as l,s as O,j as C,a as u}from"./index.bf911a0e.js";import{c as w}from"./theme.612ebb1c.js";import{$ as j}from"./Button.module.65c1dfa7.js";import{b as N,c as U,d as Y,a as _,e as z,f as K,h as k}from"./OverlayArrow.module.39160cf6.js";import{w as V,$ as X,j as M,c as y,d as G,b as q,D as J,P as Q,l as Z,o as ee,h as te,k as re,W as oe}from"./useFocusRing.module.67a70e0b.js";import{I as ae}from"./Info.0e487e10.js";const E=s.createContext(null);function ne(e){let{children:r}=e,t=l.exports.useContext(E),[a,i]=l.exports.useState(0),c=l.exports.useMemo(()=>({parent:t,modalCount:a,addModal(){i(n=>n+1),t&&t.addModal()},removeModal(){i(n=>n-1),t&&t.removeModal()}}),[t,a]);return s.createElement(E.Provider,{value:c},r)}function le(){let e=l.exports.useContext(E);return{modalProviderProps:{"aria-hidden":e&&e.modalCount>0?!0:void 0}}}function ie(e){let{modalProviderProps:r}=le();return s.createElement("div",{"data-overlay-container":!0,...e,...r})}function ce(e){return s.createElement(ne,null,s.createElement(ie,e))}function se(e){let r=V(),{portalContainer:t=r?null:document.body,...a}=e,{getContainer:i}=N();if(!e.portalContainer&&i&&(t=i()),s.useEffect(()=>{if(t!=null&&t.closest("[data-overlay-container]"))throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")},[t]),!t)return null;let c=s.createElement(ce,a);return F.createPortal(c,t)}function L(e,r){let t=X(e,{labelable:!0}),{hoverProps:a}=M({onHoverStart:()=>r==null?void 0:r.open(!0),onHoverEnd:()=>r==null?void 0:r.close()});return{tooltipProps:y(t,a,{role:"tooltip"})}}function de(e,r,t){let{isDisabled:a,trigger:i}=e,c=G(),n=l.exports.useRef(!1),o=l.exports.useRef(!1),$=()=>{(n.current||o.current)&&r.open(o.current)},d=h=>{!n.current&&!o.current&&r.close(h)};l.exports.useEffect(()=>{let h=S=>{t&&t.current&&S.key==="Escape"&&(S.stopPropagation(),r.close(!0))};if(r.isOpen)return document.addEventListener("keydown",h,!0),()=>{document.removeEventListener("keydown",h,!0)}},[t,r]);let x=()=>{i!=="focus"&&(J()==="pointer"?n.current=!0:n.current=!1,$())},g=()=>{i!=="focus"&&(o.current=!1,n.current=!1,d())},v=()=>{o.current=!1,n.current=!1,d(!0)},T=()=>{Q()&&(o.current=!0,$())},f=()=>{o.current=!1,n.current=!1,d(!0)},{hoverProps:H}=M({isDisabled:a,onHoverStart:x,onHoverEnd:g}),{focusableProps:W}=q({isDisabled:a,onFocus:T,onBlur:f},t);return{triggerProps:{"aria-describedby":r.isOpen?c:void 0,...y(W,H,{onPointerDown:v,onKeyDown:v,tabIndex:void 0})},tooltipProps:{id:c}}}const fe=1500,D=500;let m={},ue=0,P=!1,p=null,b=null;function I(e={}){let{delay:r=fe,closeDelay:t=D}=e,{isOpen:a,open:i,close:c}=U(e),n=l.exports.useMemo(()=>`${++ue}`,[]),o=l.exports.useRef(null),$=l.exports.useRef(c),d=()=>{m[n]=v},x=()=>{for(let f in m)f!==n&&(m[f](!0),delete m[f])},g=()=>{o.current&&clearTimeout(o.current),o.current=null,x(),d(),P=!0,i(),p&&(clearTimeout(p),p=null),b&&(clearTimeout(b),b=null)},v=f=>{f||t<=0?(o.current&&clearTimeout(o.current),o.current=null,$.current()):o.current||(o.current=setTimeout(()=>{o.current=null,$.current()},t)),p&&(clearTimeout(p),p=null),P&&(b&&clearTimeout(b),b=setTimeout(()=>{delete m[n],b=null,P=!1},Math.max(D,t)))},T=()=>{x(),d(),!a&&!p&&!P?p=setTimeout(()=>{p=null,P=!0,g()},r):a||g()};return l.exports.useEffect(()=>{$.current=c},[c]),l.exports.useEffect(()=>()=>{o.current&&clearTimeout(o.current),m[n]&&delete m[n]},[n]),{isOpen:a,open:f=>{!f&&r>0&&!o.current?T():g()},close:v}}const R=l.exports.createContext(null),A=l.exports.createContext(null);function $e(e){let r=I(e),t=l.exports.useRef(null),{triggerProps:a,tooltipProps:i}=de(e,r,t);return s.createElement(re,{values:[[R,r],[A,{...i,triggerRef:t}]]},s.createElement(oe,{...a,ref:t},e.children))}const pe=l.exports.forwardRef(function({UNSTABLE_portalContainer:r,...t},a){[t,a]=Z(t,a,A);let i=l.exports.useContext(R),c=I(t),n=t.isOpen!=null||t.defaultOpen!=null||!i?c:i,o=Y(a,n.isOpen)||t.isExiting||!1;return!n.isOpen&&!o?null:s.createElement(se,{portalContainer:r},s.createElement(me,{...t,tooltipRef:a,isExiting:o}))});function me(e){let r=l.exports.useContext(R),t=l.exports.useRef(null),[a,i]=l.exports.useState(0);ee(()=>{t.current&&r.isOpen&&i(t.current.getBoundingClientRect().width)},[r.isOpen,t]);let{overlayProps:c,arrowProps:n,placement:o}=_({placement:e.placement||"top",targetRef:e.triggerRef,overlayRef:e.tooltipRef,offset:e.offset,crossOffset:e.crossOffset,isOpen:r.isOpen,arrowSize:a,arrowBoundaryOffset:e.arrowBoundaryOffset,shouldFlip:e.shouldFlip,onClose:()=>r.close(!0)}),$=z(e.tooltipRef,!!o)||e.isEntering||!1,d=te({...e,defaultClassName:"react-aria-Tooltip",values:{placement:o,isEntering:$,isExiting:e.isExiting,state:r}});e=y(e,c);let{tooltipProps:x}=L(e,r);return s.createElement("div",{...x,ref:e.tooltipRef,...d,style:{...c.style,...d.style},"data-placement":o!=null?o:void 0,"data-entering":$||void 0,"data-exiting":e.isExiting||void 0},s.createElement(K.Provider,{value:{...n,placement:o,ref:t}},d.children))}const B=`
  box-shadow: 0 0.8rem 2rem rgba(0 0 0 / 0.1);
  border-radius: 0.3rem;
  border: 1px solid #ccc;
  background: ${w.palette.white};
  color: ${w.palette.neutralThin};
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
    fill: ${w.palette.white};
  }
`,be=O(pe)`${B}`,xe=O.div`
  ${B}  
`,ge=O(j)`
  border: none;
  padding: 0;
  margin-left: 0.4rem;
  display: flex;
  background-color: inherit;
`,ve=({children:e,placement:r,icon:t,...a})=>C(be,{...a,placement:r,children:[u(k,{children:u("svg",{width:8,height:8,viewBox:"0 0 8 8",children:u("path",{d:"M0 0 L4 4 L8 0",stroke:"#ccc",strokeWidth:"1"})})}),e]}),Oe=({icon:e,ariaLabel:r,...t})=>C($e,{delay:0,children:[u(ge,{"aria-label":r||"More information",children:e?u("img",{src:e,"aria-hidden":!0,alt:""}):u(ae,{"aria-hidden":!0})}),u(ve,{...t})]}),Ce=({state:e,...r})=>{const{tooltipProps:t}=L(r,e);return C(xe,{"data-placement":r.placement,...y(r,t),children:[r.children,u(k,{...r,children:u("svg",{width:8,height:8,viewBox:"0 0 8 8",children:u("path",{d:"M0 0 L4 4 L8 0",stroke:"#ccc",strokeWidth:"1"})})})]})};export{I as $,Ce as C,Oe as T,de as a};
