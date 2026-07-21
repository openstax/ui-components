import{s as e,a as o,j as r}from"./index.2b4846c8.js";import{T as m}from"./Tooltip.a41a773a.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.fed66887.js";import"./useFocusRing.module.7230d4cf.js";import"./context.module.2b60ad76.js";import"./useButton.module.1c4e1023.js";import"./OverlayArrow.module.b51f546f.js";import"./Info.c4d1e6e4.js";const n=e.div`
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
