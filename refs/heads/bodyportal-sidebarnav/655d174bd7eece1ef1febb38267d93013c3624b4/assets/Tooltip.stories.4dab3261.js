import{s as e,a as o,j as i}from"./index.5adbd7d6.js";import{T as r}from"./Tooltip.d71a89c2.js";import"./theme.830fc1c0.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.41a6c996.js";import"./focusSafely.module.8ed8d087.js";import"./context.module.91afb465.js";import"./Info.60581884.js";const m=e.div`
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
