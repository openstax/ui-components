import{s as e,a as o,j as r}from"./index.698c06ff.js";import{T as m}from"./Tooltip.d503e9e1.js";import"./theme.e00cde55.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.68143d4c.js";import"./context.module.339fe9c2.js";import"./Hidden.module.40052b85.js";import"./useButton.module.2eb38fb0.js";import"./Info.de1fd655.js";const n=e.div`
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
