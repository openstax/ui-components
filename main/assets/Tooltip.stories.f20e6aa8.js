import{s as e,a as o,j as r}from"./index.13cfc0db.js";import{T as m}from"./Tooltip.78ccb5f3.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.044bdb8a.js";import"./useFocusRing.module.494f5b05.js";import"./context.module.7504e115.js";import"./useButton.module.85029e9b.js";import"./OverlayArrow.module.e2cb9a35.js";import"./Info.1d84305c.js";const n=e.div`
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
