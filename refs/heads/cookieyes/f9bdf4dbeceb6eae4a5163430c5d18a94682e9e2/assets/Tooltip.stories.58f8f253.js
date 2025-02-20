import{s as e,a as o,j as r}from"./index.77ce5760.js";import{T as m}from"./Tooltip.0fee3e4a.js";import"./theme.403f74bd.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.c17b83e7.js";import"./context.module.8546d439.js";import"./Hidden.module.6c528480.js";import"./useButton.module.3ef2f14c.js";import"./Info.cdd2ef13.js";const n=e.div`
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
