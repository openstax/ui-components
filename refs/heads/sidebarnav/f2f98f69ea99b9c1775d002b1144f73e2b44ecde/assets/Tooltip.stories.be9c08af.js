import{s as e,a as o,j as i}from"./index.8b248e8d.js";import{T as r}from"./Tooltip.ca00e196.js";import"./theme.c5c687aa.js";import"./palette.15e4d008.js";import"./Button.module.6de1fda6.js";import"./context.module.fcd29e30.js";import"./useFocusRing.module.33ad2167.js";import"./OverlayArrow.module.05873ece.js";import"./Info.e7681c1a.js";const m=e.div`
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
`,g=()=>o(m,{children:["right","top","bottom"].map(t=>i(n,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default};
