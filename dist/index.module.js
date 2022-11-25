import{jsx as n,jsxs as e}from"react/jsx-runtime";import t,{css as r}from"styled-components";import i from"react";function a(){return a=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},a.apply(this,arguments)}function o(n,e){return e||(e=n.slice(0)),n.raw=e,n}var l,d,c,s,u,f,h,m,g,p,b,v,x,k,w,y,L,C,j,D={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",paleRed:"#FBE7EA",green:"#77af42",lightGreen:"#8bc753",paleGreen:"#e0edd3",darkGreen:"#63a524",darkerGreen:"4e7226",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},z={palette:D,button:{background:D.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"}},M=function(e){return n("svg",a({width:"15px",height:"15px",viewBox:"0 0 15 15",version:"1.1"},e,{children:n("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:n("g",{transform:"translate(-302.000000, -18.000000)",fill:"currentColor",children:n("g",{transform:"translate(302.000000, 18.000000)",children:n("path",{d:"M7.5,5.41522791 L12.0331524,0.579865364 C12.3077536,0.286957429 12.7165503,0.24816296 12.946282,0.493210121 L13.9861449,1.60239723 C14.2158766,1.84744439 14.1795068,2.28349422 13.9049056,2.57640216 L9.37175324,7.41176471 L13.9049056,12.2471273 C14.1795068,12.5400352 14.2158766,12.976085 13.9861449,13.2211322 L12.946282,14.3303193 C12.7165503,14.5753665 12.3077536,14.536572 12.0331524,14.243664 L7.5,9.4083015 L2.96684761,14.243664 C2.69224642,14.536572 2.2834497,14.5753665 2.05371799,14.3303193 L1.01385508,13.2211322 C0.784123363,12.976085 0.820493178,12.5400352 1.09509437,12.2471273 L5.62824676,7.41176471 L1.09509437,2.57640216 C0.820493178,2.28349422 0.784123363,1.84744439 1.01385508,1.60239723 L2.05371799,0.493210121 C2.2834497,0.24816296 2.69224642,0.286957429 2.96684761,0.579865364 L7.5,5.41522791 Z"})})})})}))},R=t.div(l||(l=o(["\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  overflow: hidden;\n  width: 40rem;\n  background-color: white;\n  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.05), 0 0 4rem rgba(0, 0, 0, 0.08);\n  color: ",";\n  font-size: 1.6rem;\n  line-height: 2.5rem;\n"])),z.palette.neutralDarker),A=t.header(d||(d=o(["\n  display: flex;\n  align-items: center;\n  margin-bottom: ","rem;\n  padding: ","rem ","rem;\n  background: ",";\n  border-bottom: solid 0.1rem #ddd;\n  justify-content: space-between;\n  ","\n"])),1.5,1.5,3,z.palette.neutralLighter,function(n){return"error"===n.variant&&r(c||(c=o(["\n    background: ",";\n    color: ",";\n  "])),z.palette.paleRed,z.palette.darkRed)}),B=t.h1(s||(s=o(["\n  display: flex;\n  align-items: center;\n  margin: 0;\n  padding: ","rem 0;\n  font-size: 1.8rem;\n"])),1.5),G=t.h3(u||(u=o(["\n  font-weight: 400;\n  font-size: 2.2rem;\n  margin-top: 0;\n"]))),O=t.div(f||(f=o(["\n  font-size: 1.6rem;\n  padding: ","rem;\n"])),3),T=t.div(h||(h=o(["\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.3);\n"]))),E=t.div(m||(m=o(["\n  top: 0;\n  z-index: ",";\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  position: fixed;\n  justify-content: center;\n  align-items: center;\n"])),1060),N=t.div(g||(g=o(["\n  z-index: 1;\n"]))),W=t(function(e){return n(M,a({},e,{"aria-hidden":"true",focusable:"false"}))})(p||(p=o(["\n  padding: 0.4rem;\n  cursor: pointer;\n  margin-right: 0;\n  padding-right: 0;\n  color: ",";\n\n  :hover {\n    color: ",";\n  }\n  height: 2rem;\n  width: 2rem;\n\n  ","\n"])),z.palette.neutralMedium,z.palette.neutralDark,function(n){return"error"===n.variant&&r(b||(b=o(["\n    color: ",";\n  "])),z.palette.darkRed)}),Y=t.div(v||(v=o(["\n  display: flex;\n  justify-content: space-between;\n  padding: ","rem;\n\n  button {\n    min-width: 12rem;\n  }\n"])),3),F=function(t){var r=t.onModalClose,i=t.children,a=t.variant;return t.show?e(E,{className:t.className,children:[n(N,{children:e(R,{children:[e(A,{variant:a,children:[n(B,{children:t.heading}),n(W,{onClick:r,variant:a})]}),i]})}),n(T,{})]}):null},H=["disabled","isWaiting","waitingText","children"],S=t.button(x||(x=o(["\n  background-color: ",";\n  color: ",";\n  font-size: 1.6rem;\n  font-weight: 700;\n  line-height: 2rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 4rem;\n  padding: 0 3rem;\n  border: 0;\n  border-radius: 5px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n\n  &:not([disabled]) {\n    cursor: pointer;\n    &:hover {\n      background: ","\n    }\n    &:active {\n      background: ","\n    }\n  }\n  &:disabled {\n    opacity: 0.4;\n  }\n"])),z.button.background,z.palette.white,z.button.backgroundHover,z.button.backgroundActive),q=function(e){var t=e.disabled,r=e.isWaiting,i=e.waitingText,o=e.children,l=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)e.indexOf(t=a[r])>=0||(i[t]=n[t]);return i}(e,H);return n(S,a({},l,{disabled:r||t,children:r&&i||o}))},I=function(t){return e(F,a({},t,{variant:"error",heading:"Error",children:[e(O,{children:[n(G,{children:"Uh-oh, there's been a glitch"}),"We're not quite sure what went wrong. Restart your browser. If this doesn't solve the problem, visit our ",n("a",{href:"https://openstax.secure.force.com/help",target:"_blank",children:"Support Center"}),"."]}),n(Y,{children:n(q,{onClick:t.onModalClose,children:"OK"})})]}))},K=t.div(k||(k=o(["\n  min-height: 5rem;\n  background-color: white;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);\n  display: flex;\n  align-items: center;\n  ","\n  font-size: 1.4rem;\n\n  ","\n\n  ","\n\n  > * {\n    flex-grow: 1;\n  }\n\n  .title {\n    padding: 1rem;\n    font-weight: bold;\n    display: flex;\n    align-content: center;\n    justify-content: space-between;\n  }\n\n  .body {\n    padding: 1rem;\n  }\n\n  .success {\n    .title {\n      color: ",";\n      background-color: ",";\n    }\n  }\n\n  .neutral {\n    .title {\n      color: ",";\n      background-color: ",";\n    }\n  }\n\n  .failure {\n    .title {\n      color: ",";\n      background-color: ",';\n      .openstax-icon[type="close"] {\n        color: ',";\n        margin-left: 2rem;\n        align-self: flex-start;\n      }\n    }\n    .body {\n      button {\n        padding-left: 0;\n        font-size: 1.6rem;\n      }\n    }\n  }\n"])),function(n){return!n.inline&&r(w||(w=o(["\n    max-width: 28rem;\n  "])))},function(n){return n.dismissAfterMs?r(y||(y=o(["\n    animation-duration: ","ms;\n    animation-timing-function: ease;\n    animation-delay: ","ms;\n    animation-iteration-count: 1;\n    animation-direction: normal;\n    animation-play-state: running;\n    animation-fill-mode: forwards;\n    animation-name: toast-animation;\n\n    @keyframes toast-animation {\n      from {\n        transform: translateY(0);\n        opacity: 1;\n      }\n      to {\n        transform: translateY(-100%);\n        opacity: 0;\n      }\n    }\n  "])),500,n.dismissAfterMs-500):null},function(n){return n.inline&&r(L||(L=o(["\n    margin: 0 auto;\n    box-shadow: none;\n    border: 1px solid rgba(0,0,0,0.2);\n  "])))},z.palette.darkerGreen,z.palette.paleGreen,z.palette.neutralDarker,z.palette.neutralLighter,z.palette.darkRed,z.palette.paleRed,z.palette.neutralDark),P=function(t){var r=t.id,a=t.title,o=t.children,l=t.variant,d=void 0===l?"neutral":l,c=t.inline,s=void 0!==c&&c,u=t.dismissAfterMs,f=t.onDismiss,h=i.useState(!0),m=h[0],g=h[1];return u&&(u=Math.max(u,1e3)),i.useEffect(function(){if(u){var n=setTimeout(function(){g(!1),f&&f(r)},u);return function(){clearTimeout(n)}}},[]),m?n(K,{dismissAfterMs:u,inline:s,children:e("div",{className:d,children:[n("div",{className:"title",children:a}),n("div",{className:"body",children:o})]})}):null},U=t.div(C||(C=o(["\n  ","\n  z-index: ",";\n  display: grid;\n  justify-items: center;\n  justify-content: center;\n  gap: 1vh;\n"])),function(n){return!n.inline&&r(j||(j=o(["\n    position: fixed;\n    right: 2rem;\n  "])))},1061),Z=function(e){var t=e.onDismissToast,r=e.inline,i=void 0!==r&&r;return n(U,{inline:i,children:e.toasts.map(function(e,r){return n(P,a({onDismiss:t,inline:i},e,{children:e.message}),"toast-"+r)})})};export{I as ErrorModal,F as Modal,O as ModalBody,G as ModalBodyHeading,Y as ModalFooter,Z as ToastContainer};
//# sourceMappingURL=index.module.js.map
