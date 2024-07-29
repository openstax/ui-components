import{s as e,a as o,j as i}from"./index.40b5cd5d.js";import{T as r}from"./Tooltip.536baa7e.js";import"./theme.78126ace.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.a5e9789c.js";import"./context.module.d5710680.js";import"./Info.062e785b.js";const n=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,m=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,w=()=>o(n,{children:["right","top","bottom"].map(t=>i(m,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};
