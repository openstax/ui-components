import{s as e,a as o,j as r}from"./index.d973ea46.js";import{T as m}from"./Tooltip.bb905e21.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.5f37cc52.js";import"./useFocusRing.module.7f07d9ee.js";import"./context.module.57efd6e8.js";import"./useButton.module.249130b0.js";import"./OverlayArrow.module.7219498f.js";import"./Info.9de4de98.js";const n=e.div`
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
