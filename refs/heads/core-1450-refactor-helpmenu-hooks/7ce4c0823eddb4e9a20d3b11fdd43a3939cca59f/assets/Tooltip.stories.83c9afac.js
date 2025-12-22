import{s as e,a as o,j as r}from"./index.1940b973.js";import{T as m}from"./Tooltip.56f68507.js";import"./theme.8cb4384f.js";import"./palette.15e4d008.js";import"./Button.module.d9f07fbe.js";import"./useFocusRing.module.b1754a57.js";import"./context.module.cf91de77.js";import"./useButton.module.6b9c1eb2.js";import"./OverlayArrow.module.9694790e.js";import"./Info.c3d10e47.js";const n=e.div`
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
