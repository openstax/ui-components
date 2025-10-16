import{s as e,a as o,j as r}from"./index.952a20c3.js";import{T as m}from"./Tooltip.b667ee5d.js";import"./theme.ecc09727.js";import"./palette.15e4d008.js";import"./Button.module.c1508317.js";import"./useFocusRing.module.ef43c21e.js";import"./context.module.dd9492c8.js";import"./useButton.module.b3a2ab02.js";import"./OverlayArrow.module.cfcd711d.js";import"./Info.febb4f61.js";const n=e.div`
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
