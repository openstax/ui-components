import{s as e,a as o,j as r}from"./index.652f5500.js";import{T as m}from"./Tooltip.f720fbf6.js";import"./Button.module.4fde5ab2.js";import"./useFocusRing.module.eae33ec3.js";import"./Hidden.module.27893b24.js";import"./useButton.module.3697732d.js";import"./OverlayArrow.module.ac7895ea.js";import"./context.module.96e305a7.js";import"./Info.c470efa6.js";import"./palette.5e342580.js";const n=e.div`
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
