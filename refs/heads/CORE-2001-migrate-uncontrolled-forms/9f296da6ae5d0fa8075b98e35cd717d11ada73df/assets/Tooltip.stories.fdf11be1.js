import{s as e,a as o,j as r}from"./index.cd07473f.js";import{T as m}from"./Tooltip.fa662db9.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.db34faf6.js";import"./useFocusRing.module.8cb8ca93.js";import"./context.module.ef289415.js";import"./useButton.module.8534f5a0.js";import"./OverlayArrow.module.b2ef638e.js";import"./Info.da892eb0.js";const n=e.div`
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
