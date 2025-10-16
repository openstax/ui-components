import{s as e,a as t}from"./index.ebaf06cd.js";import{c as r}from"./theme.a2ab34a0.js";const i=3,n=e.div`
  margin: ${a=>{var o;return(o=a.margin)!=null?o:"0 auto"}};
  max-width: 90.2rem;
  border: 0.1rem solid ${r.palette.pale};
`,p=e.h3`
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: 0;
`,m=e.div`
  font-size: 1.6rem;
  padding: ${i}rem;
`,c=e.div`
  font-size: 1.4rem;
  color: ${r.palette.neutralMedium};
  margin-top: 1.6rem;
`,l=({children:a,customMargin:o,...s})=>t(n,{margin:o,children:t(m,{...s,"data-testid":"message-box",children:a})});export{m as B,l as M,p as a,c as b};
