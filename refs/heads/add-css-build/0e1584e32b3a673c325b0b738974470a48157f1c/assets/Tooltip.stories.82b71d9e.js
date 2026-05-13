import{s as e,a as o,j as r}from"./index.b7b53794.js";import{T as m}from"./Tooltip.24a7e7e7.js";import"./theme.baaf5830.js";import"./palette.5e342580.js";import"./Button.module.6ee831b3.js";import"./useFocusRing.module.ad4047d1.js";import"./context.module.6d9287b5.js";import"./useButton.module.dd447af0.js";import"./OverlayArrow.module.12f2b282.js";import"./Info.f8a61198.js";const n=e.div`
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
