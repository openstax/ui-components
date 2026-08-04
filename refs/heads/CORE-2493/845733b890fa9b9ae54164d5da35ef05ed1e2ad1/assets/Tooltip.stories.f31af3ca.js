import{s as e,a as o,j as r}from"./index.87fbd453.js";import{T as m}from"./Tooltip.219c6e29.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.db63910d.js";import"./useFocusRing.module.b3ec5059.js";import"./context.module.6488c022.js";import"./useButton.module.0a391e59.js";import"./OverlayArrow.module.5875e8b9.js";import"./Info.e99cb228.js";const n=e.div`
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
