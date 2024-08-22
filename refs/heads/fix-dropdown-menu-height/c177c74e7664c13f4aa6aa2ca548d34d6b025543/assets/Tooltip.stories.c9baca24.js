import{s as e,a as o,j as i}from"./index.061265c3.js";import{T as r}from"./Tooltip.2bbb709a.js";import"./theme.d295de20.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.2f53b472.js";import"./focusSafely.module.ecd252aa.js";import"./context.module.487dbbc3.js";import"./Info.332102e1.js";const m=e.div`
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
