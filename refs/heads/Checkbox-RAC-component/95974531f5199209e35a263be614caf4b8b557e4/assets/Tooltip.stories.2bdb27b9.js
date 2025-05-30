import{s as e,a as o,j as r}from"./index.44dcedd8.js";import{T as m}from"./Tooltip.601c01fb.js";import"./theme.632686a9.js";import"./palette.15e4d008.js";import"./Button.module.c83c9446.js";import"./useFocusRing.module.d602e730.js";import"./context.module.11ab16e1.js";import"./useButton.module.7e8c5855.js";import"./OverlayArrow.module.885cf600.js";import"./Info.0a652656.js";const n=e.div`
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
