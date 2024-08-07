import{s as e,a as o,j as i}from"./index.cbfa7628.js";import{T as r}from"./Tooltip.b117ebd3.js";import"./theme.9e35745b.js";import"./palette.15e4d008.js";import"./Button.module.02682a6d.js";import"./context.module.b68994a2.js";import"./useFocusRing.module.7cf0f223.js";import"./OverlayArrow.module.b0d7d5f7.js";import"./Info.a5cca106.js";const m=e.div`
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
