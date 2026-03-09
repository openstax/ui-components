import{s as e,a as o,j as r}from"./index.e7e4f3ae.js";import{T as m}from"./Tooltip.37f60f12.js";import"./theme.30358d9f.js";import"./palette.5e342580.js";import"./Button.module.e0d473aa.js";import"./useFocusRing.module.50c850ae.js";import"./context.module.e20d7a6a.js";import"./useButton.module.3ea3c50f.js";import"./OverlayArrow.module.326f9da7.js";import"./Info.81a0b3ab.js";const n=e.div`
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
