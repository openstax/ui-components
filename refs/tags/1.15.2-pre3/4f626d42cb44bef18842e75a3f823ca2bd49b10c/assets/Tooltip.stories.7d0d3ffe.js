import{s as e,a as o,j as r}from"./index.4b21b723.js";import{T as m}from"./Tooltip.7c04ceb9.js";import"./theme.978df267.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.706f6a23.js";import"./context.module.96d77dc9.js";import"./useButton.module.69d464ce.js";import"./Info.b7a02ec0.js";const n=e.div`
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
