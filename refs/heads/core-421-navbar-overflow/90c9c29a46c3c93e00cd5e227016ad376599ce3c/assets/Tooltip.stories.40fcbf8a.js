import{s as e,a as o,j as r}from"./index.2992ac91.js";import{T as m}from"./Tooltip.64170ef1.js";import"./theme.9fdaa9cc.js";import"./palette.15e4d008.js";import"./Button.module.aabdc13c.js";import"./context.module.6c4ad29d.js";import"./focusSafely.module.072663a8.js";import"./useFocusRing.module.e457a829.js";import"./OverlayArrow.module.669ad689.js";import"./Info.f3c1efc6.js";const n=e.div`
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
