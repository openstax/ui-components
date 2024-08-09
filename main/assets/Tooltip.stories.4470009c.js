import{s as e,a as o,j as i}from"./index.5f747d11.js";import{T as r}from"./Tooltip.9618454c.js";import"./theme.baec5b26.js";import"./palette.15e4d008.js";import"./Button.module.7f2eaf85.js";import"./context.module.af7e31dc.js";import"./useFocusRing.module.02b88cfe.js";import"./OverlayArrow.module.b50d8587.js";import"./Info.0f147f25.js";const m=e.div`
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
