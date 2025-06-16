import{s as e,a as o,j as r}from"./index.31ec41c5.js";import{T as m}from"./Tooltip.a67a8499.js";import"./theme.455e3fb8.js";import"./palette.15e4d008.js";import"./Button.module.5ebc7e98.js";import"./useFocusRing.module.620dc375.js";import"./context.module.b256b1a9.js";import"./useButton.module.d4983e58.js";import"./OverlayArrow.module.08672efe.js";import"./Info.74b4cf73.js";const n=e.div`
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
