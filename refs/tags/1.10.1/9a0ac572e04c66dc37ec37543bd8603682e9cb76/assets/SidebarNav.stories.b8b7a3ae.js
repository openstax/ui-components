import{a as P}from"./hooks.e9f7abfe.js";import{r as c,R as s,a as i,W as A,s as u,j as b,c as v,F as E}from"./index.b1ce302f.js";import{c as N,z as Z,b as F}from"./theme.4be312e4.js";import{i as H,j as q,k as J,l as X,e as C,m as Y,n as ee,h as te}from"./Dialog.module.b6f591b5.js";import{n as k,b as O,P as ie,f as z,N as B,g as W,a as j,k as ae,L,j as ne}from"./context.module.b283bb4b.js";import{$ as de}from"./OverlayArrow.module.91ae96fe.js";import"./contexts.ee56aa19.js";import"./utils.e3275d2c.js";import"./palette.15e4d008.js";import"./FocusScope.module.1ff9d341.js";let m=typeof document<"u"&&window.visualViewport;function le(){let t=k(),[e,a]=c.exports.useState(()=>t?{width:0,height:0}:M());return c.exports.useEffect(()=>{let n=()=>{a(d=>{let r=M();return r.width===d.width&&r.height===d.height?d:r})};return m?m.addEventListener("resize",n):window.addEventListener("resize",n),()=>{m?m.removeEventListener("resize",n):window.removeEventListener("resize",n)}},[]),e}function M(){return{width:m&&(m==null?void 0:m.width)||window.innerWidth,height:m&&(m==null?void 0:m.height)||window.innerHeight}}function re(t,e,a){let{overlayProps:n,underlayProps:d}=H({...t,isOpen:e.isOpen,onClose:e.close},a);return q({isDisabled:!e.isOpen}),J(),c.exports.useEffect(()=>{if(e.isOpen)return X([a.current])},[e.isOpen,a]),{modalProps:O(n),underlayProps:d}}const oe=c.exports.createContext(null),S=c.exports.createContext(null);function se(t,e){if(c.exports.useContext(S))return s.createElement(D,{...t,modalRef:e},t.children);let{isDismissable:n,isKeyboardDismissDisabled:d,isOpen:r,defaultOpen:h,onOpenChange:o,children:l,isEntering:f,isExiting:x,UNSTABLE_portalContainer:$,shouldCloseOnInteractOutside:w,...g}=t;return s.createElement(me,{isDismissable:n,isKeyboardDismissDisabled:d,isOpen:r,defaultOpen:h,onOpenChange:o,isEntering:f,isExiting:x,UNSTABLE_portalContainer:$,shouldCloseOnInteractOutside:w},s.createElement(D,{...g,modalRef:e},l))}const ce=c.exports.forwardRef(se);function fe(t,e){[t,e]=ae(t,e,oe);let a=c.exports.useContext(C),n=de(t),d=t.isOpen!=null||t.defaultOpen!=null||!a?n:a,r=z(e),h=c.exports.useRef(null),o=L(r,d.isOpen),l=L(h,d.isOpen),f=o||l||t.isExiting||!1,x=k();return!d.isOpen&&!f||x?null:s.createElement(he,{...t,state:d,isExiting:f,overlayRef:r,modalRef:h})}const me=c.exports.forwardRef(fe);function he({UNSTABLE_portalContainer:t,...e}){let a=e.modalRef,{state:n}=e,{modalProps:d,underlayProps:r}=re(e,n,a),h=B(e.overlayRef)||e.isEntering||!1,o=W({...e,defaultClassName:"react-aria-ModalOverlay",values:{isEntering:h,isExiting:e.isExiting,state:n}}),l=le(),f={...o.style,"--visual-viewport-height":l.height+"px"};return s.createElement(ee,{isExiting:e.isExiting,portalContainer:t},s.createElement("div",{...O(j(e),r),...o,style:f,ref:e.overlayRef,"data-entering":h||void 0,"data-exiting":e.isExiting||void 0},s.createElement(ne,{values:[[S,{modalProps:d,modalRef:a,isExiting:e.isExiting,isDismissable:e.isDismissable}],[C,n]]},o.children)))}function D(t){let{modalProps:e,modalRef:a,isExiting:n,isDismissable:d}=c.exports.useContext(S),r=c.exports.useContext(C),h=c.exports.useMemo(()=>ie(t.modalRef,a),[t.modalRef,a]),o=z(h),l=B(o),f=W({...t,defaultClassName:"react-aria-Modal",values:{isEntering:l,isExiting:n,state:r}});return s.createElement("div",{...O(j(t),e),...f,ref:o,"data-entering":l||void 0,"data-exiting":n||void 0},d&&s.createElement(Y,{onDismiss:r.close}),f.children)}const ue=t=>i("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:i("path",{d:"M1.1266 5.38862L5.57702 9.83902C5.79166 10.0537 6.13964 10.0537 6.35426 9.83902L6.87333 9.31995C7.0876 9.10568 7.08801 8.75841 6.87424 8.54363L3.34721 4.99999L6.87424 1.45637C7.08801 1.24159 7.0876 0.89432 6.87333 0.680047L6.35426 0.160979C6.13962 -0.0536598 5.79164 -0.0536598 5.57702 0.160979L1.12662 4.61138C0.911981 4.826 0.911981 5.17398 1.1266 5.38862Z",fill:"#959595"})}),pe=t=>i("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:i("path",{d:"M6.87337 5.38862L2.42295 9.83902C2.20831 10.0537 1.86033 10.0537 1.64571 9.83902L1.12664 9.31995C0.912369 9.10568 0.911957 8.75841 1.12573 8.54363L4.65276 4.99999L1.12573 1.45637C0.911957 1.24159 0.912369 0.89432 1.12664 0.680047L1.64571 0.160979C1.86035 -0.0536598 2.20833 -0.0536598 2.42295 0.160979L6.87335 4.61138C7.08799 4.826 7.08799 5.17398 6.87337 5.38862Z",fill:"#959595"})}),T="5.6rem",I="24rem",xe=A`
  .react-aria-ModalOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: var(--visual-viewport-height);
    background: rgba(0 0 0 / .7);
    z-index: 100;
  }
