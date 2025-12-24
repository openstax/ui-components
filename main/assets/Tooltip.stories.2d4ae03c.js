import{s as e,a as o,j as r}from"./index.bcda88da.js";import{T as m}from"./Tooltip.c50fb814.js";import"./theme.74e519f3.js";import"./palette.15e4d008.js";import"./Button.module.476bc5e8.js";import"./useFocusRing.module.a25ff0b2.js";import"./context.module.2144c9f3.js";import"./useButton.module.2f77204d.js";import"./OverlayArrow.module.5829fc41.js";import"./Info.8e4b7718.js";const n=e.div`
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
