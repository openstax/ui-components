import{s as e,a as o,j as r}from"./index.c8bb93d4.js";import{T as m}from"./Tooltip.e7a2937c.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.dbae6a4d.js";import"./useFocusRing.module.df7f34f6.js";import"./context.module.8568ac81.js";import"./useButton.module.c5c46847.js";import"./OverlayArrow.module.6c96e9e1.js";import"./Info.16a0803e.js";const n=e.div`
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
