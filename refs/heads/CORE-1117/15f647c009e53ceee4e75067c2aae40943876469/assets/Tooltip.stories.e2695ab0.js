import{s as e,a as o,j as r}from"./index.4b36b55f.js";import{T as m}from"./Tooltip.f5c3c267.js";import"./theme.d87ac4c6.js";import"./palette.15e4d008.js";import"./Button.module.63b55d3e.js";import"./useFocusRing.module.6aba7ad5.js";import"./context.module.2a97766e.js";import"./useButton.module.5bf66407.js";import"./OverlayArrow.module.364ad344.js";import"./Info.1d1b97d5.js";const n=e.div`
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
