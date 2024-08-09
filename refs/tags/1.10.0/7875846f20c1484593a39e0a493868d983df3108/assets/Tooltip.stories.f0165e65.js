import{s as e,a as o,j as i}from"./index.21f9ba6f.js";import{T as r}from"./Tooltip.2545a9b1.js";import"./theme.9e31fdfa.js";import"./palette.15e4d008.js";import"./Button.module.04477929.js";import"./context.module.07203c7a.js";import"./useFocusRing.module.efaef9c9.js";import"./OverlayArrow.module.e4630699.js";import"./Info.3dda1d34.js";const m=e.div`
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
