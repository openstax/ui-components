import{s as e,a as o,j as r}from"./index.b41e8d47.js";import{T as m}from"./Tooltip.1ba73bff.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.b64dbec1.js";import"./useFocusRing.module.9986dd22.js";import"./context.module.1a7095af.js";import"./useButton.module.6873715b.js";import"./OverlayArrow.module.a33c3f3e.js";import"./Info.cd157609.js";const n=e.div`
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
