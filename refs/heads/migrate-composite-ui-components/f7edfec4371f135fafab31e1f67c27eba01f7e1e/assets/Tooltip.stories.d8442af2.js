import{s as e,a as o,j as r}from"./index.eaf11874.js";import{T as m}from"./Tooltip.63ad87c1.js";import"./Button.module.68b96317.js";import"./useFocusRing.module.7015d34e.js";import"./Hidden.module.3522318c.js";import"./useButton.module.88bf6cc5.js";import"./OverlayArrow.module.93790c4e.js";import"./context.module.b951bacc.js";import"./Info.f40d089e.js";import"./palette.5e342580.js";const n=e.div`
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
