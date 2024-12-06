import{s as e,a as o,j as r}from"./index.cc835bd8.js";import{T as m}from"./Tooltip.bb1fa4db.js";import"./theme.cc0a80d6.js";import"./palette.15e4d008.js";import"./Button.module.cd98a565.js";import"./context.module.b913cfa5.js";import"./focusSafely.module.5220aa3a.js";import"./useFocusRing.module.8658ba65.js";import"./OverlayArrow.module.f8d91753.js";import"./Info.c53390c6.js";const n=e.div`
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
