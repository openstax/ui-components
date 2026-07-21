import{s as e,a as o,j as r}from"./index.6230b141.js";import{T as m}from"./Tooltip.9b432d5d.js";import"./Button.module.8517c931.js";import"./useFocusRing.module.75522451.js";import"./Hidden.module.20bb48f4.js";import"./useButton.module.4a54fb63.js";import"./OverlayArrow.module.aacc0374.js";import"./context.module.e700db4f.js";import"./Info.19ca86ea.js";import"./palette.5e342580.js";const n=e.div`
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
