import{s as e,a as o,j as r}from"./index.a37a2337.js";import{T as m}from"./Tooltip.e52da47a.js";import"./theme.cd88a085.js";import"./palette.15e4d008.js";import"./Button.module.c016415f.js";import"./context.module.ef1c7555.js";import"./focusSafely.module.0b5632f2.js";import"./useFocusRing.module.9e5cfe7a.js";import"./OverlayArrow.module.3b885908.js";import"./Info.647e567c.js";const n=e.div`
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
