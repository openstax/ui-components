import{s as e,a as o,j as r}from"./index.6dbbbd6e.js";import{T as m}from"./Tooltip.30bab36f.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.2fde215c.js";import"./useFocusRing.module.648b06a9.js";import"./context.module.87926d08.js";import"./useButton.module.74099248.js";import"./OverlayArrow.module.c4b6c3bf.js";import"./Info.0aaf6440.js";const n=e.div`
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
`,x=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
