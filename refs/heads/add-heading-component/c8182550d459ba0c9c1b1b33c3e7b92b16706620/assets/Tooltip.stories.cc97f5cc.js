import{s as e,a as o,j as r}from"./index.9bff982f.js";import{T as m}from"./Tooltip.4cfdaec9.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.f5dec70a.js";import"./useFocusRing.module.16e435d1.js";import"./context.module.9c16c8ed.js";import"./useButton.module.2a032b26.js";import"./OverlayArrow.module.76fffffc.js";import"./Info.84ee36c6.js";const n=e.div`
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
