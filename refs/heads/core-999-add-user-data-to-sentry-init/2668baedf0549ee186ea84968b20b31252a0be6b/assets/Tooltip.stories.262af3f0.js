import{s as e,a as o,j as r}from"./index.6257544b.js";import{T as m}from"./Tooltip.589c8eaf.js";import"./theme.9e4ddf18.js";import"./palette.15e4d008.js";import"./Button.module.c8774860.js";import"./useFocusRing.module.b459486a.js";import"./context.module.35b17430.js";import"./useButton.module.1d2adc31.js";import"./OverlayArrow.module.b59eca05.js";import"./Info.633de235.js";const n=e.div`
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
