import{s as e,a as o,j as r}from"./index.d75e0607.js";import{T as m}from"./Tooltip.8cb79c56.js";import"./theme.5fee477c.js";import"./palette.15e4d008.js";import"./Button.module.03418106.js";import"./useFocusRing.module.d4d86887.js";import"./context.module.25743320.js";import"./useButton.module.86f36f81.js";import"./OverlayArrow.module.e2b47b46.js";import"./Info.94d6bbde.js";const n=e.div`
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
`,x=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
