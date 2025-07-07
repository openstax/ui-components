import{s as e,a as o,j as r}from"./index.5d096266.js";import{T as m}from"./Tooltip.b400257c.js";import"./theme.9debd24b.js";import"./palette.15e4d008.js";import"./Button.module.d98b5b5c.js";import"./useFocusRing.module.5bb2c18b.js";import"./context.module.974e2ab0.js";import"./useButton.module.47477d6b.js";import"./OverlayArrow.module.a3b31ea5.js";import"./Info.1737eeb1.js";const n=e.div`
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
