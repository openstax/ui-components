import{s as e,a as o,j as r}from"./index.358353a8.js";import{T as m}from"./Tooltip.3c250156.js";import"./theme.2852186b.js";import"./palette.15e4d008.js";import"./Button.module.17160106.js";import"./context.module.6451b251.js";import"./focusSafely.module.141e2023.js";import"./useFocusRing.module.0f7ed721.js";import"./OverlayArrow.module.83edc143.js";import"./Info.8a6978e0.js";const n=e.div`
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
