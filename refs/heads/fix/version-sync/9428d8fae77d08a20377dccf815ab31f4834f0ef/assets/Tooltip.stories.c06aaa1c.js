import{s as e,a as o,j as r}from"./index.47fe34cf.js";import{T as m}from"./Tooltip.39cc37fc.js";import"./theme.73f35048.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.1907772a.js";import"./context.module.246d8d1d.js";import"./useButton.module.4b8ff143.js";import"./Info.4ddf30bd.js";const n=e.div`
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
`,g=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default};
