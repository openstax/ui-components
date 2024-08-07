import{s as e,a as o,j as i}from"./index.2880c38c.js";import{T as r}from"./Tooltip.c618e1e0.js";import"./theme.ba5e47a6.js";import"./palette.15e4d008.js";import"./Button.module.a27e555d.js";import"./context.module.37483a9d.js";import"./useFocusRing.module.7a42c35d.js";import"./OverlayArrow.module.4f7e2cfc.js";import"./Info.a9e5df67.js";const m=e.div`
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
