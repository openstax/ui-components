import{s as e,a as o,j as i}from"./index.eb6ac3b8.js";import{T as r}from"./Tooltip.f2b8cf80.js";import"./theme.0a16f905.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.7a0706e6.js";import"./focusSafely.module.150f5f9a.js";import"./context.module.8968ea18.js";import"./Info.468f020f.js";const m=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,n=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,f=()=>o(m,{children:["right","top","bottom"].map(t=>i(n,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as Default};
