import{s as e,a as o,j as i}from"./index.b1c0c990.js";import{T as r}from"./Tooltip.9ce5e2e5.js";import"./theme.d4b7cbef.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.e5d21536.js";import"./focusSafely.module.928e7deb.js";import"./context.module.eafe6d51.js";import"./Info.4d36d9bd.js";const m=e.div`
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
