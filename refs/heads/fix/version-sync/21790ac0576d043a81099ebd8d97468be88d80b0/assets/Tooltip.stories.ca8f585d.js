import{s as e,a as o,j as r}from"./index.5f5753fc.js";import{T as m}from"./Tooltip.a050fc01.js";import"./theme.a6d44360.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.e123dba0.js";import"./context.module.930c39f0.js";import"./useButton.module.b99775bc.js";import"./Info.26b6cbb7.js";const n=e.div`
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
