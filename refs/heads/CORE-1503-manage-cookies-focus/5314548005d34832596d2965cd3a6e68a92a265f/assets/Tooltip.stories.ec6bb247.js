import{s as e,a as o,j as r}from"./index.3bef755b.js";import{T as m}from"./Tooltip.6105802f.js";import"./theme.ff2e73a0.js";import"./palette.5e342580.js";import"./Button.module.4bba30da.js";import"./useFocusRing.module.d6a99936.js";import"./context.module.49a97fc8.js";import"./useButton.module.37113c8d.js";import"./OverlayArrow.module.ef2e3e69.js";import"./Info.f8cfe3e2.js";const n=e.div`
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
