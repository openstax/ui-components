import{s as e,a as o,j as r}from"./index.6631f99d.js";import{T as m}from"./Tooltip.7c5dd9ea.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.2955dffd.js";import"./useFocusRing.module.bae12ab1.js";import"./context.module.ede11ef3.js";import"./useButton.module.89fd91f7.js";import"./OverlayArrow.module.95e502c8.js";import"./Info.0c9c0c39.js";const n=e.div`
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
