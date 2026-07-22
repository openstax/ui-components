import{s as e,a as o,j as r}from"./index.d6ddf68c.js";import{T as m}from"./Tooltip.7ff2aade.js";import"./Button.module.8de35bcb.js";import"./useFocusRing.module.d588cc5f.js";import"./Hidden.module.a9639160.js";import"./useButton.module.df7ed860.js";import"./OverlayArrow.module.fcdaa5ba.js";import"./context.module.d8eed0d3.js";import"./Info.1e6d843e.js";import"./palette.5e342580.js";const n=e.div`
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
