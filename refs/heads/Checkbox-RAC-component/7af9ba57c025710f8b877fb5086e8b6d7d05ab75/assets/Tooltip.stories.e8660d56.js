import{s as e,a as o,j as r}from"./index.0226d2e0.js";import{T as m}from"./Tooltip.e9faedf8.js";import"./theme.2f0b88da.js";import"./palette.15e4d008.js";import"./Button.module.e6b0bef9.js";import"./useFocusRing.module.813e4eda.js";import"./context.module.5c9b824a.js";import"./useButton.module.d49ae8b9.js";import"./OverlayArrow.module.7a1828c9.js";import"./Info.41fb34dd.js";const n=e.div`
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
