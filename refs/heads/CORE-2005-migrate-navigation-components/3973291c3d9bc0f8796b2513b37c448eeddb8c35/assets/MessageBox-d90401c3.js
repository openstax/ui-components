import{s as o,j as t}from"./index-a38b551c.js";import{c as a}from"./theme-d4ad8b5e.js";const i=3,n=o.div`
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
