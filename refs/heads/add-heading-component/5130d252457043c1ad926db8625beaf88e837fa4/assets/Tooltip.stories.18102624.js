import{s as e,a as o,j as r}from"./index.c2f7aee3.js";import{T as m}from"./Tooltip.efc6502f.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.284a91c9.js";import"./useFocusRing.module.2e0da007.js";import"./context.module.43c42159.js";import"./useButton.module.89bb1486.js";import"./OverlayArrow.module.ca2805b5.js";import"./Info.5be620aa.js";const n=e.div`
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
