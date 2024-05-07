import{s as e,a as o,j as i}from"./index.bc8d8fee.js";import{T as r}from"./Tooltip.552e198d.js";import"./theme.c8930371.js";import"./palette.15e4d008.js";import"./module.191d94f7.js";const n=e.div`
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
`,s="Tooltip content goes here.",u=()=>o(n,{children:["right","top","bottom"].map(t=>i(m,{children:[o(r,{isOpen:!0,placement:t,children:s}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{u as Default};
