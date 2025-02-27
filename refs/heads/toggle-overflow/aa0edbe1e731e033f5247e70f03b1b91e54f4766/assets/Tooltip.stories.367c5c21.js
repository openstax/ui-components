import{s as e,a as o,j as r}from"./index.99257185.js";import{T as m}from"./Tooltip.80ffa758.js";import"./theme.7e62e81a.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.d463c7d1.js";import"./context.module.13096a75.js";import"./useButton.module.57cc30ee.js";import"./Info.494107c6.js";const n=e.div`
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
