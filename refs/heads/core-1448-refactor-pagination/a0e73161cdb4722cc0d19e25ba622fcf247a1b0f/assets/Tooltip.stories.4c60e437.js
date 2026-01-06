import{s as e,a as o,j as r}from"./index.97ecd76e.js";import{T as m}from"./Tooltip.527b3884.js";import"./theme.77988faf.js";import"./palette.15e4d008.js";import"./Button.module.28087eeb.js";import"./useFocusRing.module.e0fe8a29.js";import"./context.module.c932fb5c.js";import"./useButton.module.39ab81c2.js";import"./OverlayArrow.module.2fa7a07c.js";import"./Info.47eb4016.js";const n=e.div`
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
