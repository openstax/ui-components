import{s as e,a as o,j as r}from"./index.ac78977a.js";import{T as m}from"./Tooltip.35d00cc3.js";import"./theme.11d125d8.js";import"./palette.15e4d008.js";import"./Button.module.55b21880.js";import"./useFocusRing.module.22d3fd82.js";import"./useButton.module.4032334f.js";import"./OverlayArrow.module.9fa36dd5.js";import"./Info.a92af062.js";const n=e.div`
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
`,h=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as Default};
