import{s as e,a as o,j as r}from"./index.005ed882.js";import{T as m}from"./Tooltip.ebca4810.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.cd444d72.js";import"./useFocusRing.module.2167027c.js";import"./context.module.d7ed4a1e.js";import"./useButton.module.5d647851.js";import"./OverlayArrow.module.6121e775.js";import"./Info.e614cb7d.js";const n=e.div`
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
