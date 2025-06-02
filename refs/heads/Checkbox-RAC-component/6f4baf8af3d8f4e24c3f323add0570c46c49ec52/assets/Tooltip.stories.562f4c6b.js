import{s as e,a as o,j as r}from"./index.7885c401.js";import{T as m}from"./Tooltip.28909fc9.js";import"./theme.925a20ce.js";import"./palette.15e4d008.js";import"./Button.module.0e32f998.js";import"./useFocusRing.module.6302375c.js";import"./context.module.eff4f9f2.js";import"./useButton.module.5e8b8636.js";import"./OverlayArrow.module.f281b7d6.js";import"./Info.7e36612d.js";const n=e.div`
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
