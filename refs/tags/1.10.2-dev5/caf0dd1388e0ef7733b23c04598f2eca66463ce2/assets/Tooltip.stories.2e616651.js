import{s as e,a as o,j as i}from"./index.d71b63e4.js";import{T as r}from"./Tooltip.067fa578.js";import"./theme.83822438.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.a5a85031.js";import"./focusSafely.module.9436f867.js";import"./context.module.50c8c51c.js";import"./Info.4641507c.js";const m=e.div`
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
