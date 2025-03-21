import{s as e,a as o,j as r}from"./index.6f6ddae4.js";import{T as m}from"./Tooltip.34de7b4c.js";import"./theme.a4de61f9.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.96661f55.js";import"./context.module.a76b02d8.js";import"./useButton.module.adc3c81f.js";import"./Info.98293dfe.js";const n=e.div`
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
