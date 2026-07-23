import{s as e,a as o,j as r}from"./index.6fd44928.js";import{T as m}from"./Tooltip.25299ccd.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.fdc1cbd1.js";import"./useFocusRing.module.7fb81ac7.js";import"./context.module.8ac6cc48.js";import"./useButton.module.a678132f.js";import"./OverlayArrow.module.44f336e4.js";import"./Info.d869b96b.js";const n=e.div`
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
