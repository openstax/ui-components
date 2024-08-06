import{a as P}from"./hooks.b0006632.js";import{r as c,R as s,a as i,W as A,s as u,j as b,c as v,F as E}from"./index.577b36d5.js";import{c as S,b as _}from"./theme.a5986cca.js";import{i as I,j as K,k as V,l as G,e as C,m as Q,n as Z,h as F}from"./Dialog.module.204d5d0f.js";import{n as k,b as O,P as H,f as B,N as z,g as j,a as T,k as q,L,j as J}from"./context.module.4e8283eb.js";import{$ as X}from"./OverlayArrow.module.b715b313.js";import"./contexts.50e9df1e.js";import"./utils.e3275d2c.js";import"./palette.15e4d008.js";import"./FocusScope.module.eafd174c.js";let m=typeof document<"u"&&window.visualViewport;function Y(){let t=k(),[e,a]=c.exports.useState(()=>t?{width:0,height:0}:M());return c.exports.useEffect(()=>{let n=()=>{a(d=>{let r=M();return r.width===d.width&&r.height===d.height?d:r})};return m?m.addEventListener("resize",n):window.addEventListener("resize",n),()=>{m?m.removeEventListener("resize",n):window.removeEventListener("resize",n)}},[]),e}function M(){return{width:m&&(m==null?void 0:m.width)||window.innerWidth,height:m&&(m==null?void 0:m.height)||window.innerHeight}}function ee(t,e,a){let{overlayProps:n,underlayProps:d}=I({...t,isOpen:e.isOpen,onClose:e.close},a);return K({isDisabled:!e.isOpen}),V(),c.exports.useEffect(()=>{if(e.isOpen)return G([a.current])},[e.isOpen,a]),{modalProps:O(n),underlayProps:d}}const te=c.exports.createContext(null),N=c.exports.createContext(null);function ie(t,e){if(c.exports.useContext(N))return s.createElement(D,{...t,modalRef:e},t.children);let{isDismissable:n,isKeyboardDismissDisabled:d,isOpen:r,defaultOpen:h,onOpenChange:o,children:l,isEntering:f,isExiting:x,UNSTABLE_portalContainer:$,shouldCloseOnInteractOutside:w,...g}=t;return s.createElement(de,{isDismissable:n,isKeyboardDismissDisabled:d,isOpen:r,defaultOpen:h,onOpenChange:o,isEntering:f,isExiting:x,UNSTABLE_portalContainer:$,shouldCloseOnInteractOutside:w},s.createElement(D,{...g,modalRef:e},l))}const ae=c.exports.forwardRef(ie);function ne(t,e){[t,e]=q(t,e,te);let a=c.exports.useContext(C),n=X(t),d=t.isOpen!=null||t.defaultOpen!=null||!a?n:a,r=B(e),h=c.exports.useRef(null),o=L(r,d.isOpen),l=L(h,d.isOpen),f=o||l||t.isExiting||!1,x=k();return!d.isOpen&&!f||x?null:s.createElement(re,{...t,state:d,isExiting:f,overlayRef:r,modalRef:h})}const de=c.exports.forwardRef(ne);function re({UNSTABLE_portalContainer:t,...e}){let a=e.modalRef,{state:n}=e,{modalProps:d,underlayProps:r}=ee(e,n,a),h=z(e.overlayRef)||e.isEntering||!1,o=j({...e,defaultClassName:"react-aria-ModalOverlay",values:{isEntering:h,isExiting:e.isExiting,state:n}}),l=Y(),f={...o.style,"--visual-viewport-height":l.height+"px"};return s.createElement(Z,{isExiting:e.isExiting,portalContainer:t},s.createElement("div",{...O(T(e),r),...o,style:f,ref:e.overlayRef,"data-entering":h||void 0,"data-exiting":e.isExiting||void 0},s.createElement(J,{values:[[N,{modalProps:d,modalRef:a,isExiting:e.isExiting,isDismissable:e.isDismissable}],[C,n]]},o.children)))}function D(t){let{modalProps:e,modalRef:a,isExiting:n,isDismissable:d}=c.exports.useContext(N),r=c.exports.useContext(C),h=c.exports.useMemo(()=>H(t.modalRef,a),[t.modalRef,a]),o=B(h),l=z(o),f=j({...t,defaultClassName:"react-aria-Modal",values:{isEntering:l,isExiting:n,state:r}});return s.createElement("div",{...O(T(t),e),...f,ref:o,"data-entering":l||void 0,"data-exiting":n||void 0},d&&s.createElement(Q,{onDismiss:r.close}),f.children)}const le=t=>i("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:i("path",{d:"M1.1266 5.38862L5.57702 9.83902C5.79166 10.0537 6.13964 10.0537 6.35426 9.83902L6.87333 9.31995C7.0876 9.10568 7.08801 8.75841 6.87424 8.54363L3.34721 4.99999L6.87424 1.45637C7.08801 1.24159 7.0876 0.89432 6.87333 0.680047L6.35426 0.160979C6.13962 -0.0536598 5.79164 -0.0536598 5.57702 0.160979L1.12662 4.61138C0.911981 4.826 0.911981 5.17398 1.1266 5.38862Z",fill:"#959595"})}),oe=t=>i("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:i("path",{d:"M6.87337 5.38862L2.42295 9.83902C2.20831 10.0537 1.86033 10.0537 1.64571 9.83902L1.12664 9.31995C0.912369 9.10568 0.911957 8.75841 1.12573 8.54363L4.65276 4.99999L1.12573 1.45637C0.911957 1.24159 0.912369 0.89432 1.12664 0.680047L1.64571 0.160979C1.86035 -0.0536598 2.20833 -0.0536598 2.42295 0.160979L6.87335 4.61138C7.08799 4.826 7.08799 5.17398 6.87337 5.38862Z",fill:"#959595"})}),W="5.6rem",se="24rem",ce=A`
  .react-aria-ModalOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: var(--visual-viewport-height);
    background: rgba(0 0 0 / .7);
    z-index: 100;
  }
