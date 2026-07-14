import{R as s,$ as j,r as l,s as O,j as C,a as d}from"./index.2acaa006.js";import{c as E}from"./theme.469067e1.js";import{$ as _}from"./Button.module.90816302.js";import{b as N,c as U,d as Y,a as z,e as K,f as V,h as L}from"./OverlayArrow.module.e487b8b2.js";import{w as X,$ as G,j as M,c as y,d as q,b as J,F as Q,P as Z,k as ee,W as te,l as re,o as oe,h as ae}from"./useFocusRing.module.6c3036f9.js";import{I as ne}from"./Info.7d5182b1.js";import{$ as le}from"./VisuallyHidden.module.7b868bc6.js";const T=s.createContext(null);function ie(e){let{children:r}=e,t=l.exports.useContext(T),[a,i]=l.exports.useState(0),c=l.exports.useMemo(()=>({parent:t,modalCount:a,addModal(){i(n=>n+1),t&&t.addModal()},removeModal(){i(n=>n-1),t&&t.removeModal()}}),[t,a]);return s.createElement(T.Provider,{value:c},r)}function ce(){let e=l.exports.useContext(T);return{modalProviderProps:{"aria-hidden":e&&e.modalCount>0?!0:void 0}}}function se(e){let{modalProviderProps:r}=ce();return s.createElement("div",{"data-overlay-container":!0,...e,...r})}function de(e){return s.createElement(ie,null,s.createElement(se,e))}function fe(e){let r=X(),{portalContainer:t=r?null:document.body,...a}=e,{getContainer:i}=N();if(!e.portalContainer&&i&&(t=i()),s.useEffect(()=>{if(t!=null&&t.closest("[data-overlay-container]"))throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")},[t]),!t)return null;let c=s.createElement(de,a);return j.createPortal(c,t)}function B(e,r){let t=G(e,{labelable:!0}),{hoverProps:a}=M({onHoverStart:()=>r==null?void 0:r.open(!0),onHoverEnd:()=>r==null?void 0:r.close()});return{tooltipProps:y(t,a,{role:"tooltip"})}}function I(e,r,t){let{isDisabled:a,trigger:i}=e,c=q(),n=l.exports.useRef(!1),o=l.exports.useRef(!1),$=()=>{(n.current||o.current)&&r.open(o.current)},f=h=>{!n.current&&!o.current&&r.close(h)};l.exports.useEffect(()=>{let h=D=>{t&&t.current&&D.key==="Escape"&&(D.stopPropagation(),r.close(!0))};if(r.isOpen)return document.addEventListener("keydown",h,!0),()=>{document.removeEventListener("keydown",h,!0)}},[t,r]);let x=()=>{i!=="focus"&&(Q()==="pointer"?n.current=!0:n.current=!1,$())},g=()=>{i!=="focus"&&(o.current=!1,n.current=!1,f())},v=()=>{o.current=!1,n.current=!1,f(!0)},w=()=>{Z()&&(o.current=!0,$())},u=()=>{o.current=!1,n.current=!1,f(!0)},{hoverProps:H}=M({isDisabled:a,onHoverStart:x,onHoverEnd:g}),{focusableProps:W}=J({isDisabled:a,onFocus:w,onBlur:u},t);return{triggerProps:{"aria-describedby":r.isOpen?c:void 0,...y(W,H,{onPointerDown:v,onKeyDown:v,tabIndex:void 0})},tooltipProps:{id:c}}}const ue=1500,k=500;let b={},$e=0,P=!1,p=null,m=null;function R(e={}){let{delay:r=ue,closeDelay:t=k}=e,{isOpen:a,open:i,close:c}=U(e),n=l.exports.useMemo(()=>`${++$e}`,[]),o=l.exports.useRef(null),$=l.exports.useRef(c),f=()=>{b[n]=v},x=()=>{for(let u in b)u!==n&&(b[u](!0),delete b[u])},g=()=>{o.current&&clearTimeout(o.current),o.current=null,x(),f(),P=!0,i(),p&&(clearTimeout(p),p=null),m&&(clearTimeout(m),m=null)},v=u=>{u||t<=0?(o.current&&clearTimeout(o.current),o.current=null,$.current()):o.current||(o.current=setTimeout(()=>{o.current=null,$.current()},t)),p&&(clearTimeout(p),p=null),P&&(m&&clearTimeout(m),m=setTimeout(()=>{delete b[n],m=null,P=!1},Math.max(k,t)))},w=()=>{x(),f(),!a&&!p&&!P?p=setTimeout(()=>{p=null,P=!0,g()},r):a||g()};return l.exports.useEffect(()=>{$.current=c},[c]),l.exports.useEffect(()=>()=>{o.current&&clearTimeout(o.current),b[n]&&delete b[n]},[n]),{isOpen:a,open:u=>{!u&&r>0&&!o.current?w():g()},close:v}}const S=l.exports.createContext(null),A=l.exports.createContext(null);function pe(e){let r=R(e),t=l.exports.useRef(null),{triggerProps:a,tooltipProps:i}=I(e,r,t);return s.createElement(ee,{values:[[S,r],[A,{...i,triggerRef:t}]]},s.createElement(te,{...a,ref:t},e.children))}const be=l.exports.forwardRef(function({UNSTABLE_portalContainer:r,...t},a){[t,a]=re(t,a,A);let i=l.exports.useContext(S),c=R(t),n=t.isOpen!=null||t.defaultOpen!=null||!i?c:i,o=Y(a,n.isOpen)||t.isExiting||!1;return!n.isOpen&&!o?null:s.createElement(fe,{portalContainer:r},s.createElement(me,{...t,tooltipRef:a,isExiting:o}))});function me(e){let r=l.exports.useContext(S),t=l.exports.useRef(null),[a,i]=l.exports.useState(0);oe(()=>{t.current&&r.isOpen&&i(t.current.getBoundingClientRect().width)},[r.isOpen,t]);let{overlayProps:c,arrowProps:n,placement:o}=z({placement:e.placement||"top",targetRef:e.triggerRef,overlayRef:e.tooltipRef,offset:e.offset,crossOffset:e.crossOffset,isOpen:r.isOpen,arrowSize:a,arrowBoundaryOffset:e.arrowBoundaryOffset,shouldFlip:e.shouldFlip,onClose:()=>r.close(!0)}),$=K(e.tooltipRef,!!o)||e.isEntering||!1,f=ae({...e,defaultClassName:"react-aria-Tooltip",values:{placement:o,isEntering:$,isExiting:e.isExiting,state:r}});e=y(e,c);let{tooltipProps:x}=B(e,r);return s.createElement("div",{...x,ref:e.tooltipRef,...f,style:{...c.style,...f.style},"data-placement":o!=null?o:void 0,"data-entering":$||void 0,"data-exiting":e.isExiting||void 0},s.createElement(V.Provider,{value:{...n,placement:o,ref:t}},f.children))}const F=`
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
`,xe=O(be)`${F}`,ge=O.div`
  ${F}  
`,ve=O(_)`
  border: none;
  padding: 0;
  margin-left: 0.4rem;
  display: flex;
  background-color: inherit;
`,he=({children:e,placement:r,icon:t,...a})=>C(xe,{...a,placement:r,children:[d(L,{children:d("svg",{width:8,height:8,viewBox:"0 0 8 8",children:d("path",{d:"M0 0 L4 4 L8 0",stroke:"#ccc",strokeWidth:"1"})})}),e]}),Se=({icon:e,ariaLabel:r,...t})=>C(pe,{delay:0,children:[d(ve,{"aria-label":r||"More information",children:e?d("img",{src:e,"aria-hidden":!0,alt:""}):d(ne,{"aria-hidden":!0})}),d(he,{...t})]}),Pe=({state:e,...r})=>{const{tooltipProps:t}=B(r,e);return C(ge,{"data-placement":r.placement,...y(r,t),children:[r.children,d(L,{...r,children:d("svg",{width:8,height:8,viewBox:"0 0 8 8",children:d("path",{d:"M0 0 L4 4 L8 0",stroke:"#ccc",strokeWidth:"1"})})})]})},De=(e,r="right")=>{const t=R({delay:0}),a=l.exports.useRef(null),{triggerProps:i,tooltipProps:c}=I({delay:0},t,a),{"aria-describedby":n,...o}=i;return{triggerRef:a,triggerProps:o,labelDescription:e?d(le,{children:e}):null,tooltip:e&&t.isOpen?d(Pe,{state:t,...c,placement:r,"aria-hidden":!0,children:e}):null}};export{Se as T,De as u};
