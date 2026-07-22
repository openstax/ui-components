import{s as e,a as o,j as r}from"./index.80ce4677.js";import{T as m}from"./Tooltip.e7637d6f.js";import"./Button.module.125f36fc.js";import"./useFocusRing.module.ef882394.js";import"./Hidden.module.2da4d726.js";import"./useButton.module.62e34136.js";import"./OverlayArrow.module.6071b136.js";import"./context.module.b45c425d.js";import"./Info.309e8d1f.js";import"./palette.5e342580.js";const n=e.div`
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
