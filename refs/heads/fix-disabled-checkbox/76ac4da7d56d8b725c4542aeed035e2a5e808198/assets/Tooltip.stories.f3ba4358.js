import{s as e,a as o,j as r}from"./index.78285902.js";import{T as m}from"./Tooltip.3cd6115b.js";import"./theme.d8535946.js";import"./palette.5e342580.js";import"./Button.module.17dbe4b1.js";import"./useFocusRing.module.17274fc5.js";import"./context.module.81474cbb.js";import"./useButton.module.71eade0f.js";import"./OverlayArrow.module.6e2792af.js";import"./Info.b109239f.js";const n=e.div`
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
