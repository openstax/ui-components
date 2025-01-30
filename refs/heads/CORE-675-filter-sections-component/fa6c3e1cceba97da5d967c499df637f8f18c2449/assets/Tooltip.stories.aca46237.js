import{s as e,a as o,j as r}from"./index.86720895.js";import{T as m}from"./Tooltip.3b611b45.js";import"./theme.a2192d42.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.68c51fdc.js";import"./context.module.5d10c37a.js";import"./Hidden.module.baabe725.js";import"./useButton.module.95a2d6f1.js";import"./Info.46565f25.js";const n=e.div`
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
