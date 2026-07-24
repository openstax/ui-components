import{s as e,a as o,j as r}from"./index.c3ceefc2.js";import{T as m}from"./Tooltip.a9433e4a.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.d0053608.js";import"./useFocusRing.module.f281148c.js";import"./context.module.17dad520.js";import"./useButton.module.bd676ca8.js";import"./OverlayArrow.module.387001f7.js";import"./Info.2dbf01a8.js";const n=e.div`
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
