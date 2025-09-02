import{s as e,a as o,j as r}from"./index.03ab0112.js";import{T as m}from"./Tooltip.74397ac5.js";import"./theme.1525060c.js";import"./palette.15e4d008.js";import"./Button.module.29fd3463.js";import"./useFocusRing.module.04e76e0f.js";import"./context.module.5af9bce0.js";import"./useButton.module.a590e806.js";import"./OverlayArrow.module.5a883969.js";import"./Info.9a347dd2.js";const n=e.div`
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
