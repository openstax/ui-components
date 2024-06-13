import{s as e,a as o,j as i}from"./index.b5a386a9.js";import{T as r}from"./Tooltip.d96620c2.js";import"./theme.0ea1d579.js";import"./palette.15e4d008.js";import"./module.a3bd3840.js";import"./Info.c62aef26.js";const n=e.div`
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
