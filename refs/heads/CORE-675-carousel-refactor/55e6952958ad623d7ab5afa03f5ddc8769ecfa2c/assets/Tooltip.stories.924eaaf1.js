import{s as e,a as o,j as r}from"./index.6fd16f1d.js";import{T as m}from"./Tooltip.1f1e2141.js";import"./theme.6704b98c.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.b9015ac3.js";import"./context.module.e28c74c6.js";import"./Hidden.module.5cc1bccd.js";import"./useButton.module.a23993e8.js";import"./Info.e0a80427.js";const n=e.div`
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
`,h=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as Default};
