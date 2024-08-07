import{s as e,a as o,j as i}from"./index.f30ca328.js";import{T as r}from"./Tooltip.db6bff7d.js";import"./theme.41a5e6b1.js";import"./palette.15e4d008.js";import"./Button.module.1e213f96.js";import"./context.module.6724ca8c.js";import"./useFocusRing.module.6e2f22d0.js";import"./OverlayArrow.module.d9eb8713.js";import"./Info.b20bc117.js";const m=e.div`
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
