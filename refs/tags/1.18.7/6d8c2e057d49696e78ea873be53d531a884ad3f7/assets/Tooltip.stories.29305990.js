import{s as e,a as o,j as r}from"./index.8faafd05.js";import{T as m}from"./Tooltip.7088a7ab.js";import"./theme.4ee3c75d.js";import"./palette.15e4d008.js";import"./Button.module.347fa9ba.js";import"./useFocusRing.module.222f1b84.js";import"./context.module.54dbf5bb.js";import"./useButton.module.1d44f603.js";import"./OverlayArrow.module.8dd3bb0b.js";import"./Info.ed4b7c17.js";const n=e.div`
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
