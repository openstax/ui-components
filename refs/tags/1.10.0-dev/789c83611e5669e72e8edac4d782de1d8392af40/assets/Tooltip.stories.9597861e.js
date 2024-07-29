import{s as e,a as o,j as i}from"./index.e0faa04b.js";import{T as r}from"./Tooltip.8a3184bb.js";import"./theme.2ba066c9.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.5ca0fd35.js";import"./context.module.5e87eef7.js";import"./Info.62e3b765.js";const n=e.div`
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
