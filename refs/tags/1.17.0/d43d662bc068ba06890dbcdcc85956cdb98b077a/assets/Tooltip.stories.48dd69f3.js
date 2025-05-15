import{s as e,a as o,j as r}from"./index.54140804.js";import{T as m}from"./Tooltip.5e7a74e2.js";import"./theme.169dad05.js";import"./palette.15e4d008.js";import"./Button.module.debedefc.js";import"./useFocusRing.module.85ed5b1e.js";import"./useButton.module.37fc617f.js";import"./OverlayArrow.module.83ca7b8d.js";import"./Info.7e355b2b.js";const n=e.div`
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
