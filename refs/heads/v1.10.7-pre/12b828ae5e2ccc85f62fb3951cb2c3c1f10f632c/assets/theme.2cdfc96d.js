import{C as n}from"./index.378eb34b.js";import{p as r}from"./palette.15e4d008.js";const c={palette:r,link:{color:"#026AA1",hover:"#005481"}},d=["navbar","sidebar","modals","toasts"].reduce((o,a,t)=>(o[a]=(t+1)*10,o),{}),i={navbar:{desktop:3.2,mobile:1.6}},m=38.75,s=75,e=s+.0625,p={mobileNavBreak:m,mobileBreak:s,desktopBreak:e,desktop:o=>n`
    @media screen and (min-width: ${e}em) {
      ${o}
    }
  `},l={colors:c,zIndex:d,padding:i,breakpoints:p};export{p as b,c,l as t,d as z};
