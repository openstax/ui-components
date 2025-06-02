import{s as e,a as o,j as r}from"./index.a256598c.js";import{T as m}from"./Tooltip.fbb35853.js";import"./theme.62555c7c.js";import"./palette.15e4d008.js";import"./Button.module.6f58f1a2.js";import"./useFocusRing.module.362d06ad.js";import"./context.module.949c8956.js";import"./useButton.module.21d3d59b.js";import"./OverlayArrow.module.7148ecd6.js";import"./Info.c5a54fdc.js";const n=e.div`
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
