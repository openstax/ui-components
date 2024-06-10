import{C as o}from"./index.6b082630.js";import{p as s}from"./palette.15e4d008.js";const n={palette:s,link:{color:"#027EB5",hover:"#0064A0"}},m=["navbar","modals","toasts"].reduce((e,t,a)=>(e[t]=(a+1)*10,e),{}),r={navbar:{desktop:3.2,mobile:1.6}},d=50,i=75,c=i+.0625,p={mobileMedium:e=>o`
      @media screen and (max-width: ${d}em) {
        ${e}
      }
    `,desktop:e=>o`
    @media screen and (min-width: ${c}em) {
      ${e}
    }
  `},b={colors:n,zIndex:m,padding:r,breakpoints:p};export{n as c,b as t,m as z};
