import{s as e,a as o,j as r}from"./index.fde0685b.js";import{T as m}from"./Tooltip.d48df492.js";import"./Button.module.68b7d1b6.js";import"./useFocusRing.module.aeca6d22.js";import"./Hidden.module.d3054d75.js";import"./useButton.module.7331a077.js";import"./OverlayArrow.module.5fb0d453.js";import"./context.module.d91a5ff2.js";import"./Info.409b1b15.js";import"./palette.5e342580.js";const n=e.div`
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
