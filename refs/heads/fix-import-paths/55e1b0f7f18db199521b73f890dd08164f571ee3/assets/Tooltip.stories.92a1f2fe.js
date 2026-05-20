import{s as e,a as o,j as r}from"./index.b98655f3.js";import{T as m}from"./Tooltip.7b8e19ad.js";import"./theme.cf63f8c7.js";import"./palette.5e342580.js";import"./Button.module.3b635ed6.js";import"./useFocusRing.module.9a0c50f9.js";import"./context.module.a67b54e9.js";import"./useButton.module.883feff2.js";import"./OverlayArrow.module.99eb36f7.js";import"./Info.d5817f08.js";const n=e.div`
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
