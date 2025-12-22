import{s as e,a as o,j as r}from"./index.db6776a4.js";import{T as m}from"./Tooltip.28b76dd6.js";import"./theme.6b72730c.js";import"./palette.15e4d008.js";import"./Button.module.94d0221a.js";import"./useFocusRing.module.55090908.js";import"./context.module.a7d9fee5.js";import"./useButton.module.da557485.js";import"./OverlayArrow.module.70a71803.js";import"./Info.f2935dc2.js";const n=e.div`
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
