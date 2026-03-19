import{s as e,a as o,j as r}from"./index.5d25bf12.js";import{T as m}from"./Tooltip.a2044de6.js";import"./theme.7d07f9a5.js";import"./palette.5e342580.js";import"./Button.module.2873a5d7.js";import"./useFocusRing.module.478b4960.js";import"./context.module.4fa2fb87.js";import"./useButton.module.6fca81ff.js";import"./OverlayArrow.module.c5ca3d0b.js";import"./Info.22b909ce.js";const n=e.div`
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
