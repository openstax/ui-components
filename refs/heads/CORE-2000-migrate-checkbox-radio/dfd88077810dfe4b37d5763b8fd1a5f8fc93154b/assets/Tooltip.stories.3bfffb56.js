import{s as e,a as o,j as r}from"./index.61b5fee8.js";import{T as m}from"./Tooltip.05a333bd.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.53d5634c.js";import"./useFocusRing.module.d7c4ad98.js";import"./context.module.712f6631.js";import"./useButton.module.a7d48433.js";import"./OverlayArrow.module.53fa20e2.js";import"./Info.49d7edff.js";const n=e.div`
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
