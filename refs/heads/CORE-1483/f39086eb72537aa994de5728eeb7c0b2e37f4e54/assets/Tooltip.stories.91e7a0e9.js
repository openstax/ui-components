import{s as e,a as o,j as r}from"./index.b757a763.js";import{T as m}from"./Tooltip.b71ee078.js";import"./theme.41870ae7.js";import"./palette.15e4d008.js";import"./Button.module.e1acaf65.js";import"./useFocusRing.module.e52cf5d7.js";import"./context.module.14418222.js";import"./useButton.module.2c09f88e.js";import"./OverlayArrow.module.0dcbb3b2.js";import"./Info.f2850b42.js";const n=e.div`
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
