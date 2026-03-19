import{s as e,a as o,j as r}from"./index.1c254316.js";import{T as m}from"./Tooltip.0e9e9793.js";import"./theme.35d65827.js";import"./palette.5e342580.js";import"./Button.module.4c5a3a02.js";import"./useFocusRing.module.89ab0dde.js";import"./context.module.afe9b63c.js";import"./useButton.module.46106dc2.js";import"./OverlayArrow.module.a50b1bfc.js";import"./Info.c82ed963.js";const n=e.div`
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
