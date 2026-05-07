import{s as e,a as o,j as r}from"./index.7145ef27.js";import{T as m}from"./Tooltip.9b5ba9f2.js";import"./theme.c0e53f9c.js";import"./palette.5e342580.js";import"./Button.module.a8908cbb.js";import"./useFocusRing.module.12175647.js";import"./context.module.e7a68a4e.js";import"./useButton.module.9f281b7c.js";import"./OverlayArrow.module.73957525.js";import"./Info.f13302a1.js";const n=e.div`
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
