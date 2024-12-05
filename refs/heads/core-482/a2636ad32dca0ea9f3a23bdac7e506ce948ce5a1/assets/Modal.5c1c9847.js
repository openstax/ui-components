import{r as d,R as $,a as l,s as m,C as g,j as w}from"./index.0a27c5ce.js";import{c,z as B}from"./theme.3d34f3e6.js";import{g as H,h as I,i as T,j as W,k as A,e as h,l as U,m as _,n as K}from"./Dialog.module.475aae53.js";import{m as R,a as v,j as L,e as M,u as C,w as D,f as P,$ as k,i as V,y as F}from"./context.module.cbef6687.js";import{$ as Z}from"./OverlayArrow.module.af6871ce.js";let f=typeof document<"u"&&window.visualViewport;function q(){let e=R(),[t,n]=d.exports.useState(()=>e?{width:0,height:0}:y());return d.exports.useEffect(()=>{let i=()=>{n(a=>{let r=y();return r.width===a.width&&r.height===a.height?a:r})};return f?f.addEventListener("resize",i):window.addEventListener("resize",i),()=>{f?f.removeEventListener("resize",i):window.removeEventListener("resize",i)}},[]),t}function y(){return{width:f&&(f==null?void 0:f.width)||window.innerWidth,height:f&&(f==null?void 0:f.height)||window.innerHeight}}function G(e,t,n){let{overlayProps:i,underlayProps:a}=H({...e,isOpen:t.isOpen,onClose:t.close},n);return I({isDisabled:!t.isOpen}),T(),d.exports.useEffect(()=>{if(t.isOpen)return W([n.current])},[t.isOpen,n]),{modalProps:v(i),underlayProps:a}}function J(e,t){[e,t]=L(e,t,A);let{children:n,level:i=3,className:a,...r}=e,o=`h${i}`;return $.createElement(o,{...r,ref:t,className:a!=null?a:"react-aria-Heading"},n)}const Q=d.exports.forwardRef(J),X=d.exports.createContext(null),E=d.exports.createContext(null);function Y(e,t){if(d.exports.useContext(E))return $.createElement(O,{...e,modalRef:t},e.children);let{isDismissable:i,isKeyboardDismissDisabled:a,isOpen:r,defaultOpen:o,onOpenChange:s,children:x,isEntering:u,isExiting:b,UNSTABLE_portalContainer:S,shouldCloseOnInteractOutside:j,...N}=e;return $.createElement(z,{isDismissable:i,isKeyboardDismissDisabled:a,isOpen:r,defaultOpen:o,onOpenChange:s,isEntering:u,isExiting:b,UNSTABLE_portalContainer:S,shouldCloseOnInteractOutside:j},$.createElement(O,{...N,modalRef:t},x))}const ee=d.exports.forwardRef(Y);function te(e,t){[e,t]=L(e,t,X);let n=d.exports.useContext(h),i=Z(e),a=e.isOpen!=null||e.defaultOpen!=null||!n?i:n,r=M(t),o=d.exports.useRef(null),s=C(r,a.isOpen),x=C(o,a.isOpen),u=s||x||e.isExiting||!1,b=R();return!a.isOpen&&!u||b?null:$.createElement(ae,{...e,state:a,isExiting:u,overlayRef:r,modalRef:o})}const z=d.exports.forwardRef(te);function ae({UNSTABLE_portalContainer:e,...t}){let n=t.modalRef,{state:i}=t,{modalProps:a,underlayProps:r}=G(t,i,n),o=D(t.overlayRef)||t.isEntering||!1,s=P({...t,defaultClassName:"react-aria-ModalOverlay",values:{isEntering:o,isExiting:t.isExiting,state:i}}),x=q(),u={...s.style,"--visual-viewport-height":x.height+"px"};return $.createElement(U,{isExiting:t.isExiting,portalContainer:e},$.createElement("div",{...v(k(t),r),...s,style:u,ref:t.overlayRef,"data-entering":o||void 0,"data-exiting":t.isExiting||void 0},$.createElement(V,{values:[[E,{modalProps:a,modalRef:n,isExiting:t.isExiting,isDismissable:t.isDismissable}],[h,i]]},s.children)))}function O(e){let{modalProps:t,modalRef:n,isExiting:i,isDismissable:a}=d.exports.useContext(E),r=d.exports.useContext(h),o=d.exports.useMemo(()=>F(e.modalRef,n),[e.modalRef,n]),s=M(o),x=D(s),u=P({...e,defaultClassName:"react-aria-Modal",values:{isEntering:x,isExiting:i,state:r}});return $.createElement("div",{...v(k(e),t),...u,ref:s,"data-entering":x||void 0,"data-exiting":i||void 0},a&&$.createElement(_,{onDismiss:r.close}),u.children)}const ie=e=>l("svg",{width:"15px",height:"15px",viewBox:"0 0 15 15",version:"1.1",...e,children:l("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:l("g",{transform:"translate(-302.000000, -18.000000)",fill:"currentColor",children:l("g",{transform:"translate(302.000000, 18.000000)",children:l("path",{d:"M7.5,5.41522791 L12.0331524,0.579865364 C12.3077536,0.286957429 12.7165503,0.24816296 12.946282,0.493210121 L13.9861449,1.60239723 C14.2158766,1.84744439 14.1795068,2.28349422 13.9049056,2.57640216 L9.37175324,7.41176471 L13.9049056,12.2471273 C14.1795068,12.5400352 14.2158766,12.976085 13.9861449,13.2211322 L12.946282,14.3303193 C12.7165503,14.5753665 12.3077536,14.536572 12.0331524,14.243664 L7.5,9.4083015 L2.96684761,14.243664 C2.69224642,14.536572 2.2834497,14.5753665 2.05371799,14.3303193 L1.01385508,13.2211322 C0.784123363,12.976085 0.820493178,12.5400352 1.09509437,12.2471273 L5.62824676,7.41176471 L1.09509437,2.57640216 C0.820493178,2.28349422 0.784123363,1.84744439 1.01385508,1.60239723 L2.05371799,0.493210121 C2.2834497,0.24816296 2.69224642,0.286957429 2.96684761,0.579865364 L7.5,5.41522791 Z"})})})})}),ne=m(({variant:e,...t})=>l("button",{...t,type:"button","aria-label":"Close",children:l(ie,{"aria-hidden":"true",focusable:"false"})}))`
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

  ${e=>e.variant==="error"&&g`
    color: ${c.palette.darkRed};
  `}

  ${e=>e.variant==="inverted-circle"&&g`
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
`,p=3,re=m(K)`
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
`,de=m.header`
  display: flex;
  align-items: center;
  margin-bottom: ${p*.5}rem;
  padding: ${p*.5}rem ${p}rem;
  background: ${c.palette.neutralLighter};
  border-bottom: solid 0.1rem #ddd;
  justify-content: space-between;
  ${e=>e.variant==="error"&&g`
    background: ${c.palette.paleRed};
    color: ${c.palette.darkRed};
  `}
`,oe=m(Q)`
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${p*.5}rem 0;
  font-size: 1.8rem;
`,pe=m.h3`
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: 0;
`,be=m.div`
  font-size: 1.6rem;
  padding: ${p}rem;
`,le=m(e=>l(z,{defaultOpen:!0,...e}))`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  z-index: ${B.modals};
`,se=ee,ce=m.div`
  z-index: 1;
`,ge=m.div`
  display: flex;
  justify-content: space-between;
  padding: ${p}rem;

  button {
    min-width: 12rem;
  }
`,he=({className:e,heading:t,onModalClose:n,children:i,show:a,variant:r,...o})=>a?l(le,{className:e,isDismissable:!0,onOpenChange:s=>!s&&n(),...o,children:l(se,{children:l(ce,{children:w(re,{children:[w(de,{variant:r,children:[l(oe,{slot:"title",children:t}),l(ne,{onClick:n,variant:r})]}),i]})})})}):null;export{ne as C,be as M,pe as a,he as b,ge as c,le as d,se as e};
