import{s as e,a as o,j as r}from"./index.18776f80.js";import{T as m}from"./Tooltip.21517bf1.js";import"./theme.a62307c5.js";import"./palette.15e4d008.js";import"./Button.module.b1042289.js";import"./useFocusRing.module.147020b3.js";import"./context.module.1c0a0698.js";import"./useButton.module.5c0bb359.js";import"./OverlayArrow.module.1f9b8717.js";import"./Info.79f0125f.js";const n=e.div`
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
