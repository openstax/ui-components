import{s as e,a as o,j as r}from"./index.572cdb40.js";import{T as m}from"./Tooltip.dbd8c50e.js";import"./theme.ed4b6f91.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.96eee65c.js";import"./context.module.d321f89c.js";import"./useButton.module.ac31a409.js";import"./Info.37d018fc.js";const n=e.div`
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
