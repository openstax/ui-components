import{R as s,$ as W,r as n,s as O,j as C,a as u}from"./index.65ce4e2d.js";import{c as E}from"./theme.d9bb0adf.js";import{c as j,d as z,b as K,e as N,f as U,$ as Y,i as D}from"./OverlayArrow.module.fd645f3c.js";import{r as _,a as V,k as M,c as y,e as X,z as G,K as q,n as J,$ as Q,i as Z,m as ee}from"./context.module.cb81d9b8.js";import{b as te,c as re}from"./useButton.module.9debfb93.js";import{I as oe}from"./Info.e242f293.js";const w=s.createContext(null);function ae(e){let{children:r}=e,t=n.exports.useContext(w),[a,i]=n.exports.useState(0),c=n.exports.useMemo(()=>({parent:t,modalCount:a,addModal(){i(l=>l+1),t&&t.addModal()},removeModal(){i(l=>l-1),t&&t.removeModal()}}),[t,a]);return s.createElement(w.Provider,{value:c},r)}function le(){let e=n.exports.useContext(w);return{modalProviderProps:{"aria-hidden":e&&e.modalCount>0?!0:void 0}}}function ne(e){let{modalProviderProps:r}=le();return s.createElement("div",{"data-overlay-container":!0,...e,...r})}function ie(e){return s.createElement(ae,null,s.createElement(ne,e))}function ce(e){let r=_(),{portalContainer:t=r?null:document.body,...a}=e;if(s.useEffect(()=>{if(t!=null&&t.closest("[data-overlay-container]"))throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")},[t]),!t)return null;let i=s.createElement(ie,a);return W.createPortal(i,t)}function L(e,r){let t=V(e,{labelable:!0}),{hoverProps:a}=M({onHoverStart:()=>r==null?void 0:r.open(!0),onHoverEnd:()=>r==null?void 0:r.close()});return{tooltipProps:y(t,a,{role:"tooltip"})}}function se(e,r,t){let{isDisabled:a,trigger:i}=e,c=X(),l=n.exports.useRef(!1),o=n.exports.useRef(!1),$=()=>{(l.current||o.current)&&r.open(o.current)},d=h=>{!l.current&&!o.current&&r.close(h)};n.exports.useEffect(()=>{let h=S=>{t&&t.current&&S.key==="Escape"&&(S.stopPropagation(),r.close(!0))};if(r.isOpen)return document.addEventListener("keydown",h,!0),()=>{document.removeEventListener("keydown",h,!0)}},[t,r]);let x=()=>{i!=="focus"&&(G()==="pointer"?l.current=!0:l.current=!1,$())},g=()=>{i!=="focus"&&(o.current=!1,l.current=!1,d())},v=()=>{o.current=!1,l.current=!1,d(!0)},T=()=>{q()&&(o.current=!0,$())},f=()=>{o.current=!1,l.current=!1,d(!0)},{hoverProps:I}=M({isDisabled:a,onHoverStart:x,onHoverEnd:g}),{focusableProps:F}=te({isDisabled:a,onFocus:T,onBlur:f},t);return{triggerProps:{"aria-describedby":r.isOpen?c:void 0,...y(F,I,{onPointerDown:v,onKeyDown:v})},tooltipProps:{id:c}}}const de=1500,k=500;let m={},fe=0,P=!1,p=null,b=null;function A(e={}){let{delay:r=de,closeDelay:t=k}=e,{isOpen:a,open:i,close:c}=j(e),l=n.exports.useMemo(()=>`${++fe}`,[]),o=n.exports.useRef(null),$=n.exports.useRef(c),d=()=>{m[l]=v},x=()=>{for(let f in m)f!==l&&(m[f](!0),delete m[f])},g=()=>{o.current&&clearTimeout(o.current),o.current=null,x(),d(),P=!0,i(),p&&(clearTimeout(p),p=null),b&&(clearTimeout(b),b=null)},v=f=>{f||t<=0?(o.current&&clearTimeout(o.current),o.current=null,$.current()):o.current||(o.current=setTimeout(()=>{o.current=null,$.current()},t)),p&&(clearTimeout(p),p=null),P&&(b&&clearTimeout(b),b=setTimeout(()=>{delete m[l],b=null,P=!1},Math.max(k,t)))},T=()=>{x(),d(),!a&&!p&&!P?p=setTimeout(()=>{p=null,P=!0,g()},r):a||g()};return n.exports.useEffect(()=>{$.current=c},[c]),n.exports.useEffect(()=>()=>{o.current&&clearTimeout(o.current),m[l]&&delete m[l]},[l]),{isOpen:a,open:f=>{!f&&r>0&&!o.current?T():g()},close:v}}const R=n.exports.createContext(null),B=n.exports.createContext(null);function ue(e){let r=A(e),t=n.exports.useRef(null),{triggerProps:a,tooltipProps:i}=se(e,r,t);return s.createElement(ee,{values:[[R,r],[B,{...i,triggerRef:t}]]},s.createElement(re,{...a,ref:t},e.children))}const $e=n.exports.forwardRef(function({UNSTABLE_portalContainer:r,...t},a){[t,a]=J(t,a,B);let i=n.exports.useContext(R),c=A(t),l=t.isOpen!=null||t.defaultOpen!=null||!i?c:i,o=z(a,l.isOpen)||t.isExiting||!1;return!l.isOpen&&!o?null:s.createElement(ce,{portalContainer:r},s.createElement(pe,{...t,tooltipRef:a,isExiting:o}))});function pe(e){let r=n.exports.useContext(R),t=n.exports.useRef(null),[a,i]=n.exports.useState(0);Q(()=>{t.current&&r.isOpen&&i(t.current.getBoundingClientRect().width)},[r.isOpen,t]);let{overlayProps:c,arrowProps:l,placement:o}=K({placement:e.placement||"top",targetRef:e.triggerRef,overlayRef:e.tooltipRef,offset:e.offset,crossOffset:e.crossOffset,isOpen:r.isOpen,arrowSize:a,arrowBoundaryOffset:e.arrowBoundaryOffset,shouldFlip:e.shouldFlip,onClose:()=>r.close(!0)}),$=N(e.tooltipRef,!!o)||e.isEntering||!1,d=Z({...e,defaultClassName:"react-aria-Tooltip",values:{placement:o,isEntering:$,isExiting:e.isExiting,state:r}});e=y(e,c);let{tooltipProps:x}=L(e,r);return s.createElement("div",{...x,ref:e.tooltipRef,...d,style:{...c.style,...d.style},"data-placement":o!=null?o:void 0,"data-entering":$||void 0,"data-exiting":e.isExiting||void 0},s.createElement(U.Provider,{value:{...l,placement:o,ref:t}},d.children))}const H=`
  box-shadow: 0 0.8rem 2rem rgba(0 0 0 / 0.1);
  border-radius: 0.3rem;
  border: 1px solid #ccc;
  background: ${E.palette.white};
  color: ${E.palette.neutralThin};
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
    fill: ${E.palette.white};
  }
`,me=O($e)`${H}`,be=O.div`
  ${H}  
`,xe=O(Y)`
  border: none;
  padding: 0;
  margin-left: 0.4rem;
  display: flex;
  background-color: inherit;
`,ge=({children:e,placement:r,icon:t,...a})=>C(me,{...a,placement:r,children:[u(D,{children:u("svg",{width:8,height:8,viewBox:"0 0 8 8",children:u("path",{d:"M0 0 L4 4 L8 0",stroke:"#ccc",strokeWidth:"1"})})}),e]}),we=({icon:e,ariaLabel:r,...t})=>C(ue,{delay:0,children:[u(xe,{"aria-label":r||"More information",children:e?u("img",{src:e,"aria-hidden":!0,alt:""}):u(oe,{"aria-hidden":!0})}),u(ge,{...t})]}),Oe=({state:e,...r})=>{const{tooltipProps:t}=L(r,e);return C(be,{"data-placement":r.placement,...y(r,t),children:[r.children,u(D,{...r,children:u("svg",{width:8,height:8,viewBox:"0 0 8 8",children:u("path",{d:"M0 0 L4 4 L8 0",stroke:"#ccc",strokeWidth:"1"})})})]})};export{A as $,Oe as C,we as T,se as a};
