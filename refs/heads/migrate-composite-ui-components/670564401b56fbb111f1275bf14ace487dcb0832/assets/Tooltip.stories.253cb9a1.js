import{s as e,a as o,j as r}from"./index.044b63e4.js";import{T as m}from"./Tooltip.fb17e4fd.js";import"./Button.module.154621d6.js";import"./useFocusRing.module.b82e6b75.js";import"./Hidden.module.d46d8721.js";import"./useButton.module.5b1634a6.js";import"./OverlayArrow.module.acabb315.js";import"./context.module.8a5420b1.js";import"./Info.1368c16f.js";import"./palette.5e342580.js";const n=e.div`
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
