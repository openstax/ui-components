import{s as e,a as o,j as r}from"./index.c3a91293.js";import{T as m}from"./Tooltip.71649116.js";import"./theme.aa99a804.js";import"./palette.5e342580.js";import"./Button.module.3136aebb.js";import"./useFocusRing.module.18dd7f0d.js";import"./context.module.11a16827.js";import"./useButton.module.6133a619.js";import"./OverlayArrow.module.700db967.js";import"./Info.f22c5da9.js";const n=e.div`
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
