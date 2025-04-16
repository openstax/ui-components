import{s as e,a as o,j as r}from"./index.61fda8ed.js";import{T as m}from"./Tooltip.cb358026.js";import"./theme.add8cbd9.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.8cb1b2c9.js";import"./context.module.32260de9.js";import"./useButton.module.2d20d353.js";import"./Info.22a7bdd1.js";const n=e.div`
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