xb`,fe=u(ae)`
  position: fixed;
  outline: none;
  left: 0;
`,me=u.nav`
  --collapsed-width: ${W};
  --expanded-width: ${se};
  width: var(--expanded-width);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  box-shadow: -0.2rem 0 0.4rem rgba(0, 0, 0, 0.1) inset;
  background: ${S.palette.neutralBright};
  color: ${S.palette.neutralThin};

  @media (max-width: 15em) {
    --expanded-width: 100vw;
    width: 100vw;
  }

  &.collapsed {
    width: 5.6rem;
  }

  &.mobile {
    position: fixed;
    height: 100%;
  }

  @keyframes expandSidebarNav {
    from {
      width: var(--collapsed-width);
    }
    to {
      width: var(--expanded-width);
    }
  }

  @keyframes collapseSidebarNav {
    from {
      width: var(--expanded-width);
    }
    to {
      width: var(--collapsed-width);
    }
  }

  &.expanding {
    animation: expandSidebarNav 0.3s forwards;
  }

  &.collapsing {
    animation: collapseSidebarNav 0.3s forwards;
  }
`,he=u.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`,ue=u.div`
  height: 100%;
  overflow-y: auto;
`,pe=u.footer`
  button {
    width: 100%;
  }
`,xe=u.button`
  position: absolute;
  right: 0;
  top: 1.8rem;
  width: 1.6rem;
  height: 2.4rem;
  background: #fff;
  padding: 0;
  border: 0;
  cursor: pointer;
  border: 0.1rem solid #959595;
  border-right: 0;
  border-radius: 0.4rem 0 0 0.4rem;
`,be=u(({navHeader:t,navFooter:e,children:a,className:n,mobileBreakpoint:d=`${_.mobileBreak}em`,...r})=>{var R;const h=P(`(max-width: ${d})`),o=(R=r.isMobile)!=null?R:h,[l,f]=s.useState(o),[x,$]=s.useState("idle"),w=s.useRef(null);s.useEffect(()=>{f(o)},[o]);const g=p=>{f(p),$(p?"collapsing":"expanding")},U=({children:p})=>o&&!l?i(fe,{"data-testid":"sidebarnav-modal",defaultOpen:!0,isDismissable:!0,onOpenChange:()=>g(!0),children:i(F,{"aria-label":r["aria-label"]||"Navigation",children:p})}):i(E,{children:p}),y={navIsCollapsed:l,setNavIsCollapsed:g};return b(U,{children:[i(ce,{}),b(me,{"data-testid":"sidebarnav",className:v(n,{collapsed:l,mobile:o,collapsing:x==="collapsing",expanding:x==="expanding"}),"aria-label":"Navigation",onAnimationEnd:()=>{x!=="idle"&&(setTimeout(()=>{var p;return(p=w.current)==null?void 0:p.focus()},0),$("idle"))},...r,children:[i(xe,{ref:w,"data-testid":"sidebarnav-toggle",className:v({collapsed:l}),onClick:()=>g(!l),children:l?i(oe,{}):i(le,{})}),t?i(he,{children:typeof t=="function"?t(y):t}):null,i(ue,{className:v({collapsed:l}),children:typeof a=="function"?a(y):a}),e?i(pe,{className:v({collapsed:l}),children:typeof e=="function"?e(y):e}):null]})]})})``,ge=A`
  html, body, #ladle-root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    display: flex;
  }
`,$e=u.div`
  flex: 1;
  display: grid;
  grid-template: "nav main" / auto 1fr;
  overflow: hidden;
  height: 100%;

  main {
    grid-area: main;
    overflow: hidden auto;
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;
    text-align: center;
  }
`,we=u(be)`
  grid-area: nav;
  padding: 6rem 2rem;

  ul {
    list-style: none;
    padding: 0;
  }
`,ve=u.main`
  .mobile + & {
    margin-left: 5.6rem;
  }
`,Pe=()=>{const t=P("(max-width: 620px)");return b(E,{children:[i(ge,{}),b($e,{children:[i(we,{"aria-label":"Example Sidebar Nav",isMobile:t,children:({navIsCollapsed:e,setNavIsCollapsed:a})=>b(E,{children:[b("ul",{children:[i("li",{children:i("a",{href:"#",onClick:()=>a(!e),children:e?"H":"Home"})}),i("li",{children:i("a",{href:"#",onClick:()=>a(!e),children:e?"A":"About"})})]}),e?null:i("p",{children:"Some other content"})]})}),i(ve,{style:{padding:"4rem",marginLeft:t?W:""},children:i("h1",{children:"Main content"})})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Pe as Default};
