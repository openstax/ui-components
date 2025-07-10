import{s as e,a as o,j as r}from"./index.c24134f8.js";import{T as m}from"./Tooltip.20488a2f.js";import"./theme.b7e390e4.js";import"./palette.15e4d008.js";import"./Button.module.0b1ffe81.js";import"./useFocusRing.module.2f28a506.js";import"./context.module.e21ee9c7.js";import"./useButton.module.5db3ce74.js";import"./OverlayArrow.module.75898e3f.js";import"./Info.ddeadf7d.js";const n=e.div`
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
