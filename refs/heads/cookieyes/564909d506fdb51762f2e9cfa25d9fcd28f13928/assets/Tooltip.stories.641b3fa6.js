import{s as e,a as o,j as r}from"./index.2b07e954.js";import{T as m}from"./Tooltip.0d0dddfb.js";import"./theme.51edf3d2.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.73e2b2ff.js";import"./context.module.8dcbc6b0.js";import"./Hidden.module.319d2457.js";import"./useButton.module.df8386e3.js";import"./Info.27e2b784.js";const n=e.div`
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
`,h=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as Default};
