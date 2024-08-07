import{a as P}from"./hooks.270ec55f.js";import{r as c,R as s,a as i,W as A,s as u,j as b,c as v,F as E}from"./index.2b45137a.js";import{c as N,b as Z}from"./theme.a7eebc93.js";import{i as F,j as H,k as q,l as J,e as C,m as X,n as Y,h as ee}from"./Dialog.module.444c3b32.js";import{n as k,b as O,P as te,f as B,N as z,g as W,a as j,k as ie,L,j as ae}from"./context.module.ec4ac92e.js";import{$ as ne}from"./OverlayArrow.module.63e72576.js";import"./contexts.bc801dbf.js";import"./utils.e3275d2c.js";import"./palette.15e4d008.js";import"./FocusScope.module.28ecb9da.js";let m=typeof document<"u"&&window.visualViewport;function de(){let t=k(),[e,a]=c.exports.useState(()=>t?{width:0,height:0}:M());return c.exports.useEffect(()=>{let n=()=>{a(d=>{let l=M();return l.width===d.width&&l.height===d.height?d:l})};return m?m.addEventListener("resize",n):window.addEventListener("resize",n),()=>{m?m.removeEventListener("resize",n):window.removeEventListener("resize",n)}},[]),e}function M(){return{width:m&&(m==null?void 0:m.width)||window.innerWidth,height:m&&(m==null?void 0:m.height)||window.innerHeight}}function le(t,e,a){let{overlayProps:n,underlayProps:d}=F({...t,isOpen:e.isOpen,onClose:e.close},a);return H({isDisabled:!e.isOpen}),q(),c.exports.useEffect(()=>{if(e.isOpen)return J([a.current])},[e.isOpen,a]),{modalProps:O(n),underlayProps:d}}const re=c.exports.createContext(null),S=c.exports.createContext(null);function oe(t,e){if(c.exports.useContext(S))return s.createElement(D,{...t,modalRef:e},t.children);let{isDismissable:n,isKeyboardDismissDisabled:d,isOpen:l,defaultOpen:h,onOpenChange:o,children:r,isEntering:f,isExiting:x,UNSTABLE_portalContainer:$,shouldCloseOnInteractOutside:w,...g}=t;return s.createElement(fe,{isDismissable:n,isKeyboardDismissDisabled:d,isOpen:l,defaultOpen:h,onOpenChange:o,isEntering:f,isExiting:x,UNSTABLE_portalContainer:$,shouldCloseOnInteractOutside:w},s.createElement(D,{...g,modalRef:e},r))}const se=c.exports.forwardRef(oe);function ce(t,e){[t,e]=ie(t,e,re);let a=c.exports.useContext(C),n=ne(t),d=t.isOpen!=null||t.defaultOpen!=null||!a?n:a,l=B(e),h=c.exports.useRef(null),o=L(l,d.isOpen),r=L(h,d.isOpen),f=o||r||t.isExiting||!1,x=k();return!d.isOpen&&!f||x?null:s.createElement(me,{...t,state:d,isExiting:f,overlayRef:l,modalRef:h})}const fe=c.exports.forwardRef(ce);function me({UNSTABLE_portalContainer:t,...e}){let a=e.modalRef,{state:n}=e,{modalProps:d,underlayProps:l}=le(e,n,a),h=z(e.overlayRef)||e.isEntering||!1,o=W({...e,defaultClassName:"react-aria-ModalOverlay",values:{isEntering:h,isExiting:e.isExiting,state:n}}),r=de(),f={...o.style,"--visual-viewport-height":r.height+"px"};return s.createElement(Y,{isExiting:e.isExiting,portalContainer:t},s.createElement("div",{...O(j(e),l),...o,style:f,ref:e.overlayRef,"data-entering":h||void 0,"data-exiting":e.isExiting||void 0},s.createElement(ae,{values:[[S,{modalProps:d,modalRef:a,isExiting:e.isExiting,isDismissable:e.isDismissable}],[C,n]]},o.children)))}function D(t){let{modalProps:e,modalRef:a,isExiting:n,isDismissable:d}=c.exports.useContext(S),l=c.exports.useContext(C),h=c.exports.useMemo(()=>te(t.modalRef,a),[t.modalRef,a]),o=B(h),r=z(o),f=W({...t,defaultClassName:"react-aria-Modal",values:{isEntering:r,isExiting:n,state:l}});return s.createElement("div",{...O(j(t),e),...f,ref:o,"data-entering":r||void 0,"data-exiting":n||void 0},d&&s.createElement(X,{onDismiss:l.close}),f.children)}const he=t=>i("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:i("path",{d:"M1.1266 5.38862L5.57702 9.83902C5.79166 10.0537 6.13964 10.0537 6.35426 9.83902L6.87333 9.31995C7.0876 9.10568 7.08801 8.75841 6.87424 8.54363L3.34721 4.99999L6.87424 1.45637C7.08801 1.24159 7.0876 0.89432 6.87333 0.680047L6.35426 0.160979C6.13962 -0.0536598 5.79164 -0.0536598 5.57702 0.160979L1.12662 4.61138C0.911981 4.826 0.911981 5.17398 1.1266 5.38862Z",fill:"#959595"})}),ue=t=>i("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:i("path",{d:"M6.87337 5.38862L2.42295 9.83902C2.20831 10.0537 1.86033 10.0537 1.64571 9.83902L1.12664 9.31995C0.912369 9.10568 0.911957 8.75841 1.12573 8.54363L4.65276 4.99999L1.12573 1.45637C0.911957 1.24159 0.912369 0.89432 1.12664 0.680047L1.64571 0.160979C1.86035 -0.0536598 2.20833 -0.0536598 2.42295 0.160979L6.87335 4.61138C7.08799 4.826 7.08799 5.17398 6.87337 5.38862Z",fill:"#959595"})}),T="5.6rem",U="24rem",pe=A`
  .react-aria-ModalOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: var(--visual-viewport-height);
    background: rgba(0 0 0 / .7);
    z-index: 100;
  }
