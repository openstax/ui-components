import{s as e,a as o,j as r}from"./index.293f3b4f.js";import{T as m}from"./Tooltip.b08aefc8.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.42cfa224.js";import"./useFocusRing.module.ec25c893.js";import"./context.module.98babce9.js";import"./useButton.module.095cbd18.js";import"./OverlayArrow.module.17445b5a.js";import"./Info.86028be0.js";const n=e.div`
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
