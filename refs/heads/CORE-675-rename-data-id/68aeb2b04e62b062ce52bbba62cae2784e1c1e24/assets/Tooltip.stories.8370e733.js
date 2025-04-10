import{s as e,a as o,j as r}from"./index.6f16f36e.js";import{T as m}from"./Tooltip.2039db5a.js";import"./theme.9399b2b7.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.e260f4a2.js";import"./context.module.747874e6.js";import"./useButton.module.993b0ec7.js";import"./Info.1f5bebd3.js";const n=e.div`
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
