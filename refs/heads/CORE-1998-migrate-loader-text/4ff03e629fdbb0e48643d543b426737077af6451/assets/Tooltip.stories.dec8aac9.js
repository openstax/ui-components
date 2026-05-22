import{s as e,a as o,j as r}from"./index.d6a31b4c.js";import{T as m}from"./Tooltip.7a270122.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.0055a9d4.js";import"./useFocusRing.module.51137961.js";import"./context.module.e798d41c.js";import"./useButton.module.5235f49f.js";import"./OverlayArrow.module.8c515fc1.js";import"./Info.06cc2934.js";const n=e.div`
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
