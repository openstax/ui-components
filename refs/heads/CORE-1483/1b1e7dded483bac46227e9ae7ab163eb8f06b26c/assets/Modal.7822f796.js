import{r as o,R as $,a as s,s as m,C as b,j as w}from"./index.aaee157d.js";import{c,z as I}from"./theme.63888eb2.js";import{d as H,e as T,f as W,g as A,h,i as U,j as _,k as K}from"./Dialog.module.1c3758ad.js";import{a as V}from"./VisuallyHidden.module.30eb19ff.js";import{w as R,c as v,l as L,g as D,h as M,$ as P,k as F,S as Z}from"./useFocusRing.module.6dbbc871.js";import{c as q,d as C,e as k}from"./OverlayArrow.module.5928fc6c.js";let f=typeof document<"u"&&window.visualViewport;function G(){let t=R(),[e,i]=o.exports.useState(()=>t?{width:0,height:0}:y());return o.exports.useEffect(()=>{let a=()=>{i(n=>{let r=y();return r.width===n.width&&r.height===n.height?n:r})};return f?f.addEventListener("resize",a):window.addEventListener("resize",a),()=>{f?f.removeEventListener("resize",a):window.removeEventListener("resize",a)}},[]),e}function y(){return{width:f&&(f==null?void 0:f.width)||window.innerWidth,height:f&&(f==null?void 0:f.height)||window.innerHeight}}function J(t,e,i){let{overlayProps:a,underlayProps:n}=H({...t,isOpen:e.isOpen,onClose:e.close},i);return T({isDisabled:!e.isOpen}),W(),o.exports.useEffect(()=>{if(e.isOpen&&i.current)return A([i.current])},[e.isOpen,i]),{modalProps:v(a),underlayProps:n}}const Q=o.exports.forwardRef(function(e,i){[e,i]=L(e,i,V);let{children:a,level:n=3,className:r,...l}=e,d=`h${n}`;return $.createElement(d,{...l,ref:i,className:r!=null?r:"react-aria-Heading"},a)}),X=o.exports.createContext(null),E=o.exports.createContext(null),Y=o.exports.forwardRef(function(e,i){if(o.exports.useContext(E))return $.createElement(O,{...e,modalRef:i},e.children);let{isDismissable:n,isKeyboardDismissDisabled:r,isOpen:l,defaultOpen:d,onOpenChange:x,children:u,isEntering:g,isExiting:S,UNSTABLE_portalContainer:j,shouldCloseOnInteractOutside:N,...B}=e;return $.createElement(z,{isDismissable:n,isKeyboardDismissDisabled:r,isOpen:l,defaultOpen:d,onOpenChange:x,isEntering:g,isExiting:S,UNSTABLE_portalContainer:j,shouldCloseOnInteractOutside:N},$.createElement(O,{...B,modalRef:i},u))});function ee(t,e){[t,e]=L(t,e,X);let i=o.exports.useContext(h),a=q(t),n=t.isOpen!=null||t.defaultOpen!=null||!i?a:i,r=D(e),l=o.exports.useRef(null),d=C(r,n.isOpen),x=C(l,n.isOpen),u=d||x||t.isExiting||!1,g=R();return!n.isOpen&&!u||g?null:$.createElement(te,{...t,state:n,isExiting:u,overlayRef:r,modalRef:l})}const z=o.exports.forwardRef(ee);function te({UNSTABLE_portalContainer:t,...e}){let i=e.modalRef,{state:a}=e,{modalProps:n,underlayProps:r}=J(e,a,i),l=k(e.overlayRef)||e.isEntering||!1,d=M({...e,defaultClassName:"react-aria-ModalOverlay",values:{isEntering:l,isExiting:e.isExiting,state:a}}),x=G(),u={...d.style,"--visual-viewport-height":x.height+"px"};return $.createElement(U,{isExiting:e.isExiting,portalContainer:t},$.createElement("div",{...v(P(e),r),...d,style:u,ref:e.overlayRef,"data-entering":l||void 0,"data-exiting":e.isExiting||void 0},$.createElement(F,{values:[[E,{modalProps:n,modalRef:i,isExiting:e.isExiting,isDismissable:e.isDismissable}],[h,a]]},d.children)))}function O(t){let{modalProps:e,modalRef:i,isExiting:a,isDismissable:n}=o.exports.useContext(E),r=o.exports.useContext(h),l=o.exports.useMemo(()=>Z(t.modalRef,i),[t.modalRef,i]),d=D(l),x=k(d),u=M({...t,defaultClassName:"react-aria-Modal",values:{isEntering:x,isExiting:a,state:r}});return $.createElement("div",{...v(P(t),e),...u,ref:d,"data-entering":x||void 0,"data-exiting":a||void 0},n&&$.createElement(_,{onDismiss:r.close}),u.children)}const ie=t=>s("svg",{width:"15px",height:"15px",viewBox:"0 0 15 15",version:"1.1",...t,children:s("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:s("g",{transform:"translate(-302.000000, -18.000000)",fill:"currentColor",children:s("g",{transform:"translate(302.000000, 18.000000)",children:s("path",{d:"M7.5,5.41522791 L12.0331524,0.579865364 C12.3077536,0.286957429 12.7165503,0.24816296 12.946282,0.493210121 L13.9861449,1.60239723 C14.2158766,1.84744439 14.1795068,2.28349422 13.9049056,2.57640216 L9.37175324,7.41176471 L13.9049056,12.2471273 C14.1795068,12.5400352 14.2158766,12.976085 13.9861449,13.2211322 L12.946282,14.3303193 C12.7165503,14.5753665 12.3077536,14.536572 12.0331524,14.243664 L7.5,9.4083015 L2.96684761,14.243664 C2.69224642,14.536572 2.2834497,14.5753665 2.05371799,14.3303193 L1.01385508,13.2211322 C0.784123363,12.976085 0.820493178,12.5400352 1.09509437,12.2471273 L5.62824676,7.41176471 L1.09509437,2.57640216 C0.820493178,2.28349422 0.784123363,1.84744439 1.01385508,1.60239723 L2.05371799,0.493210121 C2.2834497,0.24816296 2.69224642,0.286957429 2.96684761,0.579865364 L7.5,5.41522791 Z"})})})})}),ae=m(({variant:t,...e})=>s("button",{...e,type:"button","aria-label":"Close",children:s(ie,{"aria-hidden":"true",focusable:"false"})}))`
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

  ${t=>t.variant==="error"&&b`
    color: ${c.palette.darkRed};
  `}

  ${t=>t.variant==="inverted-circle"&&b`
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
`,p=3,ne=m(K)`
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
  margin-bottom: ${p*.5}rem;
  padding: ${p*.5}rem ${p}rem;
  background: ${c.palette.neutralLighter};
  border-bottom: solid 0.1rem #ddd;
  justify-content: space-between;
  ${t=>t.variant==="error"&&b`
    background: ${c.palette.paleRed};
    color: ${c.palette.darkRed};
  `}
`,de=m(Q)`
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${p*.5}rem 0;
  font-size: 1.8rem;
`;m.h3`
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: 0;
`;const pe=m.div`
  font-size: 1.6rem;
  padding: ${p}rem;
`,oe=m(t=>s(z,{defaultOpen:!0,...t}))`
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
`,le=Y,se=m.div`
  z-index: 1;
`,ge=m.div`
  display: flex;
  justify-content: space-between;
  padding: ${p}rem;

  button {
    min-width: 12rem;
  }
`,be=({className:t,heading:e,onModalClose:i,children:a,show:n,variant:r,...l})=>n?s(oe,{className:t,isDismissable:!0,onOpenChange:d=>!d&&i(),...l,children:s(le,{children:s(se,{children:w(ne,{children:[w(re,{variant:r,children:[s(de,{slot:"title",children:e}),s(ae,{onClick:i,variant:r})]}),a]})})})}):null;export{ae as C,be as M,ge as a,pe as b,oe as c,le as d};
