import{s as e,a as o,j as r}from"./index.e2cd4e30.js";import{T as m}from"./Tooltip.1455015e.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.9054b322.js";import"./useFocusRing.module.daff7fe4.js";import"./context.module.a95fa1a8.js";import"./useButton.module.ba02c15d.js";import"./OverlayArrow.module.d47d7814.js";import"./Info.17d2fc91.js";const n=e.div`
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
