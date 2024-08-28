import{s as e,a as o,j as i}from"./index.cdc70e2f.js";import{T as r}from"./Tooltip.7acf64b0.js";import"./theme.09e6b53e.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.b1455fd9.js";import"./focusSafely.module.8c45bb2f.js";import"./context.module.3b03806b.js";import"./Info.26f1596a.js";const m=e.div`
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
