import{s as e,a as o,j as r}from"./index.613879b6.js";import{T as m}from"./Tooltip.10e3f0b5.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.81fecb56.js";import"./useFocusRing.module.e5733806.js";import"./context.module.0479ab35.js";import"./useButton.module.71d9c92f.js";import"./OverlayArrow.module.c7f4c244.js";import"./Info.c4a53c72.js";const n=e.div`
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
