import{s as e,a as o,j as r}from"./index.91cf3542.js";import{T as m}from"./Tooltip.ed1297d4.js";import"./theme.a831f6fb.js";import"./palette.15e4d008.js";import"./Button.module.7403ba62.js";import"./useFocusRing.module.b8321487.js";import"./context.module.222ef97b.js";import"./useButton.module.775e6a25.js";import"./OverlayArrow.module.910deb78.js";import"./Info.9f6487ea.js";const n=e.div`
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
