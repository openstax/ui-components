import{s as e,a as o,j as r}from"./index.c0e0bfab.js";import{T as m}from"./Tooltip.6b829ea5.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.0c0d1fc9.js";import"./useFocusRing.module.62850908.js";import"./context.module.b9f04e20.js";import"./useButton.module.e1ea5697.js";import"./OverlayArrow.module.305a3da9.js";import"./Info.f96eddeb.js";const n=e.div`
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
