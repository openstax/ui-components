import{s as e,a as o,j as r}from"./index.029c5d11.js";import{T as m}from"./Tooltip.c726db92.js";import"./theme.9ff19f1b.js";import"./palette.5e342580.js";import"./Button.module.a600c13d.js";import"./useFocusRing.module.39375883.js";import"./context.module.71a07274.js";import"./useButton.module.9bdb49d5.js";import"./OverlayArrow.module.2d802a71.js";import"./Info.bc4cde20.js";const n=e.div`
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
