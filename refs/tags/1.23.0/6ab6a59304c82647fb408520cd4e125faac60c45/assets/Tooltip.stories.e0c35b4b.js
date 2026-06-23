import{s as e,a as o,j as r}from"./index.fcc0061f.js";import{T as m}from"./Tooltip.e46329ad.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.2781d04a.js";import"./useFocusRing.module.46b3e9e0.js";import"./context.module.d36371ca.js";import"./useButton.module.23eda777.js";import"./OverlayArrow.module.bdfb6544.js";import"./Info.b39fbdb8.js";const n=e.div`
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
