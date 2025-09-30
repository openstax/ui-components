import{s as e,a as o,j as r}from"./index.6bca83e6.js";import{T as m}from"./Tooltip.41fc7f19.js";import"./theme.e6785e88.js";import"./palette.15e4d008.js";import"./Button.module.59775961.js";import"./useFocusRing.module.2bdc77e5.js";import"./context.module.12b9aea5.js";import"./useButton.module.6a130ada.js";import"./OverlayArrow.module.7c516475.js";import"./Info.b310c8f1.js";const n=e.div`
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
