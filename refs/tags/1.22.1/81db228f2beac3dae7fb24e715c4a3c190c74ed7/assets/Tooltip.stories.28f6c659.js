import{s as e,a as o,j as r}from"./index.66ada5b7.js";import{T as m}from"./Tooltip.3b3f8094.js";import"./theme.3f59fdbf.js";import"./palette.5e342580.js";import"./Button.module.f55ee80f.js";import"./useFocusRing.module.ee0fb11a.js";import"./context.module.e0e5ad0c.js";import"./useButton.module.34620dbb.js";import"./OverlayArrow.module.e605da1d.js";import"./Info.3a927a81.js";const n=e.div`
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
