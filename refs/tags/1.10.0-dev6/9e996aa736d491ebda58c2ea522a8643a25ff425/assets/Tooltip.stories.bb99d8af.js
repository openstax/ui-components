import{s as e,a as o,j as i}from"./index.2b45137a.js";import{T as r}from"./Tooltip.86b5a58e.js";import"./theme.a7eebc93.js";import"./palette.15e4d008.js";import"./Button.module.fd32e1a5.js";import"./context.module.ec4ac92e.js";import"./useFocusRing.module.86ed4121.js";import"./OverlayArrow.module.63e72576.js";import"./Info.0a6a824e.js";const m=e.div`
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
