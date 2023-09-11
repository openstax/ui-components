import{C as s}from"./index.61cb5fe7.js";import{p as a}from"./palette.15e4d008.js";const n={palette:a,link:{color:"#027EB5",hover:"#0064A0"}},r=["navbar","modals","toasts"].reduce((o,e,t)=>(o[e]=(t+1)*10,o),{}),c={navbar:{desktop:3.2,mobile:1.6}},d=75,m=d+.0625,i={desktop:o=>s`
    @media screen and (min-width: ${m}em) {
      ${o}
    }
  `},l={colors:n,zIndex:r,padding:c,breakpoints:i};export{n as c,l as t,r as z};
