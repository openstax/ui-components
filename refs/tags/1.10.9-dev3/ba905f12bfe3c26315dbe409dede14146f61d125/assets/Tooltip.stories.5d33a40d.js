import{s as e,a as o,j as i}from"./index.7db02d4b.js";import{T as r}from"./Tooltip.bc677d9a.js";import"./theme.9c04a50b.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.1fc1b122.js";import"./focusSafely.module.e2426ede.js";import"./context.module.a426bb27.js";import"./Info.2bca3e7d.js";const m=e.div`
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
