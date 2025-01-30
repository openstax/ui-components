import{s as e,a as o,j as r}from"./index.8a38cd12.js";import{T as m}from"./Tooltip.617ef495.js";import"./theme.b5a405fc.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.7ec6895c.js";import"./context.module.3ec39813.js";import"./Hidden.module.68538019.js";import"./useButton.module.23a57d54.js";import"./Info.fdb8351d.js";const n=e.div`
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
