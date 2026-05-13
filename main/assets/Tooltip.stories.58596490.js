import{s as e,a as o,j as r}from"./index.00a2a56c.js";import{T as m}from"./Tooltip.0261582b.js";import"./theme.650dd248.js";import"./palette.5e342580.js";import"./Button.module.8a18e10e.js";import"./useFocusRing.module.cd350b9c.js";import"./context.module.dbb11ea5.js";import"./useButton.module.c1d9099a.js";import"./OverlayArrow.module.ba8984c2.js";import"./Info.6a8811b7.js";const n=e.div`
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
