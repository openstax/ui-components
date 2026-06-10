import{s as e,a as o,j as r}from"./index.6a30f0d0.js";import{T as m}from"./Tooltip.e7084ee9.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.19e8fdd8.js";import"./useFocusRing.module.54536ffb.js";import"./context.module.6897a0b3.js";import"./useButton.module.73a5344e.js";import"./OverlayArrow.module.22e20dec.js";import"./Info.7978a25d.js";const n=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,d=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,x=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
