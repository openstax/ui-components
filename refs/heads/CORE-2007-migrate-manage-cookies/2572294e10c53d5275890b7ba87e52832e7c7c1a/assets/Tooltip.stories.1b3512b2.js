import{s as e,a as o,j as r}from"./index.e240a1a4.js";import{T as m}from"./Tooltip.152df010.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.a5e2b340.js";import"./useFocusRing.module.08ff4c9a.js";import"./context.module.e5972b00.js";import"./useButton.module.cf8ab6e2.js";import"./OverlayArrow.module.06695c97.js";import"./Info.749b30d9.js";const n=e.div`
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
