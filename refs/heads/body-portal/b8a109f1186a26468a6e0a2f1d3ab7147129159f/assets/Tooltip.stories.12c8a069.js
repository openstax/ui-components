import{s as e,a as o,j as i}from"./index.b5e04d7d.js";import{T as r}from"./Tooltip.2d0874c4.js";import"./theme.6c564bd1.js";import"./palette.15e4d008.js";import"./module.b887d1e0.js";import"./Info.a2653058.js";const n=e.div`
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
