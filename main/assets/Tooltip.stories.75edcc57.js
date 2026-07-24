import{s as e,a as o,j as r}from"./index.5f040724.js";import{T as m}from"./Tooltip.925a6c90.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.ae55b264.js";import"./useFocusRing.module.1cb7b8ed.js";import"./context.module.4aaf10c5.js";import"./useButton.module.8a9327a2.js";import"./OverlayArrow.module.8c6c0136.js";import"./Info.7cf47b49.js";const n=e.div`
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
