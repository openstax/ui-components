import{s as e,a as o,j as r}from"./index.0ef2d4d7.js";import{T as m}from"./Tooltip.ebceff73.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.08c26dcf.js";import"./useFocusRing.module.756ded42.js";import"./context.module.85f8beb1.js";import"./useButton.module.740e1e5c.js";import"./OverlayArrow.module.8f92a7a1.js";import"./Info.ed725d16.js";const n=e.div`
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
