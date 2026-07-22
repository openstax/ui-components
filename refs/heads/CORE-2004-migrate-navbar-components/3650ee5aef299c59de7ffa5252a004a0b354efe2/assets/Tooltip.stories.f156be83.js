import{s as e,a as o,j as r}from"./index.de4c684f.js";import{T as m}from"./Tooltip.8fe86d6f.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.bbd077bb.js";import"./useFocusRing.module.793feb7b.js";import"./context.module.721291c8.js";import"./useButton.module.0710a66e.js";import"./OverlayArrow.module.f84e0f28.js";import"./Info.ec28b467.js";const n=e.div`
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
