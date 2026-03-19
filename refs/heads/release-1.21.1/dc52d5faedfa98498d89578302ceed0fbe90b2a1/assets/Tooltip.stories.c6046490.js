import{s as e,a as o,j as r}from"./index.de69091e.js";import{T as m}from"./Tooltip.2b72df74.js";import"./theme.5b2c2782.js";import"./palette.5e342580.js";import"./Button.module.549569e5.js";import"./useFocusRing.module.6e8ec749.js";import"./context.module.d5d915c4.js";import"./useButton.module.950efd50.js";import"./OverlayArrow.module.77053d8a.js";import"./Info.de4bc91e.js";const n=e.div`
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
