import{s as e,a as o,j as i}from"./index.6dbed8fb.js";import{T as r}from"./Tooltip.77de4e7f.js";import"./theme.d1095bc3.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.712260a6.js";import"./focusSafely.module.dacd31db.js";import"./context.module.e68fc31f.js";import"./Info.712bd56b.js";const m=e.div`
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
