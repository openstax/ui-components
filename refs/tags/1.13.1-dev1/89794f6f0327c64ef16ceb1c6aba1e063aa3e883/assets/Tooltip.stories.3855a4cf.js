import{s as e,a as o,j as r}from"./index.f8d78af2.js";import{T as m}from"./Tooltip.2359d4bc.js";import"./theme.23714136.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.237670a1.js";import"./context.module.98b3790d.js";import"./Hidden.module.11724547.js";import"./useButton.module.edebdc71.js";import"./Info.c99af8a4.js";const n=e.div`
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
`,h=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as Default};
