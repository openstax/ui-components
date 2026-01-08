import{s as e,a as o,j as r}from"./index.1983aed6.js";import{T as m}from"./Tooltip.e4a80a73.js";import"./theme.d12a3597.js";import"./palette.15e4d008.js";import"./Button.module.dd9a53d5.js";import"./useFocusRing.module.33b74371.js";import"./context.module.fc300464.js";import"./useButton.module.2002e613.js";import"./OverlayArrow.module.c14db693.js";import"./Info.64599d5d.js";const n=e.div`
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
