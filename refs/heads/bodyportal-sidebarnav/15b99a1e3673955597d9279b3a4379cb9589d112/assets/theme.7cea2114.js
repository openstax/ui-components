import{C as n}from"./index.472bc33b.js";import{p as r}from"./palette.15e4d008.js";const c={palette:r,link:{color:"#027EB5",hover:"#0064A0"}},d=["main","navbar","sidebar","modals","toasts"].reduce((o,a,t)=>(o[a]=(t+1)*10,o),{}),i={navbar:{desktop:3.2,mobile:1.6}},s=75,e=s+.0625,m={mobileBreak:s,desktopBreak:e,desktop:o=>n`
    @media screen and (min-width: ${e}em) {
      ${o}
    }
  `},k={colors:c,zIndex:d,padding:i,breakpoints:m};export{m as b,c,k as t,d as z};