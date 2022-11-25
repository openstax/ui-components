import{jsx as e,jsxs as t}from"react/jsx-runtime.js";import r,{css as n}from"styled-components";import i from"react";function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}const o={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",paleRed:"#FBE7EA",green:"#77af42",lightGreen:"#8bc753",paleGreen:"#e0edd3",darkGreen:"#63a524",darkerGreen:"4e7226",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},l={palette:o,button:{background:o.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"}};let d,s,c,f,h,m,g,u,p,b,x,k,v=e=>e;const w=t=>e("svg",a({width:"15px",height:"15px",viewBox:"0 0 15 15",version:"1.1"},t,{children:e("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:e("g",{transform:"translate(-302.000000, -18.000000)",fill:"currentColor",children:e("g",{transform:"translate(302.000000, 18.000000)",children:e("path",{d:"M7.5,5.41522791 L12.0331524,0.579865364 C12.3077536,0.286957429 12.7165503,0.24816296 12.946282,0.493210121 L13.9861449,1.60239723 C14.2158766,1.84744439 14.1795068,2.28349422 13.9049056,2.57640216 L9.37175324,7.41176471 L13.9049056,12.2471273 C14.1795068,12.5400352 14.2158766,12.976085 13.9861449,13.2211322 L12.946282,14.3303193 C12.7165503,14.5753665 12.3077536,14.536572 12.0331524,14.243664 L7.5,9.4083015 L2.96684761,14.243664 C2.69224642,14.536572 2.2834497,14.5753665 2.05371799,14.3303193 L1.01385508,13.2211322 C0.784123363,12.976085 0.820493178,12.5400352 1.09509437,12.2471273 L5.62824676,7.41176471 L1.09509437,2.57640216 C0.820493178,2.28349422 0.784123363,1.84744439 1.01385508,1.60239723 L2.05371799,0.493210121 C2.2834497,0.24816296 2.69224642,0.286957429 2.96684761,0.579865364 L7.5,5.41522791 Z"})})})})})),y=r.div(d||(d=v`
  display: flex;
  flex-direction: column;
  margin: auto;
  overflow: hidden;
  width: 40rem;
  background-color: white;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.05), 0 0 4rem rgba(0, 0, 0, 0.08);
  color: ${0};
  font-size: 1.6rem;
  line-height: 2.5rem;
`),l.palette.neutralDarker),$=r.header(s||(s=v`
  display: flex;
  align-items: center;
  margin-bottom: ${0}rem;
  padding: ${0}rem ${0}rem;
  background: ${0};
  border-bottom: solid 0.1rem #ddd;
  justify-content: space-between;
  ${0}
`),1.5,1.5,3,l.palette.neutralLighter,e=>"error"===e.variant&&n(c||(c=v`
    background: ${0};
    color: ${0};
  `),l.palette.paleRed,l.palette.darkRed)),L=r.h1(f||(f=v`
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${0}rem 0;
  font-size: 1.8rem;
`),1.5),C=r.h3(h||(h=v`
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: 0;
`)),j=r.div(m||(m=v`
  font-size: 1.6rem;
  padding: ${0}rem;
`),3),D=r.div(g||(g=v`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
`)),z=r.div(u||(u=v`
  top: 0;
  z-index: ${0};
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
`),1060),M=r.div(p||(p=v`
  z-index: 1;
`)),R=r(t=>e(w,a({},t,{"aria-hidden":"true",focusable:"false"})))(b||(b=v`
  padding: 0.4rem;
  cursor: pointer;
  margin-right: 0;
  padding-right: 0;
  color: ${0};

  :hover {
    color: ${0};
  }
  height: 2rem;
  width: 2rem;

  ${0}
`),l.palette.neutralMedium,l.palette.neutralDark,e=>"error"===e.variant&&n(x||(x=v`
    color: ${0};
  `),l.palette.darkRed)),A=r.div(k||(k=v`
  display: flex;
  justify-content: space-between;
  padding: ${0}rem;

  button {
    min-width: 12rem;
  }
