import{s as e,a as o,j as r}from"./index.eef28c89.js";import{T as m}from"./Tooltip.f3ebc02f.js";import"./theme.f6710c2f.js";import"./palette.5e342580.js";import"./Button.module.23437f88.js";import"./useFocusRing.module.5deef2a0.js";import"./context.module.bcec7b30.js";import"./useButton.module.c5fcf265.js";import"./OverlayArrow.module.2878aacd.js";import"./Info.ea16e01a.js";const n=e.div`
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
