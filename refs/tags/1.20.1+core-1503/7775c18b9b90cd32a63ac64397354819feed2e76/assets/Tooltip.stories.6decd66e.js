import{s as e,a as o,j as r}from"./index.a63550aa.js";import{T as m}from"./Tooltip.296e0e2f.js";import"./theme.1e4478e4.js";import"./palette.5e342580.js";import"./Button.module.a671eea7.js";import"./useFocusRing.module.881429e7.js";import"./context.module.0bb6a1e8.js";import"./useButton.module.0be7faa5.js";import"./OverlayArrow.module.8bf8529e.js";import"./Info.1485385d.js";const n=e.div`
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
