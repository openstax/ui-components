import{s as e,a as o,j as r}from"./index.9517b6b6.js";import{T as m}from"./Tooltip.3b3e6afd.js";import"./theme.ea3df0c5.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.64ffe563.js";import"./context.module.eddded96.js";import"./Hidden.module.3346244f.js";import"./useButton.module.97a108aa.js";import"./Info.f7dc2fc2.js";const n=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,d=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,h=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as Default};
