import{s as e,a as o,j as r}from"./index.7a51a21f.js";import{T as m}from"./Tooltip.e991c054.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.2935cd13.js";import"./useFocusRing.module.0a36a285.js";import"./context.module.989d0ade.js";import"./useButton.module.f711009a.js";import"./OverlayArrow.module.30c1c84b.js";import"./Info.596b96d4.js";const n=e.div`
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
