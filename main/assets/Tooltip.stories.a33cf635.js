import{s as e,a as o,j as i}from"./index.36944e2b.js";import{T as r}from"./Tooltip.50d100a0.js";import"./theme.11fb1549.js";import"./palette.15e4d008.js";import"./module.d939bb85.js";import"./Info.d0c66439.js";const n=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,m=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,u=()=>o(n,{children:["right","top","bottom"].map(t=>i(m,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{u as Default};
