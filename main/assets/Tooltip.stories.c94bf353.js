import{s as e,a as o,j as r}from"./index.0bafc6a7.js";import{T as m}from"./Tooltip.b60135dd.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.d7ebb950.js";import"./useFocusRing.module.5058787e.js";import"./context.module.86e18452.js";import"./useButton.module.757eac04.js";import"./OverlayArrow.module.a9b382cc.js";import"./Info.f99b7d6e.js";const n=e.div`
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
