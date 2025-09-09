import{s as e,a as o,j as r}from"./index.040b9f37.js";import{T as m}from"./Tooltip.f2e0eac9.js";import"./theme.08015d47.js";import"./palette.15e4d008.js";import"./Button.module.df0878e7.js";import"./useFocusRing.module.70f6d498.js";import"./context.module.ac019fcc.js";import"./useButton.module.ef125a5e.js";import"./OverlayArrow.module.83362056.js";import"./Info.fa1ec60c.js";const n=e.div`
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
