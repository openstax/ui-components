import{jsx as e,jsxs as t}from"react/jsx-runtime.js";import r,{css as i,keyframes as a}from"styled-components";import n from"react";function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)t.indexOf(r=n[i])>=0||(a[r]=e[r]);return a}const c={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",paleRed:"#FBE7EA",green:"#77af42",lightGreen:"#8bc753",paleGreen:"#e0edd3",darkGreen:"#63a524",darkerGreen:"4e7226",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"};let s,d=e=>e;const h={palette:c},m=["navbar","modals","toasts"].reduce((e,t,r)=>(e[t]=10*(r+1),e),{}),f={navbar:{desktop:3.2,mobile:1.6}},g={colors:h,zIndex:m,padding:f,breakpoints:{desktop:e=>i(s||(s=d`
    @media screen and (min-width: ${0}em) {
      ${0}
    }
  `),75.0625,e)}};let p,u,b,v,x,y,w,k,$,z,M,C,L=e=>e;const H=t=>e("svg",o({width:"15px",height:"15px",viewBox:"0 0 15 15",version:"1.1"},t,{children:e("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:e("g",{transform:"translate(-302.000000, -18.000000)",fill:"currentColor",children:e("g",{transform:"translate(302.000000, 18.000000)",children:e("path",{d:"M7.5,5.41522791 L12.0331524,0.579865364 C12.3077536,0.286957429 12.7165503,0.24816296 12.946282,0.493210121 L13.9861449,1.60239723 C14.2158766,1.84744439 14.1795068,2.28349422 13.9049056,2.57640216 L9.37175324,7.41176471 L13.9049056,12.2471273 C14.1795068,12.5400352 14.2158766,12.976085 13.9861449,13.2211322 L12.946282,14.3303193 C12.7165503,14.5753665 12.3077536,14.536572 12.0331524,14.243664 L7.5,9.4083015 L2.96684761,14.243664 C2.69224642,14.536572 2.2834497,14.5753665 2.05371799,14.3303193 L1.01385508,13.2211322 C0.784123363,12.976085 0.820493178,12.5400352 1.09509437,12.2471273 L5.62824676,7.41176471 L1.09509437,2.57640216 C0.820493178,2.28349422 0.784123363,1.84744439 1.01385508,1.60239723 L2.05371799,0.493210121 C2.2834497,0.24816296 2.69224642,0.286957429 2.96684761,0.579865364 L7.5,5.41522791 Z"})})})})})),j=r.div(p||(p=L`
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
`),h.palette.neutralDarker),D=r.header(u||(u=L`
  display: flex;
  align-items: center;
  margin-bottom: ${0}rem;
  padding: ${0}rem ${0}rem;
  background: ${0};
  border-bottom: solid 0.1rem #ddd;
  justify-content: space-between;
  ${0}
`),1.5,1.5,3,h.palette.neutralLighter,e=>"error"===e.variant&&i(b||(b=L`
    background: ${0};
    color: ${0};
  `),h.palette.paleRed,h.palette.darkRed)),V=r.h1(v||(v=L`
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${0}rem 0;
  font-size: 1.8rem;
`),1.5),A=r.h3(x||(x=L`
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: 0;
`)),N=r.div(y||(y=L`
  font-size: 1.6rem;
  padding: ${0}rem;
`),3),W=r.div(w||(w=L`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
`)),R=r.div(k||(k=L`
  top: 0;
  z-index: ${0};
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
`),m.modals),B=r.div($||($=L`
  z-index: 1;
`)),S=r(t=>e(H,o({},t,{"aria-hidden":"true",focusable:"false"})))(z||(z=L`
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
`),h.palette.neutralMedium,h.palette.neutralDark,e=>"error"===e.variant&&i(M||(M=L`
    color: ${0};
  `),h.palette.darkRed)),G=r.div(C||(C=L`
  display: flex;
  justify-content: space-between;
  padding: ${0}rem;

  button {
    min-width: 12rem;
  }
`),3),O=({className:r,heading:i,onModalClose:a,children:n,show:o,variant:l})=>o?t(R,{className:r,children:[e(B,{children:t(j,{children:[t(D,{variant:l,children:[e(V,{children:i}),e(S,{onClick:a,variant:l})]}),n]})}),e(W,{})]}):null,T=r=>t(N,o({},r,{children:[e(A,{children:"Uh-oh, there's been a glitch"}),"We're not quite sure what went wrong. Restart your browser. If this doesn't solve the problem, visit our ",e("a",{href:"https://openstax.secure.force.com/help",target:"_blank",children:"Support Center"}),"."]}));let E,I=e=>e;const Y={primary:{background:c.orange,backgroundActive:"#b03808",backgroundHover:"#be3c08",color:c.white},light:{background:c.white,backgroundActive:c.neutralLight,backgroundHover:c.white,color:c.neutralDarker,fontWeight:400},secondary:{background:c.darkGray,backgroundActive:"#4c4c4c",backgroundHover:"#646464",color:c.white}},F=["disabled","isWaiting","waitingText","children","variant"],_=["variant"];let q;const K=r.button(q||(q=(e=>e)`
  ${0}

  font-size: 1.6rem;
  line-height: 2rem;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  padding: 0 3rem;
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  user-select: none;
  white-space: nowrap;

  &:not([disabled]) {
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.4;
  }

  & + & {
    margin-left: 1.6rem;
  }
`),e=>(e=>{var t;const r=Y[e];return i(E||(E=I`
    background-color: ${0};
    color: ${0};
    font-weight: ${0};

    &:not([disabled]) {
      &:hover {
        background: ${0};
      }
      &:active {
        background: ${0};
      }
    }
  `),r.background,r.color,null!=(t=r.fontWeight)?t:700,r.backgroundHover,r.backgroundActive)})(e.variant)),P=t=>{const{disabled:r,isWaiting:i,waitingText:a,children:n,variant:c="primary"}=t,s=l(t,F);return e(K,o({},s,{disabled:i||r,variant:c,children:i&&a||n}))},U=t=>{let{variant:r="primary"}=t,i=l(t,_);return e(K,o({},i,{as:"a",variant:r,children:i.children}))},Z=r=>t(O,o({},r,{variant:"error",heading:"Error",children:[e(T,{}),e(G,{children:e(P,{onClick:r.onModalClose,children:"OK"})})]}));let J,Q,X,ee,te=e=>e;const re=r.div(J||(J=te`
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
`),e=>!e.inline&&i(Q||(Q=te`
    max-width: 28rem;
  `)),e=>e.dismissAfterMs?i(X||(X=te`
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
  `),500,e.dismissAfterMs-500):null,e=>e.inline&&i(ee||(ee=te`
    margin: 0 auto;
    box-shadow: none;
    border: 1px solid rgba(0,0,0,0.2);
  `)),h.palette.darkerGreen,h.palette.paleGreen,h.palette.neutralDarker,h.palette.neutralLighter,h.palette.darkRed,h.palette.paleRed,h.palette.neutralDark),ie=({id:r,title:i,children:a,variant:o="neutral",inline:l=!1,dismissAfterMs:c,onDismiss:s})=>{const[d,h]=n.useState(!0);return c&&(c=Math.max(c,1e3)),n.useEffect(()=>{if(!c)return;const e=setTimeout(()=>{h(!1),s&&s(r)},c);return()=>{clearTimeout(e)}},[]),d?e(re,{dismissAfterMs:c,inline:l,children:t("div",{className:o,children:[e("div",{className:"title",children:i}),e("div",{className:"body",children:a})]})}):null};let ae,ne,oe=e=>e;const le=r.div(ae||(ae=oe`
  ${0}
  z-index: ${0};
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 1vh;
`),e=>!e.inline&&i(ne||(ne=oe`
    position: fixed;
    right: 2rem;
  `)),m.toasts),ce=({toasts:t,onDismissToast:r,inline:i=!1})=>e(le,{inline:i,children:t.map((t,a)=>e(ie,o({onDismiss:r,inline:i},t,{children:t.message}),`toast-${a}`))});let se,de,he,me,fe,ge,pe,ue,be=e=>e;const ve=a(se||(se=be`
  from {
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`)),xe=a(de||(de=be`
  from {
    transform: matrix(1, 0, 0, 1, 0, 0);
  }

  to {
    transform: matrix(0.965926, -0.258819, 0.258819, 0.965926, 0, -18);
  }
`)),ye=a(he||(he=be`
  from {
    transform: matrix(1, 0, 0, 1, 0, 0);
  }

  to {
    transform: matrix(0.994522, 0.104528, -0.104528, 0.994522, 0, -14);
  }
`)),we=a(me||(me=be`
  from {
    transform: matrix(1, 0, 0, 1, 0, 0);
  }

  to {
    transform: matrix(0.99863, 0.052336, -0.052336, 0.99863, 0, -8);
  }
`)),ke=a(fe||(fe=be`
  from {
    transform: matrix(1, 0, 0, 1, 0, 0);
  }

  to {
    transform: matrix(1, 0, 0, 1, 0, -8);
  }
`)),$e=a(ge||(ge=be`
  from {
    transform: matrix(1, 0, 0, 1, 0, 0);
  }

  to {
    transform: matrix(0.99863, 0.052336, -0.052336, 0.99863, 0, -4);
  }
`)),ze=r.svg(pe||(pe=be`
  enable-background: new 0 0 57.6 39.1;
  animation: ${0} 0.3s forwards ${0}ms;
  display: block;
  height: 100%;
  margin: 0 auto;
  opacity: 0;
  position: relative;
  transform: scale(0);
  transform-origin: center;
  width: 5rem;
  ${0}

  * {
    animation: fadeIn 0.3s forwards;
  }

  .os-green,
  .os-orange,
  .os-gray,
  .os-yellow,
  .os-blue {
    animation-delay: 0.5s;
  }

  .os-green {
    animation:
      ${0} 0.6s cubic-bezier(0.81, 0.41, 0.13, 0.74) 0.5s
      infinite alternate;
    transform-origin: center left;
  }

  .os-orange {
    animation:
      ${0} 0.6s cubic-bezier(0.81, 0.41, 0.13, 0.74) 0.5s
      infinite alternate;
    transform-origin: center right;
  }

  .os-gray {
    animation:
      ${0} 0.6s cubic-bezier(0.81, 0.41, 0.13, 0.74) 0.5s
      infinite alternate;
    transform-origin: center right;
  }

  .os-yellow {
    animation:
      ${0} 0.6s cubic-bezier(0.81, 0.41, 0.13, 0.74) 0.6s
      infinite alternate;
    transform-origin: center right;
  }

  .os-blue {
    animation:
      ${0} 0.6s cubic-bezier(0.81, 0.41, 0.13, 0.74) 0.5s
      infinite alternate;
    transform-origin: center;
  }
`),ve,e=>e.delay||300,e=>e.large?i(ue||(ue=be`
    width: 10rem;
   `)):"",xe,ye,we,ke,$e),Me=r=>t(ze,o({"data-testid":"loader",version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 -30 57.6 69.1"},r,{children:[e("path",{id:"os-blue",className:"os-blue",style:{fill:"#00246a"},d:"M38.4,22c0,0.4-0.3,0.7-0.7,0.7H13.5c-0.4,0-0.7-0.3-0.7-0.7v-1.4c0-0.4,0.3-0.7,0.7-0.7h24.2 c0.4,0,0.7,0.3,0.7,0.7V22z"}),e("path",{id:"os-yellow",className:"os-yellow",style:{fill:"#f4d019"},d:"M41.8,17.8c0,0.4-0.3,0.7-0.7,0.7l-25.4,0.8c-0.4,0-0.7-0.3-0.7-0.7l-0.1-2.1 c0-0.4,0.3-0.7,0.7-0.7L41,15c0.4,0,0.7,0.3,0.7,0.7L41.8,17.8z"}),e("path",{id:"os-gray",className:"os-gray",style:{fill:"#5e6062"},d:"M34.8,14c0,0.4-0.3,0.7-0.7,0.7H11.6c-0.4,0-0.7-0.3-0.7-0.7v-3.5c0-0.4,0.3-0.7,0.7-0.7h22.5 c0.4,0,0.7,0.3,0.7,0.7V14z"}),e("path",{id:"os-orange",className:"os-orange",style:{fill:"#f47641"},d:"M39,8.1c0,0.3-0.4,0.5-1,0.5H8.6c-0.5,0-1-0.2-1-0.5V6.9c0-0.3,0.4-0.5,1-0.5H38 c0.5,0,1,0.2,1,0.5V8.1z"}),e("path",{id:"os-green",className:"os-green",style:{fill:"#77af42"},d:"M43.9,5c0,0.7-0.6,1.2-1.2,1.1L15,4.8c-0.7,0-1.2-0.6-1.1-1.2L14,1.1c0-0.7,0.6-1.2,1.2-1.1 l27.7,1.3c0.7,0,1.2,0.6,1.1,1.2L43.9,5z"}),e("path",{id:"os-type",className:"os-type",style:{fill:"#5e6062"},d:"M3.1,30.2c-1.8,0-3.1,1.3-3.1,3.1c0,1.8,1.3,3.1,3.1,3.1c1.8,0,3.1-1.3,3.1-3.1 C6.2,31.5,4.9,30.2,3.1,30.2z M3.1,35.7c-1.4,0-2.3-1.1-2.3-2.4c0-1.3,0.9-2.4,2.3-2.4c1.4,0,2.3,1.1,2.3,2.4 C5.4,34.6,4.5,35.7,3.1,35.7z M10.9,30.2c-0.9,0-1.9,0.4-2.4,1.2h0v-1H7.7v8.8h0.8v-3.9h0C9,36,10,36.4,10.9,36.4 c1.8,0,3.1-1.3,3.1-3.1C14,31.5,12.7,30.2,10.9,30.2z M10.9,35.7c-1.4,0-2.5-1.1-2.5-2.4c0-1.3,1.1-2.4,2.5-2.4 c1.4,0,2.3,1.1,2.3,2.4C13.2,34.6,12.3,35.7,10.9,35.7z M18.3,30.2c-1.7,0-2.9,1.3-2.9,3.1c0,1.8,1.2,3.1,3,3.1c1,0,2-0.4,2.6-1.3 l-0.6-0.5c-0.4,0.6-1.2,1-2,1c-1.8,0-2.2-1.6-2.2-2.2h5v-0.5C21.1,31.6,20.1,30.2,18.3,30.2z M16.1,32.8c0-0.3,0.5-1.9,2.1-1.9 c1.1,0,2,0.9,2,1.9H16.1z M27.9,32.7v3.5h-0.8v-3.5c0-1-0.3-1.9-1.5-1.9c-1.1,0-2,0.8-2,2.4v2.9h-0.8V32c0-0.4-0.1-1.4-0.1-1.7h0.8 c0,0.4,0,0.9,0.1,1h0c0.3-0.7,1.1-1.2,2-1.2C27.4,30.2,27.9,31.4,27.9,32.7z M34.2,34.4c0,1.5-1.4,2-2.6,2c-0.9,0-1.8-0.2-2.4-0.9 l1-1c0.4,0.4,0.8,0.8,1.5,0.8c0.4,0,1-0.2,1-0.7c0-1.3-3.3-0.3-3.3-2.6c0-1.4,1.2-2,2.5-2c0.8,0,1.7,0.3,2.2,0.9l-1,0.9 c-0.3-0.4-0.7-0.6-1.2-0.6c-0.4,0-0.9,0.2-0.9,0.7C30.9,32.9,34.2,32,34.2,34.4z M37.5,30.1h1.7v1.3h-1.7v2.7c0,0.6,0.2,1,0.9,1 c0.3,0,0.6-0.1,0.8-0.2v1.3c-0.3,0.2-0.9,0.2-1.2,0.2c-1.6,0-2-0.7-2-2.2v-2.8h-1.3v-1.3H36v-1.8h1.5V30.1z M43,30 c-1,0-1.9,0.3-2.6,1l0.8,0.8c0.4-0.4,1-0.6,1.6-0.6c0.8,0,1.4,0.4,1.4,1.1v0.2h-0.4c-1.5,0-3.9,0.1-3.9,2.1c0,1.2,1.1,1.8,2.2,1.8 c0.8,0,1.5-0.3,2-1h0v0.8h1.4v-3.5C45.6,31.8,45.6,30,43,30z M44.1,33.8c0,0.9-0.5,1.4-1.5,1.4c-0.5,0-1.1-0.2-1.1-0.8 c0-0.9,1.5-0.9,2.3-0.9h0.3V33.8z M50.8,32.9l2.5,3.3h-1.9L49.8,34l-1.6,2.2h-1.8l2.5-3.3l-2.1-2.8h1.9l1.2,1.8l1.3-1.8h1.7 L50.8,32.9z M57.6,30.1v1.7h-0.3v-1.5h0l-0.6,1.5h-0.2l-0.6-1.5h0v1.5h-0.3v-1.7h0.4l0.5,1.3l0.5-1.3H57.6z M53.9,30.1h1.4v0.3h-0.5 v1.5h-0.3v-1.5h-0.5V30.1z"})]}));let Ce,Le,He=e=>e;const je=r.svg(Ce||(Ce=He`
  display: block;
  width: auto;
  height: ${0}rem;
  ${0}
`),2.4,g.breakpoints.desktop(i(Le||(Le=He`
    height: ${0}rem;
  `),2.4))),De=({alt:r})=>t(je,{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 353.76001 80.973335",height:80.97,width:353.76,children:[e("title",{children:r}),e("path",{d:"M159.99 52.176c5.13 0 8.31-3.86 8.31-8.583 0-4.722-3.18-8.583-8.31-8.583-5.13 0-8.31 3.86-8.31 8.583 0 4.724 3.18 8.583 8.31 8.583zm0-19.616c6.45 0 11.034 4.632 11.034 11.033 0 6.404-4.585 11.036-11.035 11.036s-11.04-4.64-11.04-11.04c0-6.4 4.58-11.04 11.03-11.04m27.75 19.62c5.13 0 8.31-3.86 8.31-8.59 0-4.72-3.18-8.586-8.31-8.586-4.95 0-8.77 3.86-8.77 8.583 0 4.726 3.81 8.585 8.76 8.585zM176.51 33.1h2.723v3.678h.09c1.68-2.907 5.27-4.223 8.4-4.223 6.446 0 11.032 4.632 11.032 11.033 0 6.406-4.588 11.038-11.035 11.038-3.135 0-6.72-1.32-8.4-4.226h-.09v14.033h-2.73v-31.33m44.777 8.717c0-3.725-3.224-6.813-7.264-6.813-5.95 0-7.63 5.72-7.63 6.81zm2.09 8.31c-2.135 3.178-5.36 4.496-9.08 4.496-6.4 0-10.628-4.588-10.628-11.083 0-6.267 4.36-10.988 10.49-10.988 6.45 0 9.85 4.95 9.85 9.81v1.904h-17.6c0 2.27 1.59 7.9 7.944 7.9 2.77 0 5.676-1.45 7.04-3.73l1.998 1.68M230.105 39c0-1.545-.23-4.813-.23-5.9h2.726c.05 1.54.1 3.267.18 3.676h.14c1.09-2.32 3.77-4.226 7.18-4.226 6.54 0 7.99 4.45 7.99 9.037v12.49h-2.72V41.73c0-3.407-.95-6.724-5.26-6.724-4.04 0-7.262 2.817-7.262 8.583v10.49h-2.722V39m36.328-.68c-1.043-1.454-2.404-2.227-4.27-2.227-1.45 0-3.176.684-3.176 2.32 0 3.903 11.76.726 11.76 9.216 0 5.17-4.95 6.99-9.4 6.99-3.36 0-6.265-.87-8.49-3.36l3.63-3.41c1.41 1.54 2.864 2.68 5.18 2.68 1.59 0 3.633-.774 3.633-2.5 0-4.496-11.76-.95-11.76-9.264 0-4.86 4.36-7.04 8.76-7.04 2.91 0 5.998.91 7.768 3.316l-3.636 3.27m5.994-1.41v-4.63h4.496v-6.31h5.45v6.31h5.99v4.632h-5.995v9.533c0 2.18.636 3.543 3.043 3.543.95 0 2.27-.18 2.95-.68v4.59c-1.137.548-3.04.73-4.317.73-5.763 0-7.124-2.59-7.124-7.72v-10h-4.497m33.51 7.407h-1.136c-3 0-8.174.226-8.174 3.36 0 1.997 2.042 2.86 3.814 2.86 3.72 0 5.49-1.954 5.49-4.996zm.32 6.765h-.14c-1.543 2.45-4.084 3.54-6.99 3.54-4.04 0-7.95-2.23-7.95-6.54 0-7.085 8.266-7.587 13.716-7.587h1.364v-.59c0-2.68-2.09-4.085-4.992-4.085-2.27 0-4.36.91-5.815 2.27l-2.86-2.86c2.406-2.45 5.81-3.493 9.26-3.493 9.31 0 9.31 6.723 9.31 9.81v12.54h-4.9v-2.99m16.394-8.718-7.536-10.086h6.63l4.36 6.542 4.72-6.542h6.22L329.6 42.37l8.763 11.713h-6.63l-5.678-7.81-5.722 7.81h-6.448l8.766-11.714",fill:"#585a58"}),e("path",{d:"M129.033 17.833a4.214 4.214 0 0 1-4.414 4.01l-98.45-4.67a4.224 4.224 0 0 1-4.01-4.416l.41-8.737A4.215 4.215 0 0 1 26.99.006l98.445 4.676a4.222 4.222 0 0 1 4.013 4.414l-.415 8.737",fill:"#72a648"}),e("path",{d:"M96.677 49.807a2.528 2.528 0 0 1-2.53 2.53H14.08c-1.4 0-2.53-1.13-2.53-2.53v-12.51a2.53 2.53 0 0 1 2.53-2.53h80.068a2.53 2.53 0 0 1 2.53 2.53v12.51",fill:"#585a58"}),e("path",{d:"M121.304 63.337c.042 1.398-1.015 2.565-2.37 2.61L28.6 68.763c-1.353.04-2.485-1.06-2.528-2.455l-.233-7.434c-.05-1.395 1.01-2.565 2.37-2.605l90.33-2.82c1.35-.05 2.48 1.05 2.52 2.45l.23 7.43",fill:"#eecb3f"}),e("path",{d:"M109.17 78.445c0 1.396-1.065 2.528-2.38 2.528H20.565c-1.316 0-2.38-1.132-2.38-2.528V73.48c0-1.395 1.064-2.53 2.38-2.53h86.225c1.315 0 2.38 1.135 2.38 2.53v4.965",fill:"#222b4f"}),e("path",{d:"M111.387 28.742c0 1.03-1.528 1.867-3.41 1.867H3.41c-1.882 0-3.41-.84-3.41-1.87v-4.05c0-1.03 1.527-1.87 3.41-1.87h104.566c1.883 0 3.41.84 3.41 1.87v4.05",fill:"#e36f4a"}),e("path",{d:"M347.008 32.285h1.568l1.833 4.67 1.83-4.67h1.52v6.147h-.99V33.27h-.03l-2.03 5.162h-.68l-2.025-5.162h-.03v5.162H347zm-4.16.985h-1.94v-.985h4.864v.985h-1.94v5.162h-.985V33.27",fill:"#585a58"})]}),Ve=["logo","maxWidth"],Ae=["alt"];let Ne,We,Re,Be,Se=e=>e;const Ge=r.div(Ne||(Ne=Se`
  overflow: visible;
  z-index: ${0};
  background: ${0};
  position: relative;
  padding: 0 ${0}rem;
  box-shadow: 0 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.1);
  ${0}
`),g.zIndex.navbar,g.colors.palette.white,g.padding.navbar.mobile,g.breakpoints.desktop(i(We||(We=Se`
    padding: 0 ${0}rem;
  `),g.padding.navbar.mobile))),Oe=r.div(Re||(Re=Se`
  overflow: visible;
  display: flex;
  justify-content: ${0};
  align-items: center;
  height: ${0}rem;
  ${0}
  margin: 0 auto;
  ${0}
  @media print { display: none; }
`),e=>e.justifyContent||"space-between",e=>e.navMobileHeight,e=>e.maxWidth?`max-width: ${e.maxWidth}rem;`:null,e=>g.breakpoints.desktop(i(Be||(Be=Se`
    height: ${0}rem;
  `),e.navDesktopHeight))),Te=r=>{let{logo:i=!1,maxWidth:a}=r,n=l(r,Ve);const c="object"==typeof i,s=c&&"href"in i,d=c?i:{},{alt:h="OpenStax Logo"}=d,m=l(d,Ae),f=i?e(De,{alt:h}):null;return e(Ge,{children:t(Oe,{maxWidth:a,navDesktopHeight:n.navDesktopHeight||4,navMobileHeight:n.navMobileHeight||4,justifyContent:n.justifyContent,children:[s?e("a",o({},m,{children:f})):f,n.children]})})},Ee=["children","variant","bold","size"];let Ie,Ye,Fe=e=>e;const _e={primary:{accentColor:h.palette.mediumBlue,boxShadow:"none"},light:{accentColor:h.palette.white,boxShadow:"0 0 1px 0"}},qe=r.label(Ie||(Ie=Fe`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  font-weight: ${0}
`),e=>e.bold?700:400),Ke=r.input(Ye||(Ye=Fe`
  accent-color: ${0};
  width: ${0}rem;
  height: ${0}rem;
  margin: 0 1.6rem 0 0;
  &:checked {
    box-shadow: ${0};
  }
`),e=>_e[e.variant].accentColor,e=>e.checkboxSize,e=>e.checkboxSize,e=>_e[e.variant].boxShadow),Pe=r=>{let{children:i,variant:a="primary",bold:n=!1,size:c=1.6}=r,s=l(r,Ee);return t(qe,{bold:n,children:[e(Ke,o({},s,{type:"checkbox",variant:a,checkboxSize:c})),i]})};export{P as Button,Pe as Checkbox,T as Error,Z as ErrorModal,U as LinkButton,Me as Loader,O as Modal,N as ModalBody,A as ModalBodyHeading,G as ModalFooter,Te as NavBar,De as NavBarLogo,ce as ToastContainer,_e as checkboxVariants,h as colors,f as padding,m as zIndex};
//# sourceMappingURL=index.modern.mjs.map
