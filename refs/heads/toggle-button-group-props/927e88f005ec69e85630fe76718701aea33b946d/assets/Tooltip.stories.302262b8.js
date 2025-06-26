import{s as e,a as o,j as r}from"./index.c92cacfb.js";import{T as m}from"./Tooltip.990cd13a.js";import"./theme.f459f3be.js";import"./palette.15e4d008.js";import"./Button.module.7c522c32.js";import"./useFocusRing.module.f7f4ef25.js";import"./context.module.81838618.js";import"./useButton.module.ef5aeffa.js";import"./OverlayArrow.module.573d4a7c.js";import"./Info.da7f0e7c.js";const n=e.div`
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
