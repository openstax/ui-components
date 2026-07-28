import{s as e,a as o,j as r}from"./index.29966ebf.js";import{T as m}from"./Tooltip.aa4d14f2.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.a3dcc30a.js";import"./useFocusRing.module.4fa3b96f.js";import"./context.module.2d79b1a7.js";import"./useButton.module.9de1aa60.js";import"./OverlayArrow.module.60671de4.js";import"./Info.eb295ef4.js";const n=e.div`
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
