import{s as e,a as o,j as r}from"./index.b8eea321.js";import{T as m}from"./Tooltip.b94a1236.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.03d0eba1.js";import"./useFocusRing.module.a60d8ca0.js";import"./context.module.528b13c4.js";import"./useButton.module.bf8db9c4.js";import"./OverlayArrow.module.afecfb70.js";import"./Info.a1d02467.js";const n=e.div`
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
