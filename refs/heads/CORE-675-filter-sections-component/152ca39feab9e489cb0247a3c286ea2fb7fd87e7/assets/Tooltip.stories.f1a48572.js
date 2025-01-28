import{s as e,a as o,j as r}from"./index.cf96068e.js";import{T as m}from"./Tooltip.28b79902.js";import"./theme.86ecbb1f.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.389d8ae7.js";import"./context.module.9a4939e0.js";import"./Hidden.module.83cf58fd.js";import"./useButton.module.26af66a5.js";import"./Info.0e38b7a7.js";const n=e.div`
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
