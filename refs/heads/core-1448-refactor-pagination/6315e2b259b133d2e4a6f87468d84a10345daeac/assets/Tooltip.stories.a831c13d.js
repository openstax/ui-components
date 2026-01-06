import{s as e,a as o,j as r}from"./index.7f66607f.js";import{T as m}from"./Tooltip.e276b8d2.js";import"./theme.2861fddf.js";import"./palette.15e4d008.js";import"./Button.module.3153aec9.js";import"./useFocusRing.module.451ef938.js";import"./context.module.05c081c9.js";import"./useButton.module.c8cba45a.js";import"./OverlayArrow.module.f4d0ffb8.js";import"./Info.edd19e07.js";const n=e.div`
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
