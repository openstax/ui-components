import{s as e,a as o,j as r}from"./index.5ae6b948.js";import{T as m}from"./Tooltip.b01e0210.js";import"./theme.2eb635e8.js";import"./palette.15e4d008.js";import"./Button.module.2d5a902b.js";import"./useFocusRing.module.1d4a7783.js";import"./context.module.2c259688.js";import"./useButton.module.fa606007.js";import"./OverlayArrow.module.e926dbff.js";import"./Info.57be7655.js";const n=e.div`
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
