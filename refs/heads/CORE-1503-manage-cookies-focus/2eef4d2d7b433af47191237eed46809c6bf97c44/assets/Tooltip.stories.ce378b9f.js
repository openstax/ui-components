import{s as e,a as o,j as r}from"./index.d5cd7303.js";import{T as m}from"./Tooltip.8076f986.js";import"./theme.34f3e547.js";import"./palette.5e342580.js";import"./Button.module.62cfc4b7.js";import"./useFocusRing.module.02e79198.js";import"./context.module.4e7ee9c2.js";import"./useButton.module.ad259dd5.js";import"./OverlayArrow.module.49aa965f.js";import"./Info.0b1cb9d3.js";const n=e.div`
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
