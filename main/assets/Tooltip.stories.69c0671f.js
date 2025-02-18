import{s as e,a as o,j as r}from"./index.88b42fe3.js";import{T as m}from"./Tooltip.7ae920d2.js";import"./theme.37cf361a.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.93a692fb.js";import"./context.module.9894b877.js";import"./Hidden.module.4a60847a.js";import"./useButton.module.3aaaaec2.js";import"./Info.234ecbd7.js";const n=e.div`
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
