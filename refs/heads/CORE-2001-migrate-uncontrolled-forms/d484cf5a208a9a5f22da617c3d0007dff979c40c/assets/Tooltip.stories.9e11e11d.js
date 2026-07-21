import{s as e,a as o,j as r}from"./index.ae3afdb0.js";import{T as m}from"./Tooltip.762ad44b.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.9dae2392.js";import"./useFocusRing.module.e3d25074.js";import"./context.module.73315255.js";import"./useButton.module.d0554331.js";import"./OverlayArrow.module.bcc7a5c8.js";import"./Info.01dad746.js";const n=e.div`
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
