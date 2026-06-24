import{s as e,a as o,j as r}from"./index.c40479c2.js";import{T as m}from"./Tooltip.30af758c.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.215d08e7.js";import"./useFocusRing.module.8f47b951.js";import"./context.module.f560101b.js";import"./useButton.module.7843cf2c.js";import"./OverlayArrow.module.ee718ffd.js";import"./Info.2f22197b.js";const n=e.div`
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
