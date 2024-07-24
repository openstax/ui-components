import{s as e,a as o,j as i}from"./index.9c531c8a.js";import{T as r}from"./Tooltip.33e15b03.js";import"./theme.f923e64e.js";import"./palette.15e4d008.js";import"./module.42b569a3.js";import"./Info.2e9f0347.js";const n=e.div`
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
