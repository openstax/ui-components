import{s as e,a as o,j as r}from"./index.85bc48f1.js";import{T as m}from"./Tooltip.bb51119c.js";import"./theme.571e65aa.js";import"./palette.15e4d008.js";import"./Button.module.a0d248dc.js";import"./context.module.055d7357.js";import"./focusSafely.module.08fcbe1c.js";import"./useFocusRing.module.b63bd1b2.js";import"./OverlayArrow.module.213da7fe.js";import"./Info.922ae186.js";const n=e.div`
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
