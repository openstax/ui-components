import{s as e,a as o,j as i}from"./index.37c2728e.js";import{T as r}from"./Tooltip.d9d3186a.js";import"./theme.47e7b6ab.js";import"./palette.15e4d008.js";import"./module.71b67aa4.js";const n=e.div`
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
`,c=()=>o(n,{children:["right","top","bottom"].map(t=>i(m,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{c as Default};
