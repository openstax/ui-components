import{C as t}from"./index.7f352088.js";import{p as r}from"./palette.5e342580.js";const i={palette:r,link:{color:"#026AA1",hover:"#005481"}},c=["navbar","sidebar","modals","toasts"].reduce((o,a,n)=>(o[a]=(n+1)*10,o),{}),d={navbar:{desktop:3.2,mobile:1.6}},k=t`
  outline: 0.2rem auto Highlight;
  outline: 0.2rem auto -webkit-focus-ring-color;
`,m=38.75,s=75,e=s+.0625,l={mobileNavBreak:m,mobileBreak:s,desktopBreak:e,desktop:o=>t`
    @media screen and (min-width: ${e}em) {
      ${o}
    }
  `},u={colors:i,zIndex:c,padding:d,breakpoints:l};export{l as b,i as c,k as d,u as t,c as z};
