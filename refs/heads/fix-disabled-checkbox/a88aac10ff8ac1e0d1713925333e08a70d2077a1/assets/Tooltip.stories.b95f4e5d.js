import{s as e,a as o,j as r}from"./index.c221f3cc.js";import{T as m}from"./Tooltip.08d23daf.js";import"./theme.9307ba9a.js";import"./palette.5e342580.js";import"./Button.module.6cab6406.js";import"./useFocusRing.module.9dd2cfd7.js";import"./context.module.757ba2d6.js";import"./useButton.module.cb65f455.js";import"./OverlayArrow.module.720288cc.js";import"./Info.41c0f202.js";const n=e.div`
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
