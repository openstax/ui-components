import{s as e,a as o,j as r}from"./index.a9de77b9.js";import{T as m}from"./Tooltip.1ae92cf9.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.ae41daf8.js";import"./useFocusRing.module.518c0077.js";import"./context.module.ac196076.js";import"./useButton.module.57f6f12f.js";import"./OverlayArrow.module.700394a8.js";import"./Info.2e4667dc.js";const n=e.div`
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
