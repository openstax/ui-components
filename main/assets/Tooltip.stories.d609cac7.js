import{s as e,a as o,j as r}from"./index.9f75885e.js";import{T as m}from"./Tooltip.75b74b14.js";import"./theme.3498a614.js";import"./palette.15e4d008.js";import"./Button.module.e3b60100.js";import"./useFocusRing.module.830a3750.js";import"./context.module.071f2970.js";import"./useButton.module.a4fcef34.js";import"./OverlayArrow.module.559603b3.js";import"./Info.e999f3c8.js";const n=e.div`
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
