import{s as e,a as o,j as r}from"./index.a66d3dbe.js";import{T as m}from"./Tooltip.395b9a5e.js";import"./theme.65cc65bc.js";import"./palette.15e4d008.js";import"./Button.module.f480ae02.js";import"./useFocusRing.module.d3d4f3f4.js";import"./context.module.a3e5fc2c.js";import"./useButton.module.f889ca35.js";import"./OverlayArrow.module.17a5e29f.js";import"./Info.d8a3314e.js";const n=e.div`
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
