import{s as e,a as o,j as r}from"./index.56f7f4f0.js";import{T as m}from"./Tooltip.b2f5599e.js";import"./theme.7c2850be.js";import"./palette.15e4d008.js";import"./Button.module.cbb8ec07.js";import"./context.module.9782951c.js";import"./focusSafely.module.c0485436.js";import"./useFocusRing.module.43611164.js";import"./OverlayArrow.module.41ca31fa.js";import"./Info.98a02d38.js";const n=e.div`
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
