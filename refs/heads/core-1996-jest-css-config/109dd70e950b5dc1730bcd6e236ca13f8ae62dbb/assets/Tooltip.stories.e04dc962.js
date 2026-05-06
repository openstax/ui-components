import{s as e,a as o,j as r}from"./index.a28ac396.js";import{T as m}from"./Tooltip.987392ad.js";import"./theme.1c8963ed.js";import"./palette.5e342580.js";import"./Button.module.25378011.js";import"./useFocusRing.module.2db638f6.js";import"./context.module.41396c5b.js";import"./useButton.module.58a9e0c6.js";import"./OverlayArrow.module.299e1e25.js";import"./Info.2d3b50c6.js";const n=e.div`
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
