import{s as e,a as o,j as r}from"./index.bd1f2bc7.js";import{T as m}from"./Tooltip.ca5076a7.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.cccf0182.js";import"./useFocusRing.module.9a73b1e1.js";import"./context.module.07880e66.js";import"./useButton.module.2c06df17.js";import"./OverlayArrow.module.646ad1cc.js";import"./Info.300fd330.js";const n=e.div`
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
