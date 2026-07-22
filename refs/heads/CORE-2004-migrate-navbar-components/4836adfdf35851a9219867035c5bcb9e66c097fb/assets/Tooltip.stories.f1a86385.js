import{s as e,a as o,j as r}from"./index.3934db12.js";import{T as m}from"./Tooltip.b28b5936.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.b7d937a7.js";import"./useFocusRing.module.3df13270.js";import"./context.module.87cfead5.js";import"./useButton.module.e4d32f35.js";import"./OverlayArrow.module.6b1330f2.js";import"./Info.e392b1d8.js";const n=e.div`
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