`),3),B=({className:r,heading:n,onModalClose:i,children:a,show:o,variant:l})=>o?t(z,{className:r,children:[e(M,{children:t(y,{children:[t($,{variant:l,children:[e(L,{children:n}),e(R,{onClick:i,variant:l})]}),a]})}),e(D,{})]}):null,G=["disabled","isWaiting","waitingText","children"];let O;const T=r.button(O||(O=(e=>e)`
  background-color: ${0};
  color: ${0};
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  padding: 0 3rem;
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:not([disabled]) {
    cursor: pointer;
    &:hover {
      background: ${0}
    }
    &:active {
      background: ${0}
    }
  }
  &:disabled {
    opacity: 0.4;
  }
`),l.button.background,l.palette.white,l.button.backgroundHover,l.button.backgroundActive),E=t=>{const{disabled:r,isWaiting:n,waitingText:i,children:o}=t,l=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(i[r]=e[r]);return i}(t,G);return e(T,a({},l,{disabled:n||r,children:n&&i||o}))},N=r=>t(B,a({},r,{variant:"error",heading:"Error",children:[t(j,{children:[e(C,{children:"Uh-oh, there's been a glitch"}),"We're not quite sure what went wrong. Restart your browser. If this doesn't solve the problem, visit our ",e("a",{href:"https://openstax.secure.force.com/help",target:"_blank",children:"Support Center"}),"."]}),e(A,{children:e(E,{onClick:r.onModalClose,children:"OK"})})]}));let W,Y,F,H,S=e=>e;const q=r.div(W||(W=S`
  min-height: 5rem;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  ${0}
  font-size: 1.4rem;

  ${0}

  ${0}

  > * {
    flex-grow: 1;
  }

  .title {
    padding: 1rem;
    font-weight: bold;
    display: flex;
    align-content: center;
    justify-content: space-between;
  }

  .body {
    padding: 1rem;
  }

  .success {
    .title {
      color: ${0};
      background-color: ${0};
    }
  }

  .neutral {
    .title {
      color: ${0};
      background-color: ${0};
    }
  }

  .failure {
    .title {
      color: ${0};
      background-color: ${0};
      .openstax-icon[type="close"] {
        color: ${0};
        margin-left: 2rem;
        align-self: flex-start;
      }
    }
    .body {
      button {
        padding-left: 0;
        font-size: 1.6rem;
      }
    }
  }
`),e=>!e.inline&&n(Y||(Y=S`
    max-width: 28rem;
  `)),e=>e.dismissAfterMs?n(F||(F=S`
    animation-duration: ${0}ms;
    animation-timing-function: ease;
    animation-delay: ${0}ms;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-play-state: running;
    animation-fill-mode: forwards;
    animation-name: toast-animation;

    @keyframes toast-animation {
      from {
        transform: translateY(0);
        opacity: 1;
      }
      to {
        transform: translateY(-100%);
        opacity: 0;
      }
    }
  `),500,e.dismissAfterMs-500):null,e=>e.inline&&n(H||(H=S`
    margin: 0 auto;
    box-shadow: none;
    border: 1px solid rgba(0,0,0,0.2);
  `)),l.palette.darkerGreen,l.palette.paleGreen,l.palette.neutralDarker,l.palette.neutralLighter,l.palette.darkRed,l.palette.paleRed,l.palette.neutralDark),I=({id:r,title:n,children:a,variant:o="neutral",inline:l=!1,dismissAfterMs:d,onDismiss:s})=>{const[c,f]=i.useState(!0);return d&&(d=Math.max(d,1e3)),i.useEffect(()=>{if(!d)return;const e=setTimeout(()=>{f(!1),s&&s(r)},d);return()=>{clearTimeout(e)}},[]),c?e(q,{dismissAfterMs:d,inline:l,children:t("div",{className:o,children:[e("div",{className:"title",children:n}),e("div",{className:"body",children:a})]})}):null};let K,P,U=e=>e;const Z=r.div(K||(K=U`
  ${0}
  z-index: ${0};
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 1vh;
`),e=>!e.inline&&n(P||(P=U`
    position: fixed;
    right: 2rem;
  `)),1061),_=({toasts:t,onDismissToast:r,inline:n=!1})=>e(Z,{inline:n,children:t.map((t,i)=>e(I,a({onDismiss:r,inline:n},t,{children:t.message}),`toast-${i}`))});export{N as ErrorModal,B as Modal,j as ModalBody,C as ModalBodyHeading,A as ModalFooter,_ as ToastContainer};
//# sourceMappingURL=index.modern.mjs.map
