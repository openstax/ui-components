import{s as e,a as o,j as r}from"./index.a9467b83.js";import{T as m}from"./Tooltip.14848a54.js";import"./theme.af2d03ac.js";import"./palette.5e342580.js";import"./Button.module.75356183.js";import"./useFocusRing.module.9d8a2ae0.js";import"./context.module.225b5bda.js";import"./useButton.module.736605a9.js";import"./OverlayArrow.module.f1d52674.js";import"./Info.3c98d314.js";const n=e.div`
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
