import{s as e,a as o,j as i}from"./index.f6f0c2a4.js";import{T as r}from"./Tooltip.f52b789b.js";import"./theme.b3f8847e.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.412dec9d.js";import"./focusSafely.module.940a7efd.js";import"./context.module.53086bd7.js";import"./Info.a7a07b3c.js";const m=e.div`
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
