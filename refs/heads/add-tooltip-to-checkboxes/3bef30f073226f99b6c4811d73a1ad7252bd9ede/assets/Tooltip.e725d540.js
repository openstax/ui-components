import{R as s,$ as j,r as l,s as O,j as C,a as d}from"./index.e55df2cc.js";import{c as w}from"./theme.469067e1.js";import{$ as N}from"./Button.module.45e9cdb3.js";import{b as U,c as Y,d as _,a as z,e as K,f as V,h as L}from"./OverlayArrow.module.1c096a00.js";import{w as X,$ as G,j as M,c as y,d as q,b as J,F as Q,P as Z,k as ee,W as te,l as re,o as oe,h as ae}from"./useFocusRing.module.bb7d70f3.js";import{I as ne}from"./Info.c0831bb1.js";const E=s.createContext(null);function le(t){let{children:r}=t,e=l.exports.useContext(E),[a,i]=l.exports.useState(0),c=l.exports.useMemo(()=>({parent:e,modalCount:a,addModal(){i(n=>n+1),e&&e.addModal()},removeModal(){i(n=>n-1),e&&e.removeModal()}}),[e,a]);return s.createElement(E.Provider,{value:c},r)}function ie(){let t=l.exports.useContext(E);return{modalProviderProps:{"aria-hidden":t&&t.modalCount>0?!0:void 0}}}function ce(t){let{modalProviderProps:r}=ie();return s.createElement("div",{"data-overlay-container":!0,...t,...r})}function se(t){return s.createElement(le,null,s.createElement(ce,t))}function de(t){let r=X(),{portalContainer:e=r?null:document.body,...a}=t,{getContainer:i}=U();if(!t.portalContainer&&i&&(e=i()),s.useEffect(()=>{if(e!=null&&e.closest("[data-overlay-container]"))throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")},[e]),!e)return null;let c=s.createElement(se,a);return j.createPortal(c,e)}function B(t,r){let e=G(t,{labelable:!0}),{hoverProps:a}=M({onHoverStart:()=>r==null?void 0:r.open(!0),onHoverEnd:()=>r==null?void 0:r.close()});return{tooltipProps:y(e,a,{role:"tooltip"})}}function I(t,r,e){let{isDisabled:a,trigger:i}=t,c=q(),n=l.exports.useRef(!1),o=l.exports.useRef(!1),p=()=>{(n.current||o.current)&&r.open(o.current)},f=h=>{!n.current&&!o.current&&r.close(h)};l.exports.useEffect(()=>{let h=k=>{e&&e.current&&k.key==="Escape"&&(k.stopPropagation(),r.close(!0))};if(r.isOpen)return document.addEventListener("keydown",h,!0),()=>{document.removeEventListener("keydown",h,!0)}},[e,r]);let x=()=>{i!=="focus"&&(Q()==="pointer"?n.current=!0:n.current=!1,p())},g=()=>{i!=="focus"&&(o.current=!1,n.current=!1,f())},v=()=>{o.current=!1,n.current=!1,f(!0)},T=()=>{Z()&&(o.current=!0,p())},u=()=>{o.current=!1,n.current=!1,f(!0)},{hoverProps:H}=M({isDisabled:a,onHoverStart:x,onHoverEnd:g}),{focusableProps:W}=J({isDisabled:a,onFocus:T,onBlur:u},e);return{triggerProps:{"aria-describedby":r.isOpen?c:void 0,...y(W,H,{onPointerDown:v,onKeyDown:v,tabIndex:void 0})},tooltipProps:{id:c}}}const fe=1500,D=500;let b={},ue=0,P=!1,$=null,m=null;function R(t={}){let{delay:r=fe,closeDelay:e=D}=t,{isOpen:a,open:i,close:c}=Y(t),n=l.exports.useMemo(()=>`${++ue}`,[]),o=l.exports.useRef(null),p=l.exports.useRef(c),f=()=>{b[n]=v},x=()=>{for(let u in b)u!==n&&(b[u](!0),delete b[u])},g=()=>{o.current&&clearTimeout(o.current),o.current=null,x(),f(),P=!0,i(),$&&(clearTimeout($),$=null),m&&(clearTimeout(m),m=null)},v=u=>{u||e<=0?(o.current&&clearTimeout(o.current),o.current=null,p.current()):o.current||(o.current=setTimeout(()=>{o.current=null,p.current()},e)),$&&(clearTimeout($),$=null),P&&(m&&clearTimeout(m),m=setTimeout(()=>{delete b[n],m=null,P=!1},Math.max(D,e)))},T=()=>{x(),f(),!a&&!$&&!P?$=setTimeout(()=>{$=null,P=!0,g()},r):a||g()};return l.exports.useEffect(()=>{p.current=c},[c]),l.exports.useEffect(()=>()=>{o.current&&clearTimeout(o.current),b[n]&&delete b[n]},[n]),{isOpen:a,open:u=>{!u&&r>0&&!o.current?T():g()},close:v}}const S=l.exports.createContext(null),A=l.exports.createContext(null);function pe(t){let r=R(t),e=l.exports.useRef(null),{triggerProps:a,tooltipProps:i}=I(t,r,e);return s.createElement(ee,{values:[[S,r],[A,{...i,triggerRef:e}]]},s.createElement(te,{...a,ref:e},t.children))}const $e=l.exports.forwardRef(function({UNSTABLE_portalContainer:r,...e},a){[e,a]=re(e,a,A);let i=l.exports.useContext(S),c=R(e),n=e.isOpen!=null||e.defaultOpen!=null||!i?c:i,o=_(a,n.isOpen)||e.isExiting||!1;return!n.isOpen&&!o?null:s.createElement(de,{portalContainer:r},s.createElement(be,{...e,tooltipRef:a,isExiting:o}))});function be(t){let r=l.exports.useContext(S),e=l.exports.useRef(null),[a,i]=l.exports.useState(0);oe(()=>{e.current&&r.isOpen&&i(e.current.getBoundingClientRect().width)},[r.isOpen,e]);let{overlayProps:c,arrowProps:n,placement:o}=z({placement:t.placement||"top",targetRef:t.triggerRef,overlayRef:t.tooltipRef,offset:t.offset,crossOffset:t.crossOffset,isOpen:r.isOpen,arrowSize:a,arrowBoundaryOffset:t.arrowBoundaryOffset,shouldFlip:t.shouldFlip,onClose:()=>r.close(!0)}),p=K(t.tooltipRef,!!o)||t.isEntering||!1,f=ae({...t,defaultClassName:"react-aria-Tooltip",values:{placement:o,isEntering:p,isExiting:t.isExiting,state:r}});t=y(t,c);let{tooltipProps:x}=B(t,r);return s.createElement("div",{...x,ref:t.tooltipRef,...f,style:{...c.style,...f.style},"data-placement":o!=null?o:void 0,"data-entering":p||void 0,"data-exiting":t.isExiting||void 0},s.createElement(V.Provider,{value:{...n,placement:o,ref:e}},f.children))}const F=`
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
`,me=O($e)`${F}`,xe=O.div`
  ${F}  
`,ge=O(N)`
  border: none;
  padding: 0;
  margin-left: 0.4rem;
  display: flex;
  background-color: inherit;
`,ve=({children:t,placement:r,icon:e,...a})=>C(me,{...a,placement:r,children:[d(L,{children:d("svg",{width:8,height:8,viewBox:"0 0 8 8",children:d("path",{d:"M0 0 L4 4 L8 0",stroke:"#ccc",strokeWidth:"1"})})}),t]}),Ce=({icon:t,ariaLabel:r,...e})=>C(pe,{delay:0,children:[d(ge,{"aria-label":r||"More information",children:t?d("img",{src:t,"aria-hidden":!0,alt:""}):d(ne,{"aria-hidden":!0})}),d(ve,{...e})]}),he=({state:t,...r})=>{const{tooltipProps:e}=B(r,t);return C(xe,{"data-placement":r.placement,...y(r,e),children:[r.children,d(L,{...r,children:d("svg",{width:8,height:8,viewBox:"0 0 8 8",children:d("path",{d:"M0 0 L4 4 L8 0",stroke:"#ccc",strokeWidth:"1"})})})]})},Re=(t,r="right")=>{const e=R({delay:0}),a=l.exports.useRef(null),{triggerProps:i,tooltipProps:c}=I({delay:0},e,a),{"aria-describedby":n,...o}=i;return{triggerRef:a,triggerProps:o,inputProps:n?{"aria-describedby":n}:{},tooltip:t&&e.isOpen?d(he,{state:e,...c,placement:r,children:t}):null}};export{Ce as T,Re as u};
