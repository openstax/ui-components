import{s as e,a as o,j as r}from"./index.2c8eae54.js";import{T as m}from"./Tooltip.59bdfb25.js";import"./theme.06c06756.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.10a99003.js";import"./context.module.8669ac12.js";import"./useButton.module.fe8e7a6e.js";import"./Info.ec802df7.js";const n=e.div`
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
