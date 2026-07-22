import{s as e,a as o,j as r}from"./index.34d5bdce.js";import{T as m}from"./Tooltip.853d743b.js";import"./Button.module.09eccfc1.js";import"./useFocusRing.module.b94519a6.js";import"./Hidden.module.65452010.js";import"./useButton.module.ae867694.js";import"./OverlayArrow.module.0fa10ef0.js";import"./context.module.e8b1fb9f.js";import"./Info.43cd40c4.js";import"./palette.5e342580.js";const n=e.div`
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
