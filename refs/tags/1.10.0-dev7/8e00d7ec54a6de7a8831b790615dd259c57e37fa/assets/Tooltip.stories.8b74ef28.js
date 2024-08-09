import{s as e,a as o,j as i}from"./index.5d82df8f.js";import{T as r}from"./Tooltip.b22cc370.js";import"./theme.0144476e.js";import"./palette.15e4d008.js";import"./Button.module.979ca885.js";import"./context.module.375a2896.js";import"./useFocusRing.module.327dbd58.js";import"./OverlayArrow.module.6706fdbe.js";import"./Info.97772dc9.js";const m=e.div`
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
