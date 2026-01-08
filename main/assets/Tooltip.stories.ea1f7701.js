import{s as e,a as o,j as r}from"./index.d8d8debb.js";import{T as m}from"./Tooltip.1b850e36.js";import"./theme.80f39061.js";import"./palette.15e4d008.js";import"./Button.module.d4db665e.js";import"./useFocusRing.module.d9a5a371.js";import"./context.module.4d983a65.js";import"./useButton.module.93ddb8e0.js";import"./OverlayArrow.module.61aed297.js";import"./Info.332d8310.js";const n=e.div`
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
