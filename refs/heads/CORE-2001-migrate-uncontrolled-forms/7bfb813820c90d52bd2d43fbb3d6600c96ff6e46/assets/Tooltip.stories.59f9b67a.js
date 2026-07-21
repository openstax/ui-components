import{s as e,a as o,j as r}from"./index.41cd4c51.js";import{T as m}from"./Tooltip.6cdaed6c.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.f88dbaa1.js";import"./useFocusRing.module.de24a7eb.js";import"./context.module.f37d58f5.js";import"./useButton.module.f107204e.js";import"./OverlayArrow.module.31f9a440.js";import"./Info.28c7bbd8.js";const n=e.div`
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
