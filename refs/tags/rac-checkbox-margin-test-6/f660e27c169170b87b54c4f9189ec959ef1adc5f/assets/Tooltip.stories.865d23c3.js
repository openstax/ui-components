import{s as e,a as o,j as r}from"./index.7e4c51c7.js";import{T as m}from"./Tooltip.0a11060a.js";import"./theme.ad764efb.js";import"./palette.15e4d008.js";import"./Button.module.2a8f0525.js";import"./useFocusRing.module.7a242911.js";import"./context.module.d747ad7e.js";import"./useButton.module.4846b76e.js";import"./OverlayArrow.module.b83abcda.js";import"./Info.3e4451a5.js";const n=e.div`
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
