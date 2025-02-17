import{s as e,a as o,j as r}from"./index.d9b1cd26.js";import{T as m}from"./Tooltip.8c6abe51.js";import"./theme.949ce14b.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.e2127d40.js";import"./context.module.f04d4e5b.js";import"./Hidden.module.de8936a7.js";import"./useButton.module.ef025766.js";import"./Info.39b4eb84.js";const n=e.div`
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
