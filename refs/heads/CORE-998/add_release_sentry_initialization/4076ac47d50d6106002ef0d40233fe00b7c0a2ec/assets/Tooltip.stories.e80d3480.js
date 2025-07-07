import{s as e,a as o,j as r}from"./index.155b178b.js";import{T as m}from"./Tooltip.5895fb2a.js";import"./theme.f7dcf2c3.js";import"./palette.15e4d008.js";import"./Button.module.2d779ce3.js";import"./useFocusRing.module.070d5b70.js";import"./context.module.be7c8198.js";import"./useButton.module.e7976186.js";import"./OverlayArrow.module.10b58ab8.js";import"./Info.5370c200.js";const n=e.div`
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
