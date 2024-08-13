import{R as s,$ as W,r as n,s as O,j as C,a as u}from"./index.5748ac5d.js";import{c as E}from"./theme.4dd66404.js";import{g as j,d as N,h as U,b as Y,e as _,$ as z,i as k}from"./OverlayArrow.module.ca950bdd.js";import{p as K,$ as V,h as L,b as y,d as X,l as G,m as q,A as J,C as Q,i as Z}from"./context.module.3d32e3de.js";import{d as ee,o as te,$ as re}from"./focusSafely.module.265c7811.js";import{I as oe}from"./Info.8a6bafd9.js";const w=s.createContext(null);function ae(t){let{children:e}=t,r=n.exports.useContext(w),[a,i]=n.exports.useState(0),c=n.exports.useMemo(()=>({parent:r,modalCount:a,addModal(){i(o=>o+1),r&&r.addModal()},removeModal(){i(o=>o-1),r&&r.removeModal()}}),[r,a]);return s.createElement(w.Provider,{value:c},e)}function le(){let t=n.exports.useContext(w);return{modalProviderProps:{"aria-hidden":t&&t.modalCount>0?!0:null}}}function ne(t){let{modalProviderProps:e}=le();return s.createElement("div",{"data-overlay-container":!0,...t,...e})}function ie(t){return s.createElement(ae,null,s.createElement(ne,t))}function ce(t){let e=K(),{portalContainer:r=e?null:document.body,...a}=t;if(s.useEffect(()=>{if(r!=null&&r.closest("[data-overlay-container]"))throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")},[r]),!r)return null;let i=s.createElement(ie,a);return W.createPortal(i,r)}function M(t,e){let r=V(t,{labelable:!0}),{hoverProps:a}=L({onHoverStart:()=>e==null?void 0:e.open(!0),onHoverEnd:()=>e==null?void 0:e.close()});return{tooltipProps:y(r,a,{role:"tooltip"})}}function se(t,e,r){let{isDisabled:a,trigger:i}=t,c=X(),o=n.exports.useRef(!1),l=n.exports.useRef(!1),$=()=>{(o.current||l.current)&&e.open(l.current)},d=h=>{!o.current&&!l.current&&e.close(h)};n.exports.useEffect(()=>{let h=S=>{r&&r.current&&S.key==="Escape"&&(S.stopPropagation(),e.close(!0))};if(e.isOpen)return document.addEventListener("keydown",h,!0),()=>{document.removeEventListener("keydown",h,!0)}},[r,e]);let x=()=>{i!=="focus"&&(ee()==="pointer"?o.current=!0:o.current=!1,$())},g=()=>{i!=="focus"&&(l.current=!1,o.current=!1,d())},v=()=>{l.current=!1,o.current=!1,d(!0)},T=()=>{te()&&(l.current=!0,$())},f=()=>{l.current=!1,o.current=!1,d(!0)},{hoverProps:I}=L({isDisabled:a,onHoverStart:x,onHoverEnd:g}),{focusableProps:F}=j({isDisabled:a,onFocus:T,onBlur:f},r);return{triggerProps:{"aria-describedby":e.isOpen?c:void 0,...y(F,I,{onPointerDown:v,onKeyDown:v})},tooltipProps:{id:c}}}const de=1500,D=500;let m={},fe=0,P=!1,p=null,b=null;function A(t={}){let{delay:e=de,closeDelay:r=D}=t,{isOpen:a,open:i,close:c}=N(t),o=n.exports.useMemo(()=>`${++fe}`,[]),l=n.exports.useRef(void 0),$=n.exports.useRef(c),d=()=>{m[o]=v},x=()=>{for(let f in m)f!==o&&(m[f](!0),delete m[f])},g=()=>{clearTimeout(l.current),l.current=null,x(),d(),P=!0,i(),p&&(clearTimeout(p),p=null),b&&(clearTimeout(b),b=null)},v=f=>{f||r<=0?(clearTimeout(l.current),l.current=null,$.current()):l.current||(l.current=setTimeout(()=>{l.current=null,$.current()},r)),p&&(clearTimeout(p),p=null),P&&(b&&clearTimeout(b),b=setTimeout(()=>{delete m[o],b=null,P=!1},Math.max(D,r)))},T=()=>{x(),d(),!a&&!p&&!P?p=setTimeout(()=>{p=null,P=!0,g()},e):a||g()};return n.exports.useEffect(()=>{$.current=c},[c]),n.exports.useEffect(()=>()=>{clearTimeout(l.current),m[o]&&delete m[o]},[o]),{isOpen:a,open:f=>{!f&&e>0&&!l.current?T():g()},close:v}}const R=n.exports.createContext(null),B=n.exports.createContext(null);function ue(t){let e=A(t),r=n.exports.useRef(null),{triggerProps:a,tooltipProps:i}=se(t,e,r);return s.createElement(G,{values:[[R,e],[B,{...i,triggerRef:r}]]},s.createElement(U,{...a,ref:r},t.children))}function $e({UNSTABLE_portalContainer:t,...e},r){[e,r]=q(e,r,B);let a=n.exports.useContext(R),i=A(e),c=e.isOpen!=null||e.defaultOpen!=null||!a?i:a,o=J(r,c.isOpen)||e.isExiting||!1;return!c.isOpen&&!o?null:s.createElement(ce,{portalContainer:t},s.createElement(me,{...e,tooltipRef:r,isExiting:o}))}const pe=n.exports.forwardRef($e);function me(t){let e=n.exports.useContext(R),r=n.exports.useRef(null),[a,i]=n.exports.useState(0);re(()=>{r.current&&e.isOpen&&i(r.current.getBoundingClientRect().width)},[e.isOpen,r]);let{overlayProps:c,arrowProps:o,placement:l}=Y({placement:t.placement||"top",targetRef:t.triggerRef,overlayRef:t.tooltipRef,offset:t.offset,crossOffset:t.crossOffset,isOpen:e.isOpen,arrowSize:a,arrowBoundaryOffset:t.arrowBoundaryOffset,shouldFlip:t.shouldFlip}),$=Q(t.tooltipRef,!!l)||t.isEntering||!1,d=Z({...t,defaultClassName:"react-aria-Tooltip",values:{placement:l,isEntering:$,isExiting:t.isExiting,state:e}});t=y(t,c);let{tooltipProps:x}=M(t,e);return s.createElement("div",{...x,ref:t.tooltipRef,...d,style:{...c.style,...d.style},"data-placement":l,"data-entering":$||void 0,"data-exiting":t.isExiting||void 0},s.createElement(_.Provider,{value:{...o,placement:l,ref:r}},d.children))}const H=`
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
`,be=O(pe)`${H}`,xe=O.div`
  ${H}  
`,ge=O(z)`
  border: none;
  padding: 0;
  margin-left: 0.4rem;
  display: flex;
  background-color: inherit;
`,ve=({children:t,placement:e,icon:r,...a})=>C(be,{...a,placement:e,children:[u(k,{children:u("svg",{width:8,height:8,viewBox:"0 0 8 8",children:u("path",{d:"M0 0 L4 4 L8 0",stroke:"#ccc",strokeWidth:"1"})})}),t]}),Oe=({icon:t,...e})=>C(ue,{delay:0,children:[u(ge,{children:t?u("img",{src:t,"aria-hidden":!0,alt:""}):u(oe,{"aria-hidden":!0})}),u(ve,{...e})]}),Ce=({state:t,...e})=>{const{tooltipProps:r}=M(e,t);return C(xe,{"data-placement":e.placement,...y(e,r),children:[e.children,u(k,{...e,children:u("svg",{width:8,height:8,viewBox:"0 0 8 8",children:u("path",{d:"M0 0 L4 4 L8 0",stroke:"#ccc",strokeWidth:"1"})})})]})};export{A as $,Ce as C,Oe as T,se as a};
