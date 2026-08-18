import{s as o,j as t}from"./index-052b89a7.js";import{c as a}from"./theme-e8c258fa.js";const i=3,n=o.div`
  margin: ${e=>e.margin??"0 auto"};
  max-width: 90.2rem;
  border: 0.1rem solid ${a.palette.pale};
`,p=o.h3`
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: 0;
`,m=o.div`
  font-size: 1.6rem;
  padding: ${i}rem;
`,c=o.div`
  font-size: 1.4rem;
  color: ${a.palette.neutralMedium};
  margin-top: 1.6rem;
`,l=({children:e,customMargin:r,...s})=>t(n,{margin:r,children:t(m,{...s,"data-testid":"message-box",children:e})});export{m as B,l as M,p as a,c as b};
