import{s as e,a as o,j as r}from"./index.3d4d9294.js";import{T as m}from"./Tooltip.e6eea3a8.js";import"./theme.28440579.js";import"./palette.15e4d008.js";import"./Button.module.d65d22f7.js";import"./useFocusRing.module.acfe7bfa.js";import"./context.module.3d004b19.js";import"./useButton.module.72c7363a.js";import"./OverlayArrow.module.db48e8a3.js";import"./Info.1170c0f1.js";const n=e.div`
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
