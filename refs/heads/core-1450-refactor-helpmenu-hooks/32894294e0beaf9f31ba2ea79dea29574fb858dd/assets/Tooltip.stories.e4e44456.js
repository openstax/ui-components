import{s as e,a as o,j as r}from"./index.543c969e.js";import{T as m}from"./Tooltip.50298c0e.js";import"./theme.d9792c9b.js";import"./palette.15e4d008.js";import"./Button.module.528c2a46.js";import"./useFocusRing.module.54ccaa8e.js";import"./context.module.f8a89be1.js";import"./useButton.module.a0a69c08.js";import"./OverlayArrow.module.50b960f1.js";import"./Info.7752ff53.js";const n=e.div`
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
