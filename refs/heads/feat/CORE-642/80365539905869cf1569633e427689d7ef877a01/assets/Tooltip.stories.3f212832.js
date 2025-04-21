import{s as e,a as o,j as r}from"./index.e0203407.js";import{T as m}from"./Tooltip.770d1b62.js";import"./theme.e5e3f992.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.1ecfbc09.js";import"./context.module.1925c255.js";import"./useButton.module.5a9a4da0.js";import"./Info.8cee47bd.js";const n=e.div`
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
`,g=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default};
