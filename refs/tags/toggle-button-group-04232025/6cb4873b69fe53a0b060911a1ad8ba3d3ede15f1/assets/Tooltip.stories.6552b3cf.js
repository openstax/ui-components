import{s as e,a as o,j as r}from"./index.722bcc42.js";import{T as m}from"./Tooltip.42e22bd1.js";import"./theme.c3194663.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.ad1eabed.js";import"./context.module.018045bd.js";import"./useButton.module.a8cb4965.js";import"./Info.67937004.js";const n=e.div`
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
