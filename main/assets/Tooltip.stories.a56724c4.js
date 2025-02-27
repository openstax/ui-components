import{s as e,a as o,j as r}from"./index.349cec74.js";import{T as m}from"./Tooltip.e2d2e70c.js";import"./theme.0a91c3da.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.a6503097.js";import"./context.module.cad9001c.js";import"./useButton.module.919bbfe3.js";import"./Info.69e3969b.js";const n=e.div`
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
