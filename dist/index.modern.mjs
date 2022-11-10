import{jsx as e,jsxs as r}from"react/jsx-runtime.js";import t,{css as n}from"styled-components";function i(){return i=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}const a={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",paleRed:"#FBE7EA",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},o={palette:a,button:{background:a.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"}};let l,d,c,h,s,g,f,u,p,b,m,k,v=e=>e;const x=r=>e("svg",i({width:"15px",height:"15px",viewBox:"0 0 15 15",version:"1.1"},r,{children:e("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:e("g",{transform:"translate(-302.000000, -18.000000)",fill:"currentColor",children:e("g",{transform:"translate(302.000000, 18.000000)",children:e("path",{d:"M7.5,5.41522791 L12.0331524,0.579865364 C12.3077536,0.286957429 12.7165503,0.24816296 12.946282,0.493210121 L13.9861449,1.60239723 C14.2158766,1.84744439 14.1795068,2.28349422 13.9049056,2.57640216 L9.37175324,7.41176471 L13.9049056,12.2471273 C14.1795068,12.5400352 14.2158766,12.976085 13.9861449,13.2211322 L12.946282,14.3303193 C12.7165503,14.5753665 12.3077536,14.536572 12.0331524,14.243664 L7.5,9.4083015 L2.96684761,14.243664 C2.69224642,14.536572 2.2834497,14.5753665 2.05371799,14.3303193 L1.01385508,13.2211322 C0.784123363,12.976085 0.820493178,12.5400352 1.09509437,12.2471273 L5.62824676,7.41176471 L1.09509437,2.57640216 C0.820493178,2.28349422 0.784123363,1.84744439 1.01385508,1.60239723 L2.05371799,0.493210121 C2.2834497,0.24816296 2.69224642,0.286957429 2.96684761,0.579865364 L7.5,5.41522791 Z"})})})})})),w=t.div(l||(l=v`
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
`),o.palette.neutralDarker),y=t.header(d||(d=v`
  display: flex;
  align-items: center;
  margin-bottom: ${0}rem;
  padding: ${0}rem ${0}rem;
  background: ${0};
  border-bottom: solid 0.1rem #ddd;
  justify-content: space-between;
  ${0}
`),1.5,1.5,3,o.palette.neutralLighter,e=>"error"===e.variant&&n(c||(c=v`
    background: ${0};
    color: ${0};
  `),o.palette.paleRed,o.palette.darkRed)),$=t.h1(h||(h=v`
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${0}rem 0;
  font-size: 1.8rem;
`),1.5),C=t.h3(s||(s=v`
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: 0;
`)),L=t.div(g||(g=v`
  font-size: 1.6rem;
  padding: ${0}rem;
`),3),j=t.div(f||(f=v`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
`)),B=t.div(u||(u=v`
  top: 0;
  z-index: 1060;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
`)),R=t.div(p||(p=v`
  z-index: 1;
`)),z=t(r=>e(x,i({},r,{"aria-hidden":"true",focusable:"false"})))(b||(b=v`
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
`),o.palette.neutralMedium,o.palette.neutralDark,e=>"error"===e.variant&&n(m||(m=v`
    color: ${0};
  `),o.palette.darkRed)),O=t.div(k||(k=v`
  display: flex;
  justify-content: space-between;
  padding: ${0}rem;

  button {
    min-width: 12rem;
  }
`),3),D=({className:t,heading:n,onModalClose:i,children:a,show:o,variant:l})=>o?r(B,{className:t,children:[e(R,{children:r(w,{children:[r(y,{variant:l,children:[e($,{children:n}),e(z,{onClick:i,variant:l})]}),a]})}),e(j,{})]}):null,A=["disabled","isWaiting","waitingText","children"];let M;const E=t.button(M||(M=(e=>e)`
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
`),o.button.background,o.palette.white,o.button.backgroundHover,o.button.backgroundActive),W=r=>{const{disabled:t,isWaiting:n,waitingText:a,children:o}=r,l=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r.indexOf(t=a[n])>=0||(i[t]=e[t]);return i}(r,A);return e(E,i({},l,{disabled:n||t,children:n&&a||o}))},G=t=>r(D,i({},t,{variant:"error",heading:"Error",children:[r(L,{children:[e(C,{children:"Uh-oh, there's been a glitch"}),"We're not quite sure what went wrong. Restart your browser. If this doesn't solve the problem, visit our ",e("a",{href:"https://openstax.secure.force.com/help",target:"_blank",children:"Support Center"}),"."]}),e(O,{children:e(W,{onClick:t.onModalClose,children:"OK"})})]}));export{G as ErrorModal,D as Modal,L as ModalBody,C as ModalBodyHeading,O as ModalFooter};
//# sourceMappingURL=index.modern.mjs.map
