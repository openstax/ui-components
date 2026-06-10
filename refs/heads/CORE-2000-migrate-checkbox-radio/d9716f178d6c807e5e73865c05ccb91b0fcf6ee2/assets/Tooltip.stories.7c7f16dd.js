import{s as e,a as o,j as r}from"./index.8f986b2f.js";import{T as m}from"./Tooltip.df607dd1.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.c1a6c698.js";import"./useFocusRing.module.a054ee84.js";import"./context.module.ccea0fe2.js";import"./useButton.module.4bb95ae5.js";import"./OverlayArrow.module.4ccfd03e.js";import"./Info.b5deee57.js";const n=e.div`
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
