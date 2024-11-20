import{s as e,a as o,j as i}from"./index.31aa55de.js";import{T as r}from"./Tooltip.48aa780c.js";import"./theme.fdec47b6.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.d45304ab.js";import"./focusSafely.module.a3bcc026.js";import"./context.module.067d51d2.js";import"./Info.98b5d775.js";const m=e.div`
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
