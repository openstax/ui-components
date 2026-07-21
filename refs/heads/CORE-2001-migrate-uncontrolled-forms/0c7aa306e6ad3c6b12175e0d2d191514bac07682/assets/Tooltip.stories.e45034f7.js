import{s as e,a as o,j as r}from"./index.3104d24f.js";import{T as m}from"./Tooltip.e8baed98.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.9fa79e47.js";import"./useFocusRing.module.369f9c8f.js";import"./context.module.d0f8f231.js";import"./useButton.module.7d383840.js";import"./OverlayArrow.module.519d27c6.js";import"./Info.e12b30cf.js";const n=e.div`
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
