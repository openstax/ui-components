import{s as e,a as o,j as r}from"./index.37f1621c.js";import{T as m}from"./Tooltip.75619a17.js";import"./Button.module.104685eb.js";import"./useFocusRing.module.0afedc9a.js";import"./Hidden.module.f09fe4f7.js";import"./useButton.module.5378e3a1.js";import"./OverlayArrow.module.de4b9cdc.js";import"./context.module.81a51207.js";import"./Info.865b95c8.js";import"./palette.5e342580.js";const n=e.div`
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
