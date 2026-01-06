import{s as e,a as o,j as r}from"./index.4c7c9e65.js";import{T as m}from"./Tooltip.419c7d17.js";import"./theme.87efd615.js";import"./palette.15e4d008.js";import"./Button.module.2cafa3c8.js";import"./useFocusRing.module.3bafb37c.js";import"./context.module.11e486e1.js";import"./useButton.module.2b22df95.js";import"./OverlayArrow.module.c429c505.js";import"./Info.09ce4a5a.js";const n=e.div`
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
