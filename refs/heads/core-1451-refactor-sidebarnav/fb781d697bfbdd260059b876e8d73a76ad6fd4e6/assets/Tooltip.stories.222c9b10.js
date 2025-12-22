import{s as e,a as o,j as r}from"./index.e30e1bf8.js";import{T as m}from"./Tooltip.69b32aa0.js";import"./theme.c41f28b7.js";import"./palette.15e4d008.js";import"./Button.module.967d94d5.js";import"./useFocusRing.module.6894b1ca.js";import"./context.module.f6278275.js";import"./useButton.module.559d36a4.js";import"./OverlayArrow.module.08cc89a8.js";import"./Info.0e6cd97a.js";const n=e.div`
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
