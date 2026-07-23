import{s as e,a as o,j as r}from"./index.c552fa20.js";import{T as m}from"./Tooltip.4605b903.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.f85357f8.js";import"./useFocusRing.module.ca71fda0.js";import"./context.module.f2356bc4.js";import"./useButton.module.8b9c3e90.js";import"./OverlayArrow.module.14877997.js";import"./Info.339c3af4.js";const n=e.div`
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
