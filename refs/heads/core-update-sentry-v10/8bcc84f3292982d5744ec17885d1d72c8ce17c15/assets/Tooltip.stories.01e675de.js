import{s as e,a as o,j as r}from"./index.54cd7210.js";import{T as m}from"./Tooltip.85dcf69d.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.3d870523.js";import"./useFocusRing.module.fd0ed14b.js";import"./context.module.45ce6e97.js";import"./useButton.module.1112498c.js";import"./OverlayArrow.module.392e3596.js";import"./Info.c431c012.js";const n=e.div`
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
