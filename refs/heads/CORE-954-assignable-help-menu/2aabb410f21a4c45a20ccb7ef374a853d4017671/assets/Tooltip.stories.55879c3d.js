import{s as e,a as o,j as r}from"./index.96928e17.js";import{T as m}from"./Tooltip.21d9a12f.js";import"./theme.e4769a80.js";import"./palette.15e4d008.js";import"./Button.module.211a1013.js";import"./useFocusRing.module.c891d4bf.js";import"./context.module.e7fa66f3.js";import"./useButton.module.eeaa7f20.js";import"./OverlayArrow.module.7cdad0c9.js";import"./Info.69e41f39.js";const n=e.div`
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
