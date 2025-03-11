import{s as e,a as o,j as r}from"./index.351ad153.js";import{T as m}from"./Tooltip.7fb0b0df.js";import"./theme.af08cd70.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.aa931928.js";import"./context.module.52ad8793.js";import"./useButton.module.ebf3f87b.js";import"./Info.6b4bad2c.js";const n=e.div`
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
