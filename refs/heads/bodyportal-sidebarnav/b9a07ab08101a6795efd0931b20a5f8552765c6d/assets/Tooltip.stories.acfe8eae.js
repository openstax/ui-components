import{s as e,a as o,j as i}from"./index.985764e8.js";import{T as r}from"./Tooltip.977e8c4a.js";import"./theme.e21feae2.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.06f305ff.js";import"./focusSafely.module.eb838493.js";import"./context.module.b6f63d20.js";import"./Info.b37a5fc9.js";const m=e.div`
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
