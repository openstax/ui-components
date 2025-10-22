import{s as e,a as o,j as r}from"./index.cbfa8774.js";import{T as m}from"./Tooltip.7e0d6f82.js";import"./theme.4163cde7.js";import"./palette.15e4d008.js";import"./Button.module.0081712b.js";import"./useFocusRing.module.e3564eb8.js";import"./context.module.88bcfb75.js";import"./useButton.module.bddd2370.js";import"./OverlayArrow.module.6ec7fd9b.js";import"./Info.0ed086c9.js";const n=e.div`
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
