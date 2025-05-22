import{s as e,a as o,j as r}from"./index.c86db077.js";import{T as m}from"./Tooltip.bb9001ff.js";import"./theme.832214a2.js";import"./palette.15e4d008.js";import"./Button.module.9005f992.js";import"./useFocusRing.module.37458a88.js";import"./useButton.module.a7482aac.js";import"./OverlayArrow.module.4d87d70b.js";import"./Info.b53d1b2a.js";const n=e.div`
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
