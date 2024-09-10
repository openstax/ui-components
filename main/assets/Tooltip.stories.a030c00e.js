import{s as e,a as o,j as i}from"./index.c856cedd.js";import{T as r}from"./Tooltip.cb4fcc3f.js";import"./theme.84cc74f0.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.157557f1.js";import"./focusSafely.module.f666e2ed.js";import"./context.module.4158097e.js";import"./Info.187e0064.js";const m=e.div`
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
