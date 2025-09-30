import{s as e,a as o,j as r}from"./index.4091d793.js";import{T as m}from"./Tooltip.c73e631a.js";import"./theme.e7090325.js";import"./palette.15e4d008.js";import"./Button.module.8a5a2079.js";import"./useFocusRing.module.fa1c8d10.js";import"./context.module.2dea785b.js";import"./useButton.module.661318e7.js";import"./OverlayArrow.module.e0ba7ed5.js";import"./Info.aa381c1d.js";const n=e.div`
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
