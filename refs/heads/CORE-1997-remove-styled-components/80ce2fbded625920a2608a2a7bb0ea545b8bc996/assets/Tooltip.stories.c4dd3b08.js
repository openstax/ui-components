import{s as e,a as o,j as r}from"./index.d5d65d0d.js";import{T as m}from"./Tooltip.e1064106.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.917c1c09.js";import"./useFocusRing.module.0118295c.js";import"./context.module.bf5ea841.js";import"./useButton.module.360c37d9.js";import"./OverlayArrow.module.5663b505.js";import"./Info.8e92e37e.js";const n=e.div`
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
