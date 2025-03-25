import{s as e,a as o,j as r}from"./index.6bf93fe2.js";import{T as m}from"./Tooltip.456bd454.js";import"./theme.b8d30864.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.2269b490.js";import"./context.module.589ca550.js";import"./useButton.module.f0379966.js";import"./Info.51d482ad.js";const n=e.div`
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
`,g=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default};
