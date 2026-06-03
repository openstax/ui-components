import{s as e,a as o,j as r}from"./index.00bdaae9.js";import{T as m}from"./Tooltip.80919648.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.537640f5.js";import"./useFocusRing.module.b9ee67dc.js";import"./context.module.77c61730.js";import"./useButton.module.d956571d.js";import"./OverlayArrow.module.21d5deef.js";import"./Info.53c49a3a.js";const n=e.div`
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
