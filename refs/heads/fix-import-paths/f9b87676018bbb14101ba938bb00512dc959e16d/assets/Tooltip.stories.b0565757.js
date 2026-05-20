import{s as e,a as o,j as r}from"./index.b3e0562e.js";import{T as m}from"./Tooltip.de82619b.js";import"./theme.acc945aa.js";import"./palette.5e342580.js";import"./Button.module.cbd3a927.js";import"./useFocusRing.module.da8afbf2.js";import"./context.module.445bcd62.js";import"./useButton.module.21676a66.js";import"./OverlayArrow.module.c63f270f.js";import"./Info.0110839e.js";const n=e.div`
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
