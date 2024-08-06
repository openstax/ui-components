import{s as e,a as o,j as i}from"./index.577b36d5.js";import{T as r}from"./Tooltip.8671447c.js";import"./theme.a5986cca.js";import"./palette.15e4d008.js";import"./Button.module.7589dc1e.js";import"./context.module.4e8283eb.js";import"./useFocusRing.module.735b87f1.js";import"./OverlayArrow.module.b715b313.js";import"./Info.623e2a4f.js";const m=e.div`
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
