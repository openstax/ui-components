import{s as e,a as o,j as i}from"./index.afbf9881.js";import{T as r}from"./Tooltip.e8255063.js";import"./theme.3e6d8488.js";import"./palette.15e4d008.js";import"./Button.module.708aed2b.js";import"./context.module.ced93359.js";import"./useFocusRing.module.7eedd3b6.js";import"./OverlayArrow.module.4999cf36.js";import"./Info.45a89ec7.js";const m=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,n=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,g=()=>o(m,{children:["right","top","bottom"].map(t=>i(n,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default};
