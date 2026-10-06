import{s as o,a}from"./index-71cf49a2.js";import{c as t}from"./theme-faedbfeb.js";const i=3,n=o.div`
  margin: ${e=>e.margin??"0 auto"};
  max-width: 90.2rem;
  border: 0.1rem solid ${t.palette.pale};
`,p=o.h3`
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: 0;
`,m=o.div`
  font-size: 1.6rem;
  padding: ${i}rem;
`,c=o.div`
  font-size: 1.4rem;
  color: ${t.palette.neutralMedium};
  margin-top: 1.6rem;
`,l=({children:e,customMargin:r,...s})=>a(n,{margin:r,children:a(m,{...s,"data-testid":"message-box",children:e})});export{m as B,l as M,p as a,c as b};
