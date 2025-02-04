import{s as e,a as o,j as r}from"./index.7cbf562f.js";import{T as m}from"./Tooltip.43737efc.js";import"./theme.7f12f462.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.f0682acb.js";import"./context.module.c6a41c01.js";import"./Hidden.module.2d46bd06.js";import"./useButton.module.5f9c601c.js";import"./Info.abd16019.js";const n=e.div`
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
