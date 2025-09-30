import{s as e,a as o,j as r}from"./index.417789e7.js";import{T as m}from"./Tooltip.8e2c7ee9.js";import"./theme.11dcc8ad.js";import"./palette.15e4d008.js";import"./Button.module.b8257a02.js";import"./useFocusRing.module.1247a38a.js";import"./context.module.5c58119b.js";import"./useButton.module.e39520c6.js";import"./OverlayArrow.module.1a65dd6d.js";import"./Info.3048738e.js";const n=e.div`
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
