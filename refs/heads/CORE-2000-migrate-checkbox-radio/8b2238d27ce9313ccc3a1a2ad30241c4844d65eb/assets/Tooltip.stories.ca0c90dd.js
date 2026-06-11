import{s as e,a as o,j as r}from"./index.bde1cc9b.js";import{T as m}from"./Tooltip.02a5634d.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.57516a8e.js";import"./useFocusRing.module.3337d38d.js";import"./context.module.6ac6eab5.js";import"./useButton.module.713c539a.js";import"./OverlayArrow.module.8ec538a3.js";import"./Info.b36ea817.js";const n=e.div`
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
