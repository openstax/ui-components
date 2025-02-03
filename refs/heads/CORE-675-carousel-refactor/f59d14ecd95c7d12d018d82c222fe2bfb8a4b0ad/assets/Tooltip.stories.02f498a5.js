import{s as e,a as o,j as r}from"./index.b539d75f.js";import{T as m}from"./Tooltip.091cbccc.js";import"./theme.cfb29cae.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.ea561ea8.js";import"./context.module.ae95c2b3.js";import"./Hidden.module.8e14e3fe.js";import"./useButton.module.35dc5e83.js";import"./Info.1cd7a926.js";const n=e.div`
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
