import{s as i,a as o,j as r}from"./index.2acaa006.js";import{T as m}from"./Tooltip.d5b17e2c.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.90816302.js";import"./useFocusRing.module.6c3036f9.js";import"./context.module.00655885.js";import"./useButton.module.9a8b3502.js";import"./OverlayArrow.module.e487b8b2.js";import"./Info.7d5182b1.js";import"./VisuallyHidden.module.7b868bc6.js";const n=i.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,p=i.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,y=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(p,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Default};
