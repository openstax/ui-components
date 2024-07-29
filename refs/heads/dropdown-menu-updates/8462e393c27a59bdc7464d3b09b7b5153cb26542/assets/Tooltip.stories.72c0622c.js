import{s as e,a as o,j as i}from"./index.29e8c80b.js";import{T as r}from"./Tooltip.b80a60ef.js";import"./theme.eaa51723.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.8d15e9a4.js";import"./context.module.da52d543.js";import"./Info.b2ba74d6.js";const n=e.div`
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
`,w=()=>o(n,{children:["right","top","bottom"].map(t=>i(m,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};
