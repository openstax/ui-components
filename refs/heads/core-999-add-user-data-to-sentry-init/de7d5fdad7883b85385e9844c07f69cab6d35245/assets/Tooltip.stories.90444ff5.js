import{s as e,a as o,j as r}from"./index.cac12bbc.js";import{T as m}from"./Tooltip.3b564416.js";import"./theme.9f91f243.js";import"./palette.15e4d008.js";import"./Button.module.3632d609.js";import"./useFocusRing.module.0ef0d940.js";import"./useButton.module.2fc10783.js";import"./OverlayArrow.module.e21935d3.js";import"./Info.32a8c354.js";const n=e.div`
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
