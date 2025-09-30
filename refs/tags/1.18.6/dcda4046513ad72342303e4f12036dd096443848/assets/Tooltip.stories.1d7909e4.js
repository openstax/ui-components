import{s as e,a as o,j as r}from"./index.de1284b4.js";import{T as m}from"./Tooltip.b1f20877.js";import"./theme.475b90c2.js";import"./palette.15e4d008.js";import"./Button.module.a6404ee5.js";import"./useFocusRing.module.527368b8.js";import"./context.module.de9cd171.js";import"./useButton.module.e9b5cef1.js";import"./OverlayArrow.module.e5bc4e12.js";import"./Info.6e12c4ec.js";const n=e.div`
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
