import{s as e,a as o,j as r}from"./index.5571ca31.js";import{T as m}from"./Tooltip.8d6ce5ce.js";import"./theme.e119d586.js";import"./palette.5e342580.js";import"./Button.module.8c9b331d.js";import"./useFocusRing.module.8840545a.js";import"./context.module.33c2349f.js";import"./useButton.module.065546c3.js";import"./OverlayArrow.module.96c506f1.js";import"./Info.3fa432a6.js";const n=e.div`
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
