import{s as e,a as o,j as r}from"./index.91e13256.js";import{T as m}from"./Tooltip.b1bdffc6.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.f2b1a1d0.js";import"./useFocusRing.module.b2f86799.js";import"./context.module.d6cc850e.js";import"./useButton.module.fc7f7ac7.js";import"./OverlayArrow.module.d4f11db0.js";import"./Info.fdb017d0.js";const n=e.div`
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
