import{s as e,a as o,j as i}from"./index.272fbfbf.js";import{T as r}from"./Tooltip.cd0f3462.js";import"./theme.d49bc48e.js";import"./palette.15e4d008.js";import"./Button.module.418d71c4.js";import"./context.module.29a9eea7.js";import"./useFocusRing.module.227b5928.js";import"./OverlayArrow.module.f4fa431b.js";import"./Info.b4e54ec6.js";const m=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,n=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,g=()=>o(m,{children:["right","top","bottom"].map(t=>i(n,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default};
