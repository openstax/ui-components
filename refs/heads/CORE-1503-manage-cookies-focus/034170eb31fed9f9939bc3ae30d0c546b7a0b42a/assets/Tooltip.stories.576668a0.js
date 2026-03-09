import{s as e,a as o,j as r}from"./index.b59d52da.js";import{T as m}from"./Tooltip.a3d6965c.js";import"./theme.5b7d07ee.js";import"./palette.5e342580.js";import"./Button.module.7074e1c0.js";import"./useFocusRing.module.17b33b36.js";import"./context.module.cd354128.js";import"./useButton.module.8ed0f2e6.js";import"./OverlayArrow.module.ebb67ecd.js";import"./Info.201af3d4.js";const n=e.div`
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
