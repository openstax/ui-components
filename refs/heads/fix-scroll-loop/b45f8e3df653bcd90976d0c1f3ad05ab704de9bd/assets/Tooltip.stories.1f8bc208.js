import{s as e,a as o,j as r}from"./index.2cc31c9f.js";import{T as m}from"./Tooltip.747770c5.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.7311f090.js";import"./useFocusRing.module.78e775d1.js";import"./context.module.edf11158.js";import"./useButton.module.ac302a2b.js";import"./OverlayArrow.module.1e1c06de.js";import"./Info.d4da9f69.js";const n=e.div`
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
