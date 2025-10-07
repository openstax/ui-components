import{s as e,a as o,j as r}from"./index.518083e7.js";import{T as m}from"./Tooltip.a585a259.js";import"./theme.f311a2da.js";import"./palette.15e4d008.js";import"./Button.module.850e3dfe.js";import"./useFocusRing.module.64931f0a.js";import"./context.module.1c5c4981.js";import"./useButton.module.8af71f18.js";import"./OverlayArrow.module.029abaf3.js";import"./Info.adb85390.js";const n=e.div`
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
