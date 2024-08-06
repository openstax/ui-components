import{s as e,a as o,j as i}from"./index.952a733a.js";import{T as r}from"./Tooltip.bd6cf8ba.js";import"./theme.080edf1d.js";import"./palette.15e4d008.js";import"./Button.module.da3f7263.js";import"./context.module.b8eba57f.js";import"./useFocusRing.module.4b50e563.js";import"./OverlayArrow.module.5064af75.js";import"./Info.2e557cf6.js";const m=e.div`
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
