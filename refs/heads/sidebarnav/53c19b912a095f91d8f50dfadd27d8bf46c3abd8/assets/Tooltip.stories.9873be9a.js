import{s as e,a as o,j as i}from"./index.794f4153.js";import{T as r}from"./Tooltip.e273a4dc.js";import"./theme.c8d1c9df.js";import"./palette.15e4d008.js";import"./Button.module.c772a655.js";import"./context.module.a0714fae.js";import"./useFocusRing.module.2d92e383.js";import"./OverlayArrow.module.42165790.js";import"./Info.79bee82e.js";const m=e.div`
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
