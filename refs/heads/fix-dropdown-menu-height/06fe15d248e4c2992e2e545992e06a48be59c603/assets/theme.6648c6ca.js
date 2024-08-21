import{C as n}from"./index.3ca53d7c.js";import{p as r}from"./palette.15e4d008.js";const c={palette:r,link:{color:"#027EB5",hover:"#0064A0"}},d=["navbar","modals","toasts"].reduce((o,t,a)=>(o[t]=(a+1)*10,o),{}),m={navbar:{desktop:3.2,mobile:1.6}},s=75,e=s+.0625,i={mobileBreak:s,desktopBreak:e,desktop:o=>n`
    @media screen and (min-width: ${e}em) {
      ${o}
    }
  `},b={colors:c,zIndex:d,padding:m,breakpoints:i};export{i as b,c,b as t,d as z};
