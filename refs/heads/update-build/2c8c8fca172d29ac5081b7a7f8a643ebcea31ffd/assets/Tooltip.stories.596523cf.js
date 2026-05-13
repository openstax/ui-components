import{s as e,a as o,j as r}from"./index.cb2c8139.js";import{T as m}from"./Tooltip.7f76b148.js";import"./theme.00f75872.js";import"./palette.5e342580.js";import"./Button.module.fdae7f86.js";import"./useFocusRing.module.09b5f3f5.js";import"./context.module.f94a98bd.js";import"./useButton.module.7b65df7b.js";import"./OverlayArrow.module.082241a9.js";import"./Info.d5247322.js";const n=e.div`
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
