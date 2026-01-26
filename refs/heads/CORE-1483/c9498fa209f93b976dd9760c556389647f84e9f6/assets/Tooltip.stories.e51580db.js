import{s as e,a as o,j as r}from"./index.51d91d8e.js";import{T as m}from"./Tooltip.11f832a3.js";import"./theme.93d2d472.js";import"./palette.5e342580.js";import"./Button.module.e9f9d388.js";import"./useFocusRing.module.9f1e7692.js";import"./context.module.ece2d1fe.js";import"./useButton.module.f793ca07.js";import"./OverlayArrow.module.8e0d79ff.js";import"./Info.4ae7c581.js";const n=e.div`
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
