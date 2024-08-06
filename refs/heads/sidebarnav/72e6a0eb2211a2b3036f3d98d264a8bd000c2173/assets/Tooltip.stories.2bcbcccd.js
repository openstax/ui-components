import{s as e,a as o,j as i}from"./index.22b301c1.js";import{T as r}from"./Tooltip.737558e1.js";import"./theme.76244a22.js";import"./palette.15e4d008.js";import"./Button.module.2af3e7b2.js";import"./context.module.a9204994.js";import"./useFocusRing.module.485a0c39.js";import"./OverlayArrow.module.cec7107f.js";import"./Info.7f481365.js";const m=e.div`
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
