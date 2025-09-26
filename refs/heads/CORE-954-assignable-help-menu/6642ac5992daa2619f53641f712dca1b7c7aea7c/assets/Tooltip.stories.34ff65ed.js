import{s as e,a as o,j as r}from"./index.1d4fd22b.js";import{T as m}from"./Tooltip.fce1def0.js";import"./theme.f2f944c8.js";import"./palette.15e4d008.js";import"./Button.module.96ab0b3b.js";import"./useFocusRing.module.65829788.js";import"./context.module.6adf29b8.js";import"./useButton.module.6442461d.js";import"./OverlayArrow.module.8bf8c2fa.js";import"./Info.e6d12fdb.js";const n=e.div`
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
