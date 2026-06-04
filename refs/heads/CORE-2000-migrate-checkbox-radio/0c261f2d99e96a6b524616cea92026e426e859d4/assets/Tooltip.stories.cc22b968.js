import{s as e,a as o,j as r}from"./index.8a9520f0.js";import{T as m}from"./Tooltip.15fbec83.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.f7748fc3.js";import"./useFocusRing.module.4306117b.js";import"./context.module.c1429bc4.js";import"./useButton.module.10398b9d.js";import"./OverlayArrow.module.cd4082b0.js";import"./Info.af94e65d.js";const n=e.div`
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
