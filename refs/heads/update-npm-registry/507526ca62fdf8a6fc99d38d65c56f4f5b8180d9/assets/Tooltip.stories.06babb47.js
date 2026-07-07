import{s as e,a as o,j as r}from"./index.e722ff33.js";import{T as m}from"./Tooltip.5279941f.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.743cd07c.js";import"./useFocusRing.module.0c83f502.js";import"./context.module.bbc0f41f.js";import"./useButton.module.1eadec84.js";import"./OverlayArrow.module.e6f56a1c.js";import"./Info.ae49aed0.js";const n=e.div`
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
