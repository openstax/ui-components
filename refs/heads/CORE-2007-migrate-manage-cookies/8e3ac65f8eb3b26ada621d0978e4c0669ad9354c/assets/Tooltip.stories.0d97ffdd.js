import{s as e,a as o,j as r}from"./index.8d8a51de.js";import{T as m}from"./Tooltip.6a179b33.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.d8781de3.js";import"./useFocusRing.module.ea27d643.js";import"./context.module.3ddbb5c3.js";import"./useButton.module.34cfc63d.js";import"./OverlayArrow.module.20fe712e.js";import"./Info.8a73c68f.js";const n=e.div`
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
