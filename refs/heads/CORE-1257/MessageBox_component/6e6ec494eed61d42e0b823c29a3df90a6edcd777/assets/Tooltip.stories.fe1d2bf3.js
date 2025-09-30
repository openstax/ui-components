import{s as e,a as o,j as r}from"./index.567d8526.js";import{T as m}from"./Tooltip.5d661eb9.js";import"./theme.9086e610.js";import"./palette.15e4d008.js";import"./Button.module.8559bdaa.js";import"./useFocusRing.module.fb557b6a.js";import"./context.module.f5252cb3.js";import"./useButton.module.97a8bb28.js";import"./OverlayArrow.module.d3df2d99.js";import"./Info.9a52d158.js";const n=e.div`
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
