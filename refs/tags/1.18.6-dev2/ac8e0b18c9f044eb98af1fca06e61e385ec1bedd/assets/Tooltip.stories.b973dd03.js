import{s as e,a as o,j as r}from"./index.16cb692d.js";import{T as m}from"./Tooltip.132a2257.js";import"./theme.0b073f40.js";import"./palette.15e4d008.js";import"./Button.module.a7cedcd1.js";import"./useFocusRing.module.feffa39c.js";import"./context.module.3a7e72a4.js";import"./useButton.module.676e1a9a.js";import"./OverlayArrow.module.042a0400.js";import"./Info.ced8c6f6.js";const n=e.div`
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
