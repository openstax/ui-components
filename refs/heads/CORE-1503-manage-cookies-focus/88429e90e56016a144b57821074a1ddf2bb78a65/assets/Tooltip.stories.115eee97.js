import{s as e,a as o,j as r}from"./index.01199e2f.js";import{T as m}from"./Tooltip.50f368ea.js";import"./theme.c39df871.js";import"./palette.5e342580.js";import"./Button.module.e68ad4d8.js";import"./useFocusRing.module.24f6b4cd.js";import"./context.module.341aec33.js";import"./useButton.module.c9635ead.js";import"./OverlayArrow.module.51235ac1.js";import"./Info.3505b76b.js";const n=e.div`
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
