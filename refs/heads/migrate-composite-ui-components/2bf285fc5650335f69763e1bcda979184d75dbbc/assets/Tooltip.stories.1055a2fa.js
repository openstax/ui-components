import{s as e,a as o,j as r}from"./index.1de2f366.js";import{T as m}from"./Tooltip.f49bbbed.js";import"./Button.module.2f1674d9.js";import"./useFocusRing.module.2b0b40c5.js";import"./Hidden.module.e16a7b61.js";import"./useButton.module.bf6d7f59.js";import"./OverlayArrow.module.9e2347ec.js";import"./context.module.f9c5733e.js";import"./Info.7bf3fc18.js";import"./palette.5e342580.js";const n=e.div`
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
