import{s as e,a as o,j as r}from"./index.7f4708a9.js";import{T as m}from"./Tooltip.9b7a8369.js";import"./theme.167f6352.js";import"./palette.15e4d008.js";import"./Button.module.54f9d076.js";import"./useFocusRing.module.c278eff0.js";import"./context.module.08242fd6.js";import"./useButton.module.58d6885b.js";import"./OverlayArrow.module.b6e8b209.js";import"./Info.22376c2c.js";const n=e.div`
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