`,be=u(ce)`
  position: fixed;
  outline: none;
  left: 0;
`,U=u.nav`
  --collapsed-width: ${T};
  --expanded-width: ${I};
  width: var(--expanded-width);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  box-shadow: -0.2rem 0 0.4rem rgba(0, 0, 0, 0.1) inset;
  background: ${N.palette.neutralBright};
  color: ${N.palette.neutralThin};
  z-index: ${Z.navbar-1};

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
`,_=u.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`,K=u.div`
  height: 100%;
  overflow-y: auto;
`,V=u.footer`
  button {
    width: 100%;
  }
`,G=u.button`
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
`,ge=u(({navHeader:t,navFooter:e,children:a,className:n,mobileBreakpoint:d=`${F.mobileBreak}em`,...r})=>{var R;const h=P(`(max-width: ${d})`),o=(R=r.isMobile)!=null?R:h,[l,f]=s.useState(o),[x,$]=s.useState("idle"),w=s.useRef(null);s.useEffect(()=>{f(o)},[o]);const g=p=>{f(p),$(p?"collapsing":"expanding")},Q=({children:p})=>o&&!l?i(be,{"data-testid":"sidebarnav-modal",defaultOpen:!0,isDismissable:!0,onOpenChange:()=>g(!0),children:i(te,{"aria-label":r["aria-label"]||"Navigation",children:p})}):i(E,{children:p}),y={navIsCollapsed:l,setNavIsCollapsed:g};return b(Q,{children:[i(xe,{}),b(U,{"aria-expanded":!l,"data-testid":"sidebarnav",className:v(n,{collapsed:l,mobile:o,collapsing:x==="collapsing",expanding:x==="expanding"}),"aria-label":"Navigation",onAnimationEnd:()=>{x!=="idle"&&(setTimeout(()=>{var p;return(p=w.current)==null?void 0:p.focus()},0),$("idle"))},...r,children:[i(G,{ref:w,"data-testid":"sidebarnav-toggle",className:v({collapsed:l}),onClick:()=>g(!l),children:l?i(pe,{}):i(ue,{})}),t?i(_,{children:typeof t=="function"?t(y):t}):null,i(K,{className:v({collapsed:l}),children:typeof a=="function"?a(y):a}),e?i(V,{className:v({collapsed:l}),children:typeof e=="function"?e(y):e}):null]})]})})``,$e={Nav:U,NavHeader:_,NavBody:K,NavFooter:V,ToggleButton:G,expandedWidth:I,collapsedWidth:T},we=A`
  html, body, #ladle-root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    display: flex;
  }
`,ve=u.div`
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
`,ye=u(ge)`
  grid-area: nav;
  padding: 6rem 2rem;

  ul {
    list-style: none;
    padding: 0;
  }
`,Ee=u.main`
  .mobile + & {
    margin-left: 5.6rem;
  }
`,ke=()=>{const t=P("(max-width: 620px)");return b(E,{children:[i(we,{}),b(ve,{children:[i(ye,{"aria-label":"Example Sidebar Nav",isMobile:t,children:({navIsCollapsed:e,setNavIsCollapsed:a})=>b(E,{children:[b("ul",{children:[i("li",{children:i("a",{href:"#",onClick:()=>a(!e),children:e?"H":"Home"})}),i("li",{children:i("a",{href:"#",onClick:()=>a(!e),children:e?"A":"About"})})]}),e?null:i("p",{children:"Some other content"})]})}),i(Ee,{style:{padding:"4rem",marginLeft:t?$e.collapsedWidth:""},children:i("h1",{children:"Main content"})})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{ke as Default};
