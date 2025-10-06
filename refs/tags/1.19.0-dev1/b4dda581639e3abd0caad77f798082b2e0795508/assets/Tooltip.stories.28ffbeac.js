import{s as e,a as o,j as r}from"./index.5ca01709.js";import{T as m}from"./Tooltip.15c9a7e8.js";import"./theme.20697340.js";import"./palette.15e4d008.js";import"./Button.module.28c8767b.js";import"./useFocusRing.module.f2434f88.js";import"./context.module.8b93c3b3.js";import"./useButton.module.190adffb.js";import"./OverlayArrow.module.81104e25.js";import"./Info.005e8d43.js";const n=e.div`
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
