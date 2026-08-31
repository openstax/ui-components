import{r as l,R as $,j as s,s as m,C as x,a as w}from"./index-7b5cc3ce.js";import{c,z as I}from"./theme-bed77ad0.js";import{e as H,f as T,g as W,h as A,i as p,j as U,k as _,d as K}from"./Dialog-051f730e.js";import{$ as V}from"./VisuallyHidden-683b6771.js";import{$ as R,a as v,b as L,c as D,d as M,e as P,f as F,g as Z}from"./useFocusRing-1998ec8f.js";import{$ as q,a as C,b as k}from"./OverlayArrow-21e8528c.js";let f=typeof document<"u"&&window.visualViewport;function G(){let t=R(),[e,i]=l.useState(()=>t?{width:0,height:0}:y());return l.useEffect(()=>{let a=()=>{i(n=>{let r=y();return r.width===n.width&&r.height===n.height?n:r})};return f?f.addEventListener("resize",a):window.addEventListener("resize",a),()=>{f?f.removeEventListener("resize",a):window.removeEventListener("resize",a)}},[]),e}function y(){return{width:f&&(f==null?void 0:f.width)||window.innerWidth,height:f&&(f==null?void 0:f.height)||window.innerHeight}}function J(t,e,i){let{overlayProps:a,underlayProps:n}=H({...t,isOpen:e.isOpen,onClose:e.close},i);return T({isDisabled:!e.isOpen}),W(),l.useEffect(()=>{if(e.isOpen&&i.current)return A([i.current])},[e.isOpen,i]),{modalProps:v(a),underlayProps:n}}const Q=l.forwardRef(function(e,i){[e,i]=L(e,i,V);let{children:a,level:n=3,className:r,...o}=e,d=`h${n}`;return $.createElement(d,{...o,ref:i,className:r??"react-aria-Heading"},a)}),X=l.createContext(null),E=l.createContext(null),Y=l.forwardRef(function(e,i){if(l.useContext(E))return $.createElement(O,{...e,modalRef:i},e.children);let{isDismissable:n,isKeyboardDismissDisabled:r,isOpen:o,defaultOpen:d,onOpenChange:b,children:u,isEntering:h,isExiting:S,UNSTABLE_portalContainer:j,shouldCloseOnInteractOutside:N,...B}=e;return $.createElement(z,{isDismissable:n,isKeyboardDismissDisabled:r,isOpen:o,defaultOpen:d,onOpenChange:b,isEntering:h,isExiting:S,UNSTABLE_portalContainer:j,shouldCloseOnInteractOutside:N},$.createElement(O,{...B,modalRef:i},u))});function ee(t,e){[t,e]=L(t,e,X);let i=l.useContext(p),a=q(t),n=t.isOpen!=null||t.defaultOpen!=null||!i?a:i,r=D(e),o=l.useRef(null),d=C(r,n.isOpen),b=C(o,n.isOpen),u=d||b||t.isExiting||!1,h=R();return!n.isOpen&&!u||h?null:$.createElement(te,{...t,state:n,isExiting:u,overlayRef:r,modalRef:o})}const z=l.forwardRef(ee);function te({UNSTABLE_portalContainer:t,...e}){let i=e.modalRef,{state:a}=e,{modalProps:n,underlayProps:r}=J(e,a,i),o=k(e.overlayRef)||e.isEntering||!1,d=M({...e,defaultClassName:"react-aria-ModalOverlay",values:{isEntering:o,isExiting:e.isExiting,state:a}}),b=G(),u={...d.style,"--visual-viewport-height":b.height+"px"};return $.createElement(U,{isExiting:e.isExiting,portalContainer:t},$.createElement("div",{...v(P(e),r),...d,style:u,ref:e.overlayRef,"data-entering":o||void 0,"data-exiting":e.isExiting||void 0},$.createElement(F,{values:[[E,{modalProps:n,modalRef:i,isExiting:e.isExiting,isDismissable:e.isDismissable}],[p,a]]},d.children)))}function O(t){let{modalProps:e,modalRef:i,isExiting:a,isDismissable:n}=l.useContext(E),r=l.useContext(p),o=l.useMemo(()=>Z(t.modalRef,i),[t.modalRef,i]),d=D(o),b=k(d),u=M({...t,defaultClassName:"react-aria-Modal",values:{isEntering:b,isExiting:a,state:r}});return $.createElement("div",{...v(P(t),e),...u,ref:d,"data-entering":b||void 0,"data-exiting":a||void 0},n&&$.createElement(_,{onDismiss:r.close}),u.children)}const ie=t=>s("svg",{width:"15px",height:"15px",viewBox:"0 0 15 15",version:"1.1",...t,children:s("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:s("g",{transform:"translate(-302.000000, -18.000000)",fill:"currentColor",children:s("g",{transform:"translate(302.000000, 18.000000)",children:s("path",{d:"M7.5,5.41522791 L12.0331524,0.579865364 C12.3077536,0.286957429 12.7165503,0.24816296 12.946282,0.493210121 L13.9861449,1.60239723 C14.2158766,1.84744439 14.1795068,2.28349422 13.9049056,2.57640216 L9.37175324,7.41176471 L13.9049056,12.2471273 C14.1795068,12.5400352 14.2158766,12.976085 13.9861449,13.2211322 L12.946282,14.3303193 C12.7165503,14.5753665 12.3077536,14.536572 12.0331524,14.243664 L7.5,9.4083015 L2.96684761,14.243664 C2.69224642,14.536572 2.2834497,14.5753665 2.05371799,14.3303193 L1.01385508,13.2211322 C0.784123363,12.976085 0.820493178,12.5400352 1.09509437,12.2471273 L5.62824676,7.41176471 L1.09509437,2.57640216 C0.820493178,2.28349422 0.784123363,1.84744439 1.01385508,1.60239723 L2.05371799,0.493210121 C2.2834497,0.24816296 2.69224642,0.286957429 2.96684761,0.579865364 L7.5,5.41522791 Z"})})})})}),ae=m(({variant:t,...e})=>s("button",{...e,type:"button","aria-label":"Close",children:s(ie,{"aria-hidden":"true",focusable:"false"})}))`
  padding: 0;
  cursor: pointer;
  margin-right: 0;
  background: transparent;
  color: ${c.palette.neutralMedium};
  height: 2.4rem;
  width: 2.4rem;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    color: ${c.palette.neutralDark};
  }

  ${t=>t.variant==="error"&&x`
    color: ${c.palette.darkRed};
  `}

  ${t=>t.variant==="inverted-circle"&&x`
    color: ${c.palette.white};
    border: 0.1rem solid ${c.palette.white};
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    &:hover, &:focus {
      color: ${c.palette.black};
      background-color: ${c.palette.white};
      border-color: ${c.palette.white};
    }
  `}
`,g=3,ne=m(K)`
  display: flex;
  flex-direction: column;
  margin: auto;
  overflow: hidden;
  width: 40rem;
  background-color: white;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.05), 0 0 4rem rgba(0, 0, 0, 0.08);
  color: ${c.palette.neutralDarker};
  font-size: 1.6rem;
  line-height: 2.5rem;
  outline: none;
`,re=m.header`
  display: flex;
  align-items: center;
  margin-bottom: ${g*.5}rem;
  padding: ${g*.5}rem ${g}rem;
  background: ${c.palette.neutralLighter};
  border-bottom: solid 0.1rem #ddd;
  justify-content: space-between;
  ${t=>t.variant==="error"&&x`
    background: ${c.palette.paleRed};
    color: ${c.palette.darkRed};
  `}
`,de=m(Q)`
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${g*.5}rem 0;
  font-size: 1.8rem;
`;m.h3`
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: 0;
`;const ge=m.div`
  font-size: 1.6rem;
  padding: ${g}rem;
`,le=m(t=>s(z,{defaultOpen:!0,...t}))`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  z-index: ${I.modals};
`,oe=Y,se=m.div`
  z-index: 1;
`,he=m.div`
  display: flex;
  justify-content: space-between;
  padding: ${g}rem;

  button {
    min-width: 12rem;
  }
`,xe=({className:t,heading:e,onModalClose:i,children:a,show:n,variant:r,...o})=>n?s(le,{className:t,isDismissable:!0,onOpenChange:d=>!d&&i(),...o,children:s(oe,{children:s(se,{children:w(ne,{children:[w(re,{variant:r,children:[s(de,{slot:"title",children:e}),s(ae,{onClick:i,variant:r})]}),a]})})})}):null;export{ae as C,xe as M,ge as a,he as b,le as c,oe as d};
