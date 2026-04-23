import{s as e,a as o,j as r}from"./index.e1c8d601.js";import{T as m}from"./Tooltip.be2980bc.js";import"./theme.d8d45c04.js";import"./palette.5e342580.js";import"./Button.module.35838380.js";import"./useFocusRing.module.5cb20062.js";import"./context.module.a6c381cc.js";import"./useButton.module.46381871.js";import"./OverlayArrow.module.9ccd21cd.js";import"./Info.9013d59f.js";const n=e.div`
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
