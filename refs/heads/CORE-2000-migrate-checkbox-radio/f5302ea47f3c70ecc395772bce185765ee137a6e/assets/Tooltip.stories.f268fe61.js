import{s as e,a as o,j as r}from"./index.e5f652a1.js";import{T as m}from"./Tooltip.c14db32c.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.5790aac4.js";import"./useFocusRing.module.78535ab8.js";import"./context.module.2acf82a3.js";import"./useButton.module.c70b1e9c.js";import"./OverlayArrow.module.e6de63ed.js";import"./Info.a2ad97a8.js";const n=e.div`
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
