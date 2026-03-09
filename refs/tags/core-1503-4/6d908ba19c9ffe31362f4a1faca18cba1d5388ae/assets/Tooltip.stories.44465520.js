import{s as e,a as o,j as r}from"./index.867606f6.js";import{T as m}from"./Tooltip.1c91a54e.js";import"./theme.d71eb643.js";import"./palette.5e342580.js";import"./Button.module.ddb5f1ec.js";import"./useFocusRing.module.a853279f.js";import"./context.module.73ebd558.js";import"./useButton.module.0364b7a9.js";import"./OverlayArrow.module.da1cd654.js";import"./Info.94c2f6bf.js";const n=e.div`
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
