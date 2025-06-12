import{s as e,a as o,j as r}from"./index.c9822ead.js";import{T as m}from"./Tooltip.5f15a6a2.js";import"./theme.faecafb9.js";import"./palette.15e4d008.js";import"./Button.module.16580fdd.js";import"./useFocusRing.module.c582b2dd.js";import"./context.module.a395e934.js";import"./useButton.module.c7f535ba.js";import"./OverlayArrow.module.65f27815.js";import"./Info.0fc851ce.js";const n=e.div`
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
