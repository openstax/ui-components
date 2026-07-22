import{s as e,a as o,j as r}from"./index.a0288aa0.js";import{T as m}from"./Tooltip.6e3e5be4.js";import"./Button.module.2c0940ad.js";import"./useFocusRing.module.26dc1272.js";import"./Hidden.module.a49fb230.js";import"./useButton.module.a4a4551d.js";import"./OverlayArrow.module.6becfc30.js";import"./context.module.c94d4b6a.js";import"./Info.87e0b29c.js";import"./palette.5e342580.js";const n=e.div`
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
