import{s as e,a as o,j as r}from"./index.40ca4ef0.js";import{T as m}from"./Tooltip.9093e2ec.js";import"./theme.21d7e301.js";import"./palette.15e4d008.js";import"./Button.module.e79344d2.js";import"./useFocusRing.module.dd225e63.js";import"./useButton.module.b3bb057b.js";import"./OverlayArrow.module.30892b24.js";import"./Info.b079cba1.js";const n=e.div`
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
