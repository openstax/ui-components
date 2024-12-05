import{s as e,a as o,j as i}from"./index.f976ca7f.js";import{T as r}from"./Tooltip.b3d178db.js";import"./theme.eeba9004.js";import"./palette.15e4d008.js";import"./Button.module.02a87e59.js";import"./context.module.1b130b0b.js";import"./focusSafely.module.e0c62841.js";import"./useFocusRing.module.90eed152.js";import"./OverlayArrow.module.2e5ad5c5.js";import"./Info.9114d100.js";const m=e.div`
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
`,h=()=>o(m,{children:["right","top","bottom"].map(t=>i(n,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as Default};
