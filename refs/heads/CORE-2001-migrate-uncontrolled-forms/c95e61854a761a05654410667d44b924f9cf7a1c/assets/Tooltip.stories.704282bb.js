import{s as e,a as o,j as r}from"./index.8a1901c4.js";import{T as m}from"./Tooltip.31b18547.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.0021c8c3.js";import"./useFocusRing.module.098a8abe.js";import"./context.module.da66b86b.js";import"./useButton.module.efc1bb8e.js";import"./OverlayArrow.module.e559ffc2.js";import"./Info.19b64061.js";const n=e.div`
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
