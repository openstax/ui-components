import{s as e,a as o,j as i}from"./index.b5936662.js";import{T as r}from"./Tooltip.4f4c83f0.js";import"./theme.343d49f9.js";import"./palette.15e4d008.js";import"./Button.module.78e0fdc5.js";import"./context.module.555bfae0.js";import"./useFocusRing.module.6cb18829.js";import"./OverlayArrow.module.0a6f87d4.js";import"./Info.f163fa7e.js";const m=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,n=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,g=()=>o(m,{children:["right","top","bottom"].map(t=>i(n,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default};
