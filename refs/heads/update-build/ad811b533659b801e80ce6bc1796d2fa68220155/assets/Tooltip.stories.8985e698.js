import{s as e,a as o,j as r}from"./index.a6587f7c.js";import{T as m}from"./Tooltip.cd318db1.js";import"./theme.ca319df7.js";import"./palette.5e342580.js";import"./Button.module.56993cd9.js";import"./useFocusRing.module.c5cee7f3.js";import"./context.module.c2f69083.js";import"./useButton.module.09e2bf19.js";import"./OverlayArrow.module.2785f5ad.js";import"./Info.8a30de51.js";const n=e.div`
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
