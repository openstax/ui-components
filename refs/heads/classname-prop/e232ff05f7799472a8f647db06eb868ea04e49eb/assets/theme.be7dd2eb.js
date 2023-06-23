import{C as s}from"./index.b6e75cf8.js";import{p as a}from"./palette.15e4d008.js";const n={palette:a},r=["navbar","modals","toasts"].reduce((o,e,t)=>(o[e]=(t+1)*10,o),{}),c={navbar:{desktop:3.2,mobile:1.6}},d=75,m=d+.0625,p={desktop:o=>s`
    @media screen and (min-width: ${m}em) {
      ${o}
    }
  `},b={colors:n,zIndex:r,padding:c,breakpoints:p};export{n as c,b as t,r as z};
