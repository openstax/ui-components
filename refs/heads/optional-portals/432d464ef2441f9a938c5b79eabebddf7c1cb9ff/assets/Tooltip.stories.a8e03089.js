import{s as e,a as o,j as r}from"./index.ab5ff1f7.js";import{T as m}from"./Tooltip.e0a1065f.js";import"./theme.75f8fe72.js";import"./palette.15e4d008.js";import"./Button.module.cb4fdf60.js";import"./context.module.9d54f9e8.js";import"./useFocusRing.module.507dd03a.js";import"./OverlayArrow.module.c35148d0.js";import"./Info.20c67f3c.js";const n=e.div`
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
