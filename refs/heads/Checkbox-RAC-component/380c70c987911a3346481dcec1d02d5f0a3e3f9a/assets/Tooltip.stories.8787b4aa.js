import{s as e,a as o,j as r}from"./index.3a098f21.js";import{T as m}from"./Tooltip.c6b422af.js";import"./theme.23da9b27.js";import"./palette.15e4d008.js";import"./Button.module.7c134bc6.js";import"./useFocusRing.module.f596cf9d.js";import"./context.module.663f57f9.js";import"./useButton.module.698cb966.js";import"./OverlayArrow.module.41dfffe2.js";import"./Info.5459de6e.js";const n=e.div`
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
