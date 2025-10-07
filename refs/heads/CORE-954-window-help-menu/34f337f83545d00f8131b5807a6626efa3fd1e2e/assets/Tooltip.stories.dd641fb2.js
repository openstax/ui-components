import{s as e,a as o,j as r}from"./index.58c9c329.js";import{T as m}from"./Tooltip.f6ffd404.js";import"./theme.3cc92f89.js";import"./palette.15e4d008.js";import"./Button.module.552fb8ad.js";import"./useFocusRing.module.91db6f55.js";import"./context.module.08c53a8b.js";import"./useButton.module.78a22f29.js";import"./OverlayArrow.module.d1b7e799.js";import"./Info.0913eb07.js";const n=e.div`
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
