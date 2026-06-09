import{s as e,a as o,j as r}from"./index.fb8d5edc.js";import{T as m}from"./Tooltip.4876d4a4.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.d5f905a4.js";import"./useFocusRing.module.14604d16.js";import"./context.module.2760e468.js";import"./useButton.module.9ec1e28b.js";import"./OverlayArrow.module.32bcebb2.js";import"./Info.e131fbee.js";const n=e.div`
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
