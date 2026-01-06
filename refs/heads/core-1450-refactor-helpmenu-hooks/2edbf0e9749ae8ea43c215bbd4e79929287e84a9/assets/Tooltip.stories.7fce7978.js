import{s as e,a as o,j as r}from"./index.d72593e4.js";import{T as m}from"./Tooltip.c6b8fbc2.js";import"./theme.1a6b3730.js";import"./palette.15e4d008.js";import"./Button.module.cedd04d0.js";import"./useFocusRing.module.beacb981.js";import"./context.module.725f905a.js";import"./useButton.module.6e359bc9.js";import"./OverlayArrow.module.6089414e.js";import"./Info.769c8132.js";const n=e.div`
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
