import{s as e,a as o,j as r}from"./index.4a767a68.js";import{T as m}from"./Tooltip.5868b153.js";import"./theme.0ce87b94.js";import"./palette.15e4d008.js";import"./Button.module.fac53c94.js";import"./useFocusRing.module.cf123900.js";import"./context.module.decc80c8.js";import"./useButton.module.ccf73a97.js";import"./OverlayArrow.module.51f6ac2a.js";import"./Info.a108d4ea.js";const n=e.div`
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
