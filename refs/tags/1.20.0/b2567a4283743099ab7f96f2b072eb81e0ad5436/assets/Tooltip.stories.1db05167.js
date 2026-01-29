import{s as e,a as o,j as r}from"./index.863dff2c.js";import{T as m}from"./Tooltip.368c59bf.js";import"./theme.c3e714e8.js";import"./palette.5e342580.js";import"./Button.module.40ea32b2.js";import"./useFocusRing.module.ad42d1ce.js";import"./context.module.ddc5fa6e.js";import"./useButton.module.06c56ab7.js";import"./OverlayArrow.module.b0d5f3a3.js";import"./Info.cdbd8bb5.js";const n=e.div`
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
