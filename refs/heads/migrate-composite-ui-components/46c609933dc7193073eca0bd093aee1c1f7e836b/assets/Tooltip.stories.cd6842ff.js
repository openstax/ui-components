import{s as e,a as o,j as r}from"./index.427cc032.js";import{T as m}from"./Tooltip.01064452.js";import"./Button.module.b10ef64b.js";import"./useFocusRing.module.0cd3bb65.js";import"./Hidden.module.b6edd5b7.js";import"./useButton.module.6a96a111.js";import"./OverlayArrow.module.31229e76.js";import"./context.module.c0ea8b91.js";import"./Info.89a44261.js";import"./palette.5e342580.js";const n=e.div`
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
