import{s as e,a as o,j as r}from"./index.eb958383.js";import{T as m}from"./Tooltip.97d6204a.js";import"./theme.27d25ff7.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.8e0bb7ce.js";import"./context.module.9550536c.js";import"./useButton.module.ea060109.js";import"./Info.ac53a983.js";const n=e.div`
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
`,g=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default};
