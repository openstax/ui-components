import{s as e,a as o,j as r}from"./index.69bc1b29.js";import{T as m}from"./Tooltip.3e014fe6.js";import"./theme.63b39195.js";import"./palette.15e4d008.js";import"./Button.module.9f0fcf69.js";import"./useFocusRing.module.0cb66c74.js";import"./context.module.e740236e.js";import"./useButton.module.f34ab1dc.js";import"./OverlayArrow.module.f49e0587.js";import"./Info.7e384a32.js";const n=e.div`
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
