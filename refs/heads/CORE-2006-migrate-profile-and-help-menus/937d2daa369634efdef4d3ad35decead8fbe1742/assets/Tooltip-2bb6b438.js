import{R as d,$ as W,r as l,s as O,a as C,j as u}from"./index-4f7e923e.js";import{c as T}from"./theme-8bbc88f0.js";import{$ as j}from"./Button-cbd6e0a7.js";import{e as N,$ as U,a as V,d as Y,b as _,f as z,h as M}from"./OverlayArrow-30014d30.js";import{a as G,f as K,v as k,b as y,n as X,G as q,V as J,w as Q,g as Z,a0 as ee,c as te,o as re,e as oe}from"./useFocusRing-dcf6ca9b.js";import{I as ae}from"./Info-5c4ff5cb.js";const w=d.createContext(null);function ne(e){let{children:r}=e,t=l.useContext(w),[a,i]=l.useState(0),c=l.useMemo(()=>({parent:t,modalCount:a,addModal(){i(n=>n+1),t&&t.addModal()},removeModal(){i(n=>n-1),t&&t.removeModal()}}),[t,a]);return d.createElement(w.Provider,{value:c},r)}function le(){let e=l.useContext(w);return{modalProviderProps:{"aria-hidden":e&&e.modalCount>0?!0:void 0}}}function ie(e){let{modalProviderProps:r}=le();return d.createElement("div",{"data-overlay-container":!0,...e,...r})}function ce(e){return d.createElement(ne,null,d.createElement(ie,e))}function de(e){let r=G(),{portalContainer:t=r?null:document.body,...a}=e,{getContainer:i}=N();if(!e.portalContainer&&i&&(t=i()),d.useEffect(()=>{if(t!=null&&t.closest("[data-overlay-container]"))throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")},[t]),!t)return null;let c=d.createElement(ce,a);return W.createPortal(c,t)}function L(e,r){let t=K(e,{labelable:!0}),{hoverProps:a}=k({onHoverStart:()=>r==null?void 0:r.open(!0),onHoverEnd:()=>r==null?void 0:r.close()});return{tooltipProps:y(t,a,{role:"tooltip"})}}function se(e,r,t){let{isDisabled:a,trigger:i}=e,c=X(),n=l.useRef(!1),o=l.useRef(!1),$=()=>{(n.current||o.current)&&r.open(o.current)},s=h=>{!n.current&&!o.current&&r.close(h)};l.useEffect(()=>{let h=S=>{t&&t.current&&S.key==="Escape"&&(S.stopPropagation(),r.close(!0))};if(r.isOpen)return document.addEventListener("keydown",h,!0),()=>{document.removeEventListener("keydown",h,!0)}},[t,r]);let g=()=>{i!=="focus"&&(J()==="pointer"?n.current=!0:n.current=!1,$())},v=()=>{i!=="focus"&&(o.current=!1,n.current=!1,s())},x=()=>{o.current=!1,n.current=!1,s(!0)},E=()=>{Q()&&(o.current=!0,$())},f=()=>{o.current=!1,n.current=!1,s(!0)},{hoverProps:H}=k({isDisabled:a,onHoverStart:g,onHoverEnd:v}),{focusableProps:F}=q({isDisabled:a,onFocus:E,onBlur:f},t);return{triggerProps:{"aria-describedby":r.isOpen?c:void 0,...y(F,H,{onPointerDown:x,onKeyDown:x,tabIndex:void 0})},tooltipProps:{id:c}}}const fe=1500,D=500;let m={},ue=0,P=!1,p=null,b=null;function I(e={}){let{delay:r=fe,closeDelay:t=D}=e,{isOpen:a,open:i,close:c}=U(e),n=l.useMemo(()=>`${++ue}`,[]),o=l.useRef(null),$=l.useRef(c),s=()=>{m[n]=x},g=()=>{for(let f in m)f!==n&&(m[f](!0),delete m[f])},v=()=>{o.current&&clearTimeout(o.current),o.current=null,g(),s(),P=!0,i(),p&&(clearTimeout(p),p=null),b&&(clearTimeout(b),b=null)},x=f=>{f||t<=0?(o.current&&clearTimeout(o.current),o.current=null,$.current()):o.current||(o.current=setTimeout(()=>{o.current=null,$.current()},t)),p&&(clearTimeout(p),p=null),P&&(b&&clearTimeout(b),b=setTimeout(()=>{delete m[n],b=null,P=!1},Math.max(D,t)))},E=()=>{g(),s(),!a&&!p&&!P?p=setTimeout(()=>{p=null,P=!0,v()},r):a||v()};return l.useEffect(()=>{$.current=c},[c]),l.useEffect(()=>()=>{o.current&&clearTimeout(o.current),m[n]&&delete m[n]},[n]),{isOpen:a,open:f=>{!f&&r>0&&!o.current?E():v()},close:x}}const R=l.createContext(null),A=l.createContext(null);function $e(e){let r=I(e),t=l.useRef(null),{triggerProps:a,tooltipProps:i}=se(e,r,t);return d.createElement(Z,{values:[[R,r],[A,{...i,triggerRef:t}]]},d.createElement(ee,{...a,ref:t},e.children))}const pe=l.forwardRef(function({UNSTABLE_portalContainer:r,...t},a){[t,a]=te(t,a,A);let i=l.useContext(R),c=I(t),n=t.isOpen!=null||t.defaultOpen!=null||!i?c:i,o=V(a,n.isOpen)||t.isExiting||!1;return!n.isOpen&&!o?null:d.createElement(de,{portalContainer:r},d.createElement(me,{...t,tooltipRef:a,isExiting:o}))});function me(e){let r=l.useContext(R),t=l.useRef(null),[a,i]=l.useState(0);re(()=>{t.current&&r.isOpen&&i(t.current.getBoundingClientRect().width)},[r.isOpen,t]);let{overlayProps:c,arrowProps:n,placement:o}=Y({placement:e.placement||"top",targetRef:e.triggerRef,overlayRef:e.tooltipRef,offset:e.offset,crossOffset:e.crossOffset,isOpen:r.isOpen,arrowSize:a,arrowBoundaryOffset:e.arrowBoundaryOffset,shouldFlip:e.shouldFlip,onClose:()=>r.close(!0)}),$=_(e.tooltipRef,!!o)||e.isEntering||!1,s=oe({...e,defaultClassName:"react-aria-Tooltip",values:{placement:o,isEntering:$,isExiting:e.isExiting,state:r}});e=y(e,c);let{tooltipProps:g}=L(e,r);return d.createElement("div",{...g,ref:e.tooltipRef,...s,style:{...c.style,...s.style},"data-placement":o??void 0,"data-entering":$||void 0,"data-exiting":e.isExiting||void 0},d.createElement(z.Provider,{value:{...n,placement:o,ref:t}},s.children))}const B=`
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
`,be=O(pe)`${B}`,ge=O.div`
  ${B}  
`,ve=O(j)`
  border: none;
  padding: 0;
  margin-left: 0.4rem;
  display: flex;
  background-color: inherit;
`,xe=({children:e,placement:r,icon:t,...a})=>C(be,{...a,placement:r,children:[u(M,{children:u("svg",{width:8,height:8,viewBox:"0 0 8 8",children:u("path",{d:"M0 0 L4 4 L8 0",stroke:"#ccc",strokeWidth:"1"})})}),e]}),Oe=({icon:e,ariaLabel:r,...t})=>C($e,{delay:0,children:[u(ve,{"aria-label":r||"More information",children:e?u("img",{src:e,"aria-hidden":!0,alt:""}):u(ae,{"aria-hidden":!0})}),u(xe,{...t})]}),Ce=({state:e,...r})=>{const{tooltipProps:t}=L(r,e);return C(ge,{"data-placement":r.placement,...y(r,t),children:[r.children,u(M,{...r,children:u("svg",{width:8,height:8,viewBox:"0 0 8 8",children:u("path",{d:"M0 0 L4 4 L8 0",stroke:"#ccc",strokeWidth:"1"})})})]})};export{I as $,Ce as C,Oe as T,se as a};
