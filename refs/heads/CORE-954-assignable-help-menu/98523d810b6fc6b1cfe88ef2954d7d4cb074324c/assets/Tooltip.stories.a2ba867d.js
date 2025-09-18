import{s as e,a as o,j as r}from"./index.5c74dffd.js";import{T as m}from"./Tooltip.492501f8.js";import"./theme.41418f80.js";import"./palette.15e4d008.js";import"./Button.module.9b9b5188.js";import"./useFocusRing.module.e3a9d4d9.js";import"./context.module.c4073eef.js";import"./useButton.module.d6d66488.js";import"./OverlayArrow.module.f7d352e5.js";import"./Info.bf78a580.js";const n=e.div`
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
