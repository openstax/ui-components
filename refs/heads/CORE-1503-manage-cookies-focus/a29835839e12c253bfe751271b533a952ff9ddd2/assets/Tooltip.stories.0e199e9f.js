import{s as e,a as o,j as r}from"./index.810f4178.js";import{T as m}from"./Tooltip.2c308bea.js";import"./theme.a2601d66.js";import"./palette.5e342580.js";import"./Button.module.cd5e3342.js";import"./useFocusRing.module.001182d4.js";import"./context.module.2d15cc5f.js";import"./useButton.module.1786df5e.js";import"./OverlayArrow.module.9e795c68.js";import"./Info.07c4f891.js";const n=e.div`
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
