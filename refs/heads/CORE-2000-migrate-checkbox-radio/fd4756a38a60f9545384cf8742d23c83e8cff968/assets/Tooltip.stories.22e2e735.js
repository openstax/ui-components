import{s as e,a as o,j as r}from"./index.d59c93d3.js";import{T as m}from"./Tooltip.0c3f7953.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.16b26ae1.js";import"./useFocusRing.module.8fc72c4c.js";import"./context.module.6e03584b.js";import"./useButton.module.ce8ca5f5.js";import"./OverlayArrow.module.b6d64022.js";import"./Info.cafb84c2.js";const n=e.div`
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
