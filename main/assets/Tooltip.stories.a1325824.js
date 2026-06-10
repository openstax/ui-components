import{s as e,a as o,j as r}from"./index.c9baf2eb.js";import{T as m}from"./Tooltip.b3933d49.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.535d117c.js";import"./useFocusRing.module.9c85a4e7.js";import"./context.module.2f9236f5.js";import"./useButton.module.0f124d1f.js";import"./OverlayArrow.module.239353c4.js";import"./Info.a28eceb6.js";const n=e.div`
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
