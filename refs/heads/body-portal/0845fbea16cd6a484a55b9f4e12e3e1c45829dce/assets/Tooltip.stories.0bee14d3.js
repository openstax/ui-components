import{s as e,a as o,j as i}from"./index.12ab52f0.js";import{T as r}from"./Tooltip.c28dc610.js";import"./theme.9efe0972.js";import"./palette.15e4d008.js";import"./module.5e80496e.js";import"./Info.5070b5af.js";const n=e.div`
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
