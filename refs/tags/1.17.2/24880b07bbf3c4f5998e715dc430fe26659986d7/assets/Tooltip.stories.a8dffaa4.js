import{s as e,a as o,j as r}from"./index.7c8cb81d.js";import{T as m}from"./Tooltip.eda43a54.js";import"./theme.83d8b33f.js";import"./palette.15e4d008.js";import"./Button.module.9fc2ca07.js";import"./useFocusRing.module.a846a30a.js";import"./context.module.09150909.js";import"./useButton.module.b3409d8e.js";import"./OverlayArrow.module.6c06b253.js";import"./Info.679874b4.js";const n=e.div`
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