`,xe=u(se)`
  position: fixed;
  outline: none;
  left: 0;
`,_=u.nav`
  --collapsed-width: ${T};
  --expanded-width: ${U};
  width: var(--expanded-width);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  box-shadow: -0.2rem 0 0.4rem rgba(0, 0, 0, 0.1) inset;
  background: ${N.palette.neutralBright};
  color: ${N.palette.neutralThin};

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
`,I=u.header`
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
`,be=u(({navHeader:t,navFooter:e,children:a,className:n,mobileBreakpoint:d=`${Z.mobileBreak}em`,...l})=>{var R;const h=P(`(max-width: ${d})`),o=(R=l.isMobile)!=null?R:h,[r,f]=s.useState(o),[x,$]=s.useState("idle"),w=s.useRef(null);s.useEffect(()=>{f(o)},[o]);const g=p=>{f(p),$(p?"collapsing":"expanding")},Q=({children:p})=>o&&!r?i(xe,{"data-testid":"sidebarnav-modal",defaultOpen:!0,isDismissable:!0,onOpenChange:()=>g(!0),children:i(ee,{"aria-label":l["aria-label"]||"Navigation",children:p})}):i(E,{children:p}),y={navIsCollapsed:r,setNavIsCollapsed:g};return b(Q,{children:[i(pe,{}),b(_,{"data-testid":"sidebarnav",className:v(n,{collapsed:r,mobile:o,collapsing:x==="collapsing",expanding:x==="expanding"}),"aria-label":"Navigation",onAnimationEnd:()=>{x!=="idle"&&(setTimeout(()=>{var p;return(p=w.current)==null?void 0:p.focus()},0),$("idle"))},...l,children:[i(G,{ref:w,"data-testid":"sidebarnav-toggle",className:v({collapsed:r}),onClick:()=>g(!r),children:r?i(ue,{}):i(he,{})}),t?i(I,{children:typeof t=="function"?t(y):t}):null,i(K,{className:v({collapsed:r}),children:typeof a=="function"?a(y):a}),e?i(V,{className:v({collapsed:r}),children:typeof e=="function"?e(y):e}):null]})]})})``,ge={Nav:_,NavHeader:I,NavBody:K,NavFooter:V,ToggleButton:G,expandedWidth:U,collapsedWidth:T},$e=A`
  html, body, #ladle-root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    display: flex;
  }
`,we=u.div`
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
`,ve=u(be)`
  grid-area: nav;
  padding: 6rem 2rem;

  ul {
    list-style: none;
    padding: 0;
  }
`,ye=u.main`
  .mobile + & {
    margin-left: 5.6rem;
  }
`,Ae=()=>{const t=P("(max-width: 620px)");return b(E,{children:[i($e,{}),b(we,{children:[i(ve,{"aria-label":"Example Sidebar Nav",isMobile:t,children:({navIsCollapsed:e,setNavIsCollapsed:a})=>b(E,{children:[b("ul",{children:[i("li",{children:i("a",{href:"#",onClick:()=>a(!e),children:e?"H":"Home"})}),i("li",{children:i("a",{href:"#",onClick:()=>a(!e),children:e?"A":"About"})})]}),e?null:i("p",{children:"Some other content"})]})}),i(ye,{style:{padding:"4rem",marginLeft:t?ge.collapsedWidth:""},children:i("h1",{children:"Main content"})})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Ae as Default};
