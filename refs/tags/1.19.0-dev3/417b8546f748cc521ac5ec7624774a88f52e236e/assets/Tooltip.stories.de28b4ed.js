import{s as e,a as o,j as r}from"./index.d9ca2166.js";import{T as m}from"./Tooltip.82625b8e.js";import"./theme.3edf69de.js";import"./palette.15e4d008.js";import"./Button.module.5b17e375.js";import"./useFocusRing.module.f46e2d00.js";import"./context.module.9c666556.js";import"./useButton.module.3a89c2ab.js";import"./OverlayArrow.module.f66310ff.js";import"./Info.c29e1675.js";const n=e.div`
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
