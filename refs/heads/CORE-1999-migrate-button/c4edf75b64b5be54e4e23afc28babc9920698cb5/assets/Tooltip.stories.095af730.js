import{s as e,a as o,j as r}from"./index.899a49f1.js";import{T as m}from"./Tooltip.2b0a600d.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.418a5c44.js";import"./useFocusRing.module.92642296.js";import"./context.module.7b936344.js";import"./useButton.module.447bc92f.js";import"./OverlayArrow.module.a2f38f96.js";import"./Info.55cdc852.js";const n=e.div`
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
