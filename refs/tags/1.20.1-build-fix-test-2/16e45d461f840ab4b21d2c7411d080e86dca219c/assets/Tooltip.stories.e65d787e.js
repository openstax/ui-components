import{s as e,a as o,j as r}from"./index.db687d6f.js";import{T as m}from"./Tooltip.3d2217c3.js";import"./theme.f064affc.js";import"./palette.5e342580.js";import"./Button.module.dafd91c3.js";import"./useFocusRing.module.ee096386.js";import"./context.module.e35bb66b.js";import"./useButton.module.0c0690bc.js";import"./OverlayArrow.module.c52d9f48.js";import"./Info.b8117553.js";const n=e.div`
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
