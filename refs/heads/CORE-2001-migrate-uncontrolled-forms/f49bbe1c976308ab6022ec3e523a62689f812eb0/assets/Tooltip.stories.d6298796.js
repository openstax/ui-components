import{s as e,a as o,j as r}from"./index.058181fc.js";import{T as m}from"./Tooltip.717577d6.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.1cc8905e.js";import"./useFocusRing.module.aeb2f065.js";import"./context.module.acecd54d.js";import"./useButton.module.0900e568.js";import"./OverlayArrow.module.e9da4ef9.js";import"./Info.77f92a38.js";const n=e.div`
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
