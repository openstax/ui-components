import{s as e,a as o,j as i}from"./index.9b9905cd.js";import{T as r}from"./Tooltip.893d8aeb.js";import"./theme.39803acb.js";import"./palette.15e4d008.js";import"./Button.module.5f3f9ca9.js";import"./context.module.118ddca0.js";import"./focusSafely.module.5bd20537.js";import"./useFocusRing.module.63ac20cc.js";import"./OverlayArrow.module.909acb8f.js";import"./Info.d2bf49a0.js";const m=e.div`
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
`,h=()=>o(m,{children:["right","top","bottom"].map(t=>i(n,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as Default};
