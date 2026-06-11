import{s as e,a as o,j as r}from"./index.b5cb9b60.js";import{T as m}from"./Tooltip.3dad3856.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.5d9e6285.js";import"./useFocusRing.module.562f1fd5.js";import"./context.module.45e741d3.js";import"./useButton.module.9d35d2c1.js";import"./OverlayArrow.module.e11e2602.js";import"./Info.ff82666d.js";const n=e.div`
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
