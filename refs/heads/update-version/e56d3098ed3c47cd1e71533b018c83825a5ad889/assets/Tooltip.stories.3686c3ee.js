import{s as e,a as o,j as i}from"./index.fe4a9d5c.js";import{T as r}from"./Tooltip.c34e2568.js";import"./theme.5d33a4b5.js";import"./palette.15e4d008.js";import"./module.614a5ba7.js";const n=e.div`
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
